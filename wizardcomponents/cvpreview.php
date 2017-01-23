
	<!--
		Description:
			This block of CV Builder code allows the user to preview the CV in pdf format.
		Programming Languages Used:
			- HTML
			- Javascript
		Integration/Interface Points:
			- CSS
			- PHP/
	-->
<div id=”templates” >
	<button id="close" onclick="viewtemplates()" style="display:none; float:right"> Click to view different templates </button> <br><br>

	<button id="cv1" class="cvtemplates" onclick="expandCV(1)">
			<iframe  id="pdf-refresh1" src="cvtemplates/CV1.php" height="400"></iframe>
	</button>

	<button id="cv2" class="cvtemplates" onclick="expandCV(2)">
		<iframe  id="pdf-refresh2" src="cvtemplates/CV2.php" height="400"></iframe>
	</button>

	<iframe  id="cv" src="" height="1500" width="100%" style="display:none"></iframe>
</div>

<script>
//AV: CV Preview - hides current section and displays CV (or) hides CV and diplays current section
function expandCV(choice) {
	document.getElementById('cv1').style.display='none';
	document.getElementById('cv2').style.display='none';
	document.getElementById('close').style.display='block';
	document.getElementById('cv').style.display='block';

		switch (choice) {
			case 1:
				document.getElementById('cv').src='cvtemplates/CV1.php';
				break;

			case 2:
				document.getElementById('cv').src='cvtemplates/CV2.php';
				break;

			default:
				break;
		}
}

function viewtemplates(){
	document.getElementById('close').style.display='none';
	document.getElementById('cv').style.display='none';
	document.getElementById('cv1').style.display='inline';
	document.getElementById('cv2').style.display='inline';
}
</script>
