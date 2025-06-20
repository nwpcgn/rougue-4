<script lang="ts">
	import { game } from '../game.svelte.ts'
	import CanvasMap from '../game/CanvasMap.svelte'
	let tileSize = $state(12)
	let fW = $state(0)
	let fH = $state(0)
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
