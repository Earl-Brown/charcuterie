import '../services/dataservice'

export const DelegateCard = props => {
	const { delegate } = props
	return <>
		<div style={{ backgroundColor: "pink" }}>{delegate}</div>
	</>
}