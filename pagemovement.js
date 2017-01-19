/**
	Implements the functionality for moving between sections/pages
	and sets up the initial display state
*/

$(document).ready(function(){

  // we have 5 pages
	// 1: personal details
	// 2: about me
	// 3: outside skills
	// 4: referees
	// 5: submit
	var curpage = 1;

	/**
		should be performed when application is first loaded
		sets up the initial state, hiding all pages but the first
	*/
  function setup() {
    $("#toprevbtn").hide();
		$("#personalstatementsection").hide();
    $("#personalqualitiessection").hide();
    $("#achievementssection").hide();
    $("#employmentsection").hide();
    $("#extracurricularsection").hide();
    $("#educationsection").hide();
    $("#otherskills").hide();
    $("#refereespage").hide();
		$("#cvpreview").hide();  // AV: CV Preview - hide cvpreview page
  }

	/** displays personal details section, sets up interactive components */
	function personaldetailssetup() {
		$("p").hide();
		$("#cvpreviewbtn").show();

		$("#emailhelp").click(function(){
			if ($("#emailhint").is(":visible")) {
				$("#emailhint").fadeOut();
			} else {
				$("#emailhint").fadeIn();
			}
		});


		$("#dlhelp").click(function(){
			if ($("#dlhint").is(":visible")) {
				$("#dlhint").fadeOut();
			} else {
				$("#dlhint").fadeIn();
			}
		});

		$("#schoolhelp").click(function(){
			if ($("#schoolhint").is(":visible")) {
				$("#schoolhint").fadeOut();
			} else {
				$("#schoolhint").fadeIn();
			}
		});

	}

	/** sets up functionality for referees hint button */
	function refereeshintsetup() {

		$("#refereeshelp").click(function(){
			if ($("#refereeshint").is(":visible")) {
				$("#refereeshint").fadeOut();
			} else {
				$("#refereeshint").fadeIn();
			}
		});
	}

	function outsideskillssubmit(){
		$("#outsideskillform").ajaxSubmit({
			url: "wizardcomponents/outskillshandler.php",type: "post"
		});
	}

	function personaldetailsubmit(){
		$("#personaldetailsform").ajaxSubmit({
			url: "wizardcomponents/personaldetailspgehandler.php",type: "post"
		});
	}

	function personalstatementsubmit(){
		$("#personalstatementform").ajaxSubmit({
			url: "wizardcomponents/personalstatementhandler.php",type: "post"
		});
	}

	function personalqualitiessubmit(){
		$("#personalqualitiesform").ajaxSubmit({
			url: "wizardcomponents/personalqualitieshandler.php",type: "post"
		});
	}

	function achievementsubmit(){
		$("#achievementsform").ajaxSubmit({
			url: "wizardcomponents/achievementshandler.php",type: "post"
		});
	}

	function employmentsubmit(){
		$("#employmentform").ajaxSubmit({
			url: "wizardcomponents/employmenthandler.php",type: "post"
		});
	}

	function educationsubmit(){
		$("#educationform").ajaxSubmit({
			url: "wizardcomponents/educationhandler.php",type: "post"
		});
	}

	function extracurricularsubmit(){
		$("#extracurricularform").ajaxSubmit({
			url: "wizardcomponents/extracurricularhandler.php",type: "post"
		});
	}

	function otherskillssubmit(){
		$("#otherskillsform").ajaxSubmit({
			url: "wizardcomponents/otherskillshandler.php",type: "post"
		});
	}

	function refereesubmit(){
		$("#refereeform").ajaxSubmit({
			url: "wizardcomponents/refhandler.php",type: "post"
		});
	}

  setup();
	personaldetailssetup();
	refereeshintsetup();

	//  hides current section and displays the next section when the user clicks the next button
	$("#tonextbtn").click(function() {
		$("#cvpreviewbtn").show(); //AV: CV Preview - display preview button
		// hide current page and show next page
		switch (curpage) {

			case 1:

				if(!validateForm1()) return; //MKH: If there are validation errors in the PERSONAL DETAILS entered, exit the switch statement.

				$( "#personaldetailspage").hide();
				//$( "#aboutmepage").show();
				$("#personalstatementsection").show();
				$("#toprevbtn").show();

				//perform an ajax submit when the user moves to the next page;
				personaldetailsubmit();

				curpage++;
				break;

			case 2:

				$("#personalqualitiessection").show();
				$("#personalstatementsection").hide();

				personalstatementsubmit();

				curpage++;
				break;

			case 3:

				$("#achievementssection").show();
				$("#personalqualitiessection").hide();

				personalqualitiessubmit();

				curpage++;
				break;

			case 4:

				$("#achievementssection").hide();
				$("#employmentsection").show();

				achievementsubmit();

				curpage++;
				break;

			case 5:

				$("#employmentsection").hide();
				$("#extracurricularsection").show();

				employmentsubmit();

				curpage++;
				break;

			case 6:

				$("#extracurricularsection").hide();
				$("#educationsection").show();

				extracurricularsubmit();

				curpage++;
				break;

			case 7:

				if(!validateForm3()) return; //MKH: If there are validation errors in the EDUCATION details entered, exit the switch statement.

				$("#otherskills").show();
				$("#educationsection").hide();

				educationsubmit();

				curpage++;
				break;

			case 8:

				$("#otherskills").hide();
				$("#refereespage").show();

				otherskillssubmit();

				curpage++;
				break;

			case 9:
				if(!validateForm2()) return; //MKH: If there are validation errors in the REFEREE details entered, exit the switch statement.

				$("#refereespage").hide();
				$("#cvpreviewbtn").hide();
				$("#tonextbtn").hide();
				$("#cvpreview").show(); //AV: CV Preview - to view CV in different template

				refereesubmit();

				$('#pdf-refresh').attr('src', $('#pdf-refresh').attr('src'));

				curpage++;

				break;

			default:
				break;
		}

	});

	// hides current section and displays the previous section when the user clicks the back button
	$("#toprevbtn").click(function() {

		$("#cvpreviewbtn").show(); //AV: CV Preview - display preview button

		// hide current page and show previous page
		switch (curpage) {
			case 2:

				$("#personalstatementsection").hide();
				$("#toprevbtn").hide();
				$("#personaldetailspage").show();
				curpage--;
				break;

			case 3:

				$("#personalstatementsection").show();
				$("#personalqualitiessection").hide();

				personalqualitiessubmit();

				curpage--;
				break;

      case 4:

				$("#personalqualitiessection").show();
		 		$("#achievementssection").hide();

				achievementsubmit();

				curpage--;
				break;

			case 5:

				$("#employmentsection").hide();
				$("#achievementssection").show();

				employmentsubmit();


				curpage--;
				break;

			case 6:
				$("#employmentsection").show();
				$("#extracurricularsection").hide();

				extracurricularsubmit();


				curpage--;
			break;

			case 7:
				$("#extracurricularsection").show();
				$("#educationsection").hide();

				educationsubmit();

				curpage--;
				break;

			case 8:
				$("#otherskills").hide();
				$("#educationsection").show();

				otherskillssubmit();

				curpage--;
			break;


			case 9:

				$("#refereespage").hide();
				$("#otherskills").show();

				refereesubmit();

				curpage--;
				break;

			case 10:
				$("#cvpreviewbtn").show();
				$("#refereespage").show();
				$("#tonextbtn").show();
				$("#cvpreview").hide(); //AV: CV Preview - to hide CV in different template (to be added
				curpage--;
				break;

			default:
				break;
		}
	});

	//AV: CV Preview - hides current section and displays CV (or) hides CV and diplays current section
	$("#cvpreviewbtn").click(function() {

		if ($("#cvpreview").is(":visible")) {
			$("#toprevbtn").show();
			$("#tonextbtn").show();
			$("#cvpreview").hide();
			// show current page and hide cv

			switch (curpage) {
				case 1:
					$("#personaldetailspage").show();
					$("#toprevbtn").hide();
					break;

				case 2:
					$("#personalstatementsection").show();
					break;

				case 3:
			    $("#personalqualitiessection").show();
					break;

				case 4:
				  $("#achievementssection").show();
					break;

				case 5:
					$("#employmentsection").show();
					break;

				case 6:
					$("#extracurricularsection").show();
					break;

				case 7:
					$("#educationsection").show();
					break;

				case 8:
					$("#otherskills").show();
					break;

				case 9:
					$("#refereespage").show();
					break;

				case 10:
					$("#cvpreview").show();
					$("#tonextbtn").hide();
					break;

				default:
					break;
			}
		} else {
			$("#toprevbtn").hide();
			$("#tonextbtn").hide();
			// hide current page and show cv
			switch (curpage) {
				case 1:
					$("#personaldetailspage").hide();
					personaldetailsubmit();
					$('#pdf-refresh').attr('src', $('#pdf-refresh').attr('src'));
					break;

				case 2:
					$("#personalstatementsection").hide();
					personalstatementsubmit();
					break;

				case 3:
			    $("#personalqualitiessection").hide();
					personalqualitiessubmit();
					break;

				case 4:
				  $("#achievementssection").hide();
					achievementsubmit();
					break;

				case 5:
					$("#employmentsection").hide();
					employmentsubmit();
					break;

				case 6:
					$("#extracurricularsection").hide();
					extracurricularsubmit();
					break;

				case 7:
					$("#educationsection").hide();
					educationsubmit();
					break;

				case 8:
					$("#otherskills").hide();
					otherskillssubmit();
					break;

				case 9:
					$("#refereespage").hide();
					refereesubmit();
					break;

				case 10:
					$("#cvpreview").hide();
					break;

				default:
					break;
			}
			$("#cvpreview").show();
		}
	});
});
