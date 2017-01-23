
	<!--
		Description:
			This block of CV Builder code allows the user to fill out their Personal Statement, Qualities and Achievements.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP/
		Functionality:
			Presents an interactive form to the user to enter all mandatory and optional information,
	-->

	<!-- Form begins here -->
	<form name="achievementsForm" id="achievementsform" action="wizardcomponents/achievementshandler.php" method="post">

		<!-- Form achievements subsection begins here -->

			<div id=“achievements” class=“optional”>
				<fieldset>
					<legend>Achievements & Awards</legend>
						<div class = "row">
							<div class="col-wholepage">
							<!-- Hint -->
								<img id="achievehelp" src="helpicon.png" />
								<p id="achievehint"style="color: red;font-style:italic;">
								This is all about highlighting the great things you have done whether at school or in your own time.
								Acheivements and awards help personalise your CV. Make sure they add to who you want to present to your employer, don't just put everything down.
								</p><br/>

								<div id="achievements_hist">
								<!-- Year Input -->
								<h2>Year </h2>
                                                                <!-- MKH: Replaces single line input for Year with a Drop-down selection -->
                                                                <select name='achieve_year[]'>     <!-- MKH: Allows Year to be selected between 1990 to 2050. Default 2017 -->
                                                                        <?php for ($i = 2050; $i >= 2018; $i--) : ?>
                                                                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                                                        <?php endfor; ?>
                                                                        <option value="2017" selected>2017</option>
                                                                        <?php for ($i = 2016; $i >= 1990; $i--) : ?>
                                                                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                                                        <?php endfor; ?>
                                                                </select>
								<!-- Achievements Textarea -->
								<h2>Achievements</h2><br>
								<textarea class="largetextfield" name="awards_achievements[]" cols="70" rows="7"></textarea>
							</div>
							<input type="button" class="btn btn-outline" value="Add another year of achievements" onClick="addAchievementInput('achievements_hist');">
						</div>
					</div>
				</fieldset>
			</div>

	</form>
	<!-- Form ends here -->
