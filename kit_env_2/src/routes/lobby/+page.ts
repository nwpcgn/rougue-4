import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		slug: 'lobby',
		icon: 'nwp-logo-lobby',
		heading: 'The Lobby',
		title: 'Dungerue Manner',
		component: 'generator',
		menu: [
			{
				slug: 'map',
				name: 'Map',
				href: '/map',
				icon: 'nwp-map'
			},
			{
				slug: 'story',
				name: 'Lore',
				href: '/story',
				icon: 'nwp-story'
			},
			{
				slug: 'settings',
				name: 'Settings',
				href: '/settings',
				icon: 'nwp-settings'
			}
		]
	}
}) satisfies PageLoad
