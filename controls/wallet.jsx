import { Card, ActionIcon } from "@mantine/core"
import { FaTrashAlt } from 'react-icons/fa'

export const Wallet = props => {
	const { address, onDelete } = props


	return <>
		<Card padding={1} style={{ marginTop: "1em", backgroundColor: `#CCCCCC88` }}>
			<ActionIcon style={{ float: "right", fontSize: "large" }} onClick={e => onDelete(address)} ><FaTrashAlt /></ActionIcon>
			<div style={{ fontWeight: "bold" }}>{address.toUpperCase()}</div>
		</Card>
	</>
}
