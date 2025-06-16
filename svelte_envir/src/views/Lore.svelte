<script lang="ts">
	import { NesContainer } from '../lib'
	let { onEnd } = $props()
	const lore = {
		title: 'Die Asche von Viridra – Eine Roguelike-Lore',
		passagen: [
			{
				tag: 'p',
				text: 'Einst war Viridra ein blühendes Königreich, regiert von Weisen und geschmiedet aus den fünf Elementen: Erde, Feuer, Wasser, Luft und Äther.',
				action: 'step'
			},
			{
				tag: 'p',
				text: 'Über Jahrtausende hinweg bewahrte der Obelisk von Aelthuun das Gleichgewicht dieser Mächte. Doch eines Nachts, als drei Monde sich zum ersten Mal seit Äonen überlappten, riss ein Spalt aus purer Leere durch den Himmel.',
				action: 'step'
			},
			{
				tag: 'p',
				text: 'Aus dem Riss stieg YlhVaak empor – ein uraltes Wesen, das jenseits der Zeit existiert hatte. Es vergiftete das Herz von Viridra, verwandelte Städte in Ruinen und lebendige Seelen in wandelnde Schatten.',
				action: 'step'
			},
			{
				tag: 'p',
				text: 'Der Obelisk zerbrach in fünf Fragmente, verstreut in den Tiefen einer sich stetig verändernden Welt: dem Labyrinth der Asche.',
				end: 'end'
			}
		]
	}
	let step = $state(0)
	const nextStep = () => {
		step = step + 1
	}
</script>

{#each lore.passagen as pasage, i}
	{#if i == step}
		<section class="nwp page center">
			<div class="content">{@render temp1(pasage)}</div>
		</section>
	{/if}
{/each}

{#snippet temp1({ tag, text, end })}
	<NesContainer title="Die Asche von Viridra" isCenter>
		<blockquote>
			<svelte:element this={tag}> {text}</svelte:element>
		</blockquote>
		{#if end}
			<button
				onclick={() => {
					onEnd()
					step = 0
				}}
				class="nes-btn"><span>Close</span></button>
		{:else}
			<button onclick={nextStep} class="nes-btn"><span>Weiter</span></button>
		{/if}
	</NesContainer>
{/snippet}

<style>
	blockquote {
		font-family: var(--family-2);
		font-weight: 500;
		font-size: 24px;
		padding: var(--spacing-base) 0;
	}
	button span {
		font-family: var(--family-2);
		font-weight: 500;
		font-size: 24px;
		letter-spacing: 8px;
		margin: 0 var(--spacing-base);
	}
</style>
