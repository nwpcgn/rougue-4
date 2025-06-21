<script lang="ts">
	import { AsciiBox } from '$lib'
	import Preview from '$lib/game/Preview.svelte'
	import { game } from '$lib/game.svelte'
	let { data } = $props()
	let frameWidth = $state(0)
	let frameHeight = $state(0)

	let preTileSize = $derived(
		Math.max(
			2,
			Math.min(
				Math.floor(frameWidth / game.grid.width),
				Math.floor(frameHeight / game.grid.height)
			)
		)
	)
	$inspect('preview Size:', preTileSize)
</script>

<svelte:head>
	<title>Dungerue - Lobby</title>
</svelte:head>

<section class="page center nwp">
	<AsciiBox {...data}>
		<hgroup>
			<span class="text-2xl font-bold">{data.heading}</span>
		</hgroup>
		<div class="grid grid-cols-2 gap-[1ch]">
			<div class="flex flex-col">
				<table>
					<tbody>
						<tr>
							<th>Map</th>
							<td>{game.grid.width} x {game.grid.height}</td>
						</tr>
						<tr>
							<th>Generator</th>
							<td>{game.grid.type}</td>
						</tr>
						<tr>
							<th>Tilesize</th>
							<td>{game.grid.size}px</td>
						</tr>
					</tbody>
				</table>
				<nav class="mt-auto">
					<button variant-="foreground2" onclick={() => game.createMap()}
						>New Map</button>
				</nav>
			</div>

			<div
				class="relative grid aspect-square place-content-center overflow-hidden"
				box-="square"
				bind:clientHeight={frameHeight}
				bind:clientWidth={frameWidth}>
				{#key preTileSize}<Preview tileSize={preTileSize}></Preview>{/key}
			</div>
		</div>
		{#snippet footer()}
			<nav class="grid flex-1 grid-cols-3 gap-[1ch]">
				{#each data.menu as { slug, name, href } (slug)}
					<a href="#{href}" is-="button">{name}</a>
				{/each}
			</nav>
		{/snippet}
	</AsciiBox>
</section>
