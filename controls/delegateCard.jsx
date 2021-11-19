import { StyledComponent } from "styled-components"
import { ConfigButton } from "../components/iconography"

export function DelegateCard(props) {

	const { delegate } = props
	const { validator_info: validator } = delegate

	return <>
		<div style={{ borderRadius: "15px", backgroundColor: "pink", margin: "1em", padding: "1em" }}>
			<div>
				<h2 style={{ margin: 0, padding: 0, borderBottom: "0.1em solid black" }}>{validator.name}</h2>
				<div float="right"><ConfigButton></ConfigButton></div>
			</div>
			<h4 style={{ margin: 0, padding: 0, marginTop: "0.5em" }}>Commission</h4>
			<div style={{ border: "1px solid beige" }}>
				<div>Current: {(validator.rate * 100).toFixed(3)}%</div>
				<div>Max Delta: {(validator["max-change-rate"] * 100).toFixed(3)}%</div>
				<div>Max Rate: {(validator["max-rate"] * 100).toFixed(3)}%</div>
			</div>
			<h4 style={{ margin: 0, padding: 0, marginTop: "0.5em" }}>APR</h4>
			<div style={{ border: "1px solid beige" }}>
				<div>Current: {(validator.apr * 100).toFixed(3)}%</div>
				<div>Last: {(validator.last_apr * 100).toFixed(3)}%</div>
			</div>
		</div>
	</>
}