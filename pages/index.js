import { useState } from 'react'
import Head from 'next/head'
import { useRequest } from 'ahooks'
import styles from '../styles/Home.module.css'
import WalletList from '../controls/WalletList'
import { GetState, SetState, DefaultState } from '../services/stateservice'
import { Pre, Title, WalletInput } from '../components/typeography'
import { AddButton } from '../components/iconography'

const AppDescription = "Charcuterie - A dashboard for your stakes"

export default function Home() {
	const [state, setState] = useState(DefaultState)
	const { loading, error } = useRequest(GetState, {
		initialData: DefaultState,
		onSuccess: data => {
			setState(data)
		}
	})

	const [editingWallet, setEditingWallet] = useState("")

	if (loading) return <>...retrieving configuration</>
	if (error) return <>Unable to load configuration: {error.message}</>

	const AddWallet = w => {
		const newList = [...state.wallets, w]
		updateWalletList(newList)
		setEditingWallet("")
	}

	const updateWalletList = wallets => {
		setState({
			...state,
			wallets: wallets
		})

	}

	const WalletChanged = w => {
		setEditingWallet(w)
	}

	console.log(`state`, state)

	return (
		<>
			<Head><title>{AppDescription}</title></Head>
			<Title>{AppDescription}</Title>
			<div className={`${styles["container"]}`}>
				<WalletList listChanged={newList => updateWalletList(newList)} wallets={state.wallets} style={{ width: "75%", padding: "0.25em 0" }}></WalletList>

				<div style={{ width: "75%" }}>
					<WalletInput value={editingWallet} onChange={e => WalletChanged(e.target.value)} ></WalletInput>
					<AddButton onClick={_ => AddWallet(editingWallet)} style={{ fontSize: "110%" }}></AddButton>
				</div>
			</div>
			<Pre>Oh, hey!</Pre>
		</>
	)
}
