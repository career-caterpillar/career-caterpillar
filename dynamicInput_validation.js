/** adds a new input field for languages */

/*KC
these are helper funcitons for edit/delete/feedback functionality
*/

function convertMonthtoNumber(month){
  switch (month) {
    case "Jan":
      return 1;
      break;

    case "Feb":
      return 2;
      break;

    case "Mar":
      return 3;
      break;

    case "Apr":
      return 4;
      break;

    case "May":
      return 5;
      break;

    case "Jun":
      return 6;
      break;

    case "Jul":
      return 7;
      break;

    case "Aug":
      return 8;
      break;

    case "Sep":
      return 9;
      break;

    case "Oct":
      return 10;
      break;

    case "Nov":
      return 11;
      break;

    case "Dec":
      return 12;
      break;


    default:
      break;

  }

}

function bubbleyearEmployment(bubblenode){
    var parentnode = bubblenode.parentNode;


    var cmpMonth = Number(convertMonthtoNumber(bubblenode.getElementsByTagName('select')[0].value));// find year value of input field that belongs to input feild wrapper
    var cmpYear = Number(bubblenode.getElementsByTagName('select')[1].value);

    console.log(bubblenode.getElementsByTagName('select')[0].value);
    console.log(cmpYear);

    var cmp = cmpMonth*cmpYear;


    if (bubblenode.nextSibling !== 'null'){
      var nextsibvalMonth =  convertMonthtoNumber(bubblenode.nextSibling.getElementsByTagName('select')[0].value);
      var nextsibvalYear =   Number(bubblenode.nextSibling.getElementsByTagName('select')[1].value);
      nextsibval = nextsibvalMonth*nextsibvalYear;
    }else {
      return;
    }

    console.log(cmp);
    console.log(nextsibval);


      while (cmp < nextsibval){
          parentnode.insertBefore(bubblenode.nextSibling, bubblenode);
          nextsibval =  Number(bubblenode.nextSibling.getElementsByTagName('select')[0].value);
      }

}
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

function deletethis(inputnode){
  jumpBack(inputnode,1).remove();
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

function finishempSection(inputnode) {

  var posVal =  String(jumpBack(inputnode,2).getElementsByTagName('input')[0].value);
  var orgVal =  String(jumpBack(inputnode,2).getElementsByTagName('input')[1].value);
  var cityVal =  String(jumpBack(inputnode,2).getElementsByTagName('input')[2].value);
  var countryVal = String(jumpBack(inputnode,2).getElementsByTagName('input')[3].value);
  var startmonthVal = String(jumpBack(inputnode,2).getElementsByTagName('select')[0].value);
  var startyearVal = String(jumpBack(inputnode,2).getElementsByTagName('select')[1].value);
  var stillValYes = String(jumpBack(inputnode,2).getElementsByTagName('input')[4].value);
  var stillValNo = String(jumpBack(inputnode,2).getElementsByTagName('input')[5].value);
  var endmonthVal = String(jumpBack(inputnode,2).getElementsByTagName('select')[2].value);
  var endyearVal = String(jumpBack(inputnode,2).getElementsByTagName('select')[3].value);
  var responsibilitiesVal = String(jumpBack(inputnode,2).getElementsByTagName('textarea')[0].value);

  var stillVal = "select choice";

  if (stillValYes === "yes"){
    stillVal = "yes";

  }
  if (stillValNo === "no") {
    stillVal = "no";
  }

  responsibilitiesVal=responsibilitiesVal.replace(/\r\n/g, '<br>');// replace plaintext carraige returns with html so achievements are displayed how they were entered
  responsibilitiesVal=responsibilitiesVal.replace(/\n/g, '<br>');
  responsibilitiesVal=responsibilitiesVal.replace(/\r/g, '<br>');

  var workingnode = jumpBack(inputnode,2);

  hideallnestedinputs(jumpBack(inputnode,3));
  hidefinished(jumpBack(inputnode,3));
  showhead(jumpBack(inputnode,3));
  showdeletes(jumpBack(inputnode,3));
  showedits(jumpBack(inputnode,3));

  workingnode.appendChild(buildempFeedback(posVal, orgVal ,cityVal, countryVal, startmonthVal, startyearVal,stillVal,endmonthVal,endyearVal, responsibilitiesVal));
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

function buildempFeedback(position, organization, city, country, start_month, start_year,stillwork,end_month,end_year, responsibilities){

  var newdiv = document.createElement('div');//create div
  newdiv.className = "feedback";//name div "feedback" for css

  var posVal = "<h2 style= 'text-decoration: underline;'>Position:</h2>" +  "<p>" + position + "</p>"; //create heading
  var orgVal = "<h2 style= 'text-decoration: underline;'>Organization:</h2>" +  "<p>" + organization + "</p>"; //create heading
  var cityVal = "<h2 style= 'text-decoration: underline;'>City:</h2>" +  "<p>" + city + "</p>";// enter year into p tag
  var countryVal = "<h2 style= 'text-decoration: underline;'>Country:</h2>" +  "<p>" + country + "</p>";//create achievment heading
  var startmonthVal = "<h2 style= 'text-decoration: underline;'>Start Month:</h2>" +  "<p>" + start_month + "</p>";// enter achievment into p tag
  var startyearVal = "<h2 style= 'text-decoration: underline;'>Start Year:</h2>" +  "<p>" + start_year + "</p>";// enter achievment into p tag
  var stillVal = "<h2 style= 'text-decoration: underline;'>Still Working:</h2>" +  "<p>" + stillwork + "</p>";
  var endmonthVal = "<h2 style= 'text-decoration: underline;'>End Month:</h2>" +  "<p>" + end_month + "</p>";
  var endyearVal = "<h2 style= 'text-decoration: underline;'>End Year:</h2>" +  "<p>" + end_year + "</p>";
  var responsibilitiesVal = "<h2 style= 'text-decoration: underline;'>Responsibilities:</h2>" +  "<p>" + responsibilities + "</p>";

  var editbtn =  '<input type="button" class="btn btn-primary btn-outline btn-sm  editbtns" value="edit"  onClick="editSection(this);">';// create edit button
  var finishedbtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  finishedbtns" value="finished" style = "display : none"  onClick="finishempSection(this);">';// create finished button
  var deletebtn = '<input type="button" class="btn btn-primary btn-outline btn-sm  deletebtns" value="delete" onClick="deleteSection(this);">';// create delete button

  newdiv.innerHTML = posVal +orgVal + cityVal + countryVal + startmonthVal + startyearVal + stillVal + endmonthVal +
                      endyearVal + responsibilitiesVal +
                      editbtn + finishedbtn + deletebtn ;//concatenate all and insert into newDiv

  return newdiv;

}

function addLanguageInput(divName) {

    var newdiv = document.createElement('div');
    newdiv.innerHTML = "<input type='text' required='required' name='lang[]'> <input type='button' class='btn btn-primary btn-outline btn-sm  deletelang' value='delete' onClick='deletethis(this);'>";
    console.log(newdiv.innerHTML);
    document.getElementById(divName).appendChild(newdiv);

}

/** adds new input fields for employment */
function addEmployInput(divName) {

    var parentnode = document.getElementById(divName);
    var childrenNo = parentnode.children.length;
    var firstNode = parentnode.children[0];
    var lastNode = parentnode.children[(childrenNo -1)];
    var newdiv = document.createElement('div');
    var wrapper = document.createElement('div');//required for styleing
    var stillVal = "Select Choice";

    newdiv.className = 'inputfields';
    wrapper.className = 'userinput';


    var posVal =  String(firstNode.getElementsByTagName('input')[0].value);
    var orgVal =  String(firstNode.getElementsByTagName('input')[1].value);
    var cityVal =  String(firstNode.getElementsByTagName('input')[2].value);
    var countryVal = String(firstNode.getElementsByTagName('input')[3].value)
    var startmonthVal = String(firstNode.getElementsByTagName('select')[0].value);
    var startyearVal = String(firstNode.getElementsByTagName('select')[1].value);
    var stillValYes = String(firstNode.getElementsByTagName('input')[4].value);
    var stillValNo = String(firstNode.getElementsByTagName('input')[5].value);
    var endmonthVal = String(firstNode.getElementsByTagName('select')[2].value);
    var endyearVal = String(firstNode.getElementsByTagName('select')[3].value);
    var responsibilitiesVal = String(firstNode.getElementsByTagName('textarea')[0].value);

    if (stillValYes === "yes"){
      stillVal = "yes";

    }

    if (stillValNo === "no") {
      stillVal = "no";
    }


    responsibilitiesVal=responsibilitiesVal.replace(/\r\n/g, '<br>');// replace plaintext carraige returns with html so achievements are displayed how they were entered
    responsibilitiesVal=responsibilitiesVal.replace(/\n/g, '<br>');
    responsibilitiesVal=responsibilitiesVal.replace(/\r/g, '<br>');

    if ((firstNode.style.display != 'none')){

        if ((posVal || cityVal|| orgVal || countryVal || startmonthVal || startyearVal|| endmonthVal|| endyearVal|| responsibilitiesVal) !== ""){

          newdiv.innerHTML = "<hr><h2>Position Title</h2> <input type='text' name='employment_posn[]'><h2>Organization</h2><input type='text' name='employment_orgnz[]'> <h2>City</h2> <input type='text' name='employment_city[]'> <h2>Country</h2> <input type='text' name='employment_country[]'> <h2>Start Date</h2> <select name='employment_start_month[]'> <option value='' disabled selected>Month</option> <option value='Jan'>Janaury</option> <option value='Feb'>February</option> <option value='Mar'>March</option> <option value='Apr'>April</option> <option value='May'>May</option> <option value='Jun'>June</option> <option value='Jul'>July</option> <option value='Aug'>August</option> <option value='Sep'>September</option> <option value='Oct'>October</option> <option value='Nov'>November</option> <option value='Dec'>December</option> </select> <select name='employment_start_year[]'> "+ years_2050_1990 + " </select> <h2>Do you still work here?</h2> <input type='radio' name='still_work' value='yes'> Yes <input type='radio' name='still_work' value='no'> No <h2>End Date</h2> <h3>(if answer was 'no' above)</h3> <select name='employment_end_month[]'> <option value='' disabled selected>Month</option> <option value='Jan'>Janaury</option> <option value='Feb'>February</option> <option value='Mar'>March</option> <option value='Apr'>April</option> <option value='May'>May</option> <option value='Jun'>June</option> <option value='Jul'>July</option> <option value='Aug'>August</option> <option value='Sep'>September</option> <option value='Oct'>October</option> <option value='Nov'>November</option> <option value='Dec'>December</option> </select> <select name='employment_end_year[]'> "+ years_2050_1990 + " </select> <h2>Responsibilities</h2> <textarea name='employment_responsibility[]' class = 'largetextfield' cols='70' rows='7'></textarea>";
          document.getElementById(divName).appendChild(newdiv);
          firstNode.style.display = 'none'; // hide firstnode

          parentnode.insertBefore(wrapper,firstNode);
          firstNode = parentnode.children[0];//refresh list to reference wrapper

          wrapper.appendChild(firstNode.nextSibling);
          wrapper.appendChild(buildempFeedback(posVal,orgVal, cityVal, countryVal, startmonthVal, startyearVal,stillVal,endmonthVal,endyearVal, responsibilitiesVal)); // fill wrapper with divs

          parentnode.insertBefore(newdiv,firstNode);
          parentnode.insertBefore(document.getElementById("addemp"),parentnode.children[1]);// move add extracurricular achievement

          bubbleyearEmployment(wrapper);

        }else {
            alert("Fields Empty");
        }

    }else{
      firstNode.style.display = 'block';
    }



}

function addEducationInput(divName) {

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
            newdiv.innerHTML = "<hr><h2>Year<span class='redAsterisk'>*</span></h2> <select name='education_year[]'> "+ years_2050_1990 + " </select> <h2>Achievements<span class='redAsterisk'>*</span></h2> <textarea name='education_achievements[]' class = 'largetextfield' cols='70' rows='7' required></textarea>";
        firstNode.style.display = 'none'; // hide firstnode

        parentnode.insertBefore(wrapper,firstNode);
        firstNode = parentnode.children[0];//refresh list to reference wrapper

        wrapper.appendChild(firstNode.nextSibling);
        wrapper.appendChild(buildFeedback(yearVal, achVal)); // fill wrapper with divs

        parentnode.insertBefore(newdiv,firstNode);
        parentnode.insertBefore(document.getElementById("addedu"),parentnode.children[1]);// move add extracurricular achievement

        bubbleyearachieve(wrapper);

      }else {
          alert("Fields Empty");
      }
    }else{
      firstNode.style.display = 'block';
    }

}

function addAchievementInput(divName) {

    var parentnode = document.getElementById(divName);
    var childrenNo = parentnode.children.length;
    var firstNode = parentnode.children[0];
    var lastNode = parentnode.children[(childrenNo -1)];
    var newdiv = document.createElement('div');
    var wrapper = document.createElement('div');//required for styleing

    /** MKH: Enables year dropdown to be available as a dynamic input *
    newdiv.innerHTML = "<hr><h2>Year </h2><br> <select name='achieve_year[]'> "+ years_2050_1990 + " </select><h2>Achievements</h2><br><textarea class='largetextfield' name='awards_achievements[]' cols='70' rows='7'></textarea>";
    document.getElementById(divName).appendChild(newdiv);*/



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
          newdiv.innerHTML = "<hr><h2>Year </h2><br> <select name='achieve_year[]'> "+ years_2050_1990 + " </select><h2>Achievements</h2><br><textarea class='largetextfield' name='awards_achievements[]' cols='70' rows='7'></textarea>";

        firstNode.style.display = 'none'; // hide firstnode

        parentnode.insertBefore(wrapper,firstNode);
        firstNode = parentnode.children[0];//refresh list to reference wrapper

        wrapper.appendChild(firstNode.nextSibling);
        wrapper.appendChild(buildFeedback(yearVal, achVal)); // fill wrapper with divs

        parentnode.insertBefore(newdiv,firstNode);
        parentnode.insertBefore(document.getElementById("addach"),parentnode.children[1]);// move add extracurricular achievement

        bubbleyearachieve(wrapper);

      }else {
          alert("Fields Empty");
      }
    }else{
      firstNode.style.display = 'block';
    }

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
    //MKH: Allows alphanumeric input e.g. 7A or 22/8 as the Street Number

    if (document.myForm1.street_add.value.trim() == "") {
        output_msg += "* The 'Street Name' field is empty!\n";
    }
    else if (!(text_only.test(document.myForm1.street_add.value))) {     //MKH: Validates Street Name to allow text input only.
        output_msg += "* The 'Street Name' field can only contain text!\n";
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

    if (document.myForm1.phone.value.trim() !== "" && !(num_only.test(document.myForm1.phone.value))) {               //MKH: Makes phone field to be non-mandatory, but allows numbers only if input entered.
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

/** LV returns whether or not the optional personal statement section has been filled out  */
function personalStatementFilled() {
  if ($.trim($('textarea[name="personal_statement"]').val()).length < 1) {
    return false;
  }

  return true;
}

/** LV returns whether or not the optional achievements & awards section has been filled out  */
function achievementsFilled() {
  if ($.trim($('textarea[name="awards_achievements[]"]').val()).length < 1) {
    return false;
  }

  return true;
}

/** LV returns whether or not the optional extracurricular section has been filled out  */
function extracurricularFilled() {
  if ($.trim($('textarea[name="extracurricular_achievements[]"]').val()).length < 1) {
    return false;
  }

  return true;
}

/** LV returns whether or not the optional other skills section has been filled out  */
function otherSkillsFilled() {
  if ($.trim($('input[name="lang[]"]').val()).length < 1 && $.trim($('input[name="drivers[]"]').val()).length < 1) {
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
