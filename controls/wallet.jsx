import { useState } from 'react'
import { Card, ActionIcon, Group } from "@mantine/core"
import { FaTrashAlt } from 'react-icons/fa'
import { GetDelegationsForOneHarmonyAddress } from "../services/delegateservice"
import { useAsyncEffect } from "ahooks"
import { DelegationCard } from './delegation-card'

export const Wallet = props => {
	const { address, onDelete } = props
	const [delegations, setDelegations] = useState(null)

	useAsyncEffect(
		async _ => {
			if (delegations !== null) return
			const list = await GetDelegationsForOneHarmonyAddress(address)
			setDelegations(list)
			console.log("delegations updated")
		}
	)

	return <>
		<Card padding={1} style={{ marginTop: "1em", backgroundColor: `#CCCCCC88` }}>
			<ActionIcon style={{ float: "right", fontSize: "large" }} onClick={e => onDelete(address)} ><FaTrashAlt /></ActionIcon>

			<div style={{ fontWeight: "bold" }}>{address.toUpperCase()}</div>
			{delegations
				? <Group>
					{delegations.map((d, idx) => <DelegationCard key={idx} validator={d.validator_info}></DelegationCard>)}
				</Group>
				: "loading"
			}

		</Card>
	</>
}
