import Head from 'next/head'
import { Center, Title, Divider } from '@mantine/core'
import { i18n } from '../services/dataservice'
import { Deck } from '../controls/deck'
import { AccountList } from '../controls/account-list'

export default function Home() {

	return <>
		<Center style={{ borderRadius: "30px 30px 0 0" }}><Title >{i18n.appTitle}</Title></Center>
		<Divider size={12} style={{ opacity: "0.3", borderRadius: "10px" }}></Divider>
		<AccountList />
		<Deck />
	</>

}
