import { StyledComponent } from "styled-components"
import { ConfigButton } from "../components/iconography"
import Panel from "./panel"

const backgroundColor = "pink"
export function DelegateCard(props) {

	const { delegate } = props
	const { validator_info: validator } = delegate

	return <>
		<div style={{ borderRadius: "15px", backgroundColor: backgroundColor, margin: "1em", padding: "1em" }}>
			<div>
				<div style={{ float: "right", verticalAlign: "middle", top: "-0.25em", position: "relative" }}><ConfigButton /></div>
				<h2 style={{ margin: 0, padding: 0, borderBottom: "0.1em solid black" }}>{validator.name}</h2>
			</div>
			<Panel title="Commission" titleBackground="pink" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div style={{ display: "grid", columnGap: "0.75em", gridTemplateAreas: "'label1 data1' 'label2 data2' 'label3 data3'" }}>
					<div style={{ gridArea: 'label1' }}>Current:</div><div style={{ gridArea: "data1" }}>{(validator.rate * 100).toFixed(3)}%</div>
					<div style={{ gridArea: 'label2' }}>Max change:</div><div style={{ gridArea: "data2" }}>{(validator["max-change-rate"] * 100).toFixed(3)}%</div>
					<div style={{ gridArea: 'label3' }}>Max change rate:</div><div style={{ gridArea: "data3" }}>{(validator["max-rate"] * 100).toFixed(3)}%</div>
				</div>
			</Panel>
			<Panel title="APR" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div style={{ display: "grid", columnGap: "0.75em", gridTemplateAreas: "'label1 data1' 'label2 data2'" }}>
					<div style={{ gridArea: "label1" }}>Current: </div> <div style={{ gridArea: "data1" }}>{(validator.apr * 100).toFixed(3)}%</div>
					<div style={{ gridArea: "label2" }}>Last: </div> <div style={{ gridArea: "data2" }}>{(validator.last_apr * 100).toFixed(3)}%</div>
				</div>
			</Panel >
		</div >
	</>
}