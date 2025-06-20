<script lang="ts">
	import Details from './Details.svelte'
	import { mainMenu } from '$lib'
	let { children, currentPath, isClose = $bindable(false) } = $props()
</script>

<aside class="sidebar" style="--sb-width: {isClose ? '0ch' : '30ch'};">
	<nav box-="square" shear-="top" id="sidebar">
		<div id="category-container">
			<div id="category-list">
				<Details label="Main Navigation" isOpen>
					<ul>
						{#each mainMenu as { name, href, icon } (href)}
							<li>
								<a href="#{href}" class:active={currentPath === href}>
									{@render iconT(icon)}
									<span>{name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</Details>
			</div>
		</div>
		<div id="sidebar-nav-container">
			{@render children?.()}
		</div>
	</nav>
</aside>
{#snippet iconT(name)}
	<svg class="nwp-icon" style="--fs: 16px;"
		><use xlink:href="#{name}"></use></svg>
{/snippet}

<style>
	.sidebar > nav {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		width: var(--sb-width);

		&:focus-within {
			--box-border-color: var(--foreground2);
		}

		#category-container {
			position: relative;
			flex-grow: 1;
			margin-top: 1lh;
		}

		#category-list {
			position: absolute;
			inset: 0;
			display: flex;
			flex-direction: column;
			gap: 1lh;
			padding: 0 1ch;
			overflow-y: auto;
		}
	}

	ul a[href] {
		color: var(--foreground2);
		text-decoration: none;
		outline: none;
		cursor: pointer;

		&::before {
			content: '├ ';
		}

		&:last-of-type::before {
			content: '└ ';
		}

		&.active {
			color: var(--foreground0);
			text-decoration: none;
			font-weight: var(--font-weight-bold);
			background-color: var(--background1);
		}

		&:focus {
			background-color: var(--background1);
		}
	}
</style>
