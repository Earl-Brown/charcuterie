import { useState } from "react"
import { GetAccounts, AddAccount, RemoveAccount } from "../services/appstateservice"
import { useAsyncEffect } from "ahooks"

export const AccountList = props => {
	const [accounts, setAccounts] = useState([])

	useAsyncEffect(
		async _ => {
			const list = await GetAccounts()
			setAccounts(list)
		}
	)


	return <>
		accounts:
		{accounts.map((a, idx) => <div>{idx}: {a}</div>)}
	</>
}