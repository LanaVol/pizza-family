import themeBtn from "../img/01themeBtn.svg";
import themeBtnMoon from "../img/01themeBtnMoon.svg";
import { form } from "./mainScript";

const header = document.querySelector(".header");
const main = document.querySelector("main");
const menuBlocks = document.querySelectorAll(".menu__block");
const blocks = Array.from(document.querySelectorAll(".dark-gray"));
const changeThemeBtn = document.querySelector(".changeThemeBtn");

changeThemeBtn.addEventListener("click", changeColorTheme);

// change dark/light background
function changeColorTheme(e) {
  if (main.classList.contains("dark")) {
    toggleColorElements("dark", "light", themeBtnMoon);
  } else if (main.classList.contains("light")) {
    toggleColorElements("light", "dark", themeBtn);
  }
  changeMenuFontsColor(e);
  changeBlockStyle(e);
}

function toggleColorElements(removeClass, addClass, themeIcon) {
  toggleClass(main, removeClass, addClass);
  toggleClass(header, removeClass, addClass);
  changeThemeBtn.setAttribute("src", themeIcon);
}

function toggleClass(el, removeClass, addClass) {
  el.classList.remove(removeClass);
  el.classList.add(addClass);
}

// change fonts color menu of changing theme
function changeMenuFontsColor(e) {
  Array.from(menuBlocks).forEach((el) => {
    if (el.classList.contains("beige")) {
      toggleClass(el, "beige", "brown");
    } else if (el.classList.contains("brown")) {
      toggleClass(el, "brown", "beige");
    }
  });
}

// change style of wrapper blocks and form
function changeBlockStyle(e) {
  blocks.forEach((el) => {
    if (el.classList.contains("dark-gray")) {
      el.classList.remove("dark-gray");
      el.style.backgroundColor = "rgba(217, 217, 217, 0.59)";
      toggleClass(el, "white-fonts", "black-fonts");
    } else {
      el.style.backgroundColor = "";
      el.classList.add("dark-gray");
      toggleClass(el, "black-fonts", "white-fonts");
    }
  });
  const formParent = form.parentElement;
  if (formParent.classList.contains("white-fonts")) {
    toggleClass(formParent, "white-fonts", "black-fonts");
    formParent.style.backgroundColor = "rgba(217, 217, 217, 0.59)";
  } else if (formParent.classList.contains("black-fonts")) {
    toggleClass(formParent, "black-fonts", "white-fonts");
    formParent.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  }
}
