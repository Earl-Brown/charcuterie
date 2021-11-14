
export async function GetDelegateForHarmonyAddress(addr) {
	console.log("retrieving addr:", addr)
	const delegate = await fetch(`https://api.stake.hmny.io/networks/mainnet/delegations/${addr}`)
	console.log("Delegate retrieved", delegate)
	return delegate
}

export async function GetDelegatesForHarmonyAddresses(...addrs) {
	console.log("Addresses to retrieve", addrs)
	return new Promise(async (resolve, reject) => {
		let list = []

		for (let addr in addrs) {
			list.push(await GetDelegateForHarmonyAddress(addr))
		}

		console.log("Resolving delegate list", list)

		resolve(list)
	})
}
