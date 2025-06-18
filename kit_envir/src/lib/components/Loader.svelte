<script>
	import { fly, fade } from 'svelte/transition'
	let { children, type = 'a' } = $props()
	const loader = {
		a: 'loader--1',
		b: 'loader--2',
		c: 'loader--3',
		d: 'loader--8'
	}
</script>

<section data-layout="app" in:fade>
	<div in:fly={{ duration: 900, y: 300, delay: 200 }}>
		<span class={loader[type]}></span>

		{#if children}
			<span class="user-text">{@render children?.()}</span>
		{/if}
		<span class="spinner">
			<span class="loader--4"></span>
		</span>
	</div>
</section>

<style>
	@reference "../../app.css";
	section {
		--loading-font-size: 72px;
		--loader-color: var(--foreground0, #222);
		--loader-dura: 1000ms;
		--loader-bg-sec: var(--rpg-bg-200);

		flex: 1;
		display: grid;
		place-content: center;
		font-family: 'Fira Mono', monospace;
		font-size: var(--loading-font-size);
		div {
			@apply animate-duration-[1500ms] animate-ease-in-out flex animate-bounce flex-col items-center gap-12;
		}
		.spinner {
			width: 50px;
			aspect-ratio: 1/1;
			border-radius: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--rpg-bg-200);
			font-size: 30px;
		}
	}

	.loader--1:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim1 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim1 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--2:before {
		content: '';
		color: var(--loader-color);
		animation: anim2 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--3:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim3 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim3 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--4:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim4 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim4 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--5:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim5 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim5 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--6:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim6 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim6 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--7:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim7 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim7 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}
	.loader--8:before {
		content: '';
		color: var(--loader-color);
		-webkit-animation: anim8 var(--loader-dura, 1000ms) steps(1, end) infinite;
		animation: anim8 var(--loader-dura, 1000ms) steps(1, end) infinite;
	}

	.user-text {
		font-size: 14px;
		letter-spacing: 1ch;
		animation: lettering 2s infinite;
	}
	@keyframes lettering {
		0%,
		100% {
			letter-spacing: 0ch;
		}
		50% {
			letter-spacing: 1ch;
		}
	}

	@keyframes anim1 {
		0%,
		100% {
			content: '[----]';
		}
		20% {
			content: '[=---]';
		}
		40% {
			content: '[-=--]';
		}
		60% {
			content: '[--=-]';
		}
		80% {
			content: '[---=]';
		}
	}
	@keyframes anim2 {
		0%,
		100% {
			content: '{/////}';
		}
		20% {
			content: '{~////}';
		}
		40% {
			content: '{/~///}';
		}
		60% {
			content: '{//~//}';
		}
		80% {
			content: '{////~}';
		}
	}
	@keyframes anim3 {
		0%,
		100% {
			content: '(●)';
		}
		50% {
			content: '(⚬)';
		}
	}
	@keyframes anim4 {
		0%,
		100% {
			content: '↑';
		}
		12.5% {
			content: '↗';
		}
		25% {
			content: '→';
		}
		37.5% {
			content: '↘';
		}
		50% {
			content: '↓';
		}
		62.5% {
			content: '↙';
		}
		75% {
			content: '←';
		}
		87.5% {
			content: '↖';
		}
	}
	@keyframes anim5 {
		0%,
		100% {
			content: '⊏';
		}
		25% {
			content: '⊓';
		}
		50% {
			content: '⊐';
		}
		75% {
			content: '⊔';
		}
	}
	@keyframes anim6 {
		0%,
		100% {
			content: '×';
		}
		50% {
			content: '+';
		}
	}
	@keyframes anim7 {
		0%,
		100% {
			content: '☰';
		}
		16.6666666667% {
			content: '☱';
		}
		33.3333333333% {
			content: '☳';
		}
		50% {
			content: '☷';
		}
		66.6666666667% {
			content: '☶';
		}
		83.3333333333% {
			content: '☴';
		}
	}
	@keyframes anim8 {
		0%,
		100% {
			content: '𓃉𓃉𓃉';
		}
		16.6666666667% {
			content: '𓃉𓃉∘';
		}
		33.3333333333% {
			content: '𓃉∘°';
		}
		50% {
			content: '∘°∘';
		}
		66.6666666667% {
			content: '°∘𓃉';
		}
		83.3333333333% {
			content: '∘𓃉𓃉';
		}
	}
</style>
