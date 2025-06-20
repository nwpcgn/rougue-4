<script lang="ts">
	import { game } from '$lib/game.svelte.ts'
	import AsciiBox from '$lib/components/AsciiBox.svelte'
	let { data } = $props()
	let isNote = $derived(game.msg.isOpen)
	const showMsg = () => {
		const { text, type } = data.msg
		game.msg.add(text, type)
	}
	const close = () => {
		game.msg.hide()
	}
</script>

<svelte:head>
	<title>Dungerue Hall</title>
</svelte:head>

<section class="page center nwp">
	<AsciiBox {...data}>
		<hgroup class:opacity-5={isNote}>
			<span class="text-2xl font-bold">{data.heading}</span>
		</hgroup>
		{#snippet footer()}
			<button onclick={showMsg}>Show Note</button>
		{/snippet}
	</AsciiBox>
</section>

{#if isNote}
	<section class="center page nwp">
		<AsciiBox title={data.title} icon={data.icon}>
			{@render dialogT()}

			{#snippet footer()}
				<button onclick={close}>Close</button>
			{/snippet}
		</AsciiBox>
	</section>
{/if}
{#snippet dialogT()}
	{#if game.msg.title}
		<h2>{game.msg.title}</h2>
	{:else}
		<h2 class="capitalize">{game.msg.type}</h2>
	{/if}
	<p>{game.msg.text}</p>
{/snippet}
