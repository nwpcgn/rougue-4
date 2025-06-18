<script lang="ts">
	import { mainMenu } from '$lib'
	let { children, isClose = $bindable(false) } = $props()
</script>

<aside data-text class="sidebar border">
	{#if !isClose}
		<header class="p-4">
			<nav class="grid divide-y">
				{#each mainMenu as { name, href, icon }}
					<a
						href="#{href}"
						class="flex items-center justify-between gap-4 px-2 py-1">
						<span class="font-bold">{name}</span>
						{@render iconT(icon)}
					</a>
				{/each}
			</nav>
		</header>

		<div class="flex-1"></div>
		<a href="/" is-="button">Reload</a>
		<button onclick={() => (isClose = true)}>Close</button>
	{/if}
</aside>

{#snippet iconT(name)}
	<svg class="nwp-icon" style="--fs: 16px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}
