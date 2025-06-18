<script lang="ts">
	import type { Snippet } from 'svelte'

	let { children, footer }: { children: Snippet } = $props()
</script>

<div>
	<header class="zitat-box">
		{@render children?.()}

		<footer>
			{#if footer}
				{@render footer?.()}
			{:else}
				- <cite>Dungerue</cite>
			{/if}
		</footer>
	</header>
</div>

<style>
	/* -------------------------------- Zitat Box ------------------------------- */

	header {
		--color-light: var(--background1);
		--color-dark: var(--foreground1);
		font-family: var(--family-2);
		margin: 2rem auto;
		color: var(--color-dark);
		background-color: var(--color-light);
		font-size: 1.1rem;
		padding: 1.5rem clamp(2rem, 10%, 3rem);
		word-break: break-word;
	}

	footer {
		padding: 0.25em 0.5em;
		margin-top: 1rem;

		font-size: 0.9rem;

		/* Creates a visual box shrunk to `max-content` */
		width: fit-content;
	}
</style>
