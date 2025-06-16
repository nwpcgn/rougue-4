<script lang="ts">

	import { sleep, Splash, NesContainer, InfoPanel, Options } from './lib'


	let current = $state('start')

	let promise = $state(sleep())
</script>

{#await promise}
	<main class="main"><Splash></Splash></main>
{:then _}
	<main class="main animated">
		{#each Object.values(views) as item}{@render viewT(item)}{/each}
	</main>

	<div class="page-right bg-base-100/20 flex flex-col">
		<div class="p-4">
			<div class="join join-vertical bg-base-200 rounded-box">
				{#each Object.values(views) as item (item.slug)}
					<span
						class="btn join-item pointer-events-none transition-all duration-500 ease-in-out"
						class:btn-neutral={current === item.slug}>{item.name}</span>
				{/each}
			</div>
		</div>
	</div>
{/await}

{#snippet viewT({ slug, name, menu })}
	<section
		class="page nwp center transition-all duration-400 ease-in-out"
		class:active={current === slug}>
		<div
			class="rounded-box bg-base-100 flex w-68 flex-col rounded-xl px-6 py-4"
			data-theme="cyberpunk">
			<h2 class="mb-4 py-2 text-center text-xl font-bold">{name}</h2>
			<nav class="join join-vertical">
				{#each menu as prop (prop.slug)}
					<button
						class="btn join-item"
						onclick={() => {
							current = prop.slug
						}}>{prop.name}</button>
				{/each}
			</nav>
		</div>
	</section>
{/snippet}
