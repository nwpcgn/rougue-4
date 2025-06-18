<script lang="ts">
	let { children, icon, title, footer, ...rest } = $props()
</script>

<section class="wrapper">
	<div box-="square" shear-="top">
		<div class="header">
			<span is-="badge" variant-="background0">{title}</span>
			<span is-="badge" variant-="background0">{@render iconT(icon)}</span>
		</div>
		<div class="box-content">
			<div>
				{@render children?.()}
			</div>
			<div class="foo-bar">
				{@render footer?.()}
			</div>
		</div>
	</div>
</section>

{#snippet fooBar()}
	<div class="foo-bar">
		<button box-="round">Cancel</button>
		<button box-="round">Ok</button>
	</div>
{/snippet}

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}

<style>
	@layer base, utils, components;
	@import '@webtui/css/base.css';
	@import '@webtui/css/utils/box.css';
	/*@import '@webtui/css/components/button.css'; */
	/* 	@import '@webtui/css/components/typography.css'; */

	.header {
		display: flex;
		justify-content: space-between;
		--fs: 38px;
		span {
			background-color: var(--background0);
			padding: 0 1ch;
		}
	}

	.box-content {
		padding: 1lh 3ch;
		padding-top: 1lh;
		display: flex;
		flex-direction: column;
		gap: 1lh;
	}
	.foo-bar {
		display: flex;
		justify-content: flex-end;
		gap: 0ch;
	}

	.wrapper {
		background-color: var(--background0);
		padding: 1lh 2ch;
		border-radius: 16px;
	}
</style>
