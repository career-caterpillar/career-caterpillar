/**
	Implements the functionality for moving between sections/pages
	and sets up the initial display state
*/

$(document).ready(function(){

	var curpage = 1;

	/**
		should be performed when application is first loaded
		sets up the initial state, hiding all pages but the first
	*/
  function setup() {

    $("#toprevbtn").css("visibility", "hidden");
    $("#refereespage").hide();
    $("#cvpreview").hide();
    $("#cvCreate").hide();
    $("#otherskills").hide();
    $("#extracurricularsection").hide();
    $("#educationsection").hide();
    $("#employmentsection").hide();
    $("#personalstatementsection").hide();
    $("#personalqualitiessection").hide();
    $("#achievementssection").hide();

  }

	function hidepages() {//KC: hide all pages for use in gotoPage()

		$("#refereespage").hide();
		$("#cvpreview").hide();
		$("#cvCreate").hide();
		$("#otherskills").hide();
		$("#extracurricularsection").hide();
		$("#educationsection").hide();
		$("#employmentsection").hide();
		$("#personalstatementsection").hide();
		$("#personalqualitiessection").hide();
		$("#achievementssection").hide();
		$( "#personaldetailspage").hide();

	}

	function removecurrentfromalllabels() { //LV removes the current class tag from all sidebar labels
		$("#pdlabel").removeClass("current");
		$("#pslabel").removeClass("current");
		$("#pqlabel").removeClass("current");
		$("#achievelabel").removeClass("current");
		$("#employlabel").removeClass("current");
		$("#extracurlabel").removeClass("current");
		$("#edulabel").removeClass("current");
		$("#skillslabel").removeClass("current");
		$("#refslabel").removeClass("current");
		$("#cvlabel").removeClass("current");
	}

	function setallincomplete() {//KC: set all page breadcrumbs to incomplete
		$("#personaldetailsbtn").attr('class', "incomplete");
		$("#personalstatementbtn").attr('class', "incomplete");
		$("#personalqualitiesbtn").attr('class', "incomplete");
		$("#achievementsbtn").attr('class', "incomplete");
		$("#employmentbtn").attr('class', "incomplete");
		$("#extracurricularbtn").attr('class', "incomplete");
		$("#educationbtn").attr('class', "incomplete");
		$("#otherskillsbtn").attr('class', "incomplete");
		$("#refereesbtn").attr('class', "incomplete");;
		$("#cvbtn").attr('class', "incomplete");;

	}

	function setincomplete(pagenumber) {//KC: set all page breadcrumbs to incomplete
    switch (pagenumber){
			case 1 :
					$("#personaldetailsbtn").attr('class', "incomplete");
			break;
			case 2 :
					$("#personalstatementbtn").attr('class', "incomplete");
			break;
			case 3 :
					$("#personalqualitiesbtn").attr('class', "incomplete");
			break;
			case 4 :
					$("#achievementsbtn").attr('class', "incomplete");
			break;
			case 5 :
					$("#employmentbtn").attr('class', "incomplete");
			break;
			case 6 :
					$("#extracurricularbtn").attr('class', "incomplete");
			break;
			case 7 :
					$("#educationbtn").attr('class', "incomplete");
			break;
			case 8 :
					$("#otherskillsbtn").attr('class', "incomplete");
			break;
			case 9 :
					$("#refereesbtn").attr('class', "incomplete");
			break;
			case 10 :
					$("#cvbtn").attr('class', "incomplete");
			break;

			default:
				break;

		}

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

	function validateForms(pagenumber){ //KC: validateForms for if pagenumber equals 1, 3,7,9
			switch (pagenumber){
				case 1:
					if(!validateForm1()){ 						//MKH: If there are validation errors in the PERSONAL DETAILS entered, return the page that was not valid exit the switch statement.
						$("#personaldetailsbtn").attr('class', "current-box");
						return pagenumber;
					} else {
							$("#personaldetailsbtn").attr('class', "completed");
						 	break;
					}

				case 2:
					if(!personalStatementFilled()) {
						return;
					}

					$("#personalstatementbtn").attr('class', "completed");
					break;

				case 3:
					if(!validateForm4()) {
						$("#personalqualitiesbtn").attr('class', "current-box");
						return pagenumber;//MKH: If there are validation errors in the PERSONAL QUALITIES entered, exit the switch statement.
					} else {
						$("#personalqualitiesbtn").attr('class', "completed");
						break;
					}
				break;

				case 7:
		    	if(!validateForm3()){
						$("#educationbtn").attr('class', "current-box");
						return pagenumber;//MKH: If there are validation errors in the EDUCATION HISTORY entered, exit the switch statement.
				} else {
						$("#educationbtn").attr('class', "completed");
					break;
				}

				case 9:
					if(!validateForm2()) {
						$("#refereesbtn").attr('class', "current-box");
						return pagenumber;//MKH: If there are validation errors in the REFEREES entered, exit the switch statement.
					} else {
						$("#refereesbtn").attr('class', "completed");
						break;
					}


				default:
				break;
			}
	}

	function submitPage(pagenumber){//KC: submit page correseponding to pagenumber selected using jquery ajaxSubmit function

	switch (pagenumber) {

		case 1:

	  	$("#personaldetailsform").ajaxSubmit({
		  	url: "wizardcomponents/personaldetailspgehandler.php",type: "post"
		  });

			break;

		case 2:

			$("#personalstatementform").ajaxSubmit({
				url: "wizardcomponents/personalstatementhandler.php",type: "post"
			});

			break;

		case 3:

			$("#personalqualitiesform").ajaxSubmit({
				url: "wizardcomponents/personalqualitieshandler.php",type: "post"
			});

			break;

		case 4:

			$("#achievementsform").ajaxSubmit({
				url: "wizardcomponents/achievementshandler.php",type: "post"
			});

			break;

		case 5:

			$("#employmentform").ajaxSubmit({
				url: "wizardcomponents/employmenthandler.php",type: "post"
			});


			break;

		case 6:

			$("#extracurricularform").ajaxSubmit({
				url: "wizardcomponents/extracurricularhandler.php",type: "post"
			});

			break;

		case 7:

		$("#educationform").ajaxSubmit({
			url: "wizardcomponents/educationhandler.php",type: "post"
		});

			break;

		case 8:
		$("#otherskillsform").ajaxSubmit({
			url: "wizardcomponents/otherskillshandler.php",type: "post"
		});


			break;

		case 9:

			$("#refereeform").ajaxSubmit({
				url: "wizardcomponents/refhandler.php",type: "post"
			});

			break;

		default:
			break;
	}

}


  setup();
	personaldetailssetup();
	aboutmesetup();
	outsideskillssetup();
	refereeshintsetup();


	function gotoPage(pagenumber){ //KC: let the user select which page to go to based on page number

		switch (pagenumber) {

			case 1:

				setincomplete(curpage);// setthe current page to incompete
				if (validateForms(curpage) === curpage) {
					break;
				} else {
					removecurrentfromalllabels();
					$("#personaldetailsbtn").attr('class', "current-box");
					$("#pdlabel").attr('class', "current");
				}
        submitPage(curpage); //KC: submit lastpage that the user was in
        hidepages();//KC:  hide all pages so when user navigates from any page, that page will be hidden
				$( "#personaldetailspage").show();
				$("#tonextbtn").css("visibility", "visible");//KC:  hide and show tonext and toprev buttons inorder for user to navigate from last page to first without hideing both buttons
				$("#toprevbtn").css("visibility", "hidden");

				curpage = pagenumber;//KC: set current page for correct side scrolling
				break;

			case 2:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
					removecurrentfromalllabels();
					$("#personalstatementbtn").attr('class', "current-box");
					$("#pslabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
        $("#personalstatementsection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;

        break;

      case 3:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
				removecurrentfromalllabels();
				$("#personalqualitiesbtn").attr('class', "current-box");
				$("#pqlabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
				$("#personalqualitiessection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;


				break;

			case 4:

			  setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
				removecurrentfromalllabels();
				$("#achievementsbtn").attr('class', "current-box");
				$("#achievelabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();

				$("#achievementssection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");
				curpage = pagenumber;

				break;

			case 5:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
					removecurrentfromalllabels();
				$("#employmentbtn").attr('class', "current-box");
				$("#employlabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
				$("#employmentsection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");
				curpage = pagenumber;

				break;

			case 6:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
					removecurrentfromalllabels();
				$("#extracurricularbtn").attr('class', "current-box");
				$("#extracurlabel").attr('class', "current");
			}
				submitPage(curpage);
				hidepages();
				$("#extracurricularsection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;

				break;

			case 7:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
				removecurrentfromalllabels();
				$("#educationbtn").attr('class', "current-box");
				$("#edulabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();

				$("#educationsection").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;

				break;

			case 8:

				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
				removecurrentfromalllabels();
				$("#otherskillsbtn").attr('class', "current-box");
				$("#skillslabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
				$("#otherskills").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;

				break;

			case 9:
				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
					removecurrentfromalllabels();
					$("#refereesbtn").attr('class', "current-box");
					$("#refslabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
				$("#refereespage").show();
				$("#tonextbtn").css("visibility", "visible");
				$("#toprevbtn").css("visibility", "visible");

				curpage = pagenumber;
				break;

			case 10:
				setincomplete(curpage);
				if (validateForms(curpage) === curpage) {
					break;
				} else {
				removecurrentfromalllabels();
				$("#cvbtn").attr('class', "current-box");
				$("#pslabel").attr('class', "current");
				}
				submitPage(curpage);
				hidepages();
				$("#cvpreview").show();
				$("#cvCreate").show();
				$("#tonextbtn").css("visibility", "hidden");
				$("#toprevbtn").css("visibility", "visible");
				$('#cv1').attr('src', $('#cv1').attr('src'));
				$('#cv2').attr('src', $('#cv2').attr('src'));
				$('#cv').attr('src', $('#cv').attr('src'));
				curpage = pagenumber;
			  break;

			default:
				break;
		}


	}
	//  hides current section and displays the next section when the user clicks the next button
	$("#tonextbtn").click(function() {

		var nextpage = curpage; //store current page
		nextpage++;//increment page index by
		gotoPage(nextpage); // next page


	});

	// hides current section and displays the previous section when the user clicks the back button
	$("#toprevbtn").click(function() {

		var nextpage = curpage;
		nextpage--;
		gotoPage(nextpage);

	});

	$("#personaldetailsbtn").click(function() { // gotoPage selected by user
		gotoPage(1);

	});

	$("#personalstatementbtn").click(function() {
		gotoPage(2);

	});


	$("#personalqualitiesbtn").click(function() {
		gotoPage(3);

	});


	$("#achievementsbtn").click(function() {
		gotoPage(4);
	});

	$("#employmentbtn").click(function() {
		gotoPage(5);
	});

	$("#extracurricularbtn").click(function() {
		gotoPage(6);
	});

	$("#educationbtn").click(function() {
		gotoPage(7);

	});

	$("#otherskillsbtn").click(function() {
		gotoPage(8);

	});

	$("#refereesbtn").click(function() {
		gotoPage(9);

	});

	$("#cvbtn").click(function() {
		gotoPage(10);
	});


	$("#previewBtn").click(function() {
		gotoPage(10);
	});

});
