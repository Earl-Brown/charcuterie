// todo:
//	load/save configuration from cookies

const state = {
	accounts: ["0x9fFa90c8D6fBcC44007283BC501556864b756E76"],
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

export const GetAccounts = async () => new Promise((resolve, reject) => {
	resolve(state.accounts)
})

export const AddAccount = async newAddress => new Promise((resolve, reject) => {
	const pruned = state.accounts.filter(a => a !== newAddress)
	const updated = [...pruned, newAddress]

	state = { ...state, accounts: updated }
})

export const RemoveAccount = async addressToRemove => new Promise((resolve, reject) => {

	const accounts = state.accounts.filter(a => a.address !== addressToRemove)

	state = {
		...state, accounts: accounts
	}

	return state.accounts

	// save state to local storage
})

export const GetValidators = async () => new Promise((resolve, reject) => {

})

export const AddValidator = async () => new Promise((resolve, reject) => {

})

export const GetConfiguration = async () => new Promise((resolve, reject) => {

})

export const SetConfiguration = async () => new Promise((resolve, reject) => {

})