<!--
		Description:
			This block of CV Builder code allows the user to fill out their Personal Details.
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

<div id=”personaldetails”>

  <body>

    <ul class="progressbar">
            <li class="active">personal details</li>
            <li>about me</li>
            <li>work & education</li>
            <li>referees</li>
    </ul>

	<!-- Curriculum Vitae Heading -->
	<h1 align="center">Curriculum Vitae</h1>
	
	<?php
		$fileexists = false;
		if(file_exists("cvcontent/personaldetails.php")){
			$fileexists = true;
			include "cvcontent/personaldetails.php";
		}
	?>

	<!-- Form begins here -->
  <form name="myForm1" action="wizardcomponents/personaldetailspgehandler.php" method="post" id = "personaldetailsform" onsubmit="return validateForm1();">
	<!-- Form personal details subsection begins here -->
	  <fieldset>
	  <legend>Personal Details (COMPULSORY)</legend>

	  <!-- Name Input -->
	  <strong>Name </strong> <br><input type="text" name="name" value="<?php if($fileexists == true && empty($name) == false){echo $name;} ?>" required placeholder="Franco Frankenstein"><br><br>

	  <!-- Address Input -->
	  <strong>Address</strong><br>
	  Street Address: <br><input type="text" name="street_add" value="<?php if($fileexists == true && empty($street_add) == false){echo $street_add;} ?>" required placeholder="123 MyHome Ave"><br>
	  Suburb: <br><input type="text" name="suburb_add" value="<?php if($fileexists == true && empty($suburb_add) == false){echo $suburb_add;} ?>" required placeholder="Te Aro"><br>
	  City:  <br><input type="text" name="city_add" value="<?php if($fileexists == true && empty($city_add) == false){echo $city_add;} ?>" required placeholder="Wellington"><br><br>

	  <!-- Phone Input -->
	  <strong>Phone </strong><br><input type="text" name="phone" value="<?php if($fileexists == true && empty($phone) == false){echo $phone;} ?>" required placeholder="(04) MYHOMEPHONENUMBER"><br><br>

	  <!-- Mobile Input -->
	  <strong>Mobile </strong><br><input type="text" name="mobile" value="<?php if($fileexists == true && empty($mobile) == false){echo $mobile;} ?>" required placeholder="021 MYMOBILE"><br><br>

	  <!-- Email Input -->
	  <strong>Email </strong><br>
		<img id="emailhelp" src="helpicon.png"/>

	  <!-- Hint -->
	  <span id="emailhint" style="color:red;">Make sure you email address is professional e.g. not ilovetequila@hotmail.com. Try and make it your first name and last name if you can</span>

	  <br><input type="email" name="email" value="<?php if($fileexists == true && empty($email) == false){echo $email;} ?>" required placeholder="my.email@blueprint.co.nz"><br><br>

	  <!-- Languages Input -->
		  <div id="languages">
		    <strong>Languages </strong><br>
		    <input type="text" name="lang[]" value="<?php if($fileexists == true && empty($lang[0]) == false){echo $lang[0];} ?>" required placeholder="French"><br>
		    <?php
		    
		    if ($fileexists == true)	{
		    	if(empty($arrsizeLang)==false && $arrsizeLang>1){    	
		    
		    	for($i=1; $i < $arrsizeLang; $i++){ 
			    	if(empty($lang[$i]) == false){
			    		print	"<input type='text' value ='".  $lang[$i] . "' name='lang[]'><br>";
			    	}		    	 	
		    	}
		     }
		    }
		    ?>
		  </div>
		  <input type="button" class = "btn btn-primary btn-outline btn-sm" value="Add another language" onClick="addLanguageInput('languages');"><br><br>



	  <!-- Driver's License Input -->
	  <strong>Driver's License </strong><br>
		<img id="dlhelp" src="helpicon.png"/>
		<span id="dlhint" style="color:red;">Having a drivers licence is hugely important in many jobs, particularly the trades. If you don’t have one, start the process now. Having your learners just may get you the job</span>
	  <br><input type="text" name="drivers" value="<?php if($fileexists == true && empty($drivers) == false){echo $drivers;} ?>" required placeholder="Full License"><br><br>

	  <!-- School Input -->
	  <strong>School </strong><br>
		<img id="schoolhelp" src="helpicon.png"/>
	  <!-- Hint -->
	  <span id="schoolhint" style="color:red;">Why have your school? New Zealand is a very small place and it is very easy to make connections, having your school down on your CV is just one way to do this)</span>
	  <br><input type="text" name="school_name" value="<?php if($fileexists == true && empty($school_name) == false){echo $school_name;} ?>" required placeholder="My School"><br><br>
	</fieldset>
	<!-- Form submission button -->	 <br><input type="submit" value="Save" class="btn btn-primary btn-outline btn-sm">
	</form>
	<!-- Form ends here -->

</div>
