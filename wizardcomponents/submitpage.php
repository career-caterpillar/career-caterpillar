<div id="submitpage">

<body>

	<div id = "cvRefreash">

	 	<?php include "CVHTML.php"?>

	</div>

	<input  id = "cvCreate" type="button"  class="btn btn-primary btn-outline btn-lg" value="CREATE MY CV">
	<script>
		$('#cvCreate').click(function(){
    		 window.open('exporttopdf.php', 'Cv', 'window settings');
     		return false;
     	});
     </script>

</body>

  </div>
