// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0", "1", "2","3","4","5","6","7","8","9"];
var special = ["@", "/","*","%","#","$"];


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
  var hasUppercase = confirm("Click ok to include uppercase characters");
  var hasNumeric = confirm("Click ok to include numeric characters");
  var hasSpecial = confirm("Click ok to include special characters");

  if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false) {
    alert("You must chose atleast 1 character type");
    return null;
  }
  var passwordOptions = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial,

  };
  return passwordOptions;




}
function randomArr(arr) {
  var indexRandom = Math.floor(Math.random() * arr.length);
  var randomEl = arr[indexRandom];
  return randomEl;
}

function generatePassword() {
  var options = getOptions();


  var result = [];
  var possible = [];
  var gaurantee = [];

if (!options) return null;


if (options.hasLowercase){
  possible = possible.concat(lowercase);
  gaurantee.push(randomArr(lowercase))
}

if (options.hasUppercase){
  possible = possible.concat(uppercase);
  gaurantee.push(randomArr(uppercase))
}

if (options.hasNumeric){
  possible = possible.concat(numeric);
  gaurantee.push(randomArr(numeric))
}

if (options.hasSpecial){
  possible = possible.concat(special);
  gaurantee.push(randomArr(special))
}

for(var i = 0; i < gaurantee.length; i++){
  result [i] = gaurantee[i];
}

return result.join("")


}


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
