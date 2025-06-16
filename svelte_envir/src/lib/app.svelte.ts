class Views {
	views = $state({
		start: {
			slug: 'start',
			name: 'Lobby',
			icon: 'nwp-home',
			menu: [
				{
					id: 'map',
					slug: 'map',
					name: 'Start Game',
					icon: 'nwp-game'
				},
				{
					id: 'settings',
					slug: 'settings',
					name: 'Map Settings',
					icon: 'nwp-options'
				},
				{
					id: 'story',
					slug: 'story',
					name: 'Dungeon Lore',
					icon: 'nwp-dice'
				}
			]
		},
		map: {
			slug: 'map',
			name: 'Battle Map',
			icon: 'nwp-game',
			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		},
		settings: {
			slug: 'settings',
			name: 'Map Settings',
			icon: 'nwp-options',
			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		},
		story: {
			slug: 'story',
			name: 'Dungeon Lore',
			icon: 'nwp-dice',
			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		}
	})
	#viewId = $state(null)
	view = $derived(this.views?.[this.#viewId])
	constructor(slug) {
		this.#viewId = slug
	}
	getAll() {
		return Object.values(this.views)
	}

	get viewId() {
		return this.#viewId
	}
	set viewId(value = '') {
		this.#viewId = value
	}
}

class Application {
	views = new Views('start')
}

export const app = new Application()
