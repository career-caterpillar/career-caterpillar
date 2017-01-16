		<?php
		$personaldetailsexist = false;
		$outskillsexist = false;
		$refsexist = false;
		$aboutmeexist = false;
		
		if(file_exists("cvcontent/personaldetails.php")){
			$personaldetailsexist = true;
			include "cvcontent/personaldetails.php";
		}
		if(file_exists("cvcontent/outskills.php")){
			$outskillsexist = true;
			include "cvcontent/outskills.php";
		}
		if(file_exists("cvcontent/refs.php")){
			$refsexist = true;
			include "cvcontent/refs.php";
		}
		if(file_exists("cvcontent/aboutme.php")){
			$aboutmeexist = true;
			include "cvcontent/aboutme.php";
		} 
		
		if ($personaldetailsexist == false || $outskillsexist == false || $refsexist == false || $aboutmeexist == false){
			echo "<br>UNSAVED CV CONTENT";			 
			if ($personaldetailsexist == false){
				echo "<br> - Save personal details";
			}
			if ($outskillsexist == false){
				echo "<br> - Save work and education";
			}
			if ($refsexist == false ){
				echo "<br> - Save referees";
			}
			if ($aboutmeexist == false){
				echo "<br> - Save about me";
			}
			return;
		} 
		?>
		
		
		
		<div id="cv_heading">
		<br>
		<h1 align="center">Curriculum Vitae</h1>
	</div>

	<div id="personalDetails">
		<h4 align="left">PERSONAL DETAILS</h4>
				<?php
				/*
				 * <style>
				 * table{
				 * border-spacing: 20px;
				 * }
				 * td {
				 * padding: 1px;
				 * }
				 *
				 * </style>
				 * <table style="width=100%">
				 * <tr> <td style='width=30%'>Name </td> <td style='width=69%'> <?php echo $name;?> </td></tr>
				 * <tr> <td style="width=30%">Street </td> <td style='width=69%'> <?php echo $street_add?> </td></tr>
				 * <tr> <td style="width=30%">Suburb </td> <td style='width=69%'> <?php echo $suburb_add;?> </td></tr>
				 * <tr> <td style="width=30%">City </td> <td style='width=69%'> <?php echo $city_add;?> </td></tr>
				 * <tr> <td style="width=30%">Phone </td> <td style='width=69%'> <?php echo $phone;?> </td></tr>
				 * <tr> <td style="width=30%">Mobile </td> <td style='width=69%'> <?php echo $mobile;?> </td></tr>
				 * <tr> <td style="width=30%">E-mail </td> <td style='width=69%'> <?php echo $e_mail;?> </td></tr>
				 * <tr> <td style="width=30%">Language </td> <td style='width=69%'> <?php foreach ( $languages as &$val){ echo $val.",";} ?> </td></tr>
				 * <tr> <td style="width=30%">Driver's licence </td> <td style='width=69%'> <?php echo $drivers_licence;?> </td></tr>
				 * <tr> <td style="width=30%">School name </td> <td style='width=69%'> <?php echo $school_name;?> </td></tr>
				 * </table>
				 */
				?>
					
				<ul>
			<li>Name: <?php echo $name;?> </li>
			<li>Street: <?php echo $street_add?></li>
			<li>Suburb: <?php echo $suburb_add;?> </li>
			<li>City: <?php echo $city_add;?> </li>
			<li>Phone: <?php echo $phone;?> </li>
			<li>Mobile: <?php echo $mobile;?> </li>
			<li>E-mail: <?php echo $email;?> </li>

			<li>Languages: <?php
			echo '<ul>';
			for($i = 0; $i < $arrsizeLang; $i ++) {
				if(empty($lang[$i])==false){
					echo '<li>' . $lang[$i] . '</li>';
				}				
			}
			echo '</ul>';
			?></li>

			<li>Driver's licence: <?php echo $drivers;?> </li>
			<li>School name: <?php echo $school_name;?> </li>

		</ul>
	</div>

	<div id="personalstatement">
			<?php
			if (empty ( $personal_statement ) == false) {
				?>
			<h4 align="left">PERSONAL STATEMENT</h4>
		<p> <?php echo $personal_statement; } ?> 
	</div>

	<div id="employmentDetails">
		
			<?php
			$employment_posn_empty = empty ( $employment_posn [0] );
			$employment_city_empty = empty ( $employment_city [0] );
			$employment_country_empty = empty ( $employment_country [0] );
			$employment_start_date_empty = empty ( $employment_start_date [0] );
			$employment_end_date_empty = empty ( $employment_end_date [0] );
			$employment_responsibility_empty = empty ( $employment_responsibility [0] );
			
			if ($employment_posn_empty == false && $employment_city_empty == false && $employment_country_empty == false && $employment_start_date_empty == false && $employment_end_date_empty == false && $employment_responsibility_empty == false) {
				?> 
				
				<h4 align="left">EMPLOYMENT/VOLUNTEERING</h4> <?php
			}
			
			for($i = 0; $i < $arrsizeEmp; $i ++) {
				
				$employment_posn_empty = empty ( $employment_posn [$i] );
				$employment_city_empty = empty ( $employment_city [$i] );
				$employment_country_empty = empty ( $employment_country [$i] );
				$employment_start_date_empty = empty ( $employment_start_date [$i] );
				$employment_end_date_empty = empty ( $employment_end_date [$i] );
				$employment_responsibility_empty = empty ( $employment_responsibility [$i] );
				
				if ($employment_posn_empty == false && $employment_city_empty == false && $employment_country_empty == false && $employment_start_date_empty == false && $employment_end_date_empty == false && $employment_responsibility_empty == false) {
					
					echo ' <ul> ';
					echo '<li>Position Title ' . ($i + 1) . ' : ' . $employment_posn [$i] . '</li>';
					echo '<li>City: ' . $employment_city [$i] . '</li>';
					echo '<li>Country: ' . $employment_country [$i] . '</li>';
					echo '<li>Start Date: ' . $employment_start_date [$i] . '</li>';
					echo '<li>End Date: ' . $employment_end_date [$i] . '</li>';
					echo '<li>End Date: ' . $employment_responsibility [$i] . '</li>';
					echo ' </ul> ';
				}
			}
			
			?>
		</div>

	<div id="educattionHistory">
		<h4 align="left">EDUCATION HISTORY</h4>
			
			<?php
			
			for($i = 0; $i < $arrsizeEdu; $i ++) {
				
				echo ' <ul> ';
				echo '<li>Year: ' . $education_year [$i] . '</li>';
				echo '<li>Acheivements: ' . $education_achievements [$i] . '</li>';
				echo ' </ul> ';
			}
			
			?>
		</div>

	<div id="personalqualities">
		<h4 align="left">PERSONAL QUALITIES</h4>
			<?php
			echo ' <ul> ';
			echo '<li>' . $qual1 . '</li>';
			echo '<li>' . $qual2 . '</li>';
			echo '<li>' . $qual3 . '</li>';
			echo '<li>' . $qual4 . '</li>';
			echo '<li>' . $qual5 . '</li>';
			echo '<li>' . $qual6 . '</li>';
			echo ' </ul> ';
			?>
		</div>

	<div id="achievementsandawards">
			<?php
			if (empty ( $achieve_year [0] ) == false && empty ( $awards_achievements [0] == false )) {
				?>
					<h4 align="left">ACHIEVEMENTS/AWARDS</h4> <?php
				echo ' <ul> ';
				for($i = 0; $i < $arrsizeYear; $i ++) {
					if (empty ( $achieve_year [$i] ) == false && empty ( $awards_achievements [$i] == false )) {
						echo '<li>Year : ' . $achieve_year [$i] . '</li>';
						echo '<li>Achievments: ' . $awards_achievements [$i] . '</li>';
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
				for($i = 0; $i < $arrsizeExt; $i ++) {
					if (empty ( $extracurricular_year [$i] ) == false && empty ( $extracurricular_achievements [$i] == false )) {	
						echo '<li>Year: ' . $extracurricular_year [$i] . '</li>';
						echo '<li>Acheivements: ' . $extracurricular_achievements [$i] . '</li>';						
					}
				}
				echo ' </ul> ';
			}
			?>
		</div>

	<div id="referees">
		<h4 align="left">REFEREES</h4>
			
			<?php
			
				for ($i = 0; $i < $arrsizeRefs; $i++){
			
				echo ' <ul> ';
				echo '<li>Name : ' . $referee_name[$i] .  '</li>';
				echo '<li>Position: ' . $referee_position[$i]  .  '</li>';
				echo '<li>Email: ' . $referee_email[$i] .  '</li>';
				echo '<li>Phone: ' . $referee_phone[$i]  .  '</li>';
				echo ' </ul> ';
			
				}
			?>
		</div>
