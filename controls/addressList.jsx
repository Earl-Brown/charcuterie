import { Space, Typography } from "antd"
import { WalletAddress } from "../components/typeography"
import { RemoveButton } from "../components/iconography"

export default function AddressList(props) {
	const { addresses, style } = {
		...props
	}
	const { Text } = Typography

	return <>
		{addresses.map(a =>
			<div style={{ style }}>
				<WalletAddress>{a}</WalletAddress><RemoveButton style={{ right: "1em;" }} />
			</div>
		)}
	</>
}