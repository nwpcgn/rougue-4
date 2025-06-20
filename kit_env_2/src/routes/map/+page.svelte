<script lang="ts">
	// import { game } from '$lib/game.svelte.ts'
	import AsciiBox from '$lib/components/AsciiBox.svelte'
	import DomMap from '$lib/game/DomMap.svelte'
	let frameWidth = $state(0)
	let frameHeight = $state(0)

	let { data } = $props()
	// $inspect('opponents', game.dungeon.items.length)
	// $inspect(game.player.inventory)
</script>

<svelte:head>
	<title>Dungeon - Map</title>
</svelte:head>

<section class="page center nwp">
	<AsciiBox {...data}>
		<div
			class="grid aspect-square place-content-center"
			bind:clientHeight={frameHeight}
			bind:clientWidth={frameWidth}>
			<DomMap {frameHeight} {frameWidth}></DomMap>
		</div>
	</AsciiBox>
</section>
