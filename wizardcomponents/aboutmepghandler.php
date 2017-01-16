<?php 
$filename = "../cvcontent/aboutme.php";
$arrsizeYear = 0;
$filecontent =  "<?php\n";


foreach ($_POST as $key => $value) {
	if   (is_array($value)){
		if ($key == "achieve_year"){
			$arrsizeYear = sizeof($value);
		}
		$filecontent = $filecontent . '$'. $key. ' = ' . 'array()' .';'. "\n";
		foreach ($value as $arrkey => $arrvalue){
			$filecontent = $filecontent . 'array_push( $'. $key.',"' . $arrvalue .'");'. "\n";
		}
	}else {
		$filecontent = $filecontent . '$'. $key. ' = "' . $value .'";'. "\n";
	}
}

$filecontent = $filecontent .'$arrsizeYear ="' . ($arrsizeYear ).'";'. "\n";
$filecontent = $filecontent . "?>\n";

file_put_contents($filename, $filecontent);

?>