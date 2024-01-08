import themeBtn from "../img/01themeBtn.svg";
import themeBtnMoon from "../img/01themeBtnMoon.svg";
import { DOMHelper } from "./DOMHelper";
import { form } from "./mainScript";

const body = DOMHelper.select(".dark");
const menuBlock = DOMHelper.select(".menu__main-block");
const blocks = Array.from(document.querySelectorAll(".dark-gray"));
const changeThemeBtn = document.querySelector(".changeThemeBtn");

changeThemeBtn.addEventListener("click", changeColorTheme);

// change dark/light background
function changeColorTheme(e) {
  if (body.classList.contains("dark")) {
    DOMHelper.toggleClass(body, "dark", "light");
    DOMHelper.toggleClass(menuBlock, "beige", "brown");
    changeThemeBtn.setAttribute("src", themeBtnMoon);
  } else {
    DOMHelper.toggleClass(body, "light", "dark");
    DOMHelper.toggleClass(menuBlock, "brown", "beige");
    changeThemeBtn.setAttribute("src", themeBtn);
  }
  changeBlockStyle(e);
}

// change style of wrapper blocks and form
function changeBlockStyle(e) {
  const formSibling = form.parentElement.previousElementSibling;
  blocks.forEach((el) => {
    if (el.classList.contains("dark-gray")) {
      DOMHelper.toggleClass(el, "dark-gray", "light-gray");
      DOMHelper.toggleClass(formSibling, "beige", "brown");
    } else {
      DOMHelper.toggleClass(el, "light-gray", "dark-gray");
      DOMHelper.toggleClass(formSibling, "brown", "beige");
    }
  });
}
