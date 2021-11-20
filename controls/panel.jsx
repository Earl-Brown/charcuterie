
const _titleStyle = {
	position: "relative",
	top: "-0.75em",
	left: "0.25em",
	backgroundColor: "pink",
	opacity: "1",
	width: "auto",
	padding: "0 0.25em"
}

const borderStyle = {
	padding: "0 0.5em",
	marginTop: "0.75em"
}


export default function Panel(props) {
	const { title, children, style, titleStyle } = {
		...{ ...props, titleStyle: undefined },
		titleStyle: { ..._titleStyle, ...props.titleStyle }
	}

	return <>
		<div style={{ border: "3px solid blue", ...style, ...borderStyle }}>
			<span style={titleStyle}>{title}</span>
			<div style={{ position: "relative", top: "-0.75em" }}>
				{children}
			</div>
		</div>
	</>
}