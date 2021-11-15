import { useRequest } from 'ahooks'
import { useState } from 'react'
import { DelegateList } from "./delegatelist"
import { GetDelegatesForHarmonyAddresses } from '../services/delegateservice'

export default function DelegateListManager(props) {
	const { harmonyAddresses } = props

	const [list, setList] = useState(null)
	const { data: delegates, loading, error } = useRequest(() => GetDelegatesForHarmonyAddresses(harmonyAddresses))

	console.log("wallet addresses", harmonyAddresses)
	console.log("delegates", delegates)

	if ((harmonyAddresses?.length ?? 0) < 1) return <>(waiting for accounts)</>

	if (loading) return <>...loading delegates</>
	if (error) return <>... error loading delegates :( {error}</>

	if (list == null) setList(delegates)

	return <DelegateList delegates={list} />
}