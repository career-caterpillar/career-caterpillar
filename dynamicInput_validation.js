

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

/** adds new input fields for extracurricular activities */
function addExtracurricularInput(divName) {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<hr><strong>Year </strong><br><input type='text' name='extracurricular_year[]'><br><br><strong>Achievements</strong><br><textarea name='extracurricular_achievements[]' cols='70' rows='7'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
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

    if (document.myForm1.name.value.trim() == "") {
        alert("The 'Name' field is empty!");
        document.myForm1.name.focus();
        return false;
    }
    if (!(text_only.test(document.myForm1.name.value))) {
        alert("The 'Name' field can only contain text!");
        document.myForm1.name.focus();
        return false;
    }
    if (document.myForm1.street_add.value.trim() == "") {
        alert("The 'Street Address' field is empty!");
        document.myForm1.street_add.focus();
        return false;
    }
    if (document.myForm1.suburb_add.value.trim() == "") {
        alert("The 'Suburb' field is empty!");
        document.myForm1.suburb_add.focus();
        return false;
    }
    if (!(text_only.test(document.myForm1.suburb_add.value))) {
        alert("The 'Suburb' can only contain text!");
        document.myForm1.suburb_add.focus();
        return false;
    }
    if (document.myForm1.city_add.value.trim() == "") {
        alert("The 'City' field is empty!");
        document.myForm1.city_add.focus();
        return false;
    }
    if (!(text_only.test(document.myForm1.city_add.value))) {
        alert("The 'City' field can only contain text!");
        document.myForm1.city_add.focus();
        return false;
    }
    if (!(num_only.test(document.myForm1.phone.value))) {
        alert("The 'Phone' field can only contain numbers!");
        document.myForm1.phone.focus();
        return false;
    }
    if (!(num_only.test(document.myForm1.mobile.value))) {
        alert("The 'Mobile' field can only contain numbers!");
        document.myForm1.mobile.focus();
        return false;
    }
    if (!(email_yo.test(document.myForm1.email.value)) || document.myForm1.email.value.trim() == "") {
        alert("The 'Email' entered is invalid! Enter email in the format of someone@example.com");
        document.myForm1.email.focus();
        return false;
    }

    if (document.myForm1.drivers.value.trim() == "") {
        alert("The 'Drivers License' field is empty!");
        document.myForm1.drivers.focus();
        return false;
    }
    if (document.myForm1.school_name.value.trim() == "") {
        alert("The 'School' field is empty!");
        document.myForm1.school_name.focus();
        return false;
    }
    if (!(text_only.test(document.myForm1.school_name.value))) {
        alert("The 'School' field can only contain text!");
        document.myForm1.school_name.focus();
        return false;
    }
    return true;
}

/** validates each form field on the referees page */
function validateForm2() {
    var text_only = /^[a-zA-Z ]+$/;
    var num_only = /^[0-9]*$/;
    var email_yo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var ans1 = document.getElementsByName("referee_name[]");
    var ans2 = document.getElementsByName("referee_position[]");
    var ans3 = document.getElementsByName("referee_email[]");
    var ans4 = document.getElementsByName("referee_phone[]");
    for (i = 0; i < ans1.length; i++) {
        if (ans1[i].value.trim() == "") {
            alert("The Referee [" + (1 + i) + "] 'Name' field is empty!");
            return false;
        }
        if (!(text_only.test(ans1[i].value))) {
            alert("The Referee [" + (1 + i) + "] 'Name' field can only contain text!");
            return false;
        }
        if (ans2[i].value.trim() == "") {
            alert("The Referee [" + (1 + i) + "] 'Position' field is empty!");
            return false;
        }
        if (!(email_yo.test(ans3[i].value)) || ans3[i].value.trim() == "") {
            alert("The Referee [" + (1 + i) + "] 'Email' entered is invalid! Enter email in the format of someone@example.com");
            return false;
        }
        if (!(num_only.test(ans4[i].value))) {
            alert("The Referee [" + (1 + i) + "] 'Phone' field can only contain numbers!");
            return false;
        }
    }
    return true;
}

/** validates each form field of the education section of the outside skills page */
function validateForm3() {
    var num_only = /^[0-9]*$/;

    var element = document.getElementsByName("education_year[]");
    var element2 = document.getElementsByName("education_achievements[]");
    for (i = 0; i < element.length; i++) {
        if (element[i].value.trim() == "" || !(num_only.test(element[i].value))) {
            alert("The year of education '" + element[i].value + "' can only contain numbers eg 2017!");
            return false;
        }
        if (element2[i].value.trim() == "") {
            alert("The educational achievements must not be empty. ");
            return false;
        }
    }
    return true;
}

/** validates each form field on the about me page */
function validateForm4() {
    var all_achievements = new Array();
    for (var inputNum = 1; inputNum <= 6; inputNum++) {
        var answer = document.getElementById("qual" + inputNum);
        all_achievements.push(answer[answer.selectedIndex].value);
    }
    if ((new Set(all_achievements)).size !== all_achievements.length) {
        alert(l);
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
