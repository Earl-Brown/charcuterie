import { useState } from 'react'
import Head from 'next/head'
import { useRequest } from 'ahooks'
import styles from '../styles/Home.module.css'
import Pre from '../controls/Pre'
import AddressList from '../controls/addressList'
import { GetState, SetState, DefaultState } from '../services/stateservice'

export default function Home() {

	const [state, setState] = useState(DefaultState)
	const { loading, error } = useRequest(GetState, {
		initialData: DefaultState,
		onSuccess: data => {
			setState(data)
		}
	}
	)

	if (loading) return <>...retrieving configuration</>
	if (error) return <>Unable to load configuration: {error.message}</>

	console.log(`state`, state)

	return (
		<>
			<Head><title>Charcuterie - Monitor your Harmony One stakes</title></Head>
			<title>Charcuterie - Monitor your Harmony One stakes</title>
			<AddressList addresses={state.addresses}></AddressList>
			<text></text>
			<Pre>Oh, hey!</Pre>
		</>
	)
}
