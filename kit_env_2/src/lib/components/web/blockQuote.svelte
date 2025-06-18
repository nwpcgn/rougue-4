<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData; children: Snippet } = $props()
</script>

{@render children?.()}

<div data-pg-collapsed>
	<blockquote class="smol-unbreakable-box zitat-box">
		<p>
			Topping candy canes ice cream gummi bears gingerbread marshmallow.
			Chocolate cake powder sugar plum topping. Cake marshmallow carrot cake.
			Pie liquorice liquorice sweet tootsie roll caramels donut dragée bear
			claw. Chocolate powder candy canes.
		</p>
		<footer>
			- <cite>Captain Candy</cite>
		</footer>
	</blockquote>
</div>
