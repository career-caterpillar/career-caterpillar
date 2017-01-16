<!-- @author Mukesh Harichand
	 Email = harichmuke@myvuw.ac.nz -->
<!--
		Description:
			This block of CV Builder code allows the user to fill out their Personal Statement, Qualities and Achievements.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP
		Functionality:
			Presents an interactive form to the user to enter all mandatory and optional information,
		-->
<head>
  <link rel="stylesheet" type="text/css" href="progressbar.css">
</head>

<div id=”aboutme”>

	<div id=“personalstatement” class=“optional”></div>
	<div id=“personalqualities”>

  	<body>

      <ul class="progressbar">
              <li>personal details</li>
              <li class="active">about me</li>
              <li>work & education</li>
              <li>referees</li>
      </ul>

	<!-- Curriculum Vitae Heading -->
	<h1 align="center">Curriculum Vitae</h1>
	
	<!-- Form begins here -->
	
	<form name="myForm4" id="aboutmeform" action="wizardcomponents/aboutmepghandler.php"
		method="post" onsubmit="return validateForm4();">
		<!-- Form personal statement subsection begins here -->
		<fieldset>
			<legend>Personal Statement (Optional)</legend>
			<img id="pshelp" src="helpicon.png" />
			<!-- Hint -->
			<span id="pshint" style="color: red;">If you are not submitting a
				covering letter it is a good idea to write a personal statement that
				outlines some of your skills and future goals. Try to keep it
				reasonably brief, roughly 4-5 sentences. Most importantly, tell them
				what makes you different and special.</span><br>
			<textarea class="largetextfield" name="personal_statement"  cols="70"
				rows="7"  placeholder=""> </textarea>


	 </fieldset>
	 <!-- Form personal qual subsection begins here -->
 	 <fieldset>
	  <legend>Personal Qualities (COMPULSORY)</legend>
	  <!-- Hint -->
	  <span id="pqhint" style="color:red;">Choose your top 6</span><br>

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

	  	 </fieldset>

		<!-- Form achievements subsection begins here -->
		<fieldset>
			<legend>Achievements/Awards (Optional)</legend>
			<!-- Hint -->
			<img id="achievehelp" src="helpicon.png" /> <span id="achievehint"
				style="color: red;">This is all about highlighting the great things
				you have done whether at school or in your own time. We recommend
				you add achievements and awards to your CV as soon as you get them.</span><br />
			<div id="achievements_hist">
				<!-- Year Input -->
				<strong>Year </strong><br>
				<input type='text' name='achieve_year[]'><br>
				<br>
				<!-- Achievements Textarea -->
				<strong>Achievements</strong><br>
				<textarea class="largetextfield" name="awards_achievements[]"
					cols="70" rows="7"></textarea>
			</div>
			<input type="button" class="btn btn-outline"
				value="Add another year of achievements"
				onClick="addAchievementInput('achievements_hist');">
		</fieldset>
		<!-- Form submission button -->
		<br>
		<input type="submit" value="Save" class="btn btn-primary btn-sm">
	</form>
	<!-- Form ends here -->

	</div>
	<div id=“achievements” class=“optional”></div>


	<script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
	<script>
      $( ".styledselect" ).selectmenu({
        icons: { button: "ui-icon-caret-1-s" };
        width: 200;
      });
	</script>
	</div>