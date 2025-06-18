<script lang="ts">
	import { game } from '$lib/game.svelte.ts'
	let widthEL = $state()
	let heightEL = $state()
	let typeVal = $state(game.type)
	let widthVal = $derived(parseInt(widthEL) | 0)
	let heightVal = $derived(parseInt(heightEL) | 0)
</script>

<table>
	{@render tableRow()}
</table>

{#snippet tableRow()}
	<thead>
		<tr>
			<th>Generator</th>
			<th>
				{game.type}
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Width</td>
			<td>
				<span contenteditable bind:innerText={widthEL}>{game.width}</span>
			</td>
		</tr>

		<tr>
			<td>Height</td>
			<td>
				<span contenteditable bind:innerText={heightEL}>{game.height}</span>
			</td>
		</tr>
	</tbody>
{/snippet}

{#snippet tableTd(value)}
	<td>{value}</td>
{/snippet}
{#snippet tableTH(value)}
	<th>{value}</th>
{/snippet}

{#snippet tableRo(cells, temp)}
	<tr>
		{#each cells as cell}
			{@render tableTd(cell)}
		{/each}
	</tr>
{/snippet}

{#snippet tableHead(cells = [])}
	<thead>
		<tr>
			{#each cells as cell}
				{@render tableTd(cell)}
			{/each}
		</tr>
	</thead>
{/snippet}

<style>
	@layer base, utils, components;
	@import '@webtui/css/components/table.css';
	@import '@webtui/css/components/radio.css';
	table {
		--table-border-width: 2px;
		--table-border-color: var(--foreground1);
	}
</style>
