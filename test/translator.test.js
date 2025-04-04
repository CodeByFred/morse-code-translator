import { autoDetect, inputToMorse, morseToText } from "../js/translator.js";

export const invalidCharacters = new Error(
  "You have entered invalid characters"
);

describe("Translates only alphabetic characters to Morse code", () => {
  test("Should translate one word", () => {
    expect(inputToMorse("Fred")).toBe("..-. .-. . -..");
  });

  test("Should translate two words with a space", () => {
    expect(inputToMorse("Fred Jack")).toBe("..-. .-. . -.. | .--- .- -.-. -.-");
  });

  // test("Should translate characters, numbers and punctuation", () => {});
});

describe("Translates Morse code to text", () => {
  test("Should translate one character of Morse into text", () => {
    expect(morseToText(".-")).toBe("A");
  });

  test("Should translate multiple words of Morse into text", () => {
    expect(
      morseToText(
        "-- --- .-. ... . | -.-. --- -.. . | - .-. .- -. ... .-.. .- - --- .-."
      )
    ).toBe("MORSE CODE TRANSLATOR");
  });

  test("Should translate characters, letters and/or punctuation into text", () => {
    expect(
      morseToText(
        ".... . .-.. .-.. --- --..--  |  .. .----. -- .-.-.-  |  ..-. .-. . -.. ..--.."
      )
    ).toBe(`HELLO, I'M. FRED?`);
  });

  // describe("Should throw errors if given incorrect input", () => {
  //   expect(() => {
  //     inputToMorse("F/red");
  //   }).toThrow(invalidCharacters);
  // });
});

// describe("Auto detect Morse code or English input and output the opposite", () => {
//   test("Should detect Morse and output English", () => {
//     expect(autoDetect("SOS")).toBe();
//   });
// });
