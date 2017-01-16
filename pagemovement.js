$(document).ready(function(){

  // we have 5 pages
	// 1: personal details
	// 2: about me
	// 3: outside skills
	// 4: referees
	// 5: submit
	var curpage = 1;

  function setup() {

    $("#toprevbtn").hide();
    $("#aboutmepage").hide();
    $("#outsideskillspage").hide();
    $("#refereespage").hide();
    $("#submitpage").hide();

  }

	function personaldetailssetup() {

		$("span").hide();

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

	function refereeshintsetup() {

		$("#refereeshelp").click(function(){
			if ($("#refereeshint").is(":visible")) {
				$("#refereeshint").fadeOut();
			} else {
				$("#refereeshint").fadeIn();
			}
		});

	}

  setup();
	personaldetailssetup();
	aboutmesetup();
	outsideskillssetup();
	refereeshintsetup();

	$("#tonextbtn").click(function() {

		// hide current page and show next page
		switch (curpage) {
			case 1:
				$( "#personaldetailspage").hide();
				$( "#aboutmepage").show();
        $("#toprevbtn").show();
				curpage++;
				break;

			case 2:
				$("#aboutmepage").hide();
				$("#outsideskillspage").show();
				curpage++;
				break;

			case 3:
				$("#outsideskillspage").hide();
				$("#refereespage").show();
				curpage++;
				break;

			case 4:
				$("#refereespage").hide();
				$("#submitpage").show();
				$("#tonextbtn").hide();
				$('#cvRefreash').load("CVHTML.php");
				curpage++;
				break;

			default:
				break;


		}

	});

	$("#toprevbtn").click(function() {

		// hide current page and show previous page
		switch (curpage) {
			case 2:
				$("#aboutmepage").hide();
				$("#toprevbtn").hide();
				$("#personaldetailspage").show();
				curpage--;
				break;

			case 3:
				$("#outsideskillspage").hide();
				$("#aboutmepage").show();
				curpage--;
				break;

			case 4:
				$("#refereespage").hide();
				$("#outsideskillspage").show();
				curpage--;
				break;

			case 5:
				$("#submitpage").hide();
				$("#refereespage").show();
				$("#tonextbtn").show();
				curpage--;
				break;


			default:
				break;


		}
	});




});
