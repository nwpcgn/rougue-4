<script lang="ts">
	import DomMap from './_domMap2.svelte'
	let fWidth = $state(0)
	let fHeight = $state(0)
	let frameWidth = $derived(Math.floor(fWidth * 0.9))
	let frameHeight = $derived(Math.floor(fHeight * 0.9))
	let { data } = $props()
</script>

<svelte:head>
	<title>Dungerue Hall</title>
</svelte:head>

<section class="page center nwp">
	<div
		class="aspect-square grid place-content-center"
		box-="square"
		bind:clientHeight={fHeight}
		bind:clientWidth={fWidth}>
		<DomMap {frameHeight} {frameWidth}></DomMap>
	</div>
</section>
<section class="page center animated">
	<header>
		<h1>{data.title}</h1>
		<h2>{data.heading}</h2>
	</header>
</section>
