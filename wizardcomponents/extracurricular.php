
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
            <div class="col-lg-8">
              <!-- SECTION HINT -->
              <img id="extracurrichelp" src="helpicon.png"/>
          	  <p id="extracurrichint" style="color:red; font-style:italic;">
                Involement in sport, the arts and leadership oppurtunites show you are motivated, and you can commit. Involvement in these
                 send great messages to your employer, so be sure to place them on your CV here.
               </p>
               <div id="extracurricular_hist">
                 <div class = "inputfields">
                   <h2>Year</h2>
                   <input type='text' name='extracurricular_year[]'>
                   <h2>Achievements</h2>
                   <textarea name="extracurricular_achievements[]" class = "largetextfield" cols="70" rows="7"></textarea>
                 </div>
                 <input id = "addxtracrr" type="button" class="btn btn-primary btn-outline btn-sm" value="Add Extracurricular Achievement" onClick="addExtracurricularInput('extracurricular_hist');">
              </div>
          </div>
        </fieldset>

        <!-- END OF EXTRACURRICULAR SECTION -->


      </form>
      <!-- END OF FORM -->
    <script>
      $( ".datepicker" ).datepicker();
    </script>
    </div>
