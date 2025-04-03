import { inputToMorse, morseToText } from "./translator.js";

document.querySelector("button").addEventListener("click", (e) => {
  let data = document.querySelector("#inputText").value;
  const translation = inputToMorse(data);
  document.querySelector("#inputText").value = "";
  console.log(translation);
});
