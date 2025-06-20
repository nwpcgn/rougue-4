<script lang="ts">
	import { game } from '$lib/game.svelte.ts'
	import { sleep } from '$lib'
	let width = $state(game.width)
	let height = $state(game.height)
	let size = $state(game.size)
	const createMap = () => {
		game.dungeon.generate(width, height, game.type)
	}

	const saveSettings = async () => {
		game.renderLock = true
		await sleep(200)
		game.height = height
		game.width = width
		game.size = size
		await sleep(200)
		createMap()
		game.renderLock = false
	}
</script>

<nav class="grid w-full gap-[0.5lh] overflow-hidden py-[1lh]">
	<div class="grid grid-cols-2">
		<span>Width</span>
		<input size-="small" type="number" bind:value={width} />
	</div>
	<div class="grid grid-cols-2">
		<span>Height</span>
		<input size-="small" type="number" bind:value={height} />
	</div>
	<div class="grid grid-cols-2">
		<span>Size</span>
		<input size-="small" type="number" bind:value={size} />
	</div>
	<div class="grid grid-cols-2">
		<button onclick={saveSettings}>Save</button>
		<button onclick={createMap}>Create</button>
	</div>
</nav>
