<script lang="ts">
	import { sleep } from '$lib'
	import { goto } from '$app/navigation'
	import Loader from '$lib/components/Loader.svelte'
	let { data } = $props()
	const init = async () => {
		await sleep(3333)
		goto('#/lobby')
		return true
	}
</script>

<svelte:head>
	<title>Loading - Dungerue Hall</title>
</svelte:head>

{#await init()}
	<Loader><span>{data.gameName}</span></Loader>
{:then value}
	{#if value}
		<section class="page center nwp">
			<h1>Redirect</h1>
		</section>
	{/if}
{/await}
