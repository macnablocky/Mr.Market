import { writable } from 'svelte/store'

export default function (url: string) {
	const loading = writable(false)
	const error = writable(false)
	const data = writable({})
	
	async function get() {
		loading.set(true)
		error.set(false)
		try {
			const response = await fetch(url)
			data.set(await response.json())
		} catch(e: any) {
			error.set(e)
		}
		loading.set(false)
	}
	
	get()
	
	return [ data, loading, error, get]
}