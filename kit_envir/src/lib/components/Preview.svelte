<script lang="ts">
	import { game } from '../game.svelte.ts'
	import CanvasMap from '../game/CanvasMap.svelte'
	const tileTypes = {
		'#': { color: '#f8f9fa', walkable: false },
		_: { color: '#1abc9c', walkable: true },
		D: { color: '#f39c12', walkable: true },
		'.': { color: '#3498db', walkable: true }
	}
	let tileSize = $state(12)
	let fW = $state(0)
	let fH = $state(0)

	$inspect('frame', fW, fH, tileSize)
	$effect(() => {
		if (fW) {
			const w = Math.floor(fW / game.width)
			const h = Math.floor(fH / game.height)
			tileSize = Math.floor(Math.min(w, h))
		}
	})
</script>

<div bind:clientWidth={fW} bind:clientHeight={fH}>
	<CanvasMap {tileSize}></CanvasMap>
</div>

<style>
	div {
		--max-width: 70ch;
		width: min(100%, var(--max-width));
		height: 100%;
		display: flex;
		justify-content: center;
	}
</style>
