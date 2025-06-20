<script lang="ts">
	import { AsciiBox } from '$lib'
	let { data } = $props()
</script>

<svelte:head>
	<title>Dungerue - Lobby</title>
</svelte:head>

<section class="page center nwp">
	<AsciiBox {...data}>
		<hgroup>
			<span class="text-2xl font-bold">{data.heading}</span>
		</hgroup>
	</AsciiBox>
</section>
