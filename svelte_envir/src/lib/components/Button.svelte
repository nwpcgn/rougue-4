<script lang="ts">
	let current = $state(0)
</script>

<div class="nes-container with-title">
	<p class="title">Button</p>
	<nav class="nes-bar">
		<span class="nes-text is-primary">Primary</span>
		<span class="nes-text is-success">Success</span>
		<span class="nes-text is-warning">Warning</span>
		<span class="nes-text is-error">Error</span>
		<span class="nes-text is-disabled">Disabled</span>
	</nav>
	<nav class="nes-bar">
		<a class="nes-btn" href="#">Normal</a>
		<button type="button" class="nes-btn is-primary">Primary</button>
		<button type="button" class="nes-btn is-success">Success</button>
		<button type="button" class="nes-btn is-warning">Warning</button>
		<button type="button" class="nes-btn is-error">Error</button>
		<button type="button" class="nes-btn is-disabled">Disabled</button>
		<label class="nes-btn">
			<span>Select your file</span>
			<input type="file" />
		</label>
	</nav>
</div>
