import { useState } from 'react'
import Head from 'next/head'
import { useRequest } from 'ahooks'
import styles from '../styles/Home.module.css'
import AddressList from '../controls/addressList'
import { GetState, SetState, DefaultState } from '../services/stateservice'
import { Pre, Title, AddressInput } from '../components/typeography'
import { AddButton } from '../components/iconography'

const AppDescription = "Charcuterie - A dashboard for your stakes"

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
			<Head><title>{AppDescription}</title></Head>
			<Title>{AppDescription}</Title>
			<div className={`${styles["container"]}`}>
				<AddressList addresses={state.addresses} style={{ width: "100%" }}></AddressList>
				<AddressInput style={{ width: "75%" }}></AddressInput><AddButton style={{ fontSize: "110%" }}></AddButton>
			</div>
			<Pre>Oh, hey!</Pre>
		</>
	)
}
