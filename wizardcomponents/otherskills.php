
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="otherskillsForm" id="otherskillsform" action="wizardcomponents/otherskillshandler.php"  method = "post">

        <legend>Other skills</legend>

        <div class = "row">
          <div class="col-wholepage">
            <div id="languages-container">

              <div id="languages">

                <h2>Languages </h2>

                <input type="text" name="lang[]" value="<?php if($fileexists == true && empty($lang[0]) == false){echo $lang[0];} ?>" required placeholder="French">
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

            <input type="button" class = "btn btn-primary" value="Add" onClick="addLanguageInput('languages');">
          </div>

          <h2>Driver's License</h2>
        <!-- HINT, we're leaving this one in. -->
        <p id="dlhint" class="general-helptext"> Having a drivers licence is very important, it can get you an interview over those who don't. If you don't, start the process <a  target = "_blank" href = "https://www.nzta.govt.nz/driver-licences/getting-a-licence/licences-by-vehicle-type/cars/"> here</a>.</p><br>
        <!-- MKH: Replaces text input for Driver's License with a dropdown selection -->
        <select name="drivers">
                <option value="None">None</option>
                <option value="Learners License">Learners</option>
                <option value="Restricted License">Restricted</option>
                <option value="Full License">Full</option>
        </select>
        <!-- MKH: Adds 'Vehicle Type' field to the form section -->
        <h2>Type of Vehicle allowed</h2>
        <input type="text" name="vehicle_type" placeholder="e.g. Car, Motorcycle, Heavy Vehicle, Bus, Taxi, Forklift etc">
          </div>
       </div>
      </form>
