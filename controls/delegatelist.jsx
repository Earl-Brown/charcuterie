import { Space } from '../components/typeography'
import { DelegateCard } from './delegateCard'

export function DelegateList(props) {

	const { delegates } = props
	console.log("Listing delegates", delegates)

	return <div style={{ border: "1 px solid red" }}>
		{[...(delegates ?? [])].map((d, idx) => <DelegateCard key={idx} delegate={d}>d</DelegateCard>)}
	</div>
}