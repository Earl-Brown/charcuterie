// todo:
//	load/save configuration from cookies

const state = {
	wallets: [
		// ["0x9fFa90c8D6fBcC44007283BC501556864b756E76"],
		"one16h099lfjndm7eqytshywazze5x7shgl856ryrm"
	],
	validators: [
		{
			address: "",
			thresholds: {
				rate: 100.0,
				delta: 5.0
			}
		}
	],
	config: {

	}

}

export const GetWallets = async () => new Promise((resolve, reject) => {
	resolve(state.wallets)
})

export const AddWallet = async newAddress => new Promise((resolve, reject) => {
	const pruned = state.wallets.filter(a => a !== newAddress)
	const updated = [...pruned, newAddress]

	state = { ...state, wallets: updated }
	resolve(updated)
})

export const RemoveWallet = async addressToRemove => new Promise((resolve, reject) => {

	const wallets = state.wallets.filter(w => w !== addressToRemove)

	state = {
		...state, wallets: wallets
	}

	// save state to local storage
	resolve(wallets)

})

export const GetValidators = async () => new Promise((resolve, reject) => {

})

export const AddValidator = async () => new Promise((resolve, reject) => {

})

export const GetConfiguration = async () => new Promise((resolve, reject) => {

})

export const SetConfiguration = async () => new Promise((resolve, reject) => {

})