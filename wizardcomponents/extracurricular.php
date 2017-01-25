
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="extracurricularForm" id="extracurricularform" action="wizardcomponents/extracurricularhandler.php"  method = "post" >

        <!-- START OF EXTRACURRICULAR SECTION -->

        <!-- Kahu- I'm re-coding this section for edit/delete functionality test-->

        <!--changes:
        wrap input and text area in div to make consistant with appened children
        move input outside of extracurricular_hist to make  children.length accurate
        changed value to Add Extracurricular Achievement
       -->

        <fieldset>
          <legend>Extracurricular</legend>
          <div class = "row">
            <div class="col-wholepage">
               <div id="extracurricular_hist">
                 <div class = "inputfields">
                   <h2>Year</h2>
                   <!-- MKH: Replaces single line input for Year with a Drop-down selection -->
                   <select name='extracurricular_year[]' class='year-dd'>     <!-- MKH: Allows Year to be selected between 1990 to 2050. Default Current Year -->
                   <script>document.write(years_2050_1990)</script> <!-- MKH: Option tags written dynamically from dyamicInput_validation.js variable -->
                   </select>
                   <h2>Achievements</h2>
                   <textarea name="extracurricular_achievements[]" class = "largetextfield" cols="70" rows="7" title="Involement in sport, the arts and leadership oppurtunites show you are motivated, and you can commit. Involvement in these send great messages to your employer, so be sure to place them on your CV here."></textarea>
                 </div>
               </div>
                 <input id="addxtracrr" type="button" class="btn btn-primary" value="Add" onClick="addExtracurricularInput('extracurricular_hist');">
            </div>
        </fieldset>
        <!-- END OF EXTRACURRICULAR SECTION -->
      </form>
      <!-- END OF FORM -->
    <script>
      $( ".datepicker" ).datepicker();
    </script>
    </div>
