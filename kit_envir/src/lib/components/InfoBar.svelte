<script lang="ts">
	import { quintInOut } from 'svelte/easing'
	import { slide } from 'svelte/transition'
	let { children, open = $bindable() } = $props()
</script>

<details bind:open>
	<summary class="w-full bg-slate-800 text-center text-slate-200"
		><span class="text-lg leading-tight">nwp-studio</span>
	</summary>
	{#if open}
		<div transition:slide={{ duration: 600, easing: quintInOut }}>
			{@render children?.()}
		</div>
	{/if}
</details>
