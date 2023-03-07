
//Define all of the available characters that will be used to make a password in the global scope
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];


// Define the initial password criteria in the gloabal scope
// passwordCriteria can be changed an called in any of the functions
let passwordCriteria = {
    length: 0,
    includeUpper: false,
    includeLower: false,
    includeNums: false,
    includeSpecial: false,
}
let finalPassword = "";

var generateBtn = document.querySelector("#generate");

// This function repeats the prompt for password length until a valid value is input
function generatePasswordLength(){
  passwordCriteria.length = prompt("Enter the length of your passowrd? Must be 8 to 128 characters long");
  if(passwordCriteria.length < 8 || passwordCriteria.length > 128){
    alert("Please enter a number between 8 and 128")
    generatePasswordLength()
  }
}

function generatePasswordCriteria(){
  generatePasswordLength()
  passwordCriteria.includeUpper = confirm("Do you want upper case letters in your password?");
  passwordCriteria.includeLower = confirm("Do you want lower case letters in your password?");
  passwordCriteria.includeNums = confirm("Do you want numbers in your password?");
  passwordCriteria.includeSpecial = confirm("Do you want special characters in your password?");
  // This makes sure that at least one character type is selected
  if(!passwordCriteria.includeUpper && !passwordCriteria.includeLower && !passwordCriteria.includeNums && !passwordCriteria.includeSpecial){
    alert("Please select at least one type of character to include")
    generatePasswordCriteria()
  }
}



function createPassword (){
  for(let i=0; i<passwordCriteria.length; i++){
      let charSelector = Math.floor(Math.random() * 4)
      // if(charSelector === 0 && passwordCriteria.includeUpper){

      // }

  }
}

function writePassword() {
  generatePasswordCriteria();
  createPassword()

  
  var passwordText = document.querySelector("#password");
  passwordText.value = "This will be where the final password goes";

}


generateBtn.addEventListener("click", writePassword);
