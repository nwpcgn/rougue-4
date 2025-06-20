<script lang="ts">
	import ConfigBox from './ConfigBox.svelte'

	import { mainMenu } from '$lib'
	import { game } from '$lib/game.svelte.ts'
	let { children, currentPath, isClose = $bindable(false) } = $props()
</script>

<aside class="sidebar" style="--sb-width: 30ch;">
	<nav box-="square" shear-="top" id="sidebar">
		<div id="category-container">
			<div id="category-list">
				<details open>
					<summary>Main Navigation</summary>
					<ul>
						{#each mainMenu as { name, href, icon }}
							<li>
								<a href="#{href}" class:active={currentPath === href}>
									{@render iconT(icon)}
									<span>{name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</details>
				<details open>
					<summary>Map Settings</summary>
					<ConfigBox></ConfigBox>
				</details>
			</div>
		</div>
		<div id="sidebar-vim-nav-container">
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

	details {
		summary {
			font-weight: var(--font-weight-bold);
			cursor: row-resize;
			&::marker {
				color: var(--foreground2);
				content: '\2193 ';
			}

			&:hover,
			&:focus {
				background-color: var(--background1);
			}
		}

		&[open] {
			summary {
				&::marker {
					content: '\2191 ';
				}
			}
		}
	}

	details[open] a.hidden,
	details.hidden,
	.hidden {
		display: none;
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
