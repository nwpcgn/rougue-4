<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { PageData } from './$types'

	let { data }: { data: PageData; children: Snippet } = $props()
</script>

{@render children?.()}
<section>
	<div
		class="media-wrapp media-wrapp--video"
		style="--stack-aspect-ratio: 16/9"
		data-pg-collapsed>
		<video muted autoplay>
			<source src="https://smolcss.dev/assets/video.mp4" type="video/mp4" />
		</video>
		<h3>Into The Unknown</h3>
		<small
			>Video from <a
				href="https://www.pexels.com/video/a-sky-full-of-stars-at-night-2646392/"
				>Pexels</a
			></small>
	</div>
</section>
