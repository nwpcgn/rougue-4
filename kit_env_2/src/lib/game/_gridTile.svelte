<script lang="ts">
	import { Layer } from 'svelte-canvas'
	let { x, y, color, tileSize } = $props()
	// console.log({ x, y, color, tileSize })
	const render = ({ context }) => {
		context.fillStyle = color
		context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
	}
</script>

<Layer {render}></Layer>
