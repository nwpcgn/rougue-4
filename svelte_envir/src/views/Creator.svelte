<script lang="ts">
</script>

<div class="nes-container with-title">
	<p class="title">Form</p>
	<fieldset class="nes-conten nes-fieldset">
		<div>
			<label>
				<input
					type="radio"
					class="nes-radio"
					name="answer"
					checked="checked" /><span>Yes</span>
			</label>
			<label>
				<input type="radio" class="nes-radio" name="answer" /><span>No</span>
			</label>
		</div>
		<div>
			<label>
				<input type="checkbox" class="nes-checkbox" checked /><span
					>Enable</span>
			</label>
		</div>
		<div class="nes-field">
			<label for="textarea_field">Textarea</label>
			<textarea id="textarea_field" class="nes-textarea"></textarea>
		</div>
		<div class="nes-field">
			<label for="name_field">Your name</label>
			<input type="text" id="name_field" class="nes-input" />
		</div>
		<div class="nes-field">
			<label for="name_field">Your name</label>
			<input type="text" id="name_field" class="nes-input" />
		</div>
		<div class="nes-field">
			<label for="default_select">Default select</label>
			<div class="nes-select">
				<select required id="default_select">
					<option value="" disabled selected hidden>Select...</option>
					<option value="0">To be</option>
					<option value="1">Not to be</option>
				</select>
			</div>
		</div>
	</fieldset>
</div>
