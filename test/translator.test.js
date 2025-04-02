import { inputToMorse, morseToText } from "../js/translator.js";

describe("Translates only alphabetic characters to Morse code", () => {
  test("Should translate one word", () => {
    expect(inputToMorse("Fred")).toBe("..-. .-. . -..");
  });

  test("Should translate two words with a space", () => {
    expect(inputToMorse("Fred Jack")).toBe(
      "..-. .-. . -..  |  .--- .- -.-. -.-"
    );
  });
});

describe("Translates Morse code to text", () => {
  test("Should translate one character of Morse to text", () => {
    expect(morseToText(".-")).toBe("A");
  });
});
