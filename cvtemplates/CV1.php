<?php

	$cvstyle = file_get_contents('stylesheet/CVstyle1.css');
	$cvbody = file_get_contents('http://localhost/cvhome/CVHTML.php');
	$cv = $cvstyle . $cvbody;

	include("mpdf60/mpdf.php");
	$mpdf = new mPDF();
	$mpdf->WriteHTML("$cv");
	$mpdf -> Output();
	exit();

?>