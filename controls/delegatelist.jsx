import { Space } from '../components/typeography'
import { DelegateCard } from './delegateCard'
import { GetDelegateSettings } from '../services/stateservice'

// async
function GetDelegateCard(d, idx) {
	//	const delegateSettings = await GetDelegateSettings(d.identity)
	const delegateSettings = {
		alerts: { rate: 25, change: 10 }
	}

	return <DelegateCard settings={delegateSettings} key={idx} delegate={d}>d</DelegateCard>
}

export function DelegateList(props) {

	const { delegates } = props
	console.log("Listing delegates", delegates)

	return <div style={{ border: "1 px solid red", display: "inline-flex" }}>
		{[...(delegates ?? [])].map(GetDelegateCard)}
	</div>
}