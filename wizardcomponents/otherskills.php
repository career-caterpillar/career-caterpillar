
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="otherskillsForm" id="otherskillsform" action="wizardcomponents/otherskillshandler.php"  method = "post">

        <legend>Other skills(Optional)</legend>

        <div class = "row">
          <div class="col-lg-8 col-lg-offset-2">

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

        <input type="button" class = "btn btn-primary btn-outline btn-sm" value="Add another language" onClick="addLanguageInput('languages');">

        <h2>Driver's License</h2>

        <!-- HINT -->
        <img id="dlhelp" src="helpicon.png"/>
        <p id="dlhint" style="color:red;font-style:italic;"> Having a drivers licence is very important, it can get you an interview over those who don't. If you dont start the process <a  target = "_blank" href = "https://www.nzta.govt.nz/driver-licences/getting-a-licence/licences-by-vehicle-type/cars/"> here </a></p>
        <input type="text" name="drivers" value="<?php if($fileexists == true && empty($drivers) == false){echo $drivers;} ?>" required placeholder="Full License">

          </div>
       </div>
      </form>
    <script>
      $( ".datepicker" ).datepicker();
    </script>
