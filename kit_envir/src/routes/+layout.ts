import type { LayoutLoad } from './$types'
import { startPanel } from '$lib'
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
	return {
		name: 'nwp-studio',
		panels: startPanel,
		initData: res[0]
	}
}) satisfies LayoutLoad
