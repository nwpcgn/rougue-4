<script lang="ts">
	import UserPanel from './UserPanel.svelte';
	import Loader from '../components/Loader.svelte';
	import supabase from './supabase.js';
	import { auth } from './auth.svelte.ts';
	import { sleep } from '../';
	let { children } = $props();
	let email = $state('');
	let password = $state('');
	supabase.auth.onAuthStateChange((event, session) => {
		setTimeout(async () => {
			if (event === 'SIGNED_IN') {
				// console.log('SIGNED_IN', session.user)
				auth.signIn(session.user);
			} else if (event === 'SIGNED_OUT') {
				auth.signOut();
			}
		}, 200);
	});
	const signIn = async (e) => {
		e.preventDefault();
		try {
			const obj = { email, password };
			const { data, error } = await supabase.auth.signInWithPassword(obj);
			if (data) {
				console.log('SignIn Succeed');
				auth.showPanel();
			}
			if (error) {
				console.log('SignIn Failed', error);
				throw new Error('XXXXXX');
			}
		} catch (error) {
			alert(error);
		}
	};

	const init = async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser();
			if (user) {
				auth.signIn(user);
				await sleep(500);
				auth.showPanel();
			} else {
				auth.signOut();
			}
		} catch (error) {
			alert(error);
		}
	};
</script>

{#await sleep(3333).then(init)}
	<Loader spinner></Loader>
{:then _}
	{#if auth.userId()}
		{@render children?.()}
		<UserPanel></UserPanel>
	{:else}
		{@render pageLayer(loginForm)}
	{/if}
{/await}

{#snippet pageLayer(component)}
	<main class="main">
		<section class="nwp page center">{@render component?.()}</section>
	</main>
{/snippet}

{#snippet loginForm()}
	<article class="relative w-[360px] p-4">
		<fieldset class="fieldset bg-glass border-base-300 rounded-box w-xs px-8 py-6">
			<legend class="fieldset-legend animate-infinite animate-pulse"
				><span class="text-lg font-bold">Anmeldung</span></legend
			>
			<div
				class="animate-fade animate-once animate-duration-[800ms] animate-delay-[2200] grid gap-2"
			>
				<label class="label">Email</label>
				<input type="email" class="input" bind:value={email} placeholder="Email" />

				<label class="label">Password</label>
				<input type="password" class="input" bind:value={password} placeholder="Password" />

				<button onclick={signIn} class="btn btn-neutral mt-4">Login</button>
			</div>
		</fieldset>
	</article>
{/snippet}
