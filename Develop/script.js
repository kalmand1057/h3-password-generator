// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Password Length
  var pswdLength = prompt("Choose a password length between 8 and 128 characters.");
  
  if (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
    alert("Not enough/too much characters.");
  } while (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
      pswdLength = prompt("Number of characters invalid. Please enter number of characters between 8 and 128.");
  } 
  alert("Awesome!");
  
  //Confirms
  var isLower = confirm("Would you like to add a lower case character?");
  var isUpper = confirm("Would you like to add an upper case character?");
  var isNumerics = confirm("Would you like to add a numeric?");
  var isSpecial = confirm("Would you like to add a special character?");
  if (isLower = false, isUpper = false, isNumerics = false, isSpecial = false); {
    alert("You have to choose at least one!");
  } 
}

//Generator Functions
function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(randomLowercase());

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(randomUppercase());

function randomNumerics() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(randomNumerics());

function randomSymbols() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}
console.log(randomSymbols());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
