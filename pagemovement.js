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
    $("#aboutmepage").hide();
    $("#outsideskillspage").hide();
    $("#refereespage").hide();
    $("#submitpage").hide();
    $("#cvCreate").hide();
		$("#otherskills").hide();
		$("#extracurricularsection").hide();
		$("#educationsection").hide();
		$("#employmentsection").hide();
		$("#personalstatementsection").hide();
		$("#personalqualitiessection").hide();
		$("#achievementssection").hide();

  }

	/** displays personal details section, sets up interactive components */
	function personaldetailssetup() {

		$("p").hide();

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

	/** displays about me section, sets up interactive components */
	function aboutmesetup() {

		$("#pqhint").show();

		$("#pshelp").click(function(){
			if ($("#pshint").is(":visible")) {
				$("#pshint").fadeOut();
			} else {
				$("#pshint").fadeIn();
			}
		});

		$("#achievehelp").click(function(){
			if ($("#achievehint").is(":visible")) {
				$("#achievehint").fadeOut();
			} else {
				$("#achievehint").fadeIn();
			}
		});

	}

	/** displays ouside skills section, sets up interactive components */
	function outsideskillssetup() {

		$("#employmenthelp").click(function(){
			if ($("#employmenthint").is(":visible")) {
				$("#employmenthint").fadeOut();
			} else {
				$("#employmenthint").fadeIn();
			}
		});

		$("#educationhelp").click(function(){
			if ($("#educationhint").is(":visible")) {
				$("#educationhint").fadeOut();
			} else {
				$("#educationhint").fadeIn();
			}
		});

		$("#extracurrichelp").click(function(){
			if ($("#extracurrichint").is(":visible")) {
				$("#extracurrichint").fadeOut();
			} else {
				$("#extracurrichint").fadeIn();
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
	aboutmesetup();
	outsideskillssetup();
	refereeshintsetup();

	//  hides current section and displays the next section when the user clicks the next button
	$("#tonextbtn").click(function() {

		// hide current page and show next page
		switch (curpage) {

			case 1:

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

				$("#refereespage").hide();
				$("#submitpage").show();
				$("#tonextbtn").hide();
				$("#cvCreate").show();

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
				$("#submitpage").hide();
				$("#refereespage").show();
				$("#tonextbtn").show();
				$("#cvCreate").hide();
				curpage--;
				break;

			default:
				break;
		}
	});
});
