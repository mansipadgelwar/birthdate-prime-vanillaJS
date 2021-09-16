var txtName = document.querySelector("#user-name");
var txtInput = document.querySelector("#txt-input");
var btnValidate = document.querySelector("#btn-validate");
var txtOutput = document.querySelector("#txt-output");

btnValidate.addEventListener("click",getDate);

var regEx = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])$/;

var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDate() {
    var userName = txtName.value;
    var userBirthDate = txtInput.value;  
  
    if(userName === "" && userBirthDate === ""){
      txtOutput.innerText = "Please enter all the details."
    }
    else if(userName === ""){
      txtOutput.innerText = "Please enter your name."
    }
    else if(userBirthDate === ""){
      txtOutput.innerText = "Please enter your birthdate."
    }  
    else if(validateDate(userBirthDate)){
      var birthDate = userBirthDate.split('/');
      var DD = Number(birthDate[0]);
      var MM = Number(birthDate[1]);
      if (DD <= numberOfDays[MM - 1]){
          checkPrime(DD);
      }
      else{
        txtOutput.innerText = " ERROR !! INVALID DATE FORMAT.";
         
      }
      
    }
    else{
      txtOutput.innerText = " ERROR !! INVALID DATE FORMAT.";
         
    }
    
  }


  function checkPrime(date) {
    let isPrime = true;
    if (date > 1) {
      for (let i = 2; i < date; i++) {
        if (date % i == 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        txtOutput.innerText = "Hey, your birth date is a prime number. You can share it on your social media.";
      }
      else {
        txtOutput.innerText = "Hey, your birth date is not a prime number";
      }
    }
    else {
     txtOutput.innerText = "Hey, your birth date is not a prime number";
    }
  }

  function validateDate(date){
    var flag = regEx.test(date);
    return flag;
  }


