
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
					<span id="pqhint" style="color:red;">Select up to 6 of the following that best describe you. Hover over each for a description.</span><br>

			  	  	<div class = "row">
			  	    	<div class="col-lg-8 col-lg-offset-2">

			              	<?php

			                      $qualities = file("files/Personal_Qualities.txt"); //Load in the qualities as an array of lines from the server-side file.


			                      $cols = 4; //This is the number of vertical columns you want to divide the checkboxes into.
			                      echo "<div class=\"QualitiesFlex\">"; //Construct an outer div.
			                      for ($j = 0; $j < $cols; $j++) { //For each column.
			                          echo "<div class=\"FlexColumn\">"; //Construct a div for it.
			                          for ($i = 0; $i < sizeof($qualities); $i++) { //Go through the list of qualities.
			                              if ($i % $cols == $j) { //If the index of this quality has a remainder equal to this column's index, we include it in this column.
			                                  $val = $qualities[$i]; //val is the full quality string, label and description.
			                                  $valShort = explode(":", $val)[0]; //Take the text before the semicolon in the quality string, treat that as the label.
			                                  echo "<label title = \"$val\"><input value=\"$val\" name=\"qualities[]\" type=\"checkbox\"/>$valShort</label>"; //Add a labeled checkbox into the column.
			                              }
			                          }
			                          echo "</div>";
			                      }
			                      echo "</div>";
			              	?>

			                  <script>
			                      var $maxChoices = 6; //Change this number to allow selection of more personal qualities.
			                      $('.QualitiesFlex :checkbox').change(function () { //Add a function to the change action of the checkboxes in the Qualties section.
			                          var $cs = $(this).closest('.QualitiesFlex').find(':checkbox:checked'); //A variable containing each qualities checkbox that is checked
			                          var $qualflex = $(this).closest('.QualitiesFlex');
			                          if ($cs.length >= $maxChoices) { //If, with this change, enough checkboxes are selected to reach the max number of choices...
			                              $qualflex.find(':checkbox:not(:checked)').prop('disabled', true); //Disable all the unselected checkboxes, so no more can be added.
			                              $qualflex.find(':checkbox:not(:checked)').parent().addClass('disabledText'); //'Disable' the text label attached to the checkbox (style it grey, italic).
			                          } else { //Otherwise, there are less than the maximum number of choices made, so...
			                              $qualflex.find(':checkbox').prop('disabled', false); //Make sure all the checkboxes are enabled and can be selected.
			                              $qualflex.find('label').removeClass('disabledText'); //'Enable' all the text as well.
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
