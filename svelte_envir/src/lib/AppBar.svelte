<script lang="ts">
	let { children, start, end } = $props()
</script>

<div
	class="app-bar bg-neutral text-neutral-content flex h-10 justify-between px-4">
	{#if start}
		{@render start()}
	{:else}<span class="self-center text-xs font-light">nwp-studio</span>
	{/if}
	{@render children?.()}
	{#if end}
		{@render end()}
	{:else}
		<span></span>
	{/if}
</div>
