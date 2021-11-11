import { WalletAddress } from "../components/typeography"
import { RemoveButton } from "../components/iconography"

export default function WalletList(props) {
	const { wallets, style, listChanged } = {
		wallets: [],
		style: {},
		listChanged: () => { },
		...props
	}

	const removeWallet = discard => {
		const newList = wallets.filter(w => w != discard)
		listChanged(newList)
	}

	return <>
		{wallets.map(w =>
			<div style={{ style }}>
				<WalletAddress>{w}</WalletAddress><RemoveButton onClick={e => removeWallet(w)} style={{ right: "1em;" }} />
			</div>
		)}
	</>
}