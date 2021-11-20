import { List } from 'rc-field-form'
import styled from 'styled-components'

const ListButtonStyle = {
	cursor: "pointer",
	fontSize: "larger",
	fontWeight: "bold",
	border: "1px solid gainsboro",
	width: "3%",
	height: "1%",
	margin: 0,
	padding: 0,
}

const iconButtonStyle = {
	cursor: "pointer",
	fontSize: "22pt",
	fontWeight: "bold",
	border: "none",
	width: "auto",
	height: "auto",
	margin: 0,
	padding: 0,
	backgroundColor: "transparent"
}

export const RemoveButton = props => { return <button {...props} style={{ ...ListButtonStyle, color: "red" }}>{"\u00D7"}</button> }

export const AddButton = props => { return <button {...props} style={{ ...ListButtonStyle, color: "green" }}>{"\u002B"}</button> }

export const ConfigButton = props => { return <button {...props} style={{ ...iconButtonStyle, color: "darkdarkgray" }}>{'\u2699'}</button> }