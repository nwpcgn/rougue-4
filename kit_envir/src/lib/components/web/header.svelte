<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData; children: Snippet } = $props()
</script>

{@render children?.()}

<div class="is-full bg-blue-500 text-blue-100" data-pg-collapsed>
	<h1 class="p-8 text-center md:text-4xl">Heading 1</h1>
</div>
