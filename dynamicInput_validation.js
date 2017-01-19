

var countLang = 1;
/** adds a new input field for languages */
function addLanguageInput(divName) {

    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<input type='text' required='required' name='lang[]'>";
    console.log(newdiv.innerHTML);
    document.getElementById(divName).appendChild(newdiv);

    countLang++;
}

/** adds new input fields for employment */
function addEmployInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<hr><strong>Position Title </strong><br><input type='text' name='employment_posn[]'><br><br><strong>City </strong><br><input type='text' name='employment_city[]'><br><br><strong>Country </strong><br><input type='text' name='employment_country[]'><br><br><strong>Start Date </strong><br><input type='text' class='datepicker' name='employment_start_date[]'><br><br><strong>Still work here? </strong><br><input type='radio' name='still_work[]' value='yes'> Yes<input type='radio' name='still_work[]' value='no'> No<br><br><strong>End Date</strong> (if answer was 'no' above)<br><input type='text' class='datepicker' name='employment_end_date[]'><br><br><strong>Responsiblities</strong><br><textarea name='employment_responsibility[]' cols='50' rows='10'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
    $( ".datepicker" ).datepicker();
}

/** adds new input fields for education */
function addEducationInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<hr><strong>Year </strong><br><input type='text' name='education_year[]' required='required'><br><br><strong>Achievements</strong><br><textarea name='education_achievements[]' cols='70' rows='7' required='required'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
}

/* kahu- I'm using this section to test delete/edit functionality*/

/* changes:

1)  got rid of br tags and strong tags from innhtml string so each appended child look the same
2)  created function that builds feedback html div
3)  created
3)  modified addExtracurricularInput for dynamic feedback

*/

function deleteSection(inputnode){

  inputnode.parentNode.nextSibling.remove();
  inputnode.parentNode.remove();

}

function editSection(inputnode){
  var childrenNo =  inputnode.parentNode.children.length;
  inputnode.parentNode.nextSibling.style.display = 'block';

}

function buildFeedback(year, achievments){

    var newdiv = document.createElement('div');//create div

    var year_heading = "<h2 style= 'text-decoration: underline;'>Year:</h2>"; //create heading
    var yearval = "<p>" + year + "</p>";// enter year into p tag
    var achievments_heading = "<h2 style= 'text-decoration: underline;'>Achievements:</h2>"; //create achievment heading
    var achval = "<p>" + achievments + "</p>";// enter achievment into p tag


    var editbtn =  '<input type="button" class="btn btn-primary btn-outline btn-sm delete" value="edit"  onClick="editSection(this);">';// create edit button
    var deletebtn = '<input type="button" class="btn btn-primary btn-outline btn-sm delete" value="delete" onClick="deleteSection(this);">';// create delete button

    newdiv.innerHTML = year_heading + yearval +
                        achievments_heading + achval +
                        editbtn + deletebtn ;//concatenate and insert into newDiv
    return newdiv;
}



/* adds new input fields for extracurricular activities */

function addExtracurricularInput(divName) {

    var parentnode = document.getElementById(divName);
    var childrenNo = parentnode.children.length;
    var lastNode = parentnode.children[(childrenNo -1)];
    var newdiv = document.createElement('div');

    console.log(childrenNo);

    var yearVal = String(lastNode.getElementsByTagName('input')[0].value);
    var achVal =  String(lastNode.getElementsByTagName('textarea')[0].value);

    achVal=achVal.replace(/\r\n/g, '<br>');// replace plaintext carraige returns with html so achievements are displayed how they were entered
    achVal=achVal.replace(/\n/g, '<br>');
    achVal=achVal.replace(/\r/g, '<br>');

    if ((yearVal || achVal) !== ""){

      parentnode.insertBefore(buildFeedback(yearVal, achVal),lastNode); // always build next feedback div above last input form

      lastNode.style.display = 'none'; // hide every node so that only the last form displays

      newdiv.innerHTML = "<h2>Year</h2><br><input type='text' name='extracurricular_year[]'><h2>Achievements</h2><br><textarea name='extracurricular_achievements[]' cols='70' rows='7'></textarea>";
      parentnode.appendChild(newdiv);

    }else {
        alert("Fields Empty");

    }


}



var countReferee = 2;
/** adds new input fields for referees */
function addRefereeInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<hr><strong>Referee [" + countReferee + "]</strong><br><br> Name<br><input type='text' name='referee_name[]'><br>Position <br><input type='text' name='referee_position[]'><br>Email <br><input type='text' name='referee_email[]'><br>Phone <br><input type='text' name='referee_phone[]'><br>";
    document.getElementById(divName).appendChild(newdiv);
    countReferee++;
}


/** validates each form field on the personal details page */
function validateForm1() {

    var text_only = /^[a-zA-Z ]+$/;
    var num_only = /^[0-9]*$/;
    var email_yo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var output_msg = "";

    if (document.myForm1.name.value.trim() == "") {
        output_msg += "* The 'Name' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.name.value))) {
        output_msg += "* The 'Name' field can only contain text!\n";
    }

    if (document.myForm1.street_add.value.trim() == "") {
        output_msg += "* The 'Street Address' field is empty!\n";
    }

    if (document.myForm1.suburb_add.value.trim() == "") {
        output_msg += "* The 'Suburb' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.suburb_add.value))) {
        output_msg += "* The 'Suburb' can only contain text!\n";
    }

    if (document.myForm1.city_add.value.trim() == "") {
        output_msg += "* The 'City' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.city_add.value))) {
        output_msg += "* The 'City' field can only contain text!\n";
    }

    if (!(num_only.test(document.myForm1.phone.value))) {
        output_msg += "* The 'Phone' field can only contain numbers!\n";
    }

    if (!(num_only.test(document.myForm1.mobile.value))) {
        output_msg += "* The 'Mobile' field can only contain numbers!\n";
    }

    if (!(email_yo.test(document.myForm1.email.value)) || document.myForm1.email.value.trim() == "") {
        output_msg += "* The 'Email' entered is invalid! Enter email in the format of someone@example.com\n";
    }

    if (document.myForm1.school_name.value.trim() == "") {
        output_msg += "* The 'School' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.school_name.value))) {
        output_msg += "* The 'School' field can only contain text!\n";
    }

    if (output_msg !== "") {
        alert(output_msg);
        return false;
    }
    return true;
}

/** validates each form field on the referees page */
function validateForm2() {
    var text_only = /^[a-zA-Z ]+$/;
    var num_only = /^[0-9]*$/;
    var email_yo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var output_msg = "";

    var ans1 = document.getElementsByName("referee_name[]");
    var ans2 = document.getElementsByName("referee_position[]");
    var ans3 = document.getElementsByName("referee_email[]");
    var ans4 = document.getElementsByName("referee_phone[]");
    for (i = 0; i < ans1.length; i++) {
        if (ans1[i].value.trim() == "") {
            output_msg += "* The Referee [" + (1 + i) + "] 'Name' field is empty!\n";
        }
        else if (!(text_only.test(ans1[i].value))) {
            output_msg += "* The Referee [" + (1 + i) + "] 'Name' field can only contain text!\n";
        }
        if (ans2[i].value.trim() == "") {
            output_msg += "* The Referee [" + (1 + i) + "] 'Position' field is empty!\n";
        }
        else if (!(text_only.test(ans2[i].value))) {
            output_msg += "* The Referee [" + (1 + i) + "] 'Position' field can only contain text!\n";
        }
        if (!(email_yo.test(ans3[i].value)) || ans3[i].value.trim() == "") {
            output_msg += "* The Referee [" + (1 + i) + "] 'Email' entered is invalid! Enter email in the format of someone@example.com\n";
        }
        if (ans4[i].value.trim() == "") {
            output_msg += "* The Referee [" + (1 + i) + "] 'Phone' field is empty!\n";
        }
        else if (!(num_only.test(ans4[i].value))) {
            output_msg += "* The Referee [" + (1 + i) + "] 'Phone' field can only contain numbers!\n";
        }
    }

    if (output_msg !== "") {
        alert(output_msg);
        return false;
    }
    return true;
}

/** validates each form field of the education section of the outside skills page */
function validateForm3() {
    var num_only = /^[0-9]*$/;

    var output_msg = "";

    var element = document.getElementsByName("education_year[]");
    var element2 = document.getElementsByName("education_achievements[]");
    for (i = 0; i < element.length; i++) {
        if (element[i].value.trim() == "") {
            output_msg += "* The year of education cannot be empty!\n";
        }
        else if (!(num_only.test(element[i].value))) {
            output_msg += "* The year of education '" + element[i].value + "' can only contain numbers e.g. 2017!\n";
        }
        if (element2[i].value.trim() == "") {
            output_msg += "* The educational achievements for year '" + element[i].value + "' is missing. Please update.\n ";
        }
    }

    if (output_msg !== "") {
        alert(output_msg);
        return false;
    }
    return true;
}

/** validates that atleast 2 qualities are selected on the personal qualities page */
function validateForm4() {
	var numChecked = 0;
	
	$("input:checkbox").each(function() {
        if($(this).is(':checked')){
        numChecked++;
        }
	});

    if (numChecked<2) {
        alert("Please make sure to have selected atleast 2 qualities");
        return false;
    }
    return true;
}

$(document).ready(function() {
    // bind 'personaldetails' and provide a simple callback function
    $('#personaldetailsform').ajaxForm(function() {
    	alert("saved personal details");
    });
});

/** adds a new input field for achievements */
function addAchievementInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<hr><strong>Year </strong><br><input type='text' name='achieve_year[]'><br><br><strong>Achievements</strong><br><textarea name='awards_achievements[]' cols='70' rows='7'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
}

// Submit  'aboutmeform'  data via AJAX
$(document).ready(function() {
    $('#aboutmeform').ajaxForm(function() {
    	alert("Saved About me");
    });
});

// Submit  'outsideskillform'  data via AJAX
$(document).ready(function() {
    $('#outsideskillform').ajaxForm(function() {
    	alert("Saved Work and Education");
    });
});

// Submit  'refereeform'  data via AJAX
$(document).ready(function() {
    $('#refereeform').ajaxForm(function() {
    	alert("Saved Referees");
    });
});
