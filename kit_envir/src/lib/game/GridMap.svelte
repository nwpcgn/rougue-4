<script lang="ts">
	import { Canvas } from 'svelte-canvas'
	import { game } from '../../lib/app.svelte.ts'
	import GridTile from './GridTile.svelte'
	import GridFighter from './GridFighter.svelte'
	let items = $state(game.grid.items)
	let enemys = $state(game.grid.enemys)
	const tileTypes = {
		'#': { color: '#f8f9fa', walkable: false },
		'.': { color: '#ecf0f1', walkable: true },
		D: { color: '#dee2e6', walkable: true }
	}
	let tileSize = $state(game.grid.config.size)
	let cameraWidth = $state(14)
	let cameraHeight = $state(14)
	let cameraX = $state()
	let cameraY = $state()
	let moveCooldown = $state(0)
	let moveDelay = 150

	const updateCam = () => {
		cameraX = Math.max(0, game.grid.hero.x - Math.floor(cameraWidth / 2))
		cameraY = Math.max(0, game.grid.hero.y - Math.floor(cameraHeight / 2))
		cameraX = Math.min(cameraX, game.grid.config.width - cameraWidth)
		cameraY = Math.min(cameraY, game.grid.config.height - cameraHeight)
	}

	function handleKey(e: KeyboardEvent) {
		if (moveCooldown > Date.now()) return

		let dx = 0
		let dy = 0

		switch (e.key) {
			case 'ArrowUp':
			case 'w':
				dy = -1
				break
			case 'ArrowDown':
			case 's':
				dy = 1
				break
			case 'ArrowLeft':
			case 'a':
				dx = -1
				break
			case 'ArrowRight':
			case 'd':
				dx = 1
				break
			default:
				return
		}

		const targetX = game.grid.hero.x + dx
		const targetY = game.grid.hero.y + dy
		const hitItems = items.filter(({ x, y }) => x == targetX && y == targetY)
		const hitEnemy = enemys.filter(({ x, y }) => x == targetX && y == targetY)
		if (hitItems.length) {
			const { x, y } = hitItems[0]
			game.inventory = hitItems[0]
			items = items.filter((d) => d.x != x || d.y != y)
		}
		if (hitEnemy.length) {
			const { x, y } = hitEnemy[0]
			enemys = enemys.filter((d) => d.x != x || d.y != y)
		}
		if (tileTypes[game.grid.map[targetY][targetX]].walkable) {
			game.grid.updateHero({ x: targetX, y: targetY })
			moveCooldown = Date.now() + moveDelay
		}

		updateCam()
	}

	updateCam()

	$inspect(items, enemys)
</script>

<Canvas
	width={cameraWidth * tileSize}
	height={cameraHeight * tileSize}
	class="border">
	{#each game.grid.map.slice(cameraY, cameraY + cameraHeight) as row, y}
		{#each row.slice(cameraX, cameraX + cameraWidth) as col, x}
			{#if col !== '#'}
				<GridTile color={tileTypes[col].color} {x} {y} {tileSize}></GridTile>
			{/if}
		{/each}
	{/each}
	<GridFighter
		col="@"
		color="red"
		x={game.grid.hero.x - cameraX}
		y={game.grid.hero.y - cameraY}
		{tileSize}></GridFighter>
</Canvas>

<svelte:window onkeydown={handleKey} />
