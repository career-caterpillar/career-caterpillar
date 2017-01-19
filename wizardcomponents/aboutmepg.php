
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
	<form name="myForm4" id="aboutmeform" action="wizardcomponents/aboutmepghandler.php"
		method="post" onsubmit="return validateForm4();">

		<!-- Form personal statement subsection begins here -->
	  <div id = "personalstatementsection">
			<div id=“personalstatement” class=“optional”>
				<fieldset>
				<legend>Personal Statement (Optional)</legend>
					<div class = "row">
						<div class="col-lg-8">
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
		</div>

	<div id = "personalqualitiessection">
		<!-- Form personal qual subsection begins here -->
		<div id=“personalqualities”>
			<fieldset>
				<legend>Personal Qualities (COMPULSORY)</legend>
					<!-- Hint -->
					<p id="pqhint" style="color:red;">Choose your top 6</p><br>

					<div class = "row">
						<div class="col-lg-8 col-lg-offset-2">
							<?php
							$qualities = file("files/Personal_Qualities.txt");
							for ($i = 1; $i <= 6; $i++) {
							echo "$i: <select name=\"qual$i\" class=\"styledselect\">";
							foreach ($qualities as $value) {
							echo "<option>$value</option>";
							}
							echo "</select><br>";
							}
							?>
						</div>
					</div>
			</fieldset>
		</div>
	</div>

		<!-- Form achievements subsection begins here -->
		<div id = "achievementssection">
			<div id=“achievements” class=“optional”>
				<fieldset>
					<legend>Achievements/Awards (Optional)</legend>
						<div class = "row">
							<div class="col-lg-8 col-lg-offset-2">
							<!-- Hint -->
								<img id="achievehelp" src="helpicon.png" />
								<p id="achievehint"style="color: red;font-style:italic;">
								This is all about highlighting the great things you have done whether at school or in your own time.
								Acheivements and awards help personalise your CV. Make sure they add to who you want to present to your employer, don't just put everything down.
								</p><br/>

								<div id="achievements_hist">
								<!-- Year Input -->
								<h2>Year </h2><br>
								<input type='text' name='achieve_year[]'> <br><br>
								<!-- Achievements Textarea -->
								<h2>Achievements</h2><br>
								<textarea class="largetextfield" name="awards_achievements[]" cols="70" rows="7"></textarea>
							</div>
							<input type="button" class="btn btn-outline" value="Add another year of achievements" onClick="addAchievementInput('achievements_hist');">
						</div>
					</div>
				</fieldset>
			</div>
		</div>

		<br>
	</form>
