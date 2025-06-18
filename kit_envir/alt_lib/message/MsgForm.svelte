<script lang="ts">
	import { msg } from './messages.svelte.js'
	let message = $state('Lorem Imsum')
	let types = ['success', 'error', 'info']
	let type = $state('success')
	let dismissible = $state(true)
	let timeout = $state(2000)

	const addMsg = () => {
		const obj = { message, type, dismissible, timeout }
		msg.addMsg(obj)
	}
</script>

<div class="flex justify-center">
	<form class="grid gap-3" onsubmit={(e) => e.preventDefault()}>
		<label class="input">
			Message:
			<input bind:value={message} />
		</label>

		<label class="input">
			Timeout:
			<input bind:value={timeout} type="number" />
		</label>

		<label class="select">
			Type:
			<select bind:value={type}>
				{#each types as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</label>

		<label class="label flex justify-between">
			<input class="checkbox" bind:checked={dismissible} type="checkbox" />
			<span>Dismissible?</span>
		</label>

		<button class="btn btn-soft btn-info" onclick={addMsg}> Add toast </button>
	</form>
</div>
