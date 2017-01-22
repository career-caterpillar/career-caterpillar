
      <!-- START OF PROGRESS BAR -->
      <!-- END OF PROGRESS BAR -->
      <!-- START OF FORM -->
      <form name="extracurricularForm" id="extracurricularform" action="wizardcomponents/extracurricularhandler.php"  method = "post" >

        <!-- START OF EXTRACURRICULAR SECTION -->

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
                 <h2>Year</h2>
                 <!-- MKH: Replaces single line input for Year with a Drop-down selection -->
                 <select name='extracurricular_year[]'>     <!-- MKH: Allows Year to be selected between 1990 to 2050. Default 2017 -->
                        <?php for ($i = 2050; $i >= 2018; $i--) : ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                        <?php endfor; ?>
                        <option value="2017" selected>2017</option>
                        <?php for ($i = 2016; $i >= 1990; $i--) : ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                        <?php endfor; ?>
                 </select>
                 <h2>Achievements</h2>
                 <textarea name="extracurricular_achievements[]" class = "largetextfield" cols="70" rows="7"></textarea>
               </div>
                 <input type="button" class="btn btn-primary btn-outline btn-sm" value="Add another year of extracurricular achievements" onClick="addExtracurricularInput('extracurricular_hist');">
            </div>

        </fieldset>

        <!-- END OF EXTRACURRICULAR SECTION -->


      </form>
      <!-- END OF FORM -->
    <script>
      $( ".datepicker" ).datepicker();
    </script>
    </div>
