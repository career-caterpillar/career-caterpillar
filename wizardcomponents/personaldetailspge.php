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
                 <div class="row">
                   <div class="col-left">
                     <label>First Name<span class="redAsterisk">*</span></label>
                     <input type="text" name="first_name" value="<?php if($fileexists == true && empty($first_name) == false){echo $first_name;} ?>" required placeholder="John">
                   </div>
                   <div class="col-right">
                     <label>Last Name<span class="redAsterisk">*</span></label>
                     <input type="text" name="last_name" value="<?php if($fileexists == true && empty($last_name) == false){echo $last_name;} ?>" required placeholder="Smith">
                   </div>
                  </div>
                  <div class="row">
                    <div class="col-left">
                      <label>Street Number<span class="redAsterisk">*</span></label>
                      <input type="text" name="street_num" value="<?php if($fileexists == true && empty($street_num) == false){echo $street_num;} ?>" required placeholder="123">
                    </div>
                    <div class="col-right">
                      <label>Street Name<span class="redAsterisk">*</span></label>
                      <input type="text" name="street_add" value="<?php if($fileexists == true && empty($street_add) == false){echo $street_add;} ?>" required placeholder="Smith Road">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-left">
                      <label>Suburb<span class="redAsterisk">*</span></label>
                      <input type="text" name="suburb_add" value="<?php if($fileexists == true && empty($suburb_add) == false){echo $suburb_add;} ?>" required placeholder="Te Aro">
                    </div>
                    <div class="col-right">
                      <label>City<span class="redAsterisk">*</span></label>
                      <input type="text" name="city_add" value="<?php if($fileexists == true && empty($city_add) == false){echo $city_add;} ?>" required placeholder="Wellington">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-left">
                      <label>Phone</label>
                      <input type="text" name="phone" value="<?php if($fileexists == true && empty($phone) == false){echo $phone;} ?>" placeholder="04 MYHOMEPHONENUMBER"> <!-- MKH: Makes phone number not mandatory -->
                    </div>
                    <div class="col-right">
                      <label>Mobile<span class="redAsterisk">*</span></label>
                      <input type="text" name="mobile" value="<?php if($fileexists == true && empty($mobile) == false){echo $mobile;} ?>" required placeholder="021 MYMOBILE">
                    </div>
                   </div>
                   <div class="row">
                     <div class="col-left">
                       <label>School</label>
                        <input type="text" name="school_name" value="<?php if($fileexists == true && empty($school_name) == false){echo $school_name;} ?>" placeholder="My School"> <!-- MKH: Makes school field not mandatory -->
                     </div>
                    </div>
            </fieldset>
            <!--
            <br><input type="submit" value="Save" class="btn btn-primary btn-outline btn-sm">
          -->
        </form>
    </body>
</html>
