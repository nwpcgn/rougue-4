import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		slug: 'map',
		icon: 'nwp-logo-map',
		heading: 'Dungerue - Map',
		title: 'Map: Reado Empire',
		component: 'dungeon',
		actions: 'lobby,Close'
	}
}) satisfies PageLoad
