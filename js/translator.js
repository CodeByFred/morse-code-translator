export const invalidCharacters = new Error("You have entered invalid characters");

const morseCodeCharacters = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "!": "-.-.--",
  "?": "..--..",
  "'": ".----.",
  " ": "|", // space between words
};

/* 
input -> string

1. convert each letter to uppercase 
2. split text into array of characters
3. iterate over each character to covert character to Morse code character
4. throw error if character is not in object/dictionary
5. join Morse code characters together separated by a space
6. return string
 */
export const inputToMorse = (text) => {
  const textArr = text.toUpperCase().split("");
  const morse = [];

  for (let character of textArr) {
    let foundChar = morseCodeCharacters[character];
    if (foundChar === undefined) throw invalidCharacters;
    else morse.push(foundChar);
  }

  return morse.join(" ");
};

/* 
input -> string

1. split string into words on ' ';
2. iterate over each word to convert each character from Morse to text
3. throw error if invalid character
4. concatenate each word back to a sentence
5. return string
 */

export const morseToText = (morse) => {
  const morseArr = morse.split(" ");
  const text = [];

  for (let character of morseArr) {
    let foundChar = Object.keys(morseCodeCharacters).find(
      (ch) => morseCodeCharacters[ch] === character
    );
    if (foundChar === undefined) throw invalidCharacters;
    else text.push(foundChar);
  }
  return text.join("");
};

/* 
input -> string

1. split input into a string
2. check first index of array
3. throw error if invalid character
4. select correct method for translation
 */
export const autoDetect = (input) => {
  /* 
checking first index to see if it is a Morse code character/English character is tricky because:
'.....' = '5'
'....' = 'H'
'...' = 'S'
'..' = 'I'
'.' = 'E'

to make less sophisticated will just check the first character to decide.
 */
  const testString = input;
  if (testString.charAt(0) === "." || testString.charAt(0) === "-") {
    return morseToText(input);
  } else {
    return inputToMorse(input);
  }
};
