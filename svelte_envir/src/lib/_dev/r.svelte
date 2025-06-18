<script lang="ts">
	import BackgroundFadeLayer1 from './BackgroundFadeLayer1.svelte'
	import BackgroundFadeLayer2 from './BackgroundFadeLayer2.svelte'
	let showBg = $state(false)
	let vers1 = $state(true)
	function toggleLayer() {
		vers1 = !vers1
	}
	function toggle() {
		showBg = !showBg
	}
</script>

<div
	class="fixed top-0 left-0 z-30 flex items-center justify-center bg-slate-800 px-4 py-2">
	<button
		onclick={toggle}
		type="button"
		class="hover:bg-opacity-10 inline-block rounded-full border-2 border-fuchsia-500 px-6 pt-2.5 pb-2 text-xs leading-normal font-medium text-fuchsia-500 uppercase transition duration-150 ease-in-out hover:border-fuchsia-600 hover:bg-fuchsia-400 hover:text-fuchsia-600 focus:border-fuchsia-700 focus:text-fuchsia-700 focus:ring-0 focus:outline-none active:border-fuchsia-800 active:text-fuchsia-800 dark:border-fuchsia-300 dark:text-fuchsia-300 dark:hover:hover:bg-fuchsia-300">
		Hintergrund {showBg ? 'verbergen' : 'anzeigen'}
	</button>
	<button
		onclick={toggleLayer}
		type="button"
		class="hover:bg-opacity-10 inline-block rounded-full border-2 border-fuchsia-500 px-6 pt-2.5 pb-2 text-xs leading-normal font-medium text-fuchsia-500 uppercase transition duration-150 ease-in-out hover:border-fuchsia-600 hover:bg-fuchsia-400 hover:text-fuchsia-600 focus:border-fuchsia-700 focus:text-fuchsia-700 focus:ring-0 focus:outline-none active:border-fuchsia-800 active:text-fuchsia-800 dark:border-fuchsia-300 dark:text-fuchsia-300 dark:hover:hover:bg-fuchsia-300">
		Version {vers1 ? '1' : '2'}
	</button>
</div>

{#if vers1}
	<div style="display: flex; height: 100vh;">
		<BackgroundFadeLayer1 show={showBg}>
			<h1 style="position: relative; z-index: 1; color: white; padding: 2rem;">
				Dein Inhalt hier
			</h1>
		</BackgroundFadeLayer1>
	</div>
{:else}
	<div class="flex h-screen flex-col items-center justify-center">
		<button
			class="mb-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
			on:click={toggle}>
			Hintergrund {showBg ? 'verstecken' : 'anzeigen'}
		</button>

		<BackgroundFadeLayer2
			show={showBg}
			backgroundUrl="/mountains.jpg"
			overlayColor="rgba(0, 0, 0, 0.3)">
			<div class="p-8 text-center text-white">
				<h1 class="text-4xl font-bold">Willkommen</h1>
				<p class="mt-2 text-xl">Mit sanft animiertem Hintergrund</p>
			</div>
		</BackgroundFadeLayer2>
	</div>
{/if}
