<div id="submitpage"> <!-- Div container for the submit page wizard contents. -->

	<body> <!-- Doubtful if body tag is appropriate or necessary here. -->


		<div id = "cvRefreash"> <!-- A div container for the imported php/html example of the CV. The typo has been carried through to other sections of the app. -->

			<!-- this is another solution to the pdf issue -->

			<div class = "row">
				<div class="col-lg-10 col-lg-offset-1">
					<Iframe id = "pdf-refresh" src="exporttopdf.php" width="100%" height="1000"></Iframe>
				</div>
			</div>


 			<?php
				//include "CVHTML.php" //Includes the contents of the file CVHTML.php as part of the page.
				//There are security issues here as CVHTML contains user input that could be valid php code.
			?>
		</div>



	</body>

</div>
