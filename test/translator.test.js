import { inputToMorse } from "../js/translator.js";

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
