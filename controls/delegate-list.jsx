import { GetDelegationsForHarmonyAddresses } from "../services/delegateservice"
export const DelegateList = props => {
	const { wallets } = props

	return <div>
		{wallets.map((w, idx) => <div key={idx}>{idx}: {w}</div>)}
	</div>
}