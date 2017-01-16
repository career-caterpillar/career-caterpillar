<?php
echo "done";
$filename = "../cvcontent/personaldetails.php";

$arrsizeLang = 0;

$filecontent =  "<?php\n";

foreach ($_POST as $key => $value) {

	if   (is_array($value)){

		if ($key == "lang"){
			$arrsizeLang = sizeof($value);
		}

		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n";

		foreach ($value as $arrkey => $arrvalue){

			$filecontent = $filecontent . 'array_push( $'. $key.',"' . $arrvalue .'");'. "\n";
		}


	}else {

		$filecontent = $filecontent . '$'. $key. ' = "' . nl2br($value) .'";'. "\n";
	}

}

$filecontent = $filecontent .'$arrsizeLang="' . ($arrsizeLang).'";'. "\n";

$filecontent = $filecontent . "?>\n";


file_put_contents($filename, $filecontent);
?>
