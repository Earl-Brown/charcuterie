import '../services/dataservice'
import { Title, Card, Tooltip } from '@mantine/core'
import { GetDelegateDetail } from '../services/delegateservice'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const DelegationCard = props => {
	const { delegate, validator } = { ...props }

	const rate = n => `${(n * 100).toFixed((2))}%`

	return <>
		<Card padding="md" sx={{ backgroundColor: "pink", overflow: "auto" }}>
			<div>
				<a style={{ float: "right", fontSize: "large" }} href={validator["website"]} target="_blank"><FaExternalLinkAlt /></a>

				<Tooltip
					withArrow={true}
					wrapLines={true}
					placement='end'
					label={<>{validator["details"]}</>}
					styles={{
						root: { maxWidth: "auto", height: "100%" },
						body: { maxWidth: "30%", height: "100%" }
					}}
				>
					<Title order={5} style={{ borderBottom: "2px solid black", padding: "0", margin: "0" }}>{validator.name}</Title>
				</Tooltip>
			</div>
			<div>Rate: {rate(validator["rate"])}</div>
			<div>Max Rate: {rate(validator["max-rate"])}</div>
			<div>Max Rate Change: {rate(validator["max-change-rate"])}</div>

			{/* <pre>
				{JSON.stringify(validator, undefined, 2)}
			</pre> */}
		</Card >
	</>
}