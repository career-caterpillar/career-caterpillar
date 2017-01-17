<?php

$filename = "../cvcontent/outskills.php"; //Assign the path and name of the refs file to filename.

$arrsizeEmp = 0;
$arrsizeEdu = 0;
$arrsizeExt = 0;

$filecontent =  "<?php\n"; //Start the filecontent string with an opening php tag.

foreach ($_POST as $key => $value) { //Foreach loop going through the contents of the html POST request.

	if   (is_array($value)){ //If we are adding multiple values in this iteration...

		if ($key == "employment_posn"){//Use the size of the employment_posn array to determine how many positions have been provided.
			$arrsizeEmp = sizeof($value);
		}

		if ($key == "education_year"){//Use the size of the education_year array to determine how many educational items have been provided.
			$arrsizeEdu = sizeof($value);
		}

		if ($key == "extracurricular_achievements"){ //Use the size of the extracurricular_achievements array to determine how many extras have been provided.
			$arrsizeExt = sizeof($value);
		}

		if ($key == "lang"){ //Use the size of the lang array to determine how many languages have been provided.
			$arrsizeLang = sizeof($value);
		}

		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n"; //Append a line to the output file stating that this key is an array object.

		foreach ($value as $arrkey => $arrvalue){ //Go through the contents of the array

			$filecontent = $filecontent . 'array_push( $'. $key.',"' . nl2br(strip_tags($arrvalue)).'");'. "\n"; //Line by line push the contents of the array into the generated array object code.
		}


	}else { //Otherwise take the value as is and insert into the filecontent.

		$filecontent = $filecontent . '$'. $key. ' = "' . nl2br(strip_tags($value)) .'";'. "\n";
	}

}

$filecontent = $filecontent .'$arrsizeEmp="' . ($arrsizeEmp).'";'. "\n"; //Add the size refs to the end of the file content.
$filecontent = $filecontent .'$arrsizeEdu="' . ($arrsizeEdu).'";'. "\n";
$filecontent = $filecontent .'$arrsizeExt="' . ($arrsizeExt).'";'. "\n";
$filecontent = $filecontent .'$arrsizeLang="' . ($arrsizeLang).'";'. "\n"; //Add the size ref to the end of the file content.

$filecontent = $filecontent . "?>\n"; //And finally add a php close tag.


file_put_contents($filename, $filecontent); //Write the file contents into the provided file path.
?>
