// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Prompt for password length
function generatePassword() {
  // Prompt for password length
  let length = parseInt(prompt("Enter the length of the password (between 8 and 128):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Prompt for character types
  let lowercase = confirm("Include lowercase characters?");
  let uppercase = confirm("Include uppercase characters?");
  let numeric = confirm("Include numeric characters?");
  let special = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!(lowercase || uppercase || numeric || special)) {
    alert('Please select at least one option');
    return;
  }

  // Generate the password
  let password = generatePasswordWithCriteria(length, lowercase, uppercase, numeric, special);

  // Display the password
  document.getElementById("password").textContent = 'Your new password is ' + password;
}

function generatePasswordWithCriteria(length, lowercase, uppercase, numeric, special) {
  const lowercaseChars = lowerCasedCharacters;
  const uppercaseChars = upperCasedCharacters;
  const numericChars = numericCharacters;
  const specialChars = specialCharacters;

  let allChars = "";
  if (lowercase) allChars += lowercaseChars;
  if (uppercase) allChars += uppercaseChars;
  if (numeric) allChars += numericChars;
  if (special) allChars += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}