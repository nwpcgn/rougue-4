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

	let { src = '/media/bgG.mp3', play = $bindable(false) } = $props()

	let audio = $state()
	let paused = $state(true)

	onMount(() => {
		elements.add(audio)
		return () => elements.delete(audio)
	})

	function stopOthers() {
		elements.forEach((element) => {
			if (element !== audio) element.pause()
		})
	}
</script>

<audio bind:this={audio} bind:paused onplay={stopOthers} {src}></audio>
