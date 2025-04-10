import {
  autoDetect,
  inputToMorse,
  morseToText,
  invalidCharacters,
  invalidSequence,
} from "../js/translator.js";

describe("Translates only alphabetic characters to Morse code", () => {
  test("Should translate one word", () => {
    expect(inputToMorse("Fred")).toBe("..-. .-. . -..");
  });

  test("Should translate two words with a space", () => {
    expect(inputToMorse("Fred Jack")).toBe("..-. .-. . -.. | .--- .- -.-. -.-");
  });

  test("Should translate numbers to Morse code", () => {
    expect(inputToMorse("12 9 45 8 4")).toBe(
      ".---- ..--- | ----. | ....- ..... | ---.. | ....-"
    );
  });

  test("Should translate characters, numbers and punctuation", () => {
    expect(inputToMorse("az19. , ' ! ?")).toBe(
      ".- --.. .---- ----. .-.-.- | --..-- | .----. | -.-.-- | ..--.."
    );
  });

  test("Should translate the alphabet", () => {
    expect(inputToMorse("a b c d e f g h i j k l m n o p q r s t u v w x y z")).toBe(
      ".- | -... | -.-. | -.. | . | ..-. | --. | .... | .. | .--- | -.- | .-.. | -- | -. | --- | .--. | --.- | .-. | ... | - | ..- | ...- | .-- | -..- | -.-- | --.."
    );
  });
});

describe("Throws error when given unacceptable input", () => {
  test("Should throw error when given mixed input", () => {
    expect(() => {
      inputToMorse(". This is --- text");
    }).toThrow(invalidCharacters);
  });

  test("Should throw error when given non-accepted input", () => {
    expect(() => {
      inputToMorse("$");
    }).toThrow(invalidCharacters);
  });
  test("Should throw error when given non-accepted input mixed with acceptable input ", () => {
    expect(() => {
      inputToMorse("F;red");
    }).toThrow(invalidCharacters);
  });

  test("Should throw error when given an incorrect Morse code character that still contains a '.' or '-", () => {
    expect(() => {
      morseToText(".......");
    }).toThrow(invalidSequence);
  });
});

describe("Translates Morse code to text", () => {
  test("Should translate one character of Morse into text", () => {
    expect(morseToText(".-")).toBe("A");
  });

  test("Should translate multiple words of Morse into text", () => {
    expect(
      morseToText("-- --- .-. ... . | -.-. --- -.. . | - .-. .- -. ... .-.. .- - --- .-.")
    ).toBe("MORSE CODE TRANSLATOR");
  });

  test("Should translate characters, numbers and/or punctuation into text", () => {
    expect(
      morseToText(
        ".... . .-.. .-.. --- --..-- | .. .----. -- .-.-.- | ..-. .-. . -.. ..--.. | .---- ..--- ...-- | ....- | ..... -...."
      )
    ).toBe("HELLO, I'M. FRED? 123 4 56");
  });
});

describe("Auto detect Morse code or English input and output the opposite", () => {
  test("Should detect Morse code and output English", () => {
    expect(autoDetect("SOS")).toBe("... --- ...");
  });

  test("Should detect text and output Morse code", () => {
    expect(autoDetect("... --- ...")).toBe("SOS");
  });
});
