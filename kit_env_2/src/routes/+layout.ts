import type { LayoutLoad } from './$types'
import { game } from '$lib/game.svelte.ts'
const apis = [
	'/data/game.json'
	// '/data/game-init.json',
	// '/data/game-notes.json',
	// '/data/game-views.json',
	// '/data/loot-items.json',
	// '/data/main-menu.json',
	// '/data/dating-app-1.json',
	// '/data/dating-app-2.json'
]

export const load = (async ({ fetch }) => {
	const res = await Promise.all(
		apis.map((url) =>
			fetch(url).then((r) =>
				r
					.json()
					.then((d) => d)
					.catch((e) => e)
			)
		)
	)

	game.init(res[0], { width: 40, height: 40, size: 40 })

	return {
		name: 'nwp-studio',
		gameName: game.name,
		initMap: game.dungeon.map
	}
}) satisfies LayoutLoad
