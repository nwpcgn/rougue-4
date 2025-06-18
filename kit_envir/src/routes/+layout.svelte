<script lang="ts">
	import '../app.css'
	import { page } from '$app/state'
	import { goto } from '$app/navigation'
	import Sprites from '$lib/asset/sprites.svelte'
	import { Switch, SideBar, InfoBar, sleep } from '$lib'
	import { onMount } from 'svelte'
	let { children } = $props()
	let isClose = $state(false)

	let currentPath = $derived(page.url.hash.replace('#', ''))
	// let currentSlug = $derived(
	// 	currentPath === '/' ? 'landing' : currentPath.replace('/', '')
	// )
	onMount(async () => {
		goto('#/')
		await sleep()
		goto('#/lobby')
	})
</script>

<InfoBar>
	<div class="flex justify-center gap-2 border-b py-3">
		<Switch bind:checked={isClose}>{isClose ? 'Open' : 'Close'} Sidebar</Switch>
	</div>
</InfoBar>
<div class="sidebar-light" data-layout="app">
	{#if currentPath === '/'}
		<span></span>
		{@render children?.()}
	{:else}
		<SideBar bind:isClose></SideBar>
		<main class="background-sky main">
			{@render children?.()}
		</main>
	{/if}
</div>

<Sprites></Sprites>
