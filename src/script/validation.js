import { requiredEls } from "./mainScript";
import { sendFormToMail, form } from "./mainScript";

export function validationForm(e) {
  console.log("*", e.target);
  const input = e.target;
  if (input.classList.contains("required")) {
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

// functions for validate form-input on blur
// function validateForm() {
//   requiredEls.forEach((el, index) => {
//     el.addEventListener("blur", () => {
//       let input = el;

//       input.classList.remove("error");
//       hints[index].style.display = "none";

//       if (input.value === "") {
//         input.classList.add("error");
//       } else if (input.id === "name") {
//         if (checkName(input)) {
//           dataFromClient.name = input.value;
//         } else {
//           input.classList.add("error");
//           hints[index].style.display = "block";
//         }
//       } else if (input.id === "email") {
//         if (checkemail(input)) {
//           dataFromClient.email = input.value;
//         } else {
//           input.classList.add("error");
//           hints[index].style.display = "block";
//         }
//       } else if (input.id === "number") {
//         if (checkNumber(input)) {
//           dataFromClient.phone = input.value;
//         } else {
//           input.classList.add("error");
//           hints[index].style.display = "block";
//         }
//       }
//     });
//   });
// }

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

// export { validateForm };
