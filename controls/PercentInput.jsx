import { useState } from "react"

const defaultStyle = {
	border: "1px solid darkgray",
	width: "5em",
	backgroundColor: "transparent",
	textAlign: "right"
}

const defaultPattern = "[\d]{0,3}\.[\d]{0,5}"

export function PercentInput(props) {
	const { value, onchange, style, pattern } = { partern: defaultPattern, style: { ...defaultStyle, ...props.style }, ...props }

	const [current, setValue] = useState(value)

	const onInput = e => setValue(e.target.value)

	const attributes = { ...props, type: "number", value: value, max: 100, pattern: pattern, style: style, onChange: onInput, step: 0.5 }

	return <>
		<input {...attributes} /> %
	</>
}
