// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d"]
var uppercase = ["A", "B"]
var numeric = ["0", "1", "2"]
var special = ["@", "/"]


function getOptions() {
  var length = parseInt(prompt("What is the number of characters you want in your password?")
  );
  if (Number.isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }
  if (length < 8 || length > 128) {
    alert("Password must be between 8 characters and 128");
    return null;

  }
  var hasLowercase = confirm("Click ok to include lowercase characters");
  var hasUppercase = confirm("Click ok to include Uppercase characters");
  var hasNumeric = confirm("Click ok to include lowercase characters");
  var hasLowercase = confirm("Click ok to include lowercase characters");

  if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false) {
    alert("You must chose atleast 1 character type");
    return null;
  }
  var passwordOptions = {
    length: length,
    hasLowercase: lowercase,

  };
  return passwordOptions;




}
function randomArr(arr) {
  var indexRandom = Math.floor(Math.random() * arr.length);
  var randomEl = arr[indexRandom];
  return randomEl;
}

function generatePassword() {




}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
