import Head from 'next/head'
import { useState } from 'react'
import { GetWallets } from '../services/appstateservice'
import { Center, Title, Divider } from '@mantine/core'
import { i18n } from '../services/dataservice'
import { Deck, WalletList, DelegateList } from '../controls'
import { useAsyncEffect } from "ahooks"

export default function Home() {
	const [wallets, setWallets] = useState([])

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
		<WalletList wallets={wallets} onChange={list => setWallets(list)} />
		<DelegateList wallets={wallets} />
		<Deck />
	</>

}
