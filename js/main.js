import { autoDetect } from "./translator.js";

document.querySelector("button").addEventListener("click", (e) => {
  let data = document.querySelector("#inputText").value;
  const translation = autoDetect(data);
  document.querySelector("#inputText").value = "";
  document.querySelector("#outputText").value = translation;
});
