<!--
		Description:
			This block of CV Builder code allows the user to fill out their Employment, Education and Extra-curricular history.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP
		Functionality:
			Presents an interactive form to the user to enter all mandatory and optional information,
		-->
		<div id = “outsideskills”>
  <head>

    <link rel="stylesheet" type="text/css" href="jquery-ui-1.12.1.custom/jquery-ui.css">
		<link rel="stylesheet" type="text/css" href="progressbar.css">

</head>
<body>

	<ul class="progressbar">
					<li>personal details</li>
					<li>about me</li>
					<li class="active">work & education</li>
					<li>referees</li>
	</ul>

<!-- Curriculum Vitae Heading -->
	<h1 align="center">Curriculum Vitae</h1>

	<!-- Form begins here -->
	<form name="myForm3" id="outsideskillform" action="wizardcomponents/outskillshandler.php"  method = "post" onsubmit="return validateForm3();">
	 <!-- Form employmenent subsection begins here -->
	 <fieldset>
	  <legend>Employment/Volunteering (Optional)</legend>
	  <!-- Hint -->
		<img id="employmenthelp" src="helpicon.png"/>
	  <span id="employmenthint" style="color:red;">Although this section is optional, it is probably the most important and the one that many employers will really judge you on. Part time jobs give  you have a range of skills and experience that you cannot learn at school. And if you can’t get a job in your area, volunteer! There are always opportunities to help others and demonstrate you have what it takes. Volunteering can often lead to work and it enables you to get important references.<br>(Always start with the most recent experience first)</span><br><br>
	  <div id="employing">
			<!-- Position Input -->
		    <strong>Position Title </strong><br><input type='text' name='employment_posn[]'><br><br>
			<!-- City Input -->
			<strong>City </strong><br><input type="text" name="employment_city[]"><br><br>
			<!-- Country Input -->
			<strong>Country </strong><br><input type="text" name="employment_country[]"><br><br>
			<!-- Start Date Input -->
			<strong>Start Date </strong><br><input class="datepicker" type="text" name="employment_start_date[]"><br><br>
			<!-- Sill work here? Radio button -->
			<strong>Still work here? </strong><br><input type="radio" name="still_work" value="yes"> Yes
			<input type="radio" name="still_work" value="no"> No<br><br>
			<!-- End Date Input -->
			<strong>End Date</strong> (if answer was 'no' above)<br><input class="datepicker" type="text" name="employment_end_date[]"><br><br>
			<!--  Responsiblities Textarea -->
			<strong>Responsiblities</strong><br>
			<textarea name="employment_responsibility" class = "largetextfield" cols="70" rows="7"></textarea>
	  </div>
	  <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another employment" onClick="addEmployInput('employing');">

	 <!-- Form education subsection begins here -->
	 </fieldset>
	 <fieldset>
	  <legend>Education History (COMPULSORY)</legend>
	  <!-- Hint -->
		<img id="educationhelp" src="helpicon.png"/>
	  <span id="educationhint" style="color:red;">NCEA is a very complicated system for many employers so try to make this section as easy as possible for them to understand. If you get an interview, it is a good idea to explain what you have achieved in simple terms. In fact, many employers don’t even understand Year 9-13 and will talk about 5th form and School Certificate, so be ready for it)<br>Always start with your most recent year of study</span><br><br>
	  <div id="education_hist">
			<!-- Year Input -->
		    <strong>Year </strong><br><input type='text' name='education_year[]' required><br><br>
			<!-- Achievements Textarea -->
			<strong>Achievements</strong><br>
			<textarea name="education_achievements[]" class = "largetextfield" cols="70" rows="7" required></textarea>
	  </div>
	  <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of study" onClick="addEducationInput('education_hist');">
	 </fieldset>


	 <!-- Form extracurricular subsection begins here -->
	 <fieldset>
	  <legend>Extracurricular (Optional)</legend>
	  <!-- Hint -->
		<img id="extracurrichelp" src="helpicon.png"/>
	  <span id="extracurrichint" style="color:red;">Involvement in sport, the arts and leadership opportunities shows you are motivated, keen and willing to commit. Having these on your CV is hugely important and sends a great message to any employer. Remember, it is not just things you do at school that count, things such as youth groups or coaching all count and help show you have huge potential as a employee.</span><br><br>
	  <div id="extracurricular_hist">
			<!-- Year Input -->
		    <strong>Year </strong><br><input type='text' name='extracurricular_year[]'><br><br>
			<!-- Achievements Textarea -->
			<strong>Achievements</strong><br>
			<textarea name="extracurricular_achievements[]" class = "largetextfield" cols="70" rows="7"></textarea>
	  </div>
	  <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of extracurricular achievements" onClick="addExtracurricularInput('extracurricular_hist');">
	 </fieldset>

	 <!-- Form submission button -->
	 <br><input type="submit" class="btn btn-primary btn-outline btn-sm" value="Save">
	</form>
	<!-- Form ends here -->

</div>



<script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
<script>
  $( ".datepicker" ).datepicker();
</script>