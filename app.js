var txtName = document.querySelector("#user-name");
var txtInput = document.querySelector("#txt-input");
var btnValidate = document.querySelector("#btn-validate");
var txtOutput = document.querySelector("#txt-output");

btnValidate.addEventListener("click",getDate);

var numberOfDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getDate() {
    var userName = txtName.value;
    var userBirthDate = txtInput.value;  
    var birthDate = userBirthDate.split('/');
    var DD = birthDate[0];
    var MM = birthDate[1];

    if(userName === "" && userBirthDate === ""){
      txtOutput.innerText = "Please enter all the details."
    }
    else if(userName === ""){
      txtOutput.innerText = "Please enter your name."
    }
    else if(userBirthDate === ""){
      txtOutput.innerText = "Please enter your birthdate."
    }  
    else if (DD < 31 || MM < 12 || DD > 0 || MM > 0 || (!isNaN(DD)) || (!isNaN(MM))) {
      if (DD < numberOfDays[MM - 1]) {
        checkPrime(DD);
      }
      else {
        txtOutput.innerText = "Error !! Invalid date format."
      }
  
    }
    else {
      txtOutput.innerText = "Error !! Invalid date format."
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
        txtOutput.innerText = "Hey, your birth date is a prime number";
      }
      else {
        txtOutput.innerText = "Hey, your birth date is not a prime number";
      }
    }
    else {
     txtOutput.innerText = "Hey, your birth date is not a prime number";
    }
  }
