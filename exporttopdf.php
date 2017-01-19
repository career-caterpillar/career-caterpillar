<?php
	$cvhtml = file_get_contents('http://localhost/home/career-caterpillar/CVHTML.php');
	include("mpdf60/mpdf.php");
	$mpdf = new mPDF();
	$mpdf->WriteHTML("$cvhtml");
	$mpdf -> Output();
	exit();
?>
