import { useState } from "react"
import { AddWallet, RemoveWallet } from "../services/appstateservice"
import { ActionIcon, Paper, Title, Group } from "@mantine/core"
import { FaTrashAlt } from 'react-icons/fa'

export const WalletList = props => {
	const { wallets, onChange } = props

	const updateWallets = list => {
		console.log("Updating list", list)
		onChange(list)
	}

	const addWallet = async id => {
		const list = await AddWallet(id)
		updateWallets(list)
	}

	const removeWallet = async id => {
		const list = await RemoveWallet(id)
		updateWallets(list)
	}

	const Wallet = address => <Group key={address} style={{ fontSize: "larger" }}>
		<ActionIcon style={{ fontSize: "large" }} onClick={e => removeWallet(address)} ><FaTrashAlt /></ActionIcon>
		<div>{address}</div>
	</Group>

	return <>
		<Paper padding="sm" shadow="xs" radius={0} style={{ backgroundColor: "#DDEFEFDD" }}>
			<Title order={3} style={{ width: "100%", borderBottom: "1px solid black", paddingBottom: 0, marginBottom: "0.25em", }}>Wallets</Title>
			{wallets.map((a, idx) => Wallet(a))}
			<input
				style={{ border: "1px solid silver", marginTop: "0.2em", marginLeft: "0", paddingLeft: "0", position: "relative", left: "-0.1em", backgroundColor: "#EEFFEE", fontSize: "larger", width: "30em" }}
				onChange={e => addWallet(e.currentTarget.value)}
			/>
		</Paper>
	</>
}