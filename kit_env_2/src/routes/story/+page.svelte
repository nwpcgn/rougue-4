<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>Dungerue Hall</title>
</svelte:head>

<section class="page center nwp">
	<header>
		<h1>{data.title}</h1>
		<h2>{data.heading}</h2>
	</header>
</section>
