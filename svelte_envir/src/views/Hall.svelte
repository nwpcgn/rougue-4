<script lang="ts">
	import { sleep, NesContainer } from '../lib'
	import { onMount } from 'svelte'
	import Lore from './Lore.svelte'
	let ready = $state(false)
	let status = $state('init')
	console.log('hall init !')

	onMount(async () => {
		console.log('hall mount !!!')
		ready = true
	})
</script>

<main class="main">
	{#if status === 'running'}
		<section class="nwp page center">
			<NesContainer isCenter isRounded isTight title="Main Navi">
				<div class="nes-bar is-vert">
					<button class="nes-btn is-primary">Lore</button>
					<button class="nes-btn is-primary">Play</button>
					<button class="nes-btn is-primary">Settings</button>
				</div>
			</NesContainer>
		</section>
	{:else}
		<Lore
			onEnd={() => {
				status = 'running'
			}}></Lore>
	{/if}
</main>
<div class="page-left"></div>
<div class="page-right"></div>
