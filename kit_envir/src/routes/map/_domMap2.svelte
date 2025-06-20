<script lang="ts">
	import { onMount } from 'svelte'
	// import { tweened } from 'svelte/motion'
	// import { cubicOut } from 'svelte/easing'
	// Kamera-Offset als tweened store für smooth scroll
	// const cameraX = tweened(0, { duration: 200, easing: cubicOut })
	// const cameraY = tweened(0, { duration: 200, easing: cubicOut })

	let { frameWidth = 512, frameHeight = 512 } = $props()
	let tileSize = $state(32)
	let mapWidth = $state(40)
	let mapHeight = $state(40)
	let player = $state({ x: 5, y: 5 })
	let cameraX = $state(0)
	let cameraY = $state(0)

	function updateCamera() {
		const worldWidth = mapWidth * tileSize
		const worldHeight = mapHeight * tileSize

		const centerX = frameWidth / 2
		const centerY = frameHeight / 2

		let offsetX = -player.x * tileSize + centerX - tileSize / 2
		let offsetY = -player.y * tileSize + centerY - tileSize / 2

		// Begrenzung: Kamera darf Map nicht verlassen
		offsetX = Math.min(0, Math.max(offsetX, frameWidth - worldWidth))
		offsetY = Math.min(0, Math.max(offsetY, frameHeight - worldHeight))

		cameraX = offsetX
		cameraY = offsetY
	}

	function movePlayer(dx: number, dy: number) {
		const newX = player.x + dx
		const newY = player.y + dy

		if (newX >= 0 && newX < mapWidth && newY >= 0 && newY < mapHeight) {
			player.x = newX
			player.y = newY
			updateCamera()
		}
	}

	onMount(() => {
		updateCamera()
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	})

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'ArrowUp') movePlayer(0, -1)
		if (e.key === 'ArrowDown') movePlayer(0, 1)
		if (e.key === 'ArrowLeft') movePlayer(-1, 0)
		if (e.key === 'ArrowRight') movePlayer(1, 0)
	}
</script>

<div class="frame" style="--fw: {frameWidth}px; --fh: {frameHeight}px;">
	{#key cameraX + ',' + cameraY}
		<div class="world" style="transform: translate({cameraX}px, {cameraY}px);">
			{#each Array(mapHeight) as _, y}
				{#each Array(mapWidth) as _, x}
					<div
						class="tile {player.x === x && player.y === y ? 'player' : ''}"
						style="grid-row: {y + 1}; grid-column: {x + 1};">
					</div>
				{/each}
			{/each}
		</div>
	{/key}
</div>

<style>
	.frame {
		width: var(--fw);
		height: var(--fh);
		overflow: hidden;
		position: relative;
		border: 2px solid #444;
	}

	.world {
		position: absolute;
		display: grid;
		grid-template-columns: repeat(40, 32px);
		grid-template-rows: repeat(40, 32px);
		transition: transform 0.1s linear;
	}

	.tile {
		width: 32px;
		height: 32px;
		background: #222;
		border: 1px solid #333;
	}

	.player {
		background: gold;
		z-index: 10;
	}
</style>
