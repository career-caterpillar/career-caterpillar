
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="educationForm" id="educationform" action="wizardcomponents/educationhandler.php"  method = "post" onsubmit="return validateForm3();">

        <!-- START OF EDUCATION SECTION -->

        <fieldset>
          <legend>Education History</legend>
          <div class = "row">
            <div class="col-lg-8">
              <!-- SECTION HINT -->
              <img id="educationhelp" src="helpicon.png"/>
              <p id="educationhint" style="color:red; font-style:italic;">
                NCEA can be complicated for many employers to understand, so make sure you put your academic results in a format that
                will be easy for your future employers to understand.<br>Always start with your most recent year of study
              </p>

              <div id="education_hist">

                <h2>Year<span class="redAsterisk">*</span></h2>
                  <input type='text' name='education_year[]' required>
                  <h2>Achievements<span class="redAsterisk">*</span></h2>
                  <textarea name="education_achievements[]" class = "largetextfield" cols="70" rows="7" required></textarea>

              </div>
              <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of study" onClick="addEducationInput('education_hist');">
            </div>
          </div>
        </fieldset>

        <!-- END OF EDUCATION SECTION -->
        <!-- START OF EXTRACURRICULAR SECTION -->

      </form>
      <!-- END OF FORM -->
    <script>
      $( ".datepicker" ).datepicker();
    </script>