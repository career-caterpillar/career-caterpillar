<?php
//echo $_POST["employment-city[]"];

$filename = "../cvcontent/outskills.php";

$arrsizeEmp = 0;
$arrsizeEdu = 0;
$arrsizeExt = 0;

$filecontent =  "<?php\n";

foreach ($_POST as $key => $value) {

	if   (is_array($value)){

		if ($key == "employment_posn"){
			$arrsizeEmp = sizeof($value);
		}

		if ($key == "education_year"){
			$arrsizeEdu = sizeof($value);
		}

		if ($key == "extracurricular_achievements"){
			$arrsizeExt = sizeof($value);
		}
		
		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n";

		foreach ($value as $arrkey => $arrvalue){

			$filecontent = $filecontent . 'array_push( $'. $key.',"' . $arrvalue .'");'. "\n";
		}


	}else {

		$filecontent = $filecontent . '$'. $key. ' = "' . nl2br($value) .'";'. "\n";
	}

}

$filecontent = $filecontent .'$arrsizeEmp="' . ($arrsizeEmp).'";'. "\n";
$filecontent = $filecontent .'$arrsizeEdu="' . ($arrsizeEdu).'";'. "\n";
$filecontent = $filecontent .'$arrsizeExt="' . ($arrsizeExt).'";'. "\n";

$filecontent = $filecontent . "?>\n";


file_put_contents($filename, $filecontent);
?>
