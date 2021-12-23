import { useState } from "react"
import { Group } from "@mantine/core"
import { GetDelegationsForHarmonyAddresses } from "../services/delegateservice"
import { DelegateCard } from './delegate-card'
import { useAsyncEffect } from "ahooks"
export const DelegateList = props => {
	const { wallets } = props
	const [delegations, setDelegations] = useState(null)


	useAsyncEffect(
		async _ => {
			if (delegations !== null) return
			const list = await GetDelegationsForHarmonyAddresses(wallets)
			setDelegations(list)
		}
	)


	return <Group sx={{ paddingTop: "1.5em" }}>
		{(delegations ?? []).map((d, idx) => <DelegateCard key={idx} delegate={d} />)}
	</Group>
}