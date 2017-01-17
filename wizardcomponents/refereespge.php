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
			<legend>Referees (COMPULSORY)</legend>
				<div class = "row">
					<div class="col-lg-8 col-lg-offset-2">
						<!-- Hint -->
						<img id="refereeshelp" src="helpicon.png"/>
						<p id="refereeshint" style="color:red; font-style:italic;">Ensure you contact your referees before you put them in your CV. You cannot use family here, ask people that know you well, and will represent you the best for the job you are applying for. Ensure you put your manager from your latest job here first, and then others that represent you following that</p><br><br>
						<div id="referee_list">
							<h2>Referee [1]</h2>
							<!--Name Input -->
							<h3>Name</h3>
							<input type='text' name='referee_name[]' required>
							<!--Position Input -->
							<h3>Position</h3>
							<input type='text' name='referee_position[]' required>
							<!--Email Input -->
							<h3>Email</h3>
							<input type='text' name='referee_email[]' required>
							<!--Phone Input -->
							<h3>Phone</h3>
							<input type='text' name='referee_phone[]' required>
						</div>
						<input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another referee" onClick="addRefereeInput('referee_list');">
					</div>
				</div>
		</fieldset>

	</form>
	<!-- Form ends here -->
</div>
