<?php

	$cvhtml = file_get_contents('http://localhost/cv/CVHTML.php');
	include("mpdf60/mpdf.php");
	$mpdf = new mPDF();
	$mpdf->WriteHTML("$cvhtml");
	$mpdf -> Output();
	exit();
?>
