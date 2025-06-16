<script lang="ts">
	let { text = 'Loading' } = $props()
</script>

<section class="page active nwp">
	<section class="load-splash">
		<div class="load-el">
			<span class="load-label">{text}</span>
		</div>
	</section>
</section>

<style>
	:root {
		--color-neutral: oklch(0% 0 0);
		--color-neutral-content: oklch(100% 0 0);
	}

	.load-splash {
		flex: 1;
		background-color: var(--color-neutral);
		color: var(--color-neutral-content);
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		overflow: hidden;
		display: grid;
		place-content: center;
		animation: 2.5s cubic-bezier(0.25, 1, 0.3, 1) circle-in-center both;
		z-index: 200;
	}
	.load-el {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: var(--color-neutral-content);
	}
	.load-label {
		font-size: 2rem;
		letter-spacing: 5px;
		text-transform: uppercase;
		line-height: 100%;
		position: relative;
		mix-blend-mode: difference;
	}
	.load-el::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100px;
		height: 100%;
		background-color: var(--color-neutral-content);
		animation: move 3s linear infinite;
		z-index: -1;
	}
	@keyframes move {
		0%,
		100% {
			left: 0;
		}
		50% {
			left: calc(100% - 100px);
		}
	}
</style>
