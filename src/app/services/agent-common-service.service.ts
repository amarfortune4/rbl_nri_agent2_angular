import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentCommonServiceService {

  constructor() { }

 //Enter Only Numbers
 enterOnlyNumber(event: any) {
  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;
  /*
  //Working
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }*/

  /*
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
    return false;
  }*/


  if (charCode >31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
    return false;
  }

  return true;
}


//Enter Only Alphabets with spaces
enterOnlyAlphabets(event: any) {
  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;

  //Char code of Upper and Lower Case Alphabets
  if (!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0 && charCode != 8 && charCode != 9)) {
    return false;
  }

  let inputField = event.target.value; //remove the hyphen
  event.target.value = inputField;
  return true;
}



//Enter Only Alphabets with spaces and backticks
enterOnlyAlphabetsSpaceNBcktck(event: any) {
  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;

  //Char code of Upper and Lower Case Alphabets
  if (!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0 && charCode != 8 && charCode != 9 && charCode != 96)) {
    return false;
  }

  let inputField = event.target.value; //remove the hyphen
  event.target.value = inputField;
  return true;
}



//Enter Only Alphabets with backtick` but no space 
enterOnlyAlphabetsNoSpace(event: any) {
  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;

  //Char code of Upper and Lower Case Alphabets
  if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && (charCode != 8) && !(charCode == 9) && !(charCode == 96)) {
    return false;
  }

  let inputField = event.target.value; //remove the hyphen
  event.target.value = inputField;
  return true;
}

//Enter Aplha Numeric Wiht no space
allowAlphaNumericSpace(event: any) {
  //var code = ('charCode' in e) ? e.charCode : e.keyCode;
  event = (event) ? event : window.event;
  var code = (event.which) ? event.which : event.keyCode;
  /*
 if (!(code == 32) && // space
   !(code > 47 && code < 58) && // numeric (0-9)
   !(code > 64 && code < 91) && // upper alpha (A-Z)
   !(code > 96 && code < 123)) { // lower alpha (a-z)
   //e.preventDefault();
   return false
 }*/

  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
    //e.preventDefault();
    return false
  }
  return true;
}



//Enter Aplha Numeric Wiht no space
allowAlphaNumericWithSpace(event: any) {
  //var code = ('charCode' in e) ? e.charCode : e.keyCode;
  event = (event) ? event : window.event;
  var code = (event.which) ? event.which : event.keyCode;

  if (!(code == 32) && // space
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
    //e.preventDefault();
    return false
  }

  return true;
}



//Validate Aadhar Number
validateAadhar(event: any) {

  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
    return false;
  }
  let inputVal = event.target.value.split(' ').join(''); //remove the hyphen

  if (inputVal.length > 0) {
    inputVal = inputVal.match(new RegExp('.{1,4}', 'g')).join(" ");
  }
  //this.InputVal=inputVal;

  if (inputVal.split(' ').join('').length >= 11) {
    //this.isValidAdhar = true;
  }
  if (inputVal.split(' ').join('').length <= 14 && event.key === "Backspace") {
    //this.isValidAdhar = false;
  }


  event.target.value = inputVal;
  return true;
}


//Validate Enter number only
//Add + before ISD number
validateISD(event: any) {

  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105)) {
    return false;
  }
  let inputVal = event.target.value.split(' ').join(''); //remove the hyphen


  if (inputVal.split('').join('').length <= 14 && event.key === "Backspace") {
  }


  event.target.value = `+${String(inputVal).replace(/\+/, "")}`;
  return true;
}




getCurrentDate() {

  let curretnDateN = new Date();
  let year = curretnDateN.getFullYear();
  let month = curretnDateN.getMonth();
  let currDate = curretnDateN.getDate();
  return `${year}-${this.checkDigitsPlace(month)}-${this.checkDigitsPlace(currDate)}`;
}


checkDigitsPlace(digitVal: number) {
  let value = '';
  Math.floor(digitVal / 10) > 0 ? value = `${digitVal}` : value = `0${digitVal}`;
  return value;
}


restrictSpecialCharacters(event: any) {
  /*
  var regex = new RegExp("^[a-zA-Z0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
     event.preventDefault();
     return false;
  }*/

  event = (event) ? event : window.event;
  var charCode = (event.which) ? event.which : event.keyCode;

  //Char code of Upper and Lower Case Alphabets
  if ((!(charCode >= 65 && charCode <= 120) && (charCode != 32 && charCode != 0 && charCode != 8 && charCode != 9)) || (charCode > 31 && (charCode < 48 || charCode > 57))) {
    return false;
  }

  let inputField = event.target.value; //remove the hyphen
  event.target.value = inputField;
  return true;
}





//For state management get Customer data in localstorage
getUserFromLocalStorage() {
  const userDataString = localStorage.getItem('agentData');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData;
  }
  return null;
}

//For state management get Customer data in localstorage
getUserSignUpFromLocalStorage() {
  const userDataString = localStorage.getItem('signup');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData;
  }
  return null;
}

getUserFromLocalStorageLogin() {
  const userDataString = localStorage.getItem('loginEmailData');
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    return userData;
  }
  return null;
}



//Add form data to localstorage
storeInLocalStorage(item: any, keyAndvalue: any) {

  //Get Object is null localstorage set inital data in localstorage
  if (localStorage.getItem(item) == null) {
    localStorage.setItem(item, JSON.stringify(keyAndvalue));
    return;
  }

  //if Object is already present in localstorage 
  //Append new object to localstorage
  let oldData = JSON.parse(localStorage.getItem(item) || '{}');

  console.log('THis is old local data', oldData);

  let newData = Object.assign(oldData, keyAndvalue)

  console.log('THis is new local data', newData);

  localStorage.setItem(item, JSON.stringify(newData));

  oldData = {};

  return;

}






removeObjecLocal(item: any) {
  //Get Object is null localstorage set inital data in localstorage
  if (localStorage.getItem(item) !== null || localStorage.getItem(item) !== undefined || localStorage.getItem(item) !== "undefined") {
    localStorage.removeItem(item);
    return;
  }
}

getAge(dobVal: string) {

  //Get Date from API
  let createdLeaddate = new Date(dobVal);
  let todaysDate = new Date();

  //Calculate differe in terms of time
  //Convert time to Years
  let differenceInTime = todaysDate.getTime() - createdLeaddate.getTime();
  let differceInYears = differenceInTime / (1000 * 3600 * 24 * 365);

  //this.cifForm.get("AgeNominee").setValue(Math.floor(differceInYears));

  return Math.floor(differceInYears);
}

restricCharacter(event: any) {
  let regex = new RegExp("^[A-Za-z]$");
  let key = String.fromCharCode(event.charCode == event.which ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
  return
}

onlyNumbers(event: any) {
  //let regex = new RegExp("^[0-9]$");           
  let regex = new RegExp("[A-Za-z]");
  let key = String.fromCharCode(event.charCode == event.which ? event.which : event.charCode);
  if (!regex.test(key)) {
    //event.preventDefault();
    return false;
  }
  return true
}





}
