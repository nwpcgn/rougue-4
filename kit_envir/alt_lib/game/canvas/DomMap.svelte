<script lang="ts">
	import { game } from '../game.svelte.ts'
	let w = $state(0)
	let h = $state(0)
	$effect(() => {
		if (w && h) {
			const xs = Math.floor(w / game.width)
			const ys = Math.floor(h / game.height)
			game.size = Math.min(xs, ys)
		}
	})
</script>

<article class="rogue">
	<div class="rogue-grid bg-base-200 border" style={game.gridStyle}>
		{#each game.dungeon.map as row, y}
			{#each row as col, x}
				<span>
					{col}
				</span>
			{/each}
		{/each}
	</div>
</article>
