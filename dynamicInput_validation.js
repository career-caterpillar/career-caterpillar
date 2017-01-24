
/** adds a new input field for languages */

/*KC

these are helper funcitons for edit/delete/feedback functionality

*/

function bubbleyearachieve(bubblenode){
    var parentnode = bubblenode.parentNode;

    console.log(parentnode);
    var cmp = Number(bubblenode.getElementsByTagName('select')[0].value);// find year value of input field that belongs to input feild wrapper

    if (bubblenode.nextSibling !== 'null'){
      var nextsibval =  Number(bubblenode.nextSibling.getElementsByTagName('select')[0].value);
    }else {
      return;
    }

    console.log(nextsibval);


      while (cmp < nextsibval){
          parentnode.insertBefore(bubblenode.nextSibling, bubblenode);
          nextsibval =  Number(bubblenode.nextSibling.getElementsByTagName('select')[0].value);
      }

}

function jumpBack(node, num){ // traverse tree back a number of parentnodes from a known node

    var working = node;

    for (i = 0; i < num; i++) {
      working = working.parentNode;
    }

    return working;
}


function deleteSection(inputnode){// deletes feedback div and form feilds associated with it when user clicks delete.

  jumpBack(inputnode,2).remove();

}

function hidehead(parentnode){
   parentnode.children[0].style.display = 'none';
   parentnode.children[1].style.display = 'none';
}

function showhead(parentnode){
   parentnode.children[0].style.display = 'block';
   parentnode.children[1].style.display = 'block';
}


function hideedits(parentnode){
  var elems = parentnode.getElementsByClassName('editbtns');
  for (i = 0 ; i < elems.length; i++){
    elems[i].style.display = 'none';
  }
}

function showedits(parentnode){
  var elems = parentnode.getElementsByClassName('editbtns');
  for (i = 0 ; i < elems.length; i++){
    elems[i].style.display = 'inline-block';
  }
}

function hidefinished(parentnode){
  var elems = parentnode.getElementsByClassName('finishedbtns');
  for (i = 0 ; i < elems.length; i++){
    elems[i].style.display = 'none';
  }
}

function hidedeletes(parentnode){
  var elems = parentnode.getElementsByClassName('deletebtns');
  for (i = 0 ; i < elems.length; i++){
    elems[i].style.display = 'none';
  }
}

function showdeletes(parentnode){
  var elems = parentnode.getElementsByClassName('deletebtns');
  for (i = 0 ; i < elems.length; i++){
    elems[i].style.display = 'inline-block';
  }
}

function hideallnestedinputs(parentnode){ // travserse children nodes and hide all inputs
   var elems = parentnode.getElementsByClassName('inputfields');
   for (i = 0 ; i < elems.length; i++){
     elems[i].style.display = 'none';
   }
}


function editSection(inputnode){// hides all other irrelevent elements and shows the relevent elements of the associated feedback div

  hidehead(jumpBack(inputnode,3));
  hideallnestedinputs(jumpBack(inputnode,3));
  hideedits(jumpBack(inputnode,3));
  hidedeletes(jumpBack(inputnode,3));

  inputnode.nextSibling.style.display = 'inline-block';
  jumpBack(inputnode,1).nextSibling.style.display = 'block';

  //console.log(jumpBack(inputnode,1).nextSibling);

}

function finishSection(inputnode){

  var yearVal = String(jumpBack(inputnode,2).getElementsByTagName('select')[0].value);
  var achVal =  String(jumpBack(inputnode,2).getElementsByTagName('textarea')[0].value);
  var workingnode = jumpBack(inputnode,2);

  hideallnestedinputs(jumpBack(inputnode,3));
  hidefinished(jumpBack(inputnode,3));
  showhead(jumpBack(inputnode,3));
  showdeletes(jumpBack(inputnode,3));
  showedits(jumpBack(inputnode,3));

  workingnode.appendChild(buildFeedback(yearVal, achVal));
  workingnode.getElementsByClassName("feedback")[0].remove();

}

function finishrefsSection(inputnode){

  var nameVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[0].value);
  var companyVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[1].value);
  var positionVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[2].value);
  var emailVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[3].value);
  var phoneVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[4].value);

  var workingnode = jumpBack(inputnode,2);

  hideallnestedinputs(jumpBack(inputnode,3));
  hidefinished(jumpBack(inputnode,3));
  showhead(jumpBack(inputnode,3));
  showdeletes(jumpBack(inputnode,3));
  showedits(jumpBack(inputnode,3));

  workingnode.appendChild(buildrefFeedback(nameVal, companyVal,positionVal, emailVal, phoneVal));
  workingnode.getElementsByClassName("feedback")[0].remove();

}

function buildFeedback(year, achievments){ /*builds a feedback div programmatically*/

    var newdiv = document.createElement('div');//create div
    newdiv.className = "feedback";//name div "feedback" for css

    var year_heading = "<h2 style= 'text-decoration: underline;'>Year:</h2>"; //create heading
    var yearval = "<p>" + year + "</p>";// enter year into p tag
    var achievments_heading = "<h2 style= 'text-decoration: underline;'>Achievements:</h2>"; //create achievment heading
    var achval = "<p>" + achievments + "</p>";// enter achievment into p tag


    var editbtn =  '<input type="button" class="btn btn-primary btn-outline btn-sm  editbtns" value="edit"  onClick="editSection(this);">';// create edit button
    var finishedbtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  finishedbtns" value="finished" style = "display : none"  onClick="finishSection(this);">';// create finished button
    var deletebtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  deletebtns" value="delete" onClick="deleteSection(this);">';// create delete button

    newdiv.innerHTML = year_heading + yearval +
                        achievments_heading + achval +
                        editbtn + finishedbtn + deletebtn ;//concatenate all and insert into newDiv
    return newdiv;
}

function buildrefFeedback(name, company,position, email, phone){ /*builds a feedback div programmatically*/

    var newdiv = document.createElement('div');//create div
    newdiv.className = "feedback";//name div "feedback" for css

    var nameVal = "<h2 style= 'text-decoration: underline;'>Name:</h2>" +  "<p>" + name + "</p>"; //create heading
    var companyVal = "<h2 style= 'text-decoration: underline;'>Company:</h2>" +  "<p>" + company + "</p>";// enter year into p tag
    var positionVal = "<h2 style= 'text-decoration: underline;'>Position:</h2>" +  "<p>" + position + "</p>";//create achievment heading
    var emailVal = "<h2 style= 'text-decoration: underline;'>Email:</h2>" +  "<p>" + email + "</p>";// enter achievment into p tag
    var phoneVal = "<h2 style= 'text-decoration: underline;'>Phone:</h2>" +  "<p>" + phone + "</p>";// enter achievment into p tag


    var editbtn =  '<input type="button" class="btn btn-primary btn-outline btn-sm  editbtns" value="edit"  onClick="editSection(this);">';// create edit button
    var finishedbtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  finishedbtns" value="finished" style = "display : none"  onClick="finishrefsSection(this);">';// create finished button
    var deletebtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  deletebtns" value="delete" onClick="deleteSection(this);">';// create delete button

    newdiv.innerHTML = nameVal + companyVal +
                        positionVal + emailVal + phoneVal +
                        editbtn + finishedbtn + deletebtn ;//concatenate all and insert into newDiv
    return newdiv;
}

function addLanguageInput(divName) {

    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<input type='text' required='required' name='lang[]'>";
    console.log(newdiv.innerHTML);
    document.getElementById(divName).appendChild(newdiv);

}

/** adds new input fields for employment */
function addEmployInput(divName) {
    var newdiv = document.createElement('div');
    /** MKH: Enables month/year dropdown to be available as a dynamic input **/
    newdiv.innerHTML = "<hr><h2>Position Title</h2> <input type='text' name='employment_posn[]'> <h2>City</h2> <input type='text' name='employment_city[]'> <h2>Country</h2> <input type='text' name='employment_country[]'> <h2>Start Date</h2> <select name='employment_start_month[]'> <option value='' disabled selected>Month</option> <option value='Jan'>Janaury</option> <option value='Feb'>February</option> <option value='Mar'>March</option> <option value='Apr'>April</option> <option value='May'>May</option> <option value='Jun'>June</option> <option value='Jul'>July</option> <option value='Aug'>August</option> <option value='Sep'>September</option> <option value='Oct'>October</option> <option value='Nov'>November</option> <option value='Dec'>December</option> </select> <select name='employment_start_year[]'> "+ years_2050_1990 + " </select> <h2>Do you still work here?</h2> <input type='radio' name='still_work' value='yes'> Yes <input type='radio' name='still_work' value='no'> No <h2>End Date</h2> <h3>(if answer was 'no' above)</h3> <select name='employment_end_month[]'> <option value='' disabled selected>Month</option> <option value='Jan'>Janaury</option> <option value='Feb'>February</option> <option value='Mar'>March</option> <option value='Apr'>April</option> <option value='May'>May</option> <option value='Jun'>June</option> <option value='Jul'>July</option> <option value='Aug'>August</option> <option value='Sep'>September</option> <option value='Oct'>October</option> <option value='Nov'>November</option> <option value='Dec'>December</option> </select> <select name='employment_end_year[]'> "+ years_2050_1990 + " </select> <h2>Responsibilities</h2> <textarea name='employment_responsibility[]' class = 'largetextfield' cols='70' rows='7'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
}

/** adds new input fields for education */
function addEducationInput(divName) {
    var newdiv = document.createElement('div');
    /** MKH: Enables year dropdown to be available as a dynamic input **/
    newdiv.innerHTML = "<hr><h2>Year<span class='redAsterisk'>*</span></h2> <select name='education_year[]'> "+ years_2050_1990 + " </select> <h2>Achievements<span class='redAsterisk'>*</span></h2> <textarea name='education_achievements[]' class = 'largetextfield' cols='70' rows='7' required></textarea>";
    document.getElementById(divName).appendChild(newdiv);
}

/** adds a new input field for achievements */
function addAchievementInput(divName) {
    var newdiv = document.createElement('div');
    /** MKH: Enables year dropdown to be available as a dynamic input **/
    newdiv.innerHTML = "<hr><h2>Year </h2><br> <select name='achieve_year[]'> "+ years_2050_1990 + " </select><h2>Achievements</h2><br><textarea class='largetextfield' name='awards_achievements[]' cols='70' rows='7'></textarea>";
    document.getElementById(divName).appendChild(newdiv);
}


function deleteSection(inputnode){// deletes feedback div and form feilds associated with it when user clicks delete.

  jumpBack(inputnode,2).remove();
  countReferee--;

}

function editSection(inputnode){

  hidehead(jumpBack(inputnode,3));
  hideallnestedinputs(jumpBack(inputnode,3));
  hideedits(jumpBack(inputnode,3));
  hidedeletes(jumpBack(inputnode,3));

  inputnode.nextSibling.style.display = 'inline-block'; // display finished button
  jumpBack(inputnode,1).previousSibling.style.display = 'block';
  var childrenNo =  inputnode.parentNode.children.length;

}


/* adds new input fields for extracurricular activities */

function addExtracurricularInput(divName) {

    var parentnode = document.getElementById(divName);
    var childrenNo = parentnode.children.length;
    var firstNode = parentnode.children[0];
    var lastNode = parentnode.children[(childrenNo -1)];
    var newdiv = document.createElement('div');
    var wrapper = document.createElement('div');//required for styleing

    newdiv.className = 'inputfields';
    wrapper.className = 'userinput';

    //console.log(childrenNo);

    var yearVal = String(firstNode.getElementsByTagName('select')[0].value);
    var achVal =  String(firstNode.getElementsByTagName('textarea')[0].value);

    achVal=achVal.replace(/\r\n/g, '<br>');// replace plaintext carraige returns with html so achievements are displayed how they were entered
    achVal=achVal.replace(/\n/g, '<br>');
    achVal=achVal.replace(/\r/g, '<br>');


    if ((firstNode.style.display != 'none')){

      if ((yearVal || achVal) !== ""){
        /** MKH: Enables year dropdown to be available as a dynamic input **/
        newdiv.innerHTML = "<hr><h2>Year</h2> <select name='extracurricular_year[]'> "+ years_2050_1990 + " </select> <h2>Achievements</h2> <textarea name='extracurricular_achievements[]' class = 'largetextfield' cols='70' rows='7'></textarea>";

        firstNode.style.display = 'none'; // hide firstnode

        parentnode.insertBefore(wrapper,firstNode);
        firstNode = parentnode.children[0];//refresh list to reference wrapper

        wrapper.appendChild(firstNode.nextSibling);
        wrapper.appendChild(buildFeedback(yearVal, achVal)); // fill wrapper with divs

        parentnode.insertBefore(newdiv,firstNode);
        parentnode.insertBefore(document.getElementById("addxtracrr"),parentnode.children[1]);// move add extracurricular achievement

        bubbleyearachieve(wrapper);

      }else {
          alert("Fields Empty");
      }
    }else{
      firstNode.style.display = 'block';
    }

}



var countReferee = 2;
/** adds new input fields for referees */
function addRefereeInput(divName) {

    var parentnode = document.getElementById(divName);
    var childrenNo = parentnode.children.length;
    var firstNode = parentnode.children[0];
    var lastNode = parentnode.children[(childrenNo -1)];
    var newdiv = document.createElement('div');
    var wrapper = document.createElement('div');//required for styleing

    newdiv.className = 'inputfields';
    wrapper.className = 'userinput';

    var nameVal = String(firstNode.getElementsByTagName('input')[0].value);
    var companyVal = String(firstNode.getElementsByTagName('input')[1].value);
    var positionVal = String(firstNode.getElementsByTagName('input')[2].value);
    var emailVal = String(firstNode.getElementsByTagName('input')[3].value);
    var phoneVal = String(firstNode.getElementsByTagName('input')[4].value);

    if ((firstNode.style.display != 'none')){

        if ((nameVal || companyVal || positionVal || emailVal || phoneVal) !== ""){

          newdiv.innerHTML = "<hr><h2>Referee</h2><h3>Name<span class='redAsterisk'>*</span></h3><input type='text' name='referee_name[]' required><h3>Company</h3><input type='text' name='referee_company[]'><h3>Position<span class='redAsterisk'>*</span></h3><input type='text' name='referee_position[]' required><h3>Email<span class='redAsterisk'>*</span></h3><input type='text' name='referee_email[]' required><h3>Phone<span class='redAsterisk'>*</span></h3><input type='text' name='referee_phone[]' required>";
          firstNode.style.display = 'none'; // hide firstnode

          parentnode.insertBefore(wrapper,firstNode);
          firstNode = parentnode.children[0];//refresh list to reference wrapper

          wrapper.appendChild(firstNode.nextSibling);
          wrapper.appendChild(buildrefFeedback(nameVal, companyVal,positionVal, emailVal, phoneVal)); // fill wrapper with divs

          parentnode.insertBefore(newdiv,firstNode);
          parentnode.insertBefore(document.getElementById("refsclick"),parentnode.children[1]);// move add extracurricular achievement

        //  bubbleyearachieve(wrapper);
        }else {
            alert("Fields Empty");
        }

    }else{
      firstNode.style.display = 'block';
    }

    countReferee++;
}


/** validates each form field on the personal details page */
function validateForm1() {;

    var output_msg = "";


    if (document.myForm1.first_name.value.trim() == "") {
        output_msg += "* The 'First Name' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.first_name.value))) {
        output_msg += "* The 'First Name' field can only contain text!\n";
    }

    if (document.myForm1.last_name.value.trim() == "") {
        output_msg += "* The 'Last Name' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.last_name.value))) {
        output_msg += "* The 'Last Name' field can only contain text!\n";
    }
    
    if (document.myForm1.street_num.value.trim() == "") {                   //MKH: Validates Street Number to be numeric only. Identified in Regression Testing 24/01/2017
        output_msg += "* The 'Street Number' field is empty!\n";
    }
    else if (!(num_only.test(document.myForm1.street_num.value))) {
        output_msg += "* The 'Street Number' field can only contain numbers!\n";
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

    if (!(num_only.test(document.myForm1.phone.value))) {               //MKH: Makes phone field to be non-mandatory, but allows numbers only if input entered.
        output_msg += "* The 'Phone' field can only contain numbers and spaces!\n";
    }

    if (document.myForm1.mobile.value.trim() == "") {                   //MKH: Prompts user to enter value if input missing
        output_msg += "* The 'Mobile' field is empty!\n";
    }
    else if (!(num_only.test(document.myForm1.mobile.value))) {
        output_msg += "* The 'Mobile' field can only contain numbers and spaces!\n";
    }

    if (!(email_yo.test(document.myForm1.email.value)) || document.myForm1.email.value.trim() == "") {
        output_msg += "* The 'Email' entered is invalid! Enter email in the format of someone@example.com\n";
    } //MKH: Re-instate missing email validation

    //MKH: Makes school field to be non-mandatory, but allows text only if input entered.
    if (document.myForm1.school_name.value.trim() !== "" && !(text_only.test(document.myForm1.school_name.value))) {
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
    var output_msg = "";

    var ans1 = document.getElementsByName("referee_name[]");
    var ans2 = document.getElementsByName("referee_position[]");
    var ans3 = document.getElementsByName("referee_email[]");
    var ans4 = document.getElementsByName("referee_phone[]");
    var ans5 = document.getElementsByName("referee_company[]");
    for (i = 0; i < ans1.length; i++) {
        if (ans1[i].value.trim() == "") {
            output_msg += "* The Referee [" + (1 + i) + "] 'Name' field is empty!\n";
        }
        else if (!(text_only.test(ans1[i].value))) {
            output_msg += "* The Referee [" + (1 + i) + "] 'Name' field can only contain text!\n";
        }
        /** MKH: Updates validation of field "referee_company" to contain text input only if entered**/
        if (ans5[i].value.trim() !== ""  && !(text_only.test(ans5[i].value))) {
            output_msg += "* The Referee [" + (1 + i) + "] 'Company' field can only contain text!\n";
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
            output_msg += "* The Referee [" + (1 + i) + "] 'Phone' field can only contain numbers and spaces!\n";
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
    var output_msg = "";

    var element = document.getElementsByName("education_year[]");
    var element2 = document.getElementsByName("education_achievements[]");
    for (i = 0; i < element.length; i++) {
        /** MKH: Removed validation code for Year due to change in input design from text to dropdown **/
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

/** MKH: validates that atleast 3 qualities are selected on the personal qualities page */
function validateForm4() {
	var numChecked = 0;

	$("input:checkbox").each(function() {
        if($(this).is(':checked')){
        numChecked++;
        }
	});

    if (numChecked<3) {
        alert("Please make sure to have selected atleast 3 qualities");
        return false;
    }
    return true;
}

/** LV returns whether or not the personal statement section has been filled out  */
function personalStatementFilled() {
  if ($.trim($('#pstextarea').val()).length < 1) {
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

/** MKH: Generates and stores the option tags for year dropdown dynamically **/
var years_2050_1990 = "";
var current_year = new Date().getFullYear();

for(i=2050; i>=1990; i--){
    if(i==current_year){
        years_2050_1990 += "<option value="+i+" selected>"+i+"</option>";
    } else {
        years_2050_1990 += "<option value="+i+">"+i+"</option>";
    }
}
/** MKH: Generation logic ends **/

/** MKH: Validation regexes stored here **/
var text_only = /^[a-zA-Z ]+$/;
var num_only = /^(?=.*\d)[\d ]+$/;
var email_yo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/** MKH: Regexes ends **/

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
