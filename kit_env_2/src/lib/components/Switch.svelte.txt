<script lang="ts">
	let { checked = $bindable(false), children, onChange } = $props()
</script>

<label>
	<input
		type="checkbox"
		bar-="line"
		bind:checked
		onchange={onChange}
		is-="switch" />
	{@render children?.()}
</label>

<style>
	@layer base, utils, components;
	@import '@webtui/css/components/switch.css';
</style>
