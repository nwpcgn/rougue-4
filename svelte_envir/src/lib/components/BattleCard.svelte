<script lang="ts">
	let current = $state(0)
</script>

<div class="nes-container with-title">
	<p class="title">Progress</p>
	<section class="nes-conten">
		<progress class="nes-progress" value="90" max="100"></progress>
		<progress class="nes-progress is-primary" value="80" max="100"></progress>
		<progress class="nes-progress is-success" value="50" max="100"></progress>
		<progress class="nes-progress is-warning" value="30" max="100"></progress>
		<progress class="nes-progress is-error" value="10" max="100"></progress>
		<progress class="nes-progress is-pattern" value="50" max="100"></progress>
	</section>
</div>
