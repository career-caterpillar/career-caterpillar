<html>
    <head>
        <link rel="stylesheet" type="text/css" href="progressbar.css">
    </head>
    <body>
        <div id=”personaldetails”>
        </div>
        <?php
    		$fileexists = false;
    		if(file_exists("cvcontent/personaldetails.php")){
    			$fileexists = true;
    			include "cvcontent/personaldetails.php";
    		}
    	?>
        <!-- Form begins here -->
        <form name="myForm1" id = "personaldetailsform" action="wizardcomponents/personaldetailspgehandler.php" method="post"  onsubmit="return validateForm1();">
            <!-- Form personal details subsection begins here -->
            <fieldset>
                 <legend>Personal Details</legend>
                 <div class = "row">
                     <div class="col-lg-8">
                         <h3><span class="redAsterisk">*</span>Indicates required field.</h3>
                         <h2>Name<span class="redAsterisk">*</span></h2>

                         <input type="text" name="name" value="<?php if($fileexists == true && empty($name) == false){echo $name;} ?>" required placeholder="Franco Frankenstein">
                         <h2>Address</h2>
                         <h3>Street Address<span class="redAsterisk">*</span></h3>
                         <input type="text" name="street_add" value="<?php if($fileexists == true && empty($street_add) == false){echo $street_add;} ?>" required placeholder="123 MyHome Ave">
                         <h3>Suburb<span class="redAsterisk">*</span></h3>
                         <input type="text" name="suburb_add" value="<?php if($fileexists == true && empty($suburb_add) == false){echo $suburb_add;} ?>" required placeholder="Te Aro">
                         <h3>City<span class="redAsterisk">*</span></h3>
                         <input type="text" name="city_add" value="<?php if($fileexists == true && empty($city_add) == false){echo $city_add;} ?>" required placeholder="Wellington">
                         <!-- Only one phone number should be required. Need to come up with a way to signify this -->
                         <h2>Phone<span class="redAsterisk">*</span></h2>
                         <input type="text" name="phone" value="<?php if($fileexists == true && empty($phone) == false){echo $phone;} ?>" required placeholder="(04) MYHOMEPHONENUMBER">
                         <h2>Mobile<span class="redAsterisk">*</span></h2>
                         <input type="text" name="mobile" value="<?php if($fileexists == true && empty($mobile) == false){echo $mobile;} ?>" required placeholder="021 MYMOBILE">
                         <h2>Email<span class="redAsterisk">*</span></h2>
                          <!-- Hint -->
                         <img id="emailhelp" src="helpicon.png"/>
                         <p id="emailhint" style="color:red; font-style: italic;">Make sure you choose an email address that is professional, not ilovetequila@hotmail.com. If possible, create one that contains both your first and last names </p>
                         <input type="email" name="email" value="<?php if($fileexists == true && empty($email) == false){echo $email;} ?>" required placeholder="my.email@blueprint.co.nz">


                         <h2>School<span class="redAsterisk">*</span></h2>
                         <!-- HINT -->
                         <img id="schoolhelp" src="helpicon.png"/>
                         <p id="schoolhint" style="color:red; font-style:italic;"> New Zealand is a very small place and it is very easy to make connections, having your school down on your CV is just one way to do this</p>
                         <input type="text" name="school_name" value="<?php if($fileexists == true && empty($school_name) == false){echo $school_name;} ?>" required placeholder="My School">


                     </div>
                 </div>
            </fieldset>
            <!--
            <br><input type="submit" value="Save" class="btn btn-primary btn-outline btn-sm">
          -->
        </form>
    </body>
</html>
