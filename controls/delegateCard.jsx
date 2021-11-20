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
				<div style={{ float: "right", verticalAlign: "top", top: "-0.25em", position: "relative" }}><ConfigButton /></div>
				<h2 style={{ margin: 0, padding: 0, borderBottom: "0.1em solid black" }}>{validator.name}</h2>
			</div>
			<Panel title="Commission" titleBackground="pink" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div>Current: {(validator.rate * 100).toFixed(3)}%</div>
				<div>Max Delta: {(validator["max-change-rate"] * 100).toFixed(3)}%</div>
				<div>Max Rate: {(validator["max-rate"] * 100).toFixed(3)}%</div>
			</Panel>
			<Panel title="APR" style={{ border: "2px solid brown" }} titleStyle={{ backgroundColor: backgroundColor, opacity: "1" }}>
				<div>
					<div>Current: {(validator.apr * 100).toFixed(3)}%</div>
					<div>Last: {(validator.last_apr * 100).toFixed(3)}%</div>
				</div>
			</Panel>
		</div>
	</>
}