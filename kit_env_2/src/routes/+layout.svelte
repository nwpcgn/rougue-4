<script lang="ts">
	import '../app.css'
	import { page } from '$app/state'
	import { goto } from '$app/navigation'
	import Sprites from '$lib/asset/sprites.svelte'
	import { SideBar, sleep } from '$lib'
	import { onMount } from 'svelte'
	import { game } from '$lib/game.svelte'
	let { children } = $props()
	let currentPath = $derived(page.url.hash.replace('#', ''))
	onMount(async () => {})
	const init = async () => {
		goto('#/')
		await sleep(100)
		return currentPath
	}
	let promise = $state(init())
</script>

<div class="sidebar-light" data-layout="app">
	<SideBar {currentPath}>
		<table class="w-full">
			<thead>
				<tr>
					<th>Locked</th>
					<th>#</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Render</td>
					<td>{game.lock.render}</td>
				</tr>
				<tr>
					<td>Keys</td>
					<td>{game.lock.keys}</td>
				</tr>
			</tbody>
		</table>
	</SideBar>

	<main class="main">
		{#await promise then value}
			{@render children?.(value)}
		{/await}
	</main>
</div>

<Sprites></Sprites>
