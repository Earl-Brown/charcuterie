import Head from 'next/head'
import { TextInput } from '@mantine/core'
import { AddWallet, RemoveWallet } from "../services/appstateservice"
import { useState } from 'react'
import { GetWallets } from '../services/appstateservice'
import { Container, Center, Title, Divider } from '@mantine/core'
import { i18n } from '../services/dataservice'
import { Wallet } from '../controls'
import { useAsyncEffect } from "ahooks"

export default function Home() {
	const [wallets, setWallets] = useState([])
	const [currentInput, setInput] = useState("")

	const updateWallets = list => {
		console.log("Updating list", list)
		setWallets(list)
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

	useAsyncEffect(
		async _ => {
			const list = await GetWallets()
			setWallets(list)
		}
	)

	return <>
		<Center style={{ borderRadius: "30px 30px 0 0" }}><Title >{i18n.appTitle}</Title></Center>
		<Divider size={12} style={{ opacity: "0.3", borderRadius: "10px" }}></Divider>
		<br />

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
		<Container fluid={true}>
			{wallets.map((w, idx) => <Wallet onDelete={addr => removeWallet(addr)} key={idx} address={w} />)}
		</Container>
	</>

}
