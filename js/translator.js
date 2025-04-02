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
  "?": "..--..",
  "'": ".----.",
  " ": " | ", // space between words
};

export const inputToMorse = (input) => {
  return input
    .toUpperCase()
    .split("")
    .map((ch) => morseCodeCharacters[ch] || "")
    .join(" ");
};

export const morseToText = (morse) => {
  return Object.keys(morseCodeCharacters).find(
    (key) => morseCodeCharacters[key] === morse
  );
};
