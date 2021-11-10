import styled from 'styled-components'

export const RemoveButton = styled.label`
	padding: 0.1em;
	margin: 0.1em;
	cursor: pointer;
	font-size: smaller;

	&::after {
		content: "\\274C"
	}
`