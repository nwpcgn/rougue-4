import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		slug: 'story',
		icon: 'nwp-logo-story',
		heading: 'Dungerue - Lore',
		title: 'Darkblack',
		component: 'slides',
		actions: 'lobby,Close',
		msg: {
			type: 'info',
			text: 'Sei vorsichtig Fremder. Nicht alles ist so friedlich'
		}
	}
}) satisfies PageLoad
