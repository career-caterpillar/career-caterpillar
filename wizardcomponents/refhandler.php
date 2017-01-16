<?php
echo "hello";

$filename = "../cvcontent/refs.php";

$arrsizeRefs = 0;


$filecontent =  "<?php\n";

foreach ($_POST as $key => $value) {

	if   (is_array($value)){

		if ($key == "referee_name"){
			$arrsizeRefs = sizeof($value);
		}

		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n";

		foreach ($value as $arrkey => $arrvalue){

			$filecontent = $filecontent . 'array_push( $'. $key.',"' . $arrvalue .'");'. "\n";
		}


	}else {

		$filecontent = $filecontent . '$'. $key. ' = "' . nl2br($value) .'";'. "\n";
	}

}

$filecontent = $filecontent .'$arrsizeRefs="' . ($arrsizeRefs).'";'. "\n";

$filecontent = $filecontent . "?>\n";


file_put_contents($filename, $filecontent);

?>
