<script lang="ts">
	let { showModal = $bindable(), children, footer } = $props()
	let dialog = $state() // HTMLDialogElement

	const handleCloseAction = () => {
		showModal = false
	}

	$effect(() => {
		if (showModal) dialog.showModal()
	})
</script>

<dialog id="dialog" popover bind:this={dialog} onclose={handleCloseAction}>
	{#if showModal}
		<div box-="round" id="content">
			{@render children?.()}
			<div id="buttons">
				{#if footer}
					{@render footer()}
				{:else}
					<form method="dialog">
						<button box-="round">Cancel</button>
					</form>
				{/if}
			</div>
		</div>
	{/if}
</dialog>

<style>
	@layer base, utils, components;

	@import '@webtui/css/components/button.css';
	@import '@webtui/css/components/dialog.css';
	@import '@webtui/css/utils/box.css';
	#dialog {
		--max-width: 50ch;
		width: min(100%, var(--max-width));
	}
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}
	#content {
		display: flex;
		flex-direction: column;
		gap: 1lh;

		padding: 2lh 2ch 1lh 2ch;
		/* background-color: var(--background1); */
	}
	#buttons {
		display: flex;
		gap: 1ch;
		justify-content: flex-end;
	}
</style>
