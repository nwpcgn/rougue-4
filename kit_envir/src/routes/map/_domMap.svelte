<script lang="ts">
	import './_domMap.css'
	import { game } from '$lib/game.svelte.ts'
	import { onMount } from 'svelte'
	import { AsciiBox } from '$lib'
	// import { tweened } from 'svelte/motion'
	// import { cubicOut } from 'svelte/easing'
	// Kamera-Offset als tweened store für smooth scroll
	// const cameraX = tweened(0, { duration: 200, easing: cubicOut })
	// const cameraY = tweened(0, { duration: 200, easing: cubicOut })
	const className = {
		'#': { color: '#f8f9fa', name: 'opacity-5', walkable: false },
		_: { color: '#1abc9c', name: 'room', walkable: true },
		D: { color: '#f39c12', name: 'door', walkable: true },
		'.': { color: '#3498db', name: 'floor', walkable: true }
	}
	let { frameWidth = 512, frameHeight = 512 } = $props()
	const moveDelay = 150
	let moveCooldown = $state(0)
	let isDialog = $state(false)
	let tileSize = $state(game.size)
	let mapWidth = $state(game.width)
	let mapHeight = $state(game.height)
	let cameraX = $state(0)
	let cameraY = $state(0)

	function updateCamera() {
		const worldWidth = mapWidth * tileSize
		const worldHeight = mapHeight * tileSize
		const centerX = frameWidth / 2
		const centerY = frameHeight / 2

		let offsetX = -game.dungeon.position.x * tileSize + centerX - tileSize / 2
		let offsetY = -game.dungeon.position.y * tileSize + centerY - tileSize / 2

		// Begrenzung: Kamera darf Map nicht verlassen
		offsetX = Math.min(0, Math.max(offsetX, frameWidth - worldWidth))
		offsetY = Math.min(0, Math.max(offsetY, frameHeight - worldHeight))

		cameraX = offsetX
		cameraY = offsetY
	}

	function movePlayer(dx: number, dy: number) {
		if (moveCooldown > Date.now()) return
		const targetX = game.dungeon.position.x + dx
		const targetY = game.dungeon.position.y + dy
		const item = isItem(targetX, targetY)
		if (item) {
			alert(item)
			console.log('Item', isItem(targetX, targetY))
		}

		// const hitItems = items.filter(({ x, y }) => x == targetX && y == targetY)
		// const hitEnemy = enemys.filter(({ x, y }) => x == targetX && y == targetY)
		// if (hitItems.length) {
		// 	const { x, y } = hitItems[0]
		// 	game.inventory = hitItems[0]
		// 	items = items.filter((d) => d.x != x || d.y != y)
		// }
		// if (hitEnemy.length) {
		// 	const { x, y } = hitEnemy[0]
		// 	enemys = enemys.filter((d) => d.x != x || d.y != y)
		// }
		if (className[game.dungeon.map[targetY][targetX]].walkable) {
			game.updateHero({ x: targetX, y: targetY })
			moveCooldown = Date.now() + moveDelay
		}

		// updateCamera()
	}

	$effect(() => {
		updateCamera(game.dungeon.position)
	})

	// $inspect('Hero', game.dungeon.position)
	$inspect('items', game.dungeon.items)
	const isPlayer = (x: number, y: number) => {
		return game.dungeon.position.x == x && game.dungeon.position.y == y
	}
	const isItem = (x: number, y: number) => {
		let items = []
		game.dungeon.items?.forEach((key, id) => {
			const parts = key.split(',')
			const _x = parseInt(parts[0])
			const _y = parseInt(parts[1])
			if (_x == x && _y == y) {
				items.push({ key, id })
			}
		})

		return items?.length

		//  return game.dungeon.position.x == x && game.dungeon.position.y == y
	}
	function handleKey(e: KeyboardEvent) {
		console.log(e.key)
		if (e.key === 'ArrowUp') movePlayer(0, -1)
		if (e.key === 'ArrowDown') movePlayer(0, 1)
		if (e.key === 'ArrowLeft') movePlayer(-1, 0)
		if (e.key === 'ArrowRight') movePlayer(1, 0)
	}
</script>

<svelte:window onkeydown={handleKey} />

<div
	class="frame"
	style="--fw: {frameWidth}px; --fh: {frameHeight}px; {game.gridStyle}">
	<div
		class="rogue-grid"
		style="transform: translate({cameraX}px, {cameraY}px);">
		{#if !game.renderLock}
			{#each game.dungeon.map as row, y}
				{#each row as col, x}
					<div class="tile">
						{#if col !== '#'}
							{@render tileEl(x, y, col)}
						{:else}
							<span class="tile-el wall"
								><span class="tile-sub center">{col}</span></span>
						{/if}
					</div>
				{/each}
			{/each}
		{/if}
	</div>
	<!-- {#key cameraX + ',' + cameraY}{/key} -->
</div>
{#snippet tileEl(x = 0, y = 0, col = '#')}
	<span class="tile-el {className[col].name}">
		{#if col === '.'}
			{@render iconT('floor1')}
		{:else if col === '_'}
			{@render iconT('room1')}
		{:else if col === 'D'}
			{@render iconT('doorEl')}
		{:else}
			<span class="tile-sub">{col}</span>
		{/if}
		{#if isPlayer(x, y)}
			<span class="tile-sub center player" style="--fs: {tileSize * 0.8}px; "
				><svg class="nwp-icon tile-sub"
					><use xlink:href="#nwp-logo-hero"></use></svg
				></span>
		{/if}
		{#if isItem(x, y)}
			<span class="tile-sub center item" style="--fs: {tileSize * 0.5}px; "
				><svg class="nwp-icon center tile-sub"
					><use xlink:href="#nwp-logo-lobby"></use></svg
				></span>
		{/if}
	</span>
{/snippet}

{#snippet iconT(name)}
	<svg class="tile-sub" width={tileSize} height={tileSize}
		><use xlink:href="#{name}"></use></svg>
{/snippet}



<style>
</style>
