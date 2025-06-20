<script lang="ts">
	import '../app.css'
	import { page } from '$app/state'
	import { goto } from '$app/navigation'
	import Sprites from '$lib/asset/sprites.svelte'
	import { SideBar } from '$lib'
	import { onMount } from 'svelte'
	let { children, data } = $props()
	let currentPath = $derived(page.url.hash.replace('#', ''))
	onMount(async () => {
		goto('#/')
	})
</script>

<div class="sidebar-light" data-layout="app">
	<SideBar {currentPath}></SideBar>

	<main class="main">
		{@render children?.()}
	</main>
</div>

<Sprites></Sprites>
