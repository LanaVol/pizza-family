import { requiredEls, dataFromClient } from "./mainScript";

export function validationForm(e) {
  const input = e.target;
  if (input.classList.contains("reqEl")) {
    validateInput(input);
  }
}

const hints = Array.from(document.querySelectorAll(".hint"));

function validateInput(input) {
  const index = requiredEls.indexOf(input);
  input.classList.remove("error");
  hints[index].style.display = "none";

  if (input.value === "") {
    input.classList.add("error");
  } else {
    const validationFunction = getValidationFunction(input.id);

    if (
      typeof validationFunction === "function" &&
      !validationFunction(input)
    ) {
      input.classList.add("error");
      hints[index].style.display = "block";
    } else {
      dataFromClient[input.id] = input.value;
    }
  }
}

function getValidationFunction(inputId) {
  switch (inputId) {
    case "name":
      return checkName;
    case "email":
      return checkEmail;
    case "number":
      return checkNumber;
    default:
      return () => true;
  }
}

function checkName(input) {
  return /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s]*$/.test(input.value);
}

function checkEmail(input) {
  return /^[\w\-\.]+@([\w\-]+\.)+[\w]{2,4}$/.test(input.value);
}

function checkNumber(input) {
  const check = /^\+?[0-9]{1,15}$/.test(input.value);
  return check;
}
