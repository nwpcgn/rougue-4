<script lang="ts">
	import { auth, signOut } from './auth.svelte.ts'
	import { fly } from 'svelte/transition'
	import { quadInOut } from 'svelte/easing'
	import { sleep } from '../'
	let process = $state(false)
	const logOut = async () => {
		process = true
		try {
			await sleep()
			await signOut()
		} catch (error) {
			alert(error)
		} finally {
			process = false
		}
	}

	const close = () => {
		auth.closePanel()
	}

	$effect(() => {
		if (!auth.userId) {
			close()
		}
	})
</script>

{#if auth.userId() && auth.isOpen}
	<section class="bg center full-screen active">
		<article
			class="relative w-[360px] p-4"
			transition:fly={{
				duration: 400,
				y: 200,
				easing: quadInOut,
				delay: 400
			}}>
			{@render userPanel()}
		</article>
	</section>
{/if}

{#snippet userPanel()}
	<fieldset
		class="fieldset bg-base-100 border-base-300 rounded-box heading-2 w-xs px-8 py-6">
		<legend class="fieldset-legend animate-infinite animate-pulse">
			<span class="text-2xl font-bold">User Panel</span>
		</legend>
		<div
			class="animate-delay-[2200] animate-duration-[800ms] animate-fade animate-once grid">
			<label class="label">Uid</label>
			<input
				value={auth.userId()}
				type="text"
				class="input input-md"
				readonly />
			<label class="label">Email</label>
			<input
				value={auth.userMail()}
				type="email"
				class="input input-md"
				readonly />
			<label class="label">Username</label>
			<input
				value={auth.user?.user_metadata?.name}
				type="text"
				class="input input-md" />
			<button class="btn btn-error my-2" onclick={logOut}
				>{process ? '... loading' : 'Logout'}</button>
			<button class="btn btn-neutral" onclick={close}>Close</button>
		</div>
	</fieldset>
{/snippet}
