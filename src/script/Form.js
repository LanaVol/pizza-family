import { DOMHelper } from "./DOMHelper";
import { user } from "./UserFormData";

export class Form {
  constructor() {
    this.form = DOMHelper.select(".form-reserv");
    this.requiredFormFields = DOMHelper.selectorAll(".reqEl");
    this.formCleanBtn = DOMHelper.select(".reservClean");
    this.hints = DOMHelper.selectorAll(".hint");
    this.onChangeFormField();
  }

  onChangeFormField() {
    this.form?.addEventListener("change", (e) => {
      this.validationForm(e);
    });
  }

  displayErrorPlaceholder(input, index) {
    DOMHelper.addClass(input, "error");
    this.hints[index].style.display = "block";
  }

  removeErrorPlaceholder(input, index) {
    DOMHelper.removeClass(input, "error");
    this.hints[index].style.display = "none";
  }

  validateInput(input) {
    const index = this.requiredFormFields.indexOf(input);
    this.removeErrorPlaceholder(input, index);

    if (input.value === "") {
      DOMHelper.addClass(input, "error");
    } else {
      const validationFunction = this.checkValidationField(input.id);

      if (
        typeof validationFunction === "function" &&
        !validationFunction(input)
      ) {
        this.displayErrorPlaceholder(input, index);
      } else {
        console.log(input.value);
      }
    }
  }

  validationForm(e) {
    const input = e.target;
    if (DOMHelper.isContainsClass(input, "reqEl")) {
      this.validateInput(input);
    }
  }

  setEmptyValue(el) {
    el = "";
  }

  checkName(input) {
    return /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s]*$/.test(input.value);
  }

  checkEmail(input) {
    return /^[\w\-\.]+@([\w\-]+\.)+[\w]{2,4}$/.test(input.value);
  }

  checkNumber(input) {
    const check = /^\+?[0-9]{1,15}$/.test(input.value);
    return check;
  }

  checkValidationField(inputId) {
    switch (inputId) {
      case "name":
        return this.checkName;
      case "email":
        return this.checkEmail;
      case "number":
        return this.checkNumber;
      default:
        return () => true;
    }
  }

  // clean form fields onclick btn
  cleanFormFields() {
    this.requiredFormFields.forEach((el) => {
      this.setEmptyValue(el.value);
    });
  }

  cleanBtnFormData() {
    this.formCleanBtn.addEventListener("click", () => {
      this.cleanFormFields();
      user.cleanFormData();
    });
  }
}

const form = new Form();
