<script lang="ts">
	import { Canvas } from 'svelte-canvas';
	import { game } from '../game.svelte.js';
	import GridTile from './GridTile.svelte';
	import GridFighter from './GridFighter.svelte';
	const tileTypes = {
		'#': { color: '#f8f9fa', walkable: false },
		_: { color: '#1abc9c', walkable: true },
		D: { color: '#f39c12', walkable: true },
		'.': { color: '#3498db', walkable: true }
	};
	let { tileSize = 16 } = $props();
</script>

<Canvas width={game.width * tileSize} height={game.height * tileSize} class="bg-neutral">
	{#each game.dungeon.map as row, y}
		{#each row as col, x}
			{#if col !== '#'}
				<GridTile color={tileTypes[col].color} {x} {y} {tileSize}></GridTile>
			{/if}
		{/each}
	{/each}
	{#each game.dungeon.items as { x, y, slug }}
		<GridTile color="green" {x} {y} {tileSize}></GridTile>
	{/each}
	{#each game.dungeon.enemys as { x, y, slug }}
		<GridTile color="blue" {x} {y} {tileSize}></GridTile>
	{/each}
	<GridFighter
		col="@"
		color="red"
		x={game.dungeon.position.x}
		y={game.dungeon.position.y}
		{tileSize}
	></GridFighter>
</Canvas>
