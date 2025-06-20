<script lang="ts">
	let { children, label = 'Box', isOpen = $bindable(false) } = $props()
</script>

<details bind:open={isOpen}>
	<summary>{label}</summary>
	{@render children?.()}
</details>

<style>
	details {
		summary {
			font-weight: var(--font-weight-bold);
			cursor: pointer;

			&::marker {
				color: var(--foreground2);
				content: '\2193  ';
				margin-right: 1ch;
			}

			&:hover,
			&:focus {
				background-color: var(--background1);
			}
		}

		&[open] {
			summary {
				&::marker {
					content: '\2191  ';
				}
			}
		}
	}

	details[open] a.hidden,
	details.hidden,
	.hidden {
		display: none;
	}
</style>
