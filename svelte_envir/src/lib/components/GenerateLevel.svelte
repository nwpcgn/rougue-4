<script lang="ts">
	import { game } from '../game/game.svelte.ts'
	import DungeonGenerator from '../game/tools/DungeonGenerator3'
	import sleep from '../utils/sleep.js'
	let mapSize = $state({ x: 75, y: 75 })
	let mapData = $state()

	const createMap = async () => {
		mapData = {}
		console.log(mapData)
		await sleep(500)
		const mapSize = { x: 75, y: 75 }
		const generator = new DungeonGenerator(mapSize, 50, 4, 16)
		const daten = generator.generate()
		mapData = { ...daten }

		return mapData.tiles
	}
	let promise = $state(createMap())
</script>

{#await promise}
	<span>loading</span>
{:then value}
	<div class="p-4">
		<div class="card bg-base-100 w-96 shadow-sm">
			<div class="card-body gap-4">
				<h2 class="card-title">{game?.name}</h2>
				<div class="font-bold">
					<span>Mapsize</span>
					<span>{mapSize.x} x {mapSize.y}</span>
				</div>

				{#if value}
					<div>
						<textarea class="textarea">{JSON.stringify(value)}</textarea>
					</div>
				{:else}
					<span>Error</span>
				{/if}
				<div class="card-actions justify-end">
					<button class="btn btn-primary" onclick={createMap}>Create</button>
				</div>
			</div>
		</div>
	</div>
{/await}

<!-- 
const mapSize = { x: 75, y: 75 };
const generator = new DungeonGenerator(mapSize, 50, 4, 16);
const map = generator.generate();

// canvas anzeigen etc. wie gehabt -->
