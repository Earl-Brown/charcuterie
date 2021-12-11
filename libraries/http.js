

export const GetJson = async url =>
	fetch(url)
		.then(response => { console.log(`${url} returned status ${response.status}`); return response })
		.then(response => response.json())
		.then(data => {
			console.log(`${url} returned ${JSON.stringify(data, undefined, 2)}`)
			return data
		})