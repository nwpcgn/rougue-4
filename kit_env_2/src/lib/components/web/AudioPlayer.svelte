<script lang="ts">
	import { onMount } from 'svelte'

	let {
		src = '/media/bgG.mp3',
		play = $bindable(true),
		showContrl = true,
		isLoop = true,
		volume = 0.2
	} = $props()

	let audio = $state()
	let paused = $state(true)

	onMount(() => {
		console.log({ play })
		play = true
		return () => {
			audio.pause()
		}
	})

	$effect(() => {
		if (play) {
			console.log('play')
			audio.play()
		}
	})
</script>

<audio
	bind:this={audio}
	bind:paused
	controls={showContrl}
	loop={isLoop}
	{volume}
	{src}></audio>
