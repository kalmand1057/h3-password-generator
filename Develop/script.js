// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var pswdLength = prompt("Password length must be between 8 and 128 characters.");
  
//Password Length
  if (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
    alert("Not enough/too much characters.");
    while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
      pswdLength = prompt("Number of characters invalid. Please enter number of characters between 8 and 128.");
    }
  } 
  alert("Success!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
