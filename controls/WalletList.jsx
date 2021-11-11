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

	return <div style={style}>
		{wallets.map(w =>
			<div style={{ position: "relative" }}>
				<RemoveButton onClick={e => removeWallet(w)} style={{ "padding-left": 0, marginLeft: 0 }} />
				<WalletAddress>{w}</WalletAddress>
			</div>
		)}
	</div>
}