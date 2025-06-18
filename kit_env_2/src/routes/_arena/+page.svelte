<script lang="ts">
	import { game } from '$lib/game.svelte.ts'
	import { mainViews, Modal, AsciiBox } from '$lib'
	import MapGenerator from './_mapGenerator.svelte'
	let currentView = $derived(data.slug)
	const snippetLib = {
		lobby: generatorT,
		map: viewT,
		story: viewT,
		settings: viewT
	}
	let { data } = $props()
</script>

<svelte:head>
	<title>Dungerue Manner</title>
</svelte:head>

{#each Object.values(mainViews) as view (view.slug)}
	{#if snippetLib[view.slug]}
		{@render snippetLib[view.slug](view)}
	{:else}
		<div>Error: {slug}</div>
	{/if}
{/each}

{#snippet generatorT(props)}
	<MapGenerator {props} {currentView}></MapGenerator>
{/snippet}
{#snippet viewT(props)}
	<!-- slug, icon, heading, title, component, menu -->
	<section
		class="page animated center"
		class:active={props.slug === currentView}>
		<div>
			<AsciiBox {...props}>
				<div class="flex flex-col gap-[1lh]">
					<h1>{props.heading}</h1>
				</div>
			</AsciiBox>
		</div>
	</section>
{/snippet}
