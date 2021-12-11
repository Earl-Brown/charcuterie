import { useState } from "react"
import { GetAccounts, AddAccount, RemoveAccount } from "../services/appstateservice"
import { useAsyncEffect } from "ahooks"
import { Paper, Title } from "@mantine/core"

export const AccountList = props => {
	const [accounts, setAccounts] = useState([])

	useAsyncEffect(
		async _ => {
			const list = await GetAccounts()
			setAccounts(list)
		}
	)


	return <>
		<Paper padding="sm" shadow="xs" radius={0} style={{ backgroundColor: "#EFEFEFDD" }}>
			<Title order={3}>Accounts</Title>
			{accounts.map((a, idx) => <div>{idx}: {a}</div>)}
			<input></input>
		</Paper>
	</>
}