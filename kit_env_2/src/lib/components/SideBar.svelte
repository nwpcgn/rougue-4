<script lang="ts">
	let { children, isClose = $bindable(false) } = $props()
</script>

<aside data-text class="sidebar border">

<button>Load</button>
	<button>seload</button>
</aside>

{#snippet iconT(name)}
	<svg class="nwp-icon" style="--fs: 16px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}
