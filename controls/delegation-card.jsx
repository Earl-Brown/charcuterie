import '../services/dataservice'
import { Title, Card, Tooltip } from '@mantine/core'
import { GetDelegateDetail } from '../services/delegateservice'
import { FaExternalLinkAlt } from 'react-icons/fa'

const alertPercentStyle = {
	height: "1.25em",
	width: "3em"
}

const headerStyle = {
	fontWeight: "bold",
	borderBottom: "2px solid darkgray",
	margin: 0,
	padding: 0

}


export const DelegationCard = props => {
	const { delegate, validator } = { ...props }

	const rate = n => `${(n * 100).toFixed((2))}%`

	return <>
		<Card padding="md" sx={{ backgroundColor: "pink", overflow: "auto" }}>
			<div style={{ borderBottom: "2px solid black", padding: "0", margin: "0" }}>
				<a style={{ float: "right", fontSize: "smaller", fontWeight: "lighter", color: "white", opacity: "0.9", marginRight: "0", padding: "0", marginLeft: "0.5em" }} href={validator["website"]} target="_blank"><FaExternalLinkAlt /></a>

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
					<Title order={5} >{validator.name}</Title>
				</Tooltip>
			</div>
			<div style={{ display: "grid", grid: "auto / auto auto 2px auto", gridColumnGap: "0.5em" }}>
				<div style={{ ...headerStyle, gridColumnStart: "span 3", marginRight: "0.5em" }}>Rates</div>
				<div style={{ ...headerStyle }}>Alerts</div>

				<div>Base:</div><div>{rate(validator["rate"])}</div>
				<div style={{ gridRowStart: "span 3", backgroundColor: "darkgray" }}></div>
				<div style={{ textAlign: "right" }} > <input type="number" style={alertPercentStyle} />%</div>

				<div>Max:</div>
				<div>{rate(validator["max-rate"])}</div>
				<div style={{ textAlign: "right" }} > <input type="number" style={alertPercentStyle} />%</div>

				<div>Max Change:</div>
				<div>{rate(validator["max-change-rate"])}</div>
				<div style={{ textAlign: "right" }}><input type="number" style={alertPercentStyle} />%</div>

				<div style={{ gridColumnStart: "span 4", borderTop: "2px solid darkgray", borderBottom: "2px solid darkgray", paddingTop: "0.5em" }}>Delegations</div>
			</div>
			{/* <pre>
				{JSON.stringify(validator, undefined, 2)}
			</pre> */}
		</Card >
	</>
}