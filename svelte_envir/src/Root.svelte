<script lang="ts">
	import { app } from './lib/app.svelte.ts'
	import AppBar from './lib/AppBar.svelte'
	import Docks from './Docks.svelte'
	import LevelGen from './lib/game/components/LevelGen.svelte';
	let views = $state.raw({
		start: {
			slug: 'start',
			name: 'Lobby',
			icon: 'nwp-home',
			menu: [
				{
					id: 'map',
					slug: 'map',
					name: 'Start Game',
					icon: 'nwp-game',
					component: null
				},
				{
					id: 'settings',
					slug: 'settings',
					name: 'Map Settings',
					icon: 'nwp-options',
					component: null
				},
				{
					id: 'story',
					slug: 'story',
					name: 'Dungeon Lore',
					icon: 'nwp-dice',
					component: null
				}
			]
		},
		map: {
			slug: 'map',
			name: 'Battle Map',
			icon: 'nwp-game',

			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		},
		settings: {
			slug: 'settings',
			name: 'Map Settings',
			icon: 'nwp-options',
			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		},
		story: {
			slug: 'story',
			name: 'Dungeon Lore',
			icon: 'nwp-dice',
			menu: [{ slug: 'start', name: 'Exit', icon: 'nwp-close' }]
		}
	})
</script>

<AppBar>
	{#snippet end()}
		<div class="flex gap-2 self-center" style="--fs: 18px;">
			{#each app.views.getAll() as item (item.slug)}
				<span class:text-fuchsia-600={app.views.viewId === item.slug}
					>{@render iconT(item.icon)}</span>
			{/each}
		</div>
	{/snippet}
	<span class="self-center font-extrabold tracking-widest"
		>{app.views.view?.name}</span>
</AppBar>

<div class="main">
	<div class="page">
		<hgroup>
			<h2>Start</h2>
		</hgroup>
		<LevelGen></LevelGen>
	</div>
</div>

<aside class="page-right">

</aside>
<Docks></Docks>

{#snippet iconT(name, style = '')}
	<svg class="nwp-icon" {style}><use xlink:href="#{name}"></use></svg>
{/snippet}
