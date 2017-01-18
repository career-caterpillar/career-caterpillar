
      <!-- START OF FORM -->
      <form name="employmentForm" id="employmentform" action="wizardcomponents/employmenthandler.php"  method = "post">
        <!-- START OF EMPLOYMENT SECTION -->

          <fieldset>
            <legend>Employment/Volunteering</legend>
            <div class = "row">
              <div class="col-lg-8 col-lg-offset-2">
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
        <!-- END OF EMPLOYMENT SECTION -->
        <!-- START OF EDUCATION SECTION -->

      </form>
      <!-- END OF FORM -->
    <script>
      $( ".datepicker" ).datepicker();
    </script>
