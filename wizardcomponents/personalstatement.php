
	<!--
		Description:
			This block of CV Builder code allows the user to fill out their Personal Statement, Qualities and Achievements.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP/
		Functionality:
			Presents an interactive form to the user to enter all mandatory and optional information,
	-->
	<!-- Form begins here -->

	<form name="personalStatmentForm" id="personalstatementform" action="wizardcomponents/personalstatementhandler.php">
		<!-- Form personal statement subsection begins here -->
			<div id=“personalstatement” class=“optional”>
				<fieldset>
				<legend>Personal Statement (Optional)</legend>
					<div class = "row">
						<div class="col-lg-8 col-lg-offset-2">
							<img id="pshelp" src="helpicon.png" />
							<!-- Hint -->
							<p id="pshint" style="color: red; font-style:italic;">
								If you are not submitting a covering letter it is a good idea to write a personal statement that outlines your skills that are related to the job you are applying for,
								as well as future goals. Try to keep it brief, roughly 4-5 sentences. Most importantly, tell them what makes you different and special.
							</p><br>
							<textarea class="largetextfield" name="personal_statement" rows="7"  placeholder=""> </textarea>
						</div>
					</div>
				</fieldset>
			</div>
	</form>
