
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="educationForm" id="educationform" action="wizardcomponents/educationhandler.php"  method = "post" onsubmit="return validateForm3();">

        <!-- START OF EDUCATION SECTION -->

        <fieldset>
          <legend>Education History</legend>
          <div class = "row">
            <div class="col-wholepage">

              <div id="education_hist">
              <div class = "inputfields">
                <h2>Year<span class="redAsterisk">*</span></h2>
                 <!-- MKH: Replaces single line input for Year with a Drop-down selection -->
                 <select name='education_year[]'>     <!-- MKH: Allows Year to be selected between 1990 to 2050. Default 2017 -->
                        <?php for ($i = 2050; $i >= 2018; $i--) : ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                        <?php endfor; ?>
                        <option value="2017" selected>2017</option>
                        <?php for ($i = 2016; $i >= 1990; $i--) : ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                        <?php endfor; ?>
                 </select>

                  <h2>Achievements<span class="redAsterisk">*</span></h2>

                  <textarea name="education_achievements[]" class = "largetextfield" cols="70" rows="7" required title="NCEA can be complicated for many employers to understand, so make sure you put your academic results in a format that will be easy for your future employers to understand. Always start with your most recent year of study."></textarea>

              </div>
              </div>
              <input id ="addedu" type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of study" onClick="addEducationInput('education_hist');">
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
