<script lang="ts">
	import { fade, fly } from 'svelte/transition'
</script>

<section
	class="fixed inset-0 flex items-center justify-center bg-slate-900"
	transition:fade={{ duration: 400 }}>
	<div class="p-8" in:fly={{ y: 200, duration: 500, delay: 400 }}>
		<div class="spinner"></div>
	</div>
</section>

<style>
	.spinner {
		position: relative;
		width: 72px;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spinner::before,
	.spinner::after {
		border: 8.6px solid #ff00bb;
		border-radius: 50%;
		position: absolute;
		content: '';
		display: block;
	}

	.spinner::before {
		width: 43.2px;
		height: 43.2px;
		border-bottom-color: transparent;
		border-left-color: transparent;
		animation: spinner-1o3y8q 0.75s infinite linear reverse;
	}

	.spinner::after {
		animation: spinner-1o3y8q 0.5s infinite linear;
		height: 72px;
		width: 72px;
		border-right-color: transparent;
		border-top-color: transparent;
	}

	@keyframes spinner-1o3y8q {
		to {
			transform: rotate(360deg);
		}
	}
</style>
