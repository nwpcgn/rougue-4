<script lang="ts">
	import { game } from '$lib/game.svelte.ts'
	import { Modal, AsciiBox, copyToClip, Preview } from '$lib'
	import MapSettings from './_mapSettings.svelte'
	let { props, currentView } = $props()
	let showModal = $state(false)
	let modalContent = $state({
		code: {},
		body: 'Jedes Level des Dungeons ist ein verzerrter Spiegel der Welt, beeinflusst durch das Element, das dort einst herrschte.'
	})
	let tempId = $state('info')

	function onInfoClick() {
		let atlas = new Set()
		const list = game.dungeon.map?.flat()
		let out = { title: 'Map Atlas' }
		list?.forEach((k) => atlas.add(k))
		tempId = 'info'
		modalContent.code = [...atlas]
		modalContent.body = `Map Atlas Symbols : ${atlas.size}`
		showModal = true
	}
	function onPreClick() {
		tempId = 'pre'
		showModal = true
	}

	function createNewMap() {
		game.createMap()
		tempId = 'pre'
		showModal = true
	}
</script>

<section class="page animated center" class:active={props.slug === currentView}>
	<AsciiBox {...props}>
		<div class="flex flex-col gap-[1lh]">
			<h1>{props.heading}</h1>
			<MapSettings></MapSettings>
		</div>
		{#snippet footer()}
			<button onclick={onInfoClick}>Info</button>
			<button onclick={createNewMap}>Generate</button>
			<button onclick={onPreClick}>Preview</button>
		{/snippet}
	</AsciiBox>
</section>

{#snippet infoT({ code, body })}
	<h2>Map Infos</h2>
	{#if body?.length}
		<p>{body}</p>
	{/if}
	{#if code?.length}
		<pre class="overflow-x-auto bg-stone-300 px-[1ch] py-[1lh]">{JSON.stringify(
				code,
				null
			)}</pre>
	{/if}
{/snippet}

{#snippet preT()}
	<Preview />
{/snippet}

<Modal
	bind:showModal
	callBack={() => {
		const obj = JSON.stringify(modalContent)
		copyToClip(obj)
	}}>
	{#if tempId === 'pre'}
		{@render preT()}
	{:else}
		{@render infoT(modalContent)}
	{/if}
</Modal>
