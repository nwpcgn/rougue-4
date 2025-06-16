<script lang="ts">
	import DungeonGenerator2 from '../lib/DungeonGenerator2'

	let config = $state({
		mapSize: { x: 75, y: 75 }
	})
	let response = $state()
	let output = $state({})
	let geMap = async () => {
		const obj = {}
	}
</script>

<section class="nwp page center">
	<div class="grid gap-4 p-4">
		<hgroup>
			<h1 class="text-4xl">Generator 2</h1>
		</hgroup>
		<div>
			<div class="grid gap-4">
				<div class="nes-field">
					<label for="inline_field">MapWidth</label>
					<input
						type="number"
						bind:value={config.mapSize.x}
						class="nes-input" />
				</div>
				<div class="nes-field">
					<label for="inline_field">MapHeight</label>
					<input
						type="number"
						bind:value={config.mapSize.y}
						class="nes-input" />
				</div>
				<nav>
					<button type="button" class="nes-btn is-primary">Primary</button>
				</nav>
				<label for="textarea_field">Output</label>
				<textarea id="textarea_field" class="nes-textarea aspect-square"
					>{JSON.stringify(output)}</textarea>
			</div>
		</div>
	</div>
</section>
