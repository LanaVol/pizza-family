const header = document.querySelector(".header");
const main = document.querySelector("main");
const menuBlocks = document.querySelectorAll(".menu__block");
const blocks = Array.from(document.querySelectorAll(".dark-gray"));
const changeThemeBtn = document.querySelector(".changeThemeBtn");
import themeBtn from "../img/01themeBtn.svg";
import themeBtnMoon from "../img/01themeBtnMoon.svg";
import { form } from "./mainScript";

changeThemeBtn.addEventListener("click", changeColorTheme);

// change dark/light background
function changeColorTheme(e) {
  if (main.classList.contains("dark")) {
    main.classList.remove("dark");
    main.classList.add("light");
    header.classList.remove("dark");
    header.classList.add("light");
    changeThemeBtn.setAttribute("src", themeBtnMoon);
    // changeThemeBtn.setAttribute("src", "./img/01themeBtnMoon.svg");
    changeMenuFontsColor(e);
    changeBlockStyle(e);
  } else if (main.classList.contains("light")) {
    main.classList.remove("light");
    main.classList.add("dark");
    header.classList.remove("light");
    header.classList.add("dark");
    changeThemeBtn.setAttribute("src", themeBtn);
    // changeThemeBtn.setAttribute("src", "./img/01themeBtn.svg");
    changeMenuFontsColor(e);
    changeBlockStyle(e);
  }
}

// change fonts color menu of changing theme
function changeMenuFontsColor(e) {
  Array.from(menuBlocks).forEach((el) => {
    if (el.classList.contains("beige")) {
      el.classList.remove("beige");
      el.classList.add("brown");
    } else if (el.classList.contains("brown")) {
      el.classList.remove("brown");
      el.classList.add("beige");
    }
  });
}

// change style of wrapper blocks and form
function changeBlockStyle(e) {
  blocks.forEach((el) => {
    if (el.classList.contains("dark-gray")) {
      el.classList.remove("dark-gray");
      el.style.backgroundColor = "rgba(217, 217, 217, 0.59)";
      el.classList.remove("white-fonts");
      el.classList.add("black-fonts");
    } else {
      el.style.backgroundColor = "";
      el.classList.add("dark-gray");
      el.classList.remove("black-fonts");
      el.classList.add("white-fonts");
    }
  });
  if (form.parentElement.classList.contains("white-fonts")) {
    form.parentElement.classList.remove("white-fonts");
    form.parentElement.classList.add("black-fonts");
    form.parentElement.style.backgroundColor = "rgba(217, 217, 217, 0.59)";
  } else if (form.parentElement.classList.contains("black-fonts")) {
    form.parentElement.classList.remove("black-fonts");
    form.parentElement.classList.add("white-fonts");
    form.parentElement.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  }
}
