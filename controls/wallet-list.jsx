import { useState } from "react"
import { AddWallet, RemoveWallet } from "../services/appstateservice"
import { Accordion, TextInput, ActionIcon, Paper, Title, Group } from "@mantine/core"
import { FaTrashAlt } from 'react-icons/fa'

export const WalletList = props => {
	const { wallets, onChange } = props
	const [currentInput, setInput] = useState("")

	const updateWallets = list => {
		console.log("Updating list", list)
		onChange(list)
	}

	const addWallet = async id => {
		const list = await AddWallet(id)
		setInput("")
		updateWallets(list)
	}

	const addWalletIfInputComplete = async event => {
		if (
			event.key !== "Enter"
		) return
		const id = event.target.value
		if (id === "") return

		addWallet(id)
	}

	const removeWallet = async id => {
		const list = await RemoveWallet(id)
		updateWallets(list)
	}

	const noop = _ => { }

	const Wallet = address => <Group key={address} style={{ fontSize: "larger" }}>
		<ActionIcon style={{ fontSize: "large" }} onClick={e => removeWallet(address)} ><FaTrashAlt /></ActionIcon>
		<div>{address}</div>
	</Group>

	return <>
		<Paper padding={0} shadow="xs" radius={0} style={{ backgroundColor: "#DDEFEFDD" }}>
			<Accordion styles={{
				label: { fontSize: "x-large", fontWeight: "bold" },
				control: { padding: 0 },
				contentInner: { padding: 0 }
			}}
				initialItem={0}
				iconPosition="right"
			>
				<Accordion.Item label="Wallets"
					sx={{ padding: 0 }}
				>
					<div style={{ paddingTop: "0.5em" }}>
						{wallets.map((a, idx) => Wallet(a))}
					</div>
					<TextInput
						placeholder="Add a wallet, hit ENTER when you're done"
						size="sm"
						value={currentInput}
						onChange={e => setInput(e.target.value)}
						onKeyUp={e => addWalletIfInputComplete(e)}
						styles={{
							input: { fontSize: "x-large", margin: "0 0.5em", width: "calc(100% - 1em)", marginBottom: "0.1em" }
						}}
						wrapperProps={{ style: { marginTop: "0.5em" } }}
					/>

				</Accordion.Item>

			</Accordion>
		</Paper>
	</>

}