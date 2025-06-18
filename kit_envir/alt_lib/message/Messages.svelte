<script lang="ts">
	import { msg } from './messages.svelte.ts'
	const comp = {
		info: infoA,
		warn: warnA,
		error: errorA,
		success: successA,
		prompt: promptA
	}
</script>

{#if msg.list.length}
	<section class="toast toast-top toast-end z-40">
		{#each msg.list as item (item.id)}
			{@render comp[item.type]?.(item)}
		{/each}
	</section>
{/if}

{#snippet infoA({ message, dismissible, id })}
	<div role="alert" class="alert alert-info">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-6 w-6 shrink-0 stroke-current">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
		</svg>
		<span>{message}</span>
		{#if dismissible}
			<button
				onclick={() => msg.dismiss(id)}
				class="btn btn-ghost btn-sm btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1em"
					height="1em"
					class="h-7 w-7">
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
					</g>
				</svg>
			</button>
		{/if}
	</div>
{/snippet}
{#snippet warnA({ message, dismissible, id })}
	<div role="alert" class="alert alert-warning">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
		</svg>
		<span>{message}</span>
		{#if dismissible}
			<button
				onclick={() => msg.dismiss(id)}
				class="btn btn-ghost btn-sm btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1em"
					height="1em"
					class="h-7 w-7">
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
					</g>
				</svg>
			</button>
		{/if}
	</div>
{/snippet}
{#snippet errorA({ message, dismissible, id })}
	<div role="alert" class="alert alert-error">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		<span>{message}</span>
		{#if dismissible}
			<button
				onclick={() => msg.dismiss(id)}
				class="btn btn-ghost btn-sm btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1em"
					height="1em"
					class="h-7 w-7">
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
					</g>
				</svg>
			</button>
		{/if}
	</div>
{/snippet}
{#snippet successA({ message, dismissible, id })}
	<div role="alert" class="alert alert-success">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 shrink-0 stroke-current"
			fill="none"
			viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		<span>{message}</span>
		{#if dismissible}
			<button
				onclick={() => msg.dismiss(id)}
				class="btn btn-ghost btn-sm btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					width="1em"
					height="1em"
					class="h-7 w-7">
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
					</g>
				</svg>
			</button>
		{/if}
	</div>
{/snippet}
{#snippet promptA({ message, dismissible, id })}
	<div role="alert" class="alert alert-vertical sm:alert-horizontal">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			width="1em"
			height="1em"
			class="stroke-info h-7 w-7 shrink-0">
			<g>
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
			</g>
		</svg>
		<div>
			<h3 class="font-bold">Prompt</h3>
			<div class="text-xs">{message}</div>
		</div>
		<button class="btn btn-error btn-sm btn-soft">Deny</button>
		<button class="btn btn-info btn-sm btn-soft">OK</button>
	</div>
{/snippet}
