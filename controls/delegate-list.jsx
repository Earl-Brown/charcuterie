import { GetDelegationsForHarmonyAddresses } from "../services/delegateservice"
import { DelegateCard } from './delegate-card'
export const DelegateList = props => {
	const { wallets } = props

	return <div>
		{wallets.map((w, idx) => <DelegateCard key={idx} delegate={w} />)}
	</div>
}