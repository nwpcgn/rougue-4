<script lang="ts">
	import { Tween } from 'svelte/motion'
	import { sineIn } from 'svelte/easing'
	import { onMount } from 'svelte'
	let { duration = 4444, onReady } = $props()
	let progress = new Tween(0, {
		duration: duration,
		easing: sineIn
	})
	onMount(() => {
		progress.target = 100

		return () => {
			duration = 100
			progress.target = 0
		}
	})
</script>

<div class="flex w-[300px] flex-col gap-4">
	<section class="icon-list">
		<i class="nes-mario"></i>
		<i class="nes-ash"></i>
		<i class="nes-pokeball"></i>
	</section>

	<div>
		<progress class="nes-progress is-primary" value={progress.current} max="100"
		></progress>
	</div>
</div>
