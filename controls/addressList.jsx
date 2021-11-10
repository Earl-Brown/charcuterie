import { Space, Typography } from "antd"
import { WalletAddress } from "../components/typeography"
import { RemoveButton } from "../components/iconography"

export default function AddressList(props) {
	const { addresses } = {
		...props
	}
	const { Text } = Typography

	return <>
		{addresses.map(a =>
			<>
				<WalletAddress>{a}</WalletAddress><RemoveButton />
			</>
		)}
	</>
}