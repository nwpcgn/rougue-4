<script lang="ts">
	import '../app.css'
	import { page } from '$app/state'
	import { goto } from '$app/navigation'
	import Sprites from '$lib/asset/sprites.svelte'
	import { onMount } from 'svelte'
	let { children, data } = $props()
	let currentPath = $derived(page.url.hash.replace('#', ''))
	onMount(async () => {
		goto('#/')
	})
</script>

<div class="sidebar-light" data-layout="app">
	<aside data-text class="sidebar border">
		<button>Load</button>
		<button>seload</button>
	</aside>

	<main class="background-sky main">
		{@render children?.()}
	</main>
</div>

<Sprites></Sprites>
