<script lang="ts">
	let { children, isCenter, isRounded, isDark, isTight, title } = $props()
</script>

<div
	class="nes-container"
	class:is-rounded={isRounded}
	class:is-dark={isDark}
	class:is-centered={isCenter}
	class:with-title={title}
	class:is-tight={isTight}>
	{#if title}
		<p class="title">{title}</p>
	{/if}

	{@render children?.()}
</div>
