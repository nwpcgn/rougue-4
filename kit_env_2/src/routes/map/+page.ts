import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		slug: 'map',
		icon: 'nwp-map',
		heading: 'Dungerue - Map',
		title: 'Reado Empire',
		component: 'dungeon',
		actions: 'lobby,Close'
	}
}) satisfies PageLoad
