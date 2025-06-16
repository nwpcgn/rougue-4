<script lang="ts">
	import Root from './Root.svelte'
	import Sprites from './lib/icons/sprites.svelte'
	import { game, fetchData } from './lib'

	const init = async () => {
		const data = await fetchData('/data/game.json')
		if (data) {
			game.init(data)
			return data
		}
	}

	init()
</script>

<div class="grid-app">
	<Root></Root>
</div>
<Sprites></Sprites>
