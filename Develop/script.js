// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  //Password Length
  var pswdLength = prompt("Choose a password length between 8 and 128 characters.");

  while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
    pswdLength = prompt("Number of characters invalid. Please enter number of characters between 8 and 128.");
  } 
  alert("Awesome! You chose " + pswdLength + " characters!");

  //Confirms
  var isLower = confirm("Would you like to add a lower case character?");
  var isUpper = confirm("Would you like to add an upper case character?");
  var isNumerics = confirm("Would you like to add a numeric?");
  var isSpecial = confirm("Would you like to add a special character?");
  
  while (isLower == false && isUpper == false && isNumerics == false && isSpecial == false) {
    alert("Choose at least one!");
    isLower = confirm("Would you like to add a lower case character?");
    isUpper = confirm("Would you like to add an upper case character?");
    isNumerics = confirm("Would you like to add a numeric?");
    isSpecial = confirm("Would you like to add a special character?");
  }

  var password = generatePassword(pswdLength, isLower, isUpper, isNumerics, isSpecial);
  passwordText.value = password;
}

  //Generating Password
  function generatePassword(pswdLength, isLower, isUpper, isNumerics, isSpecial) {
    var pswd = "";
    for (var i = 0; i < pswdLength; i) {
      if (isLower) {
        pswd += randomLowercase();
        i++;
        if (i == pswdLength) {
          break;
        }
      }
      if (isUpper) {
        pswd += randomUppercase();
        i++;
        if (i == pswdLength) {
          break;
        }
      }
      if (isNumerics) {
        pswd += randomNumerics();
        i++;
        if (i == pswdLength) {
          break;
        }
      }
      if (isSpecial) {
        pswd += randomSymbols();
        i++;
        if (i == pswdLength) {
          break;
        }
      }
    }
    return pswd;
  }

//Generator Functions
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumerics() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}
