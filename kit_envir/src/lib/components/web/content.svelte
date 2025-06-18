<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData; children: Snippet } = $props()
</script>

{@render children?.()}
<section data-pg-collapsed>
	<div class="padded-content">
		<h2>Container</h2>
		<p data-text data-unstyled>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quos
			doloribus autem praesentium quod voluptatem quaerat accusamus labore
			ullam, omnis corrupti aperiam natus fuga repudiandae repellendus, ipsa
			enim vitae ut!
		</p>
	</div>
</section>
