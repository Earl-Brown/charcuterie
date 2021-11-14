
export function DelegateCard(props) {

	const { delegate } = props

	return <>
		<div>{delegate.validator_info.name}</div>
	</>
}