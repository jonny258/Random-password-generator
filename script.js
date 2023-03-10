
//Define all of the available characters that will be used to make a password in the global scope
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];

//These boolean varibles use to confirm that atleast 1 of the character type is included in the finalPassword
let upperIncluded = false;
let lowerIncluded = false;
let numsIncluded = false;
let specialIncluded = false;

// Define the initial password criteria in the gloabal scope
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
  // This if statment makes sure that at least one character type is selected
  if(!passwordCriteria.includeUpper && !passwordCriteria.includeLower && !passwordCriteria.includeNums && !passwordCriteria.includeSpecial){
    alert("Please select at least one type of character to include")
    generatePasswordCriteria()
  }
}


//This function is called at the end of the createPassword function if anything in the varifyPassword function runs it resets and creates a whole new password
//It checks if the passwordCriteria for the character type is true then checks that same character type was not included
function verifyPassword(){
  if(passwordCriteria.includeUpper && !upperIncluded){
    createPassword()
  }
  if(passwordCriteria.includeLower && !lowerIncluded){
    createPassword()
  }
  if(passwordCriteria.includeNums && !numsIncluded){
    createPassword()
  }
  if(passwordCriteria.includeSpecial && !specialIncluded){
    createPassword()
  }
}


function createPassword (){
  // Confirms that the finalPassword is blank and all of the varification booleans are false just incase the varification fails
  finalPassword = "";
  upperIncluded = false;
  lowerIncluded = false;
  numsIncluded = false;
  specialIncluded = false;
  for(let i=0; i<passwordCriteria.length; i++){
    // charSeletor picks which type of character will be added to the password
      let charSelector = Math.floor(Math.random() * 4)
      if(charSelector === 0 && passwordCriteria.includeUpper){
        upperIncluded = true;
        let nextCharIndex = Math.floor(Math.random() * upper.length);
        finalPassword += upper[nextCharIndex];
      }
      else if(charSelector === 1 && passwordCriteria.includeLower){
        lowerIncluded = true;
        let nextCharIndex = Math.floor(Math.random() * lower.length);
        finalPassword += lower[nextCharIndex];
      }
      else if(charSelector === 2 && passwordCriteria.includeNums){
        numsIncluded = true;
        let nextCharIndex = Math.floor(Math.random() * nums.length);
        finalPassword += nums[nextCharIndex];
      }
      else if(charSelector === 3 && passwordCriteria.includeSpecial){
        specialIncluded = true;
        let nextCharIndex = Math.floor(Math.random() * special.length);
        finalPassword += special[nextCharIndex];
      }else{
        // If charSelector picks a character type that wasn't selected then the iterator decreases so the password length isn't shorter then specified
        i--
      }
  }
  verifyPassword()
}


function writePassword() {
  generatePasswordCriteria();
  createPassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

}


generateBtn.addEventListener("click", writePassword);
