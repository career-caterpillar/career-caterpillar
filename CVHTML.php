<head>
	<link rel="stylesheet" type="text/css" href="CVHTML.css">
</head>
<body>

	<div id="cvpage">

		<?php

		$personaldetailsexist = false;
		$refsexist = false;
		$personalstatementexist = false;
		$personalqualitiesdataexist  = false;
		$achievementsexist = false;
		$employmentexist = false;
		$educationexist = false;
		$extraexist = false;
		$otherskillsexist = false;

                /*

		This section of code checks to see if submitted form data is available before including it in the
		CV

                */
		if(file_exists("cvcontent/personaldetails.php")){
			$personaldetailsexist = true;
			include "cvcontent/personaldetails.php";
		}

		if(file_exists("cvcontent/refs.php")){
			$refsexist = true;
			include "cvcontent/refs.php";
		}

		if(file_exists("cvcontent/personalstatementdata.php")){
			$personalstatementexist  = true;
			include "cvcontent/personalstatementdata.php";
		}

		if(file_exists("cvcontent/personalqualitiesdata.php")){
			$personalqualitiesdataexist  = true;
			include "cvcontent/personalqualitiesdata.php";
		}

		if(file_exists("cvcontent/achievementsdata.php")){
			$achievementsexist = true;
			include "cvcontent/achievementsdata.php";
		}

		if(file_exists("cvcontent/employmentdata.php")){
			$employmentexist = true;
			include "cvcontent/employmentdata.php";
		}

		if(file_exists("cvcontent/educationdata.php")){
			$educationexist = true;
			include "cvcontent/educationdata.php";
		}

		if(file_exists("cvcontent/extracurriculardata.php")){
			$extraexist = true;
			include "cvcontent/extracurriculardata.php";
		}

		if(file_exists("cvcontent/otherskillsdata.php")){
			$otherskillsexist = true;
			include "cvcontent/otherskillsdata.php";
		}


		if ($personaldetailsexist == false ||
		$refsexist == false ||
		$personalstatementexist == false||
		$personalqualitiesdataexist  == false||
		$achievementsexist == false||
		$educationexist == false||
		$extraexist == false ||
		$otherskillsexist == false){
			echo "<br>SAVE THE CV CONTENT <br></br>";
			return;
		}

		?>

		<!-- Add personal contacts to the top of the CV -->

		<div id="cvheader">
			<div id="name">
				<h1> <?php echo $name?> </h1>
			</div>
			<div id="details">
				<p><?php echo $street_add . ", " . $suburb_add . ", " . $city_add . "  |  " . $school_name . "  |  " . $email . "  |  " . $phone . "  |  " . $mobile; ?></p>
			</div>
		</div>

		<!-- CV content -->

		<div id="restofcontent">

			<div id="personalstatement">

					<?php
					if (empty ( $personal_statement ) == false) { // Check to see if there is a personal statement
					?>

					<h4 align="left">PERSONAL STATEMENT</h4>
					<ul>
						<li> <?php echo $personal_statement; } ?></li> <!-- Add statment to CV-->
					</ul>
			</div>
			<div id="personalqualities">

				<h4>PERSONAL QUALITIES</h4>

                <!-- list personal qualities -->

				<ul>
					<li><?php echo $qual1 ?></li>
					<li><?php echo $qual2 ?> </li>
					<li><?php echo $qual3 ?> </li>
					<li><?php echo $qual4 ?> </li>
					<li><?php echo $qual5 ?> </li>
					<li><?php echo $qual6 ?> </li>
				</ul>
			</div>

		<div id="employmentDetails">

        <?php
            	$employment_posn_empty = empty ( $employment_posn [0] );
            	$employment_city_empty = empty ( $employment_city [0] );
              $employment_country_empty = empty ( $employment_country [0] );
            	$employment_start_date_empty = empty ( $employment_start_date [0] );
              $employment_end_date_empty = empty ( $employment_end_date [0] );
              $employment_responsibility_empty = empty ( $employment_responsibility [0] );

               /* if the user has entered employment details then this section to CV else leave it blank */

              if ($employment_posn_empty == false &&


									$employment_city_empty == false &&
									$employment_country_empty == false &&
									$employment_start_date_empty == false &&
									$employment_end_date_empty == false &&
									$employment_responsibility_empty == false) {
        ?>

      	<h4 align="left">EMPLOYMENT/VOLUNTEERING</h4>

				<?php
              }
              for($i = 0; $i < $arrsizeEmp; $i ++) {

                  $employment_posn_empty = empty ( $employment_posn [$i] );
                  $employment_city_empty = empty ( $employment_city [$i] );
                  $employment_country_empty = empty ( $employment_country [$i] );
                  $employment_start_date_empty = empty ( $employment_start_date [$i] );
                  $employment_end_date_empty = empty ( $employment_end_date [$i] );
                  $employment_responsibility_empty = empty ( $employment_responsibility [$i] );

                  echo '<ul>';

                  /*Only add table if all of the feilds are false*/

                  if ($employment_posn_empty == false &&
										$employment_city_empty == false &&
										$employment_country_empty == false &&
										$employment_start_date_empty == false &&
										$employment_end_date_empty == false &&
										$employment_responsibility_empty == false) {

                 /*Add tabulated work details to CV*/

        ?>
                  <table>
                        <tr><td style="width=30%">Position Title </td> <td style="width=3%"> : </td> <td style="width=66%"><?php echo $employment_posn[$i];?> </td></tr>
                        <tr><td style="width=30%">City </td> <td style="width=3%"> : </td> <td style="width=66%"> <?php echo $employment_city [$i];?> </td></tr>
                        <tr><td style="width=30%">Country </td><td style="width=3%"> : </td> <td style="width=66%"> <?php echo $employment_country [$i];?>  </td></tr>
                        <tr><td style="width=30%">Start Date </td><td style="width=3%"> : </td><td style="width=66%"> <?php echo $employment_start_date [$i];?>  </td></tr>
                        <tr><td style="width=30%">End Date </td><td style="width=3%"> : </td><td style="width=66%"><?php  echo $employment_end_date [$i];?> </td></tr>
                        <tr><td style="width=30%">Responsibility </td><td style="width=3%"> : </td><td style="width=66%"><?php  echo $employment_responsibility [$i];?>  </td></tr>
                  </table>
				<?php
                  }
                  echo '</ul>';
              }

        ?>
    </div>


		<div id="otherskills">
				<h4>OTHER SKILLS</h4>
					<ul>
						<li><strong>Languages: </strong>
			<?php
						echo '<ul>';
						//create list of other skills in the CV
						for($i = 0; $i < $arrsizeLang; $i ++) {
							if(empty($lang[$i])==false){
								echo '<li>' . $lang[$i] . '</li>';
							}
						}

						echo '</ul>';
			?>
						</li>
						<br/>

						<li><strong>Driver's licence: </strong><?php echo $drivers;?> </li>

					</ul>
	</div>


	<div id="educationHistory">

			<h4 align="left">EDUCATION HISTORY</h4>
				<?php

				//create list of education history in the CV

				for($i = 0; $i < $arrsizeEdu; $i ++) {
					echo ' <ul> ';
					echo '<li><strong>' . $education_year [$i] . '</strong></li>';
					echo '<li>Achievements: <br> ' . $education_achievements [$i] . '</li>';
					echo ' </ul> ';
				}

				?>

	</div>

	<div id="achievementsandawards">
				<?php
				if (empty ( $achieve_year [0] ) == false && empty ( $awards_achievements [0] == false )) {
					?>
						<h4 align="left">ACHIEVEMENTS/AWARDS</h4> <?php
					echo ' <ul> ';
					//create list of achievements in the CV
					for($i = 0; $i < $arrsizeYear; $i ++) {
						if (empty ( $achieve_year [$i] ) == false && empty ( $awards_achievements [$i] == false )) {
							echo '<li>' . $achieve_year [$i] . '</li>';
							echo '<li>Achievments: <br> ' . $awards_achievements [$i] . '</li>';
						}
					}
					echo ' </ul> ';
				}
				?>
	</div>

	<div id="extracurricularDetails">
			<?php
			if (empty ( $extracurricular_year [0] ) == false && empty ( $extracurricular_achievements [0] == false )) {?>
				<h4 align="left">EXTRACURRICULAR DETAILS</h4>
				<?php
				echo ' <ul> ';

				//create list of extracurricular details in the CV

				for($i = 0; $i < $arrsizeExt; $i ++) {
					if (empty ( $extracurricular_year [$i] ) == false && empty ( $extracurricular_achievements [$i] == false )) {
						echo '<li>Year: ' . $extracurricular_year [$i] . '</li>';
						echo '<li>Acheivements: <br>  ' . $extracurricular_achievements [$i] . '</li>';
					}
				}
				echo ' </ul> ';
			}
			?>
	</div>

	<div id="referees">

		<h4 align="left">REFEREES</h4>

			<?php

				//create list of referees in the CV

				for ($i = 0; $i < $arrsizeRefs; $i++){

				echo ' <ul> ';
				echo '<li><strong>' . $referee_name[$i] .  '</strong></li>';
				echo '<li>Position: ' . $referee_position[$i]  .  '</li>';
				echo '<li>Email: ' . $referee_email[$i] .  '</li>';
				echo '<li>Phone: ' . $referee_phone[$i]  .  '</li>';
				echo ' </ul> ';
				echo ' <br> ';

				}

			?>
	  </div>

	</div>

	</div>
</body>
