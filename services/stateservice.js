
// todo: change to use app storage
export const DefaultState = {
	wallets: [],
	delegators: {

	},
	config: {
		updateInterval: 5 * 60 * 1000,	 // 5 minutes
		showNotification: true
	}
}

const // let state = { ...DefaultState, wallets: ["0x9fFa90c8D6fBcC44007283BC501556864b756E76"] }
	state = { ...DefaultState, wallets: ["one16h099lfjndm7eqytshywazze5x7shgl856ryrm"] }

export const GetState = async () => new Promise((resolve, reject) => {
	resolve(state)
})

export const SetState = async newState => new Promise((resolve, reject) => {
	state = { ...newState }
	resolve(state)
})

export const SetDelegateSettings = async (d, settings) => new Promise((resolve, reject) => {
	config.delegators[d.identity] = settings
	resolve(settings)
})

export const GetDelegateSettings = async delegateId => new Promise((resolve, reject) => {
	const config = {
		alerts: {
			rate: Math.min(d.rate * 2, 100),
			change: Math.min(d.rate * 2, 100)
		},
		...state.delegators[delegateId],
		lastRate: d.rate,
	}

	SetDelegateSettings(delegateId, config)

	resolve(config)
})
