
      <!-- START OF FORM -->
      <form name="employmentForm" id="employmentform" action="wizardcomponents/employmenthandler.php"  method = "post">
        <!-- START OF EMPLOYMENT SECTION -->

          <fieldset>
            <legend>Employment/Volunteering</legend>
            <div class = "row">
              <div class="col-wholepage">
                <!-- SECTION HINT -->
                <p id="employmenthint">
                  Probably the most important part of your CV, previous jobs and volunteering roles are very important to you're future employers.
                  These tend to be the biggest part in which a future employer will judge you. Volunteering is often just as valuable as previous work
                  experience and can help get your foot in the door.<br/>(Always start with the most recent experience first)
                </p>
                <div id="employing">
                  <div class = "inputfields">
                    <h2>Position Title</h2>
                    <input type='text' name='employment_posn[]'>
					<h2>Organization</h2>
                    <input type='text' name='employment_orgnz[]'> <!-- MKH: Adds a new field "Organization" to the Employment section -->
                    <h2>City</h2>
                    <input type="text" name="employment_city[]">
                    <h2>Country</h2>
                    <input type="text" name="employment_country[]">
                    <h2>Start Date</h2>
                    <!-- MKH: Replace Start Date Input with two dropdowns for Start Month and Year -->
                    <select name="employment_start_month[]">    <!-- MKH: Allows Start Month to be selected between Jan to Dec. Default empty -->
                            <option value="" disabled selected>Month</option>
                            <option value="Jan">Janaury</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                    </select>
                    <select name="employment_start_year[]" class='year-dd'>     <!-- MKH: Allows Start Year to be selected between 1990 to 2050. Default Current Year -->
                    <script>document.write(years_2050_1990)</script> <!-- MKH: Option tags written dynamically from dyamicInput_validation.js variable -->
                    </select>
                    <h2>Do you still work here?</h2>
                    <input type="radio" name="still_work" value="yes"> Yes
                    <input type="radio" name="still_work" value="no"> No
                    <h2>End Date</h2>
                    <h3>(if answer was 'no' above)</h3>
                    <!-- MKH: Replace End Date Input with two dropdowns for End Month and Year -->
                    <select name="employment_end_month[]"> <!-- MKH: Allows End Month to be selected between Jan to Dec. Default empty -->
                            <option value="" disabled selected>Month</option>
                            <option value="Jan">Janaury</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                    </select>
                    <select name="employment_end_year[]" class='year-dd'> <!-- MKH: Allows End Year to be selected between 1990 to 2050. Default Current Year -->
                    <script>document.write(years_2050_1990)</script> <!-- MKH: Option tags written dynamically from dyamicInput_validation.js variable -->
                    </select>
                    <h2>Responsibilities</h2>
                    <textarea name="employment_responsibility[]" class = "largetextfield" cols="70" rows="7"></textarea>
                </div>
              </div>
                <input id = "addemp" type="button" class="btn btn-primary btn-outline btn-sm" value="Add another employment" onClick="addEmployInput('employing');">
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
