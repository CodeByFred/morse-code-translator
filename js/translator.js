export const invalidCharacters = new Error(
  "You have entered invalid characters"
);

export const invalidOrderOfInput = new Error(
  "You cannot put punctuation at the start of input"
);

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

export const inputToMorse = (text) => {
  return text
    .toUpperCase()
    .split("")
    .map((ch) => morseCodeCharacters[ch] || "")
    .join(" ");
};

/* 
input -> string

1. split string into words on '|';
2. iterate over each word to convert each character from Morse to text
3. throw error if invalid character
4. concatenate each word back to a sentence
5. return string
 */

export const morseToText = (morse) => {
  const morseArr = morse.split(" ");
  const text = [];

  for (let character of morseArr) {
    text.push(
      Object.keys(morseCodeCharacters).find(
        (ch) => morseCodeCharacters[ch] === character
      )
    );
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
 */
  const testString = input;
  if (testString.charAt(0) === "." || testString.charAt(0) === "-") {
    return morseToText(input);
  } else {
    return inputToMorse(input);
  }
};
