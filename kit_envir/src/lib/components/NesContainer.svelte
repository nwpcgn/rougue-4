<script lang="ts">
	let { children, isCenter, isRounded, isDark, title } = $props();
</script>

<div
	class="nes-container"
	class:is-rounded={isRounded}
	class:is-dark={isDark}
	class:is-centered={isCenter}
	class:with-title={title}
>
	{#if title}
		<p class="title">{title}</p>
	{/if}

	{@render children?.()}
</div>
