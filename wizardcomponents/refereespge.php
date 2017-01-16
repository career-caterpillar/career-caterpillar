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
<head>
	<link rel="stylesheet" type="text/css" href="progressbar.css">
</head>

<div id = “referees”>

	<ul class="progressbar">
					<li>personal details</li>
					<li>about me</li>
					<li>work & education</li>
					<li class="active">referees</li>
	</ul>

<!-- Curriculum Vitae Heading -->
	<h1 align="center">Curriculum Vitae</h1>

	<!-- Form begins here -->
	<form name="myForm2" id = "refereeform" action="wizardcomponents/refhandler.php" method = "post" onsubmit="return validateForm2();">
	
	 <!-- Form referees subsection begins here -->
	 <fieldset>
	  <legend>Referees (COMPULSORY)</legend>
	  <!-- Hint -->
    <img id="refereeshelp" src="helpicon.png"/>
	  <span id="refereeshint" style="color:red;">You MUST always ask your referees for permission and let them know what jobs you are applying for before you put them on your CV. Don’t use family, because let’s face it they are always going to say something nice. Also, try to use people that have seen you across a range of different situations and use skills the the job is looking for..</span><br><br>
	  <div id="referee_list">
			<strong>Referee [1]</strong><br><br>
			<!--Name Input -->
		    Name<br><input type='text' name='referee_name[]' required><br>
			<!--Position Input -->
			Position <br><input type='text' name='referee_position[]' required><br>
			<!--Email Input -->
			Email <br><input type='text' name='referee_email[]' required><br>
			<!--Phone Input -->
			Phone <br><input type='text' name='referee_phone[]' required><br>
	  </div>
	  <br><input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another referee" onClick="addRefereeInput('referee_list');">
	 </fieldset>
	 <!-- Form submission button -->
	 <br><input type="submit" class="btn btn-primary btn-outline btn-sm" value="Save">
	</form>
	<!-- Form ends here -->

</div>
