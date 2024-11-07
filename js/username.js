// // Array of lowercase characters to be included in password
// var lowerCasedCharacters = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z'
//   ];
  
//   // Array of uppercase characters to be included in password
//   var upperCasedCharactersUn = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z'
//   ];

// Prompt for password length
function generateUsername() {
    // Prompt for password length
    let length = parseInt(prompt("Enter the length of the password (between 8 and 15):"));
  
    // Validate password length
    if (isNaN(length) || length < 8 || length > 15) {
      alert("Invalid password length. Please enter a number between 8 and 15.");
      return;
    }
  
    // Prompt for character types
    let lowercase = confirm("Include lowercase characters?");
    let uppercase = confirm("Include uppercase characters?");
  
    // Validate at least one character type is selected
    if (!(lowercase || uppercase )) {
      alert('Please select at least one option');
      return;
    }
  
    // Generate the password
    let password = generateUsernameWithCriteria(length, lowercase, uppercase);
  
    // Display the password
    document.getElementById("username").textContent = 'Your new username is ' + username +'@mail.com';
  }
  
  function generateUsernameWithCriteria(length, lowercase, uppercase) {
    const lowercaseChars = lowerCasedCharacters;
    const uppercaseChars = upperCasedCharacters;
  
    let allChars = "";
    if (lowercase) allChars += lowercaseChars.join('');
    if (uppercase) allChars += uppercaseChars.join('');
  
    let username = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * allChars.length);
      username += allChars.charAt(randomIndex);
    }
  
    return username;
  }