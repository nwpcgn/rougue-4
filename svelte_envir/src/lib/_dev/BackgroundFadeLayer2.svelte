<script lang="ts">
	interface Props {
		show?: boolean
		children?: import('svelte').Snippet
	}

	let { show = false, children }: Props = $props()
</script>

<div class="test-background {show ? 'show' : ''}">
	{@render children?.()}
</div>

<style>
	.test-background {
		flex: 1;
		position: relative;
		overflow: hidden;
	}

	.test-background::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('https://i.imgur.com/1hI2DPi.jpeg');
		background-size: cover;
		background-position: 50% 50%;
		z-index: -1;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.5s ease;
		animation: drift 12s ease-in-out infinite;
	}

	.test-background.show::before {
		opacity: 1;
	}

	@keyframes drift {
		0% {
			background-position: 50% 50%;
		}
		25% {
			background-position: 52% 48%;
		}
		50% {
			background-position: 48% 52%;
		}
		75% {
			background-position: 51% 49%;
		}
		100% {
			background-position: 50% 50%;
		}
	}
</style>
