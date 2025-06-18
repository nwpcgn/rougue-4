<script lang="ts">
	import { Loader, Hero, sleep } from '$lib'
	import { game } from '$lib/game.svelte.ts'
	import { goto } from '$app/navigation'
	let { data } = $props()
	let step = $state(-1)
	function handleClick(e: Event) {
		const length = data.panels.length
		const id = parseInt(e.currentTarget.dataset.step)
		if (id < length) {
			step = step + 1
		} else {
			goto('#/lobby')
		}
	}

	const init = () => {
		sleep(400).then(() => {
			step = 0
		})
	}
	game.init(data.initData)
</script>

<svelte:head>
	<title>Loading - Dungerue Hall</title>
</svelte:head>
{#await sleep(3333)
	.then(init)
	.then(() => true)}
	<Loader type="d">{game.name}</Loader>
{:then value}
	<main class="main background-sky" data-layout="app">
		{#if value}
			{#each data.panels as text, i}
				<section class="page center animated" class:active={step == i}>
					<Hero
						><span class="text-lg">{text}</span>
						{#snippet footer()}
							<button onclick={handleClick} data-step={i + 1}>Weiter</button>
						{/snippet}
					</Hero>
				</section>
			{/each}
		{/if}
	</main>
{/await}
