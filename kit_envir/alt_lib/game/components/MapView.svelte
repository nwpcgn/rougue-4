<script lang="ts">
	import DomMap from '../canvas/DomMap.svelte'
	import Preview from '../canvas/Preview.svelte'
	let { isCanvasMap = $bindable(false) } = $props()
</script>

<section class="animated nwp page center" class:active={!isCanvasMap}>
	<DomMap></DomMap>
</section>

<section class="nwp animated page center" class:active={isCanvasMap}>
	<Preview></Preview>
</section>
