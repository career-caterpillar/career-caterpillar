<?php

$filename = "../cvcontent/educationdata.php"; //Assign the path and name of the refs file to filename.

$arrsizeEdu = 0;

$filecontent =  "<?php\n"; //Start the filecontent string with an opening php tag.

foreach ($_POST as $key => $value) { //Foreach loop going through the contents of the html POST request.

	if   (is_array($value)){ //If we are adding multiple values in this iteration...

		if ($key == "education_year"){//Use the size of the education_year array to determine how many educational items have been provided.
			$arrsizeEdu = sizeof($value);
		}

		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n"; //Append a line to the output file stating that this key is an array object.

		foreach ($value as $arrkey => $arrvalue){ //Go through the contents of the array

			$filecontent = $filecontent . 'array_push( $'. $key.',"' . nl2br(strip_tags($arrvalue)).'");'. "\n"; //Line by line push the contents of the array into the generated array object code.
		}


	}else { //Otherwise take the value as is and insert into the filecontent.

		$filecontent = $filecontent . '$'. $key. ' = "' . nl2br(strip_tags($value)) .'";'. "\n";
	}

}

$filecontent = $filecontent .'$arrsizeEdu="' . ($arrsizeEdu).'";'. "\n";


$filecontent = $filecontent . "?>\n"; //And finally add a php close tag.


file_put_contents($filename, $filecontent); //Write the file contents into the provided file path.
?>
