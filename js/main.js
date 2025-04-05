import { autoDetect } from "./translator.js";

document.querySelector("button").addEventListener("click", () => {
  let data = document.querySelector("#inputText").value;
  try {
    const translation = autoDetect(data);
    document.querySelector("#outputText").value = translation;
    document.querySelector("#outputText").style.color = "black";
    document.querySelector("#inputText").value = "";
  } catch (error) {
    document.querySelector("#outputText").value = error;
    document.querySelector("#outputText").style.color = "red";
  }
});
