/*This is a distalation of the code in script.js.
This will create a random user with password to a defined set of parameters.
Username will be 10 characters and will have the @mail.com appended to it.
The password will be 15 characters long and will have a mix of lowercase, uppercase, numeric and special characters.*/


// Define all possible characters for each type
const lowerCasedCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numericCharacters = '0123456789'.split('');
const specialCharacters = '!@#$%^&*()_+=-{}[]|;:,.<>/?~`.split';

// Function to generate a random character from a given array
function getRandomCharacter(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

console.log('Generated User:');