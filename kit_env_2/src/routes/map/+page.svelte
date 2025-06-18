<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>Dungerue Hall</title>
</svelte:head>

<section class="page center nwp">
	<header>
		<h1>{data.title}</h1>
        <h4>{data.heading}</h4>
	</header>
</section>
