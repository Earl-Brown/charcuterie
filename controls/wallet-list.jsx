import { useState } from "react"
import { AddWallet, RemoveWallet } from "../services/appstateservice"
import { TextInput, ActionIcon, Paper, Title, Group } from "@mantine/core"
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
		<Paper padding="sm" shadow="xs" radius={0} style={{ backgroundColor: "#DDEFEFDD" }}>
			<Title order={3} style={{ width: "100%", borderBottom: "1px solid black", paddingBottom: 0, marginBottom: "0.25em", }}>Wallets</Title>
			{wallets.map((a, idx) => Wallet(a))}

			<TextInput
				placeholder="Add a wallet, hit ENTER when you're done"
				size="lg"
				value={currentInput}
				onChange={e => setInput(e.target.value)}
				onKeyUp={e => addWalletIfInputComplete(e)}
				styles={{ input: { fontSize: "x-large" } }}
				wrapperProps={{ style: { marginTop: "0.75em" } }}
			/>

		</Paper>
	</>
}