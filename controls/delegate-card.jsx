import '../services/dataservice'
import { Group, Card } from '@mantine/core'
import { GetDelegateDetail } from '../services/delegateservice'

export const DelegateCard = props => {
	const { delegate, validator } = { ...props, validator: props.delegate.validator_info }


	return <>
		<Card padding="md" sx={{ backgroundColor: "pink", overflow: "auto" }}>
			<pre>
				{JSON.stringify(validator, undefined, 2)}
			</pre>
		</Card>
	</>
}