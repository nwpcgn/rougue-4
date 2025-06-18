<script module>
	const elements = new Set()

	export function stopAll() {
		elements.forEach((element) => {
			element.pause()
		})
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte'
	const media = [
		{
			name: 'bgG',
			url: '/media/bgG.mp3',
			target_slug: 'audio',
			required: true
		},
		{
			name: 'featured',
			url: '/media/featured.mp3',
			target_slug: 'audio',
			required: true
		},
		{
			name: 'researchClick',
			url: '/media/researchClick.mp3',
			target_slug: 'audio',
			required: true
		},
		{
			name: 'researchComplete',
			url: '/media/researchComplete.mp3',
			target_slug: 'audio',
			required: true
		},
		{
			name: 'researchInactive',
			url: '/media/researchInactive.mp3',
			target_slug: 'audio',
			required: true
		}
	]

	let { src = '/media/bgG.mp3', title, composer, performer } = $props()

	let audio = $state()
	let paused = $state(true)

	function audioHelper(audioSupport) {
		if (audioSupport.duration > 0 && !audioSupport.paused) {
			//already playing
			audioSupport.pause()
			audioSupport.currentTime = 0
			audioSupport.play()
		} else {
			//not playing
			audioSupport.play()
		}
	}
	console.log(play)
	onMount(() => {
		elements.add(audio)

		console.log(play)
		return () => elements.delete(audio)
	})

	function stopOthers() {
		elements.forEach((element) => {
			if (element !== audio) element.pause()
		})
	}

	$effect(() => {
		if (play) {
			audio.play()
		}
	})
</script>

<audio bind:this={audio} bind:paused onplay={stopOthers} controls {src}></audio>
