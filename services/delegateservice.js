import { GetJson } from '../libraries/http'


export async function GetDelegateDetail(addr) {

	console.log(`retrieving details for delegate ${addr}`)

	const delegate = await GetJson(`https://api.stake.hmny.io/networks/mainnet/delegations/${addr}`)

	return delegate
}

export async function GetDelegationsForOneHarmonyAddress(addr) {
	console.log("retrieving addr:", addr)
	const delegations = await GetJson(`https://api.stake.hmny.io/networks/mainnet/delegations/${addr}`)

	console.log("Delegations retrieved", delegations)

	return delegations
}

export async function GetDelegationsForHarmonyAddresses(...addrs) {
	console.log("Addresses to retrieve", addrs)

	return new Promise(async (resolve, reject) => {
		const lists = await Promise.all(addrs.map(GetDelegationsForOneHarmonyAddress))
		const list = lists.reduce((a, b) => [...a, ...b])

		console.log("Resolving delegate list", list)

		resolve(list)
	})
}
