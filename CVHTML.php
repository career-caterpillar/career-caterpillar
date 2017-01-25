<body>
	<div id="cvpage">

		<!-- Add personal contacts to the top of the CV -->
		<div id="cvheader">
			<?php if(file_exists("cvcontent/personaldetails.php")){
							include "cvcontent/personaldetails.php"; ?>
							<h4>PERSONAL DETAILS</h4>
							<div id="name">
								<h1> <?php echo $first_name." ".$last_name?> </h1>
							</div>
							<div id="details">
								<div id="individual">
									<street> <?php echo $street_num . " " . $street_add; ?> </street>
									<suburb> <?php echo $suburb_add ?> </suburb>
									<city> <?php echo $city_add; ?> </city>
									<school> <?php echo $school_name; ?> </school>
									<email> <?php echo $email; ?> </email>
									<phone>	<?php	if(empty($phone) == false){ echo $phone; } ?> </phone>
									<mobile>	<?php	echo  $mobile; ?> </mobile>
								</div>
								<p> <?php echo $street_num . " ".$street_add . ", " . $suburb_add . ", " . $city_add . "  |  " . $school_name . "  |  " . $email . "  |  ";
													if(empty($phone) ==  false) {echo $phone . "  |  ";}
													echo $mobile; ?> </p> <!-- MKH: Transfers Email details  to CV pdf. Identified missing duirng regression testing 24/1/2017 -->
							</div>
			<?php	} ?>
		</div>

		<!-- CV content -->

		<div id="restofcontent">
			<div id="personalstatement">
				<?php if(file_exists("cvcontent/personalstatementdata.php")){
								include "cvcontent/personalstatementdata.php";
								if ((sizeof($personal_statement) >= 1)) { // Check to see if there is a personal statement ?>
									<h4 align="left">PERSONAL STATEMENT</h4>
										<ul>
											<li> <?php echo $personal_statement;
								} ?>
											</li> <!-- Add statment to CV-->
										</ul>
				<?php } ?>
			</div>


			<div id="personalqualities">
				<?php if(file_exists("cvcontent/personalqualitiesdata.php")){
									include "cvcontent/personalqualitiesdata.php"; ?>
									<h4>PERSONAL QUALITIES</h4>
									<!-- list personal qualities -->
									<ul>
										<?php for ($i = 0; $i < count($qualities); $i++) { ?>
										<li> <?php echo $qualities[$i]; ?> </li>
										<?php } ?>
									</ul>
				<?php } ?>
			</div>

			<div id="employmentDetails">
				<?php if(file_exists("cvcontent/employmentdata.php")){
								include "cvcontent/employmentdata.php";
								$employment_posn_empty = empty ( $employment_posn [0] );
								$employment_orgnz_empty = empty ( $employment_orgnz [0] ); /** MKH: Adds a new field "Organization" to the Employment section **/
								$employment_city_empty = empty ( $employment_city [0] );
								$employment_country_empty = empty ( $employment_country [0] );
								$employment_start_date_empty = empty ( $employment_start_month [0] ) || empty ( $employment_start_year [0] ); /* MKH: Replaces start date with the start month and start year */
								$employment_end_date_empty = empty ( $employment_end_month [0] ) || empty ( $employment_end_year [0] ); /* MKH: Replaces end date with the end month and end year */
								$employment_responsibility_empty = empty ( $employment_responsibility [0] );

								/* if the user has entered employment details then this section to CV else leave it blank */
								if ($employment_posn_empty == false &&
										$employment_city_empty == false &&
										$employment_country_empty == false &&
										$employment_start_date_empty == false &&
										$employment_responsibility_empty == false) { ?>
											<h4 align="left">EMPLOYMENT/VOLUNTEERING</h4> <?php

									for($i = 0; $i < $arrsizeEmp; $i ++) {
										$employment_posn_empty = empty ( $employment_posn [$i] );
										$employment_orgnz_empty = empty ( $employment_orgnz [$i] );  /** MKH: Adds a new field "Organization" to the Employment section **/
										$employment_city_empty = empty ( $employment_city [$i] );
										$employment_country_empty = empty ( $employment_country [$i] );
										$employment_start_date_empty = empty ( $employment_start_month [$i] ) || empty ( $employment_start_year [$i] ); /* MKH: Replaces start date with the start month and start year */
										$employment_end_date_empty = empty ( $employment_end_month [$i] ) || empty ( $employment_end_year [$i] ); /* MKH: Replaces end date with the end month and end year */
										$employment_responsibility_empty = empty ( $employment_responsibility [$i] );
										echo '<ul>';
											/*Only add if all of the feilds are false*/
											if ($employment_posn_empty == false &&
													$employment_city_empty == false &&
													$employment_country_empty == false &&
													$employment_start_date_empty == false &&
													$employment_responsibility_empty == false) {
														/*Add tabulated work details to CV*/ ?>
														<li>
															<?php echo $employment_start_month [$i].' '.$employment_start_year [$i]; ?>
															<?php if ($employment_end_date_empty == false) {echo " - ".$employment_end_month [$i].' '.$employment_end_year [$i]; }?>
														</li>
														<li id="employmentdetail">
															<?php echo $employment_posn[$i];
															 if($employment_orgnz_empty == false) { echo ": ". $employment_orgnz[$i]; }
															 echo ", " . $employment_city [$i] . ", " . $employment_country [$i]; ?>
															<?php echo " <br><br> " . "Roles and Responsibilities: " . " <br>" ?>
															<li id="employmentresponsibility"> <?php echo $employment_responsibility [$i];?> </li>
														</li> <?php
											}
										echo '</ul>';
									}
								}
							}
							?>
			</div>

			<div id="otherskills">
				<?php if(file_exists("cvcontent/otherskillsdata.php")){
								include "cvcontent/otherskillsdata.php"; ?>
								<h4>OTHER SKILLS</h4>
								<ul>
									<li><strong>Language(s) </strong> </li><?php
											//create list of other skills in the CV
											for($i = 0; $i < $arrsizeLang; $i ++) {
												if($i == 0){
													echo "<li id='language'>";
												}
												if(empty($lang[$i])==false){
													echo $lang[$i];
												}
												if($i < ($arrsizeLang - 1)){
													echo ",";
												}
											}
											echo "</li>";	?>

									<li><strong>Driver's licence </strong> <?php echo "<li id='driverslicence'>" . $drivers; ?>
									<?php if ($drivers !== 'None') {
													if(empty($vehicle_type) == false) {?>
															<?php echo "( Vehicle Type: " . $vehicle_type . " )</li>";
													}
												} ?>
									</li>
								</ul>
				<?php } ?>
			</div>

			<div id="educationHistory">
				<?php if(file_exists("cvcontent/educationdata.php")){
								include "cvcontent/educationdata.php"; ?>
								<h4 align="left">EDUCATION HISTORY</h4>
								<?php
								//create list of education history in the CV
								for($i = 0; $i < $arrsizeEdu; $i ++) {
									if (trim($education_year[$i] ) !== "" && trim($education_achievements[$i]) !== "") {?>
										<ul>
											<li> <?php echo $education_year [$i]; ?> </li>
											<li id="educationachievement"> <?php echo $education_achievements [$i]; ?> </li>
										</ul>
									<?php }
								}
							} ?>
			</div>

			<div id="achievementsandawards">
				<?php if(file_exists("cvcontent/achievementsdata.php")){
								include "cvcontent/achievementsdata.php";
								if (empty ( $achieve_year [0] ) == false && empty ( $awards_achievements [0] == false )) { ?>
									<h4 align="left">ACHIEVEMENTS/AWARDS</h4> <?php
									echo ' <ul> ';
									//create list of achievements in the CV
										for($i = 0; $i < $arrsizeYear; $i ++) {
											if (empty ( $achieve_year [$i] ) == false && empty ( $awards_achievements [$i] == false )) {
												echo '<li>' . $achieve_year [$i] . '</li>';
												echo '<li id="awardsachievements">' . $awards_achievements [$i] . '</li>';
											}
											echo '<br/>';
										}
									echo ' </ul>';
								}
							} ?>
			</div>

			<div id="extracurricularDetails">
				<?php if(file_exists("cvcontent/extracurriculardata.php")){
								include "cvcontent/extracurriculardata.php";
								if ((sizeof($extracurricular_achievements) > 1)) { // KC change to 1 to avoid printing input to pdf?>
									<h4 align="left">EXTRACURRICULAR DETAILS</h4>
									<?php
									echo ' <ul> ';
									//create list of extracurricular details in the CV
									for($i = 1; $i < $arrsizeExt; $i ++) {//KC change to 1 to avoid printing input to pdf
										if (empty ( $extracurricular_year [$i] ) == false && empty ( $extracurricular_achievements [$i] == false )) {
											echo '<li>Year: ' . $extracurricular_year [$i] . '</li>';
											echo '<li>Acheivements: <br>  ' . $extracurricular_achievements [$i] . '</li>';
										}
									}
									echo ' </ul> ';
								}
							} ?>
			</div>

			<div id="referees">
				<?php if(file_exists("cvcontent/refs.php")){
								include "cvcontent/refs.php"; ?>
								<h4 align="left">REFEREES</h4>
								<?php
								//create list of referees in the CV
								for ($i = 0; $i < $arrsizeRefs; $i++){
									echo ' <ul> ';
									echo '<li><strong>' . $referee_name[$i] .  '</strong></li>';
									echo '<li id="refereeposition">' . $referee_position[$i];
									if(trim($referee_company[$i])!=="") { //MKH: Transfers referee company to CV pdf only if input entered
										echo ": " . $referee_company[$i] ;
									}
									echo '</li>';
									echo '<li id="refereeemail">Email: ' . $referee_email[$i] .  '</li>';
									echo '<li id="refereephone">Phone: ' . $referee_phone[$i]  .  '</li>';
									echo ' </ul> ';
								}
							} ?>
			</div>
		</div>
	</div>
</body>
