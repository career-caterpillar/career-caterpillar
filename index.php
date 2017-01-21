<!DOCTYPE html>
<html>
<head>
    <title>CV Builder</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.js"></script>
    <script src="jquery-ui-1.12.1.custom/jquery-ui.js"></script>
    <script src="http://malsup.github.com/jquery.form.js"></script> <!--  jquery form  added kahu-->
    <script src="dynamicInput_validation.js"></script> <!--bundled all javascript Mukesh -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="jquery-ui-1.12.1.custom/jquery-ui.css"> <!-- date dropdown -->
    <link rel="stylesheet" type="text/css" href="template.css">
</head>
<body>
  <div class="BodyMain" id="wholepage">
    <div id="sidebar">
      <div id="sidebar-left">
        <ul>
          <li id = "personaldetailsbtn" class="current-box"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "personalstatementbtn" class="incomplete"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "personalqualitiesbtn" class="incomplete"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "achievementsbtn" class="incomplete"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "employmentbtn" class="incomplete"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "extracurricularbtn" class="incomplete"> <span class="glyphicon glyphicon-ok"></span></li>
          <li id = "educationbtn" class="incomplete"><span class="glyphicon glyphicon-ok"></span></li>
          <li id = "otherskillsbtn" class="incomplete"><span  class="glyphicon glyphicon-ok"></span></li>
          <li id = "refereesbtn" class="incomplete"><span  class="glyphicon glyphicon-ok"></span></li>
          <li id = "cvbtn" class="incomplete"><span class="glyphicon glyphicon-ok"></span></li>
        </ul>
      </div>
      <div id="sidebar-right">
        <ul>
          <li id="pdlabel" class="current">Personal Details</li>
          <li id="pslabel">Personal Statement</li>
          <li id="pqlabel">Personal Qualities</li>
          <li id="achievelabel">Achievements</li>
          <li id="employlabel">Employment</li>
          <li id="extracurlabel">Extracurricular</li>
          <li id="edulabel" >Education</li>
          <li id="skillslabel">Other Skills</li>
          <li id="refslabel">Referees</li>
          <li id="cvlabel">CV</li>
        </ul>
      </div>
    </div>
    <div id="content">
      <div id="postcontainer">
        <div id="personaldetailspage"><?php include 'wizardcomponents/personaldetailspge.php';?></div>
        <div id="personalstatementsection"><?php include 'wizardcomponents/personalstatement.php';?></div>
        <div id = "personalqualitiessection"><?php include 'wizardcomponents/personalqualities.php';?></div>
        <div id = "achievementssection"><?php include 'wizardcomponents/achievements.php';?></div>
        <div id = "employmentsection"><?php include 'wizardcomponents/employmentsection.php';?></div>
        <div id = "educationsection"><?php include 'wizardcomponents/educationsection.php';?></div>
        <div id = "extracurricularsection"><?php include 'wizardcomponents/extracurricular.php';?></div>
        <div id = "otherskills"><?php include 'wizardcomponents/otherskills.php';?></div>
        <div id="refereespage"><?php  include 'wizardcomponents/refereespge.php';?></div>
        <div id = "submitpage"><?php include 'wizardcomponents/submitpage.php';?></div>
      </div>
      <div id="buttonbar">
        <ul>
          <li><span id = "previewBtn" class="glyphicon glyphicon-search"></span></li>
          <li><span id = "toprevbtn"  class="glyphicon glyphicon-menu-left"></span></li>
          <li><span id = "tonextbtn" class="glyphicon glyphicon-menu-right"></span></li>
        </ul>
      </div>
    </div>
  </div>

  <script src="pagemovement.js"> </script>

  <!--global form scripts to be put in some JS file -->

  <script>
    $("* :input").tooltip({
    show: {effect: "drop" },
    hide: {effect: "drop" },
    position: {my: "left+100 center", at: "right center"},
    items: ":input:focus",
    });

    $( ".styledselect" ).selectmenu({
    icons: { button: "ui-icon-caret-1-s" };
    width: 200;
    });

  </script>

</body>
</html>

</html>
