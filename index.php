<!DOCTYPE html>

<html>

<head>
 <title>CV</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.js"></script>
  <script src="http://malsup.github.com/jquery.form.js"></script> <!--  jquery form  added kahu-->
  <link rel="stylesheet" type="text/css" href="jquery-ui-1.12.1.custom/jquery-ui.css"> <!-- date dropdown -->
  <script src="dynamicInput_validation.js"></script> <!--bundled all javascript Mukesh -->
  <link rel="stylesheet" type="text/css" href="template.css">
</head>
<body>

    <div class = "BodyMain">
      <div class = "empty1">
        <!-- help make this button save items as it moves across -->
          <button type="button" id = "toprevbtn" class="btnmain btn-primary btn-outline btn-sm" aria-label="Left Align">
            <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
          </button>
      </div>
    <div class = "content">
      
        <div id = "postcontainer">
            <div id="personaldetailspage">
      <?php include 'wizardcomponents/personaldetailspge.php';?>
            </div>
            <div id="aboutmepage">
      <?php include 'wizardcomponents/aboutmepg.php';?>
            </div>
            <div id="outsideskillspage">
      <?php include 'wizardcomponents/outsideskillpge.php';?>
            </div>
           <div id="refereespage">
      <?php  include 'wizardcomponents/refereespge.php';?>
            </div>
            <div id = "submitpage">
      <?php include 'wizardcomponents/submitpage.php';?>
            </div>
        </div>

</div>
<div class = "empty2">
    <button type="button" id = "tonextbtn" class="btnmain btn-primary "aria-label="Left Align">
      <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
</div>
  <script src="pagemovement.js"> </script>
</div>
</body>
</html>
