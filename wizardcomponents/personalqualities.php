
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
<form name="personalQualitiesForm" id="personalqualitiesform" action="wizardcomponents/personalqualitieshandler.php"
		method="post" onsubmit="return validateForm4();">

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

</form>
	<!-- Form ends here -->
	<script>
		$( ".styledselect" ).selectmenu({
		icons: { button: "ui-icon-caret-1-s" };
		width: 200;
		});
	</script>
