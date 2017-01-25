	<!--
		Description:
			This block of CV Builder code allows the user to fill out their Referees.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP
		Functionality:
			Presents an interactive form to the user to enter all mandatory and optional information,
	-->

<div id = “referees”>

	<!-- Form begins here -->
	<form name="myForm2" id = "refereeform" action="wizardcomponents/refhandler.php" method = "post" onsubmit="return validateForm2();">
		<!-- Form referees subsection begins here -->
		<fieldset>
			<legend>Referees</legend>
				<div class = "row">
					<div class="col-wholepage">
						<!-- Hint -->
						<p id="refereeshint">Ensure you contact your referees before you put them in your CV. You cannot use family here, ask people that know you well, and will represent you the best for the job you are applying for. Ensure you put your manager from your latest job here first, and then others that represent you following that.</p>
						<div id="referee_list">

							<div class = "inputfields">
							<h2>Referee</h2>
							<!--Name Input -->
							<h3>Name<span class="redAsterisk">*</span></h3>
							<input type='text' name='referee_name[]' required>
							<!--Company Input -->
							<h3>Company</h3> <!-- MKH: Updates referee Company to be non-mandatory -->
							<input type='text' name='referee_company[]'>
							<!--Position Input -->
							<h3>Position<span class="redAsterisk">*</span></h3>
							<input type='text' name='referee_position[]' required>
							<!--Email Input -->
							<h3>Email<span class="redAsterisk">*</span></h3>
							<input type='text' name='referee_email[]' required>
							<!--Phone Input -->
							<h3>Phone<span class="redAsterisk">*</span></h3>
							<input type='text' name='referee_phone[]' required>
						</div>
						</div>
						<input id = "refsclick" type="button" class="btn btn-primary btn-outline btn-sm" value="Add another referee" onClick="addRefereeInput('referee_list');">
					</div>
				</div>
		</fieldset>

	</form>
	<!-- Form ends here -->
</div>
