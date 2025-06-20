import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		slug: 'settings',
		icon: 'nwp-logo-settings',
		heading: 'Dungerue - Options',
		title: 'Map Options',
		component: 'options',
		actions: 'lobby,Close'
	}
}) satisfies PageLoad
