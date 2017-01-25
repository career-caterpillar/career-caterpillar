
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
				<legend>Personal Qualities<span class="redAsterisk">*</span></legend>
					<!-- Hint -->
					<span id="pqhint">Select 3 to 6 of the following that best describe you. Hover over each option for a description.</span><br>

			  	  	<div class = "row">
			  	    	<div class="col-wholepage">

			              	<?php

			                      $qualities = file("files/Personal_Qualities.txt"); //Load in the qualities as an array of lines from the server-side file.


			                      $cols = 3; //This is the number of vertical columns you want to divide the checkboxes into.
			                      echo "<div class=\"QualitiesContainer\">"; //Construct an outer div.
			                          for ($i = 0; $i < sizeof($qualities); $i++) { //Go through the list of qualities.
			                              if ($i % $cols == 0) { //If the index of this quality has a remainder equal to this column's index, we include it in this column.
																			echo "<div class=\"QualitiesFlex\">";
																		}
			                                  $val = $qualities[$i]; //val is the full quality string, label and description.
			                                  $valShort = explode(":", $val)[0]; //Take the text before the semicolon in the quality string, treat that as the label.
			                                  echo "<label title = \"$val\"><input value=\"$val\" name=\"qualities[]\" type=\"checkbox\"/>$valShort</label>"; //Add a labeled checkbox into the column.

																		if ($i % $cols == $cols-1) {
																			echo "</div>";
																		}
			                      }
														echo "</div>";
			              	?>

											<style>
											.QualitiesFlex {
												-webkit-columns: <?php echo $cols ?>;
											  -moz-columns: <?php echo $cols ?>;
											  columns: <?php echo $cols ?>;
											}
											</style>

			                  <script>
			                      var $maxChoices = 6; //Change this number to allow selection of more personal qualities.
			                      $('.QualitiesContainer :checkbox').change(function () { //Add a function to the change action of the checkboxes in the Qualties section.
			                          var $cs = $(this).closest('.QualitiesContainer').find(':checkbox:checked'); //A variable containing each qualities checkbox that is checked
			                          var $qualcontainer = $(this).closest('.QualitiesContainer');
			                          if ($cs.length >= $maxChoices) { //If, with this change, enough checkboxes are selected to reach the max number of choices...
			                              $qualcontainer.find(':checkbox:not(:checked)').prop('disabled', true); //Disable all the unselected checkboxes, so no more can be added.
			                              $qualcontainer.find(':checkbox:not(:checked)').parent().addClass('disabledText'); //'Disable' the text label attached to the checkbox (style it grey, italic).
			                          } else { //Otherwise, there are less than the maximum number of choices made, so...
			                              $qualcontainer.find(':checkbox').prop('disabled', false); //Make sure all the checkboxes are enabled and can be selected.
			                              $qualcontainer.find('label').removeClass('disabledText'); //'Enable' all the text as well.
			                          }
			                      });
			                  </script>

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
