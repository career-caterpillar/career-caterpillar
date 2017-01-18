
    <div id="outsideskills">
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="myForm3" id="outsideskillform" action="wizardcomponents/outskillshandler.php"  method = "post" onsubmit="return validateForm3();">
        <!-- START OF EMPLOYMENT SECTION -->

        <div id = "employmentsection">
          <fieldset>
            <legend>Employment/Volunteering (Optional)</legend>
            <div class = "row">
              <div class="col-lg-8">
                <!-- SECTION HINT -->
                <img id="employmenthelp" src="helpicon.png"/>
                <p id="employmenthint" style="color:red; font-style:italic;">
                  Probably the most important part of your CV, previous jobs and volunteering roles are very important to you're future employers.
                  These tend to be the biggest part in which a future employer will judge you. Volunteering is often just as valuable as previous work
                  experience and can help get your foot in the door.(Always start with the most recent experience first)
                </p>
                <div id="employing">
                    <h2>Position Title</h2>
                    <input type='text' name='employment_posn[]'>
                    <h2>City</h2>
                    <input type="text" name="employment_city[]">
                    <h2>Country</h2>
                    <input type="text" name="employment_country[]">
                    <h2>Start Date</h2>
                    <input class="datepicker" type="text" name="employment_start_date[]">
                    <h2>Do you still work here?</h2>
                    <input type="radio" name="still_work" value="yes"> Yes
                    <input type="radio" name="still_work" value="no"> No
                    <h2>End Date</h2>
                    <h3>(if answer was 'no' above)</h3>
                    <input class="datepicker" type="text" name="employment_end_date[]">
                    <h2>Responsibilities</h2>
                    <textarea name="employment_responsibility[]" class = "largetextfield" cols="70" rows="7"></textarea>
                </div>
                <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another employment" onClick="addEmployInput('employing');">
              </div>
            </div>
          </fieldset>
        </div>
        <!-- END OF EMPLOYMENT SECTION -->
        <!-- START OF EDUCATION SECTION -->

      <div id = "educationsection">
        <fieldset>
          <legend>Education History (COMPULSORY)</legend>
          <div class = "row">
            <div class="col-lg-8 col-lg-offset-2">
              <!-- SECTION HINT -->
              <img id="educationhelp" src="helpicon.png"/>
              <p id="educationhint" style="color:red; font-style:italic;">
                NCEA can be complicated for many employers to understand, so make sure you put your academic results in a format that
                will be easy for your future employers to understand.<br>Always start with your most recent year of study
              </p>

              <div id="education_hist">

                <h2>Year</h2>
                  <input type='text' name='education_year[]' required>
                  <h2>Achievements</h2>
                  <textarea name="education_achievements[]" class = "largetextfield" cols="70" rows="7" required></textarea>

              </div>
              <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of study" onClick="addEducationInput('education_hist');">
            </div>
          </div>
        </fieldset>
      </div>

        <!-- END OF EDUCATION SECTION -->
        <!-- START OF EXTRACURRICULAR SECTION -->


      <div id = "extracurricularsection">
        <fieldset>
          <legend>Extracurricular (Optional)</legend>
          <div class = "row">
            <div class="col-lg-8 col-lg-offset-2">
              <!-- SECTION HINT -->
              <img id="extracurrichelp" src="helpicon.png"/>
          	  <p id="extracurrichint" style="color:red; font-style:italic;">
                Involement in sport, the arts and leadership oppurtunites show you are motivated, and you can commit. Involvement in these
                 send great messages to your employer, so be sure to place them on your CV here.
               </p>
               <div id="extracurricular_hist">
                 <h2>Year</h2>
                 <input type='text' name='extracurricular_year[]'>
                 <h2>Achievements</h2>
                 <textarea name="extracurricular_achievements[]" class = "largetextfield" cols="70" rows="7"></textarea>
               </div>
                 <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of extracurricular achievements" onClick="addExtracurricularInput('extracurricular_hist');">
            </div>
          </div>
        </fieldset>
      </div>
        <!-- END OF EXTRACURRICULAR SECTION -->

        <!-- OTHER SKILLS -->
        <div id = "otherskills">

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

       </div> <!-- otherskills -->

      </form>
      <!-- END OF FORM -->
    </div>
    <script>
      $( ".datepicker" ).datepicker();
    </script>
