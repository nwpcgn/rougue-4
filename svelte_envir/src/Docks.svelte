<script lang="ts">
	import { app } from './lib/app.svelte.ts'
	let active = $derived(app.views.viewId)
	const changeView = (slug = '') => (app.views.viewId = slug)
</script>

<aside
	class="page-left text-neutral-content flex w-[100px] flex-col justify-between bg-neutral-900">
	<nav class="flex flex-col gap-1 p-2">
		{#each app.views.getAll() as view (view.slug)}
			{@render dockItem(view)}
		{/each}
	</nav>
</aside>

{#snippet dockItem({ name, slug, icon })}
	<button
		aria-label={name}
		class:active={active === slug}
		class="dock-item"
		onclick={() => changeView(slug)}
		>{@render iconT(icon, '--fs: 30px;')}</button>
{/snippet}
{#snippet iconT(name)}
	<svg class="nwp-icon" style="--fs: 30px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}
