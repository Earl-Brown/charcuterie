import { GetJson } from '../libraries/http'




export async function GetDelegateDetail(addr) {

	console.log(`retrieving details for delegate ${addr}`)








}

export async function GetDelegatesForHarmonyAddress(addr) {
	console.log("retrieving addr:", addr)
	const delegates = await GetJson(`https://api.stake.hmny.io/networks/mainnet/delegations/${addr}`)

	console.log("Delegate retrieved", delegate)
	return delegate
}

export async function GetDelegatesForHarmonyAddresses(...addrs) {
	console.log("Addresses to retrieve", addrs)

	return new Promise(async (resolve, reject) => {
		const lists = await Promise.all(addrs.map(GetDelegatesForHarmonyAddress))
		const list = lists.reduce((a, b) => [...a, ...b])

		console.log("Resolving delegate list", list)

		resolve(list)
	})
}
