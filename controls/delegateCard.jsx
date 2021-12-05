import { useState } from "react"
import { ConfigButton } from "../components/iconography"
import Panel from "./panel"
import { PercentInput } from './PercentInput'

const backgroundColor = "pink"

export function DelegateCard(props) {

	const { delegate, settings, onChange } = { settings: { alerts: { rate: 25, change: 10 }, ...props.settings }, ...props }


	const { alerts } = settings

	const { validator_info: validator } = delegate

	const [rateAlert, setRateAlert] = useState(alerts.rate)
	const [changeAlert, setChangeAlert] = useState(alerts.change)

	const rateAlertChanged = e => {
		onChange({ ...alerts, ...{ rate: e.target.value } })
	}

	const changeAlertChanged = e => {
		onChange({ ...alerts, ...{ change: e.target.value } })
	}

	return <>
		<div style={{ borderRadius: "15px", backgroundColor: backgroundColor, margin: "1em", padding: "1em" }}>
			<div>
				<h2 style={{ margin: 0, padding: 0, borderBottom: "0.1em solid black" }}>{validator.name}</h2>
			</div>
			<Panel title="Commission" titleBackground="pink" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div style={{ display: "grid", columnGap: "0.75em", gridTemplateAreas: "'label1 data1' 'label2 data2' 'label3 data3'" }}>
					<div style={{ gridColumn: '1/1' }}>Current:</div>
					<div style={{ gridColumn: "2/2" }}>{(validator.rate * 100).toFixed(3)}%</div>
					<div style={{ gridColumn: "4/4" }}>Alert</div>
					<div style={{ gridColumn: "5/5" }}><PercentInput value={rateAlert} /></div>

					<div style={{ gridColumn: '1/1' }}>Max change:</div>
					<div style={{ gtidColumn: "2/2" }}>{(validator["max-change-rate"] * 100).toFixed(3)}%</div>

					<div style={{ gridColumn: '1/1' }}>Max change rate:</div>
					<div style={{ gridColumn: '2/2' }}>{(validator["max-rate"] * 100).toFixed(3)}%</div>

					<div style={{ gridColumn: "4/4" }}>Alert</div>
					<div style={{ gridColumn: "5/5" }}><PercentInput value={changeAlert} /></div>
				</div>
			</Panel>
			<Panel title="APR" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div style={{ display: "grid", columnGap: "0.75em", gridColumn: "1/5" }}>
					<div style={{ gridColumn: "1/1" }}>Current: </div> <div style={{ gridColumn: "2/2" }}>{(validator.apr * 100).toFixed(3)}%</div>
					<div style={{ gridColumn: "1/1" }}>Last: </div> <div style={{ gridColumn: "2/2" }}>{(validator.last_apr * 100).toFixed(3)}%</div>
				</div>
			</Panel >
		</div >
	</>
}