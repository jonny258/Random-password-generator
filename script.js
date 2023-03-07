
//Define all of the available characters that will be used to make a password in the global scope
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Define the initial password criteria in the gloabal scope
// passwordCriteria can be changed an called in any of the functions
let passwordCriteria = {
    length: 0,
    includeUpper: false,
    includeLower: false,
    includeNums: false,
    includeSpecial: false,
}


var generateBtn = document.querySelector("#generate");

function generatePasswordCriteria(){
  passwordCriteria.length = prompt("Enter the length of your passowrd? Must be 8 to 128 characters long")
  passwordCriteria.includeUpper = confirm("Do you want upper case letters in your password?")
  passwordCriteria.includeLower = confirm("Do you want lower case letters in your password?")
  passwordCriteria.includeNums = confirm("Do you want numbers in your password?")
  passwordCriteria.includeSpecial = confirm("Do you want special characters in your password?")
}

function writePassword() {
  generatePasswordCriteria();
  
  var passwordText = document.querySelector("#password");
  passwordText.value = "This will be where the final password goes";

}


generateBtn.addEventListener("click", writePassword);
