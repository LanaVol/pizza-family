import {
  showBannerCoupon,
  showModalWindowError,
  showModalWindowSuccess,
} from "./modals";
import { validationForm } from "./validation";
import { cakesList, saucesList, ingredientsList } from "./data";
import empty from "../img/ingredients/empty.svg";

const navMenu = document.querySelector(".header__list");
const header = document.querySelector(".header");
const reservSection = document.querySelector(".reserv");

header.addEventListener("click", handleHeaderFunction);

function handleHeaderFunction(e) {
  const element = e.target.parentElement.classList;

  if (element.contains("coupon")) {
    // show banner-discount
    showBannerCoupon();
  } else if (element.contains("nav__burger")) {
    // show/hide header nav for mobileScreen
    navMenu.classList.toggle("showNav");
  }
}

// CONSTRUCTOR PIZZA
// main object about data client and order
export const dataFromClient = {
  name: "",
  email: "",
  phone: "",
  orders: [],
  price: 0,
  discount: 0,
  info: "Pizza with: ",
};

// click btn madeOwn, show constructor-menu and make own pizza
const madeOwnBtn = document.querySelector(".menu__block-btn .madeOwnBtn");

madeOwnBtn.addEventListener("click", showMenuToMakeOwnPizza);

function showMenuToMakeOwnPizza() {
  document.querySelector(".offer").classList.toggle("hideOfferSection");
}

//drug and drop constructor pizza, show preview
const prevPizza = document.querySelector(".prevImg");
const constructorBlockMenu = document.querySelector(".constructor");

const ingredients = Array.from(document.querySelectorAll(".ingredient"));
const prevPrice = document.querySelector(".previewPrice");
const prevSize = document.querySelector(".previewSize");

let ownOrder = []; //array for add chosen ingredients

prevPizza.addEventListener("dragover", preventEvent);
prevPizza.addEventListener("drop", dropElementToPreview);

function preventEvent(e) {
  e.preventDefault();
}

// show new layer depending on the selected ingredient
function dropElementToPreview(e) {
  e.preventDefault();

  ownOrder
    .sort((a, b) => a.data - b.data)
    .forEach((el) => {
      switch (el.category) {
        case "cake":
          return (prevSize.innerHTML = el.name);
        case "sauce":
          return prevPizza.firstElementChild.setAttribute("src", el.prevImg);
        case "ingredient":
          return createNewLayerPizza(el.withIngredient);
      }
    });
  calcTotalSumOnPreview();
}

// create new layer pizza for preview
function createNewLayerPizza(url) {
  const inscription = document.createElement("div");

  inscription.classList.add("inscription");
  prevPizza.appendChild(inscription);
  inscription.style.backgroundImage = `url(${url})`;
}

// choose size | cake | ingredient and add to order
constructorBlockMenu.addEventListener("dragstart", (e) => {
  switch (e.target.getAttribute("data-category")) {
    case "cake":
      getChosenCake(e);
      break;
    case "sauce":
      addSauceIngredient(e);
      break;
    case "ingredient":
      addIngredientsToPizza(e);
      break;
  }
});

function getChosenCake(e) {
  cakesList.forEach((oneCake) => {
    if (e.target.getAttribute("data-name") === oneCake.name) {
      if (ownOrder.length === 0) {
        ownOrder.push({ ...oneCake, quantity: 1 });
      } else if (ownOrder.length !== 0) {
        const item = ownOrder.find((obj) => obj.name === oneCake.name);
        if (!item) {
          ownOrder.splice(0, 1, { ...oneCake, quantity: 1 });
        } else {
          return;
        }
      }
    }
  });
}

function addSauceIngredient(e) {
  saucesList.forEach((sauce) => {
    if (e.target.getAttribute("data-name") === sauce.name) {
      if (ownOrder.length === 0) {
        showModalWindowError("First choose the size:)");
      } else if (ownOrder.length !== 0) {
        const i = ownOrder.findIndex((obj) => obj.name === sauce.name);
        if (i !== -1) {
          ownOrder[i].quantity++;
          ownOrder[i].data = new Date();
        } else {
          ownOrder.push({ ...sauce, quantity: 1, data: new Date() });
        }
      }
    }
  });
}

// choose ingredients
ingredients.forEach((el) => {
  el.addEventListener("dragstart", addIngredientsToPizza);
});

function addIngredientsToPizza(e) {
  ingredientsList.forEach((ingredient) => {
    if (e.target.getAttribute("data-name") === ingredient.name) {
      if (ownOrder.length === 0) {
        showModalWindowError("First choose the size:)");
      } else if (ownOrder.length !== 0) {
        const i = ownOrder.findIndex((obj) => obj.name === ingredient.name);
        if (i !== -1) {
          ownOrder[i].quantity++;
          ownOrder[i].data = new Date();
        } else {
          ownOrder.push({ ...ingredient, quantity: 1, data: new Date() });
        }
      }
    }
  });
}

// calculate totalSum from one creating pizza and show price in preview
function calcTotalSumOnPreview() {
  let totalSum = 0;

  ownOrder.forEach((el) => {
    totalSum += el.quantity * el.price;
    prevPrice.firstElementChild.innerHTML = totalSum;
  });
}

// add to order created pizza after click on btn addToOrder
const orderBtn = document.querySelector(".addToOrder");
const cleanAllPreview = document.querySelector(".cleanAll");
const outputInfoBill = document.querySelector(".order-list");
const totalPriceFieldInBill = document.querySelector("#total-price");
const discountInBill = document.querySelector("#discount");
const toPayFieldBill = document.querySelector("#totalPay");
const cleanAllInBill = document.querySelector(".output-clean");

orderBtn.addEventListener("click", addToOrderPizza);
cleanAllPreview.addEventListener("click", cleanPreviewPizza);
cleanAllInBill.addEventListener("click", cleanPizzaOrderList);

function addToOrderPizza() {
  // check if all of categories includes pizza
  const item1 = ownOrder.find((obj) => obj.category === "cake");
  const item2 = ownOrder.find((obj) => obj.category === "sauce");
  const item3 = ownOrder.find((obj) => obj.category === "ingredient");

  if (item1 && item2 && item3) {
    let pizza = JSON.parse(JSON.stringify(ownOrder));
    dataFromClient.orders.push(pizza);
    showModalWindowSuccess("Successfully added to cart");
    calcResultToPayWithDiscount();
    cleanOwnOrderInfoArray();
    cleanPreviewPizza();
  } else {
    showModalWindowError("Not all ingredient categories are selected:(");
  }
}

// calculate total price of all choosen pizzas
function calcResultToPayWithDiscount() {
  let totalSumOfOrder = 0;

  dataFromClient.orders.forEach((els) => {
    let totalSumOfOnePizza = 0;

    els.forEach((el) => {
      if (el.name === "Size L" && dataFromClient.orders.length > 1) {
        // discount 20% if chosen more than one pizza including size L
        dataFromClient.discount = 0.2;
      }
      totalSumOfOnePizza += el.quantity * el.price;
    });
    totalSumOfOrder += totalSumOfOnePizza;
  });
  showInfoAboutOrderInBill();
  totalPriceFieldInBill.value = totalSumOfOrder; //order-sum without discont and show at Item Total(bill)
  discountInBill.value = dataFromClient.discount * 100;
  dataFromClient.price = (
    totalSumOfOrder -
    totalSumOfOrder * dataFromClient.discount +
    totalSumOfOrder * 0.02
  ).toFixed(2);
  toPayFieldBill.value = dataFromClient.price; //show To Pay(bill)
}

// show info about order in the bill
function showInfoAboutOrderInBill() {
  if (dataFromClient.orders.length > 1) {
    Array.from(outputInfoBill.children).forEach((li) => {
      li.remove();
    });
  }
  dataFromClient.orders.forEach((els) => {
    let li = document.createElement("li");
    els.forEach((el) => {
      if (
        el.category === "cake" ||
        el.category === "sauce" ||
        el.category === "ingredient"
      ) {
        li.innerHTML += ` ${el.name}, `;
      }
    });
    outputInfoBill.appendChild(li);
  });
}

// clean preview pizza in constructor
function cleanPreviewPizza() {
  prevPrice.firstElementChild.innerHTML = "";
  prevSize.innerHTML = "";

  const allLayersPizza = Array.from(document.querySelectorAll(".inscription"));
  allLayersPizza.forEach((layer) => {
    layer.remove();
  });
  prevPizza.firstElementChild.setAttribute("src", empty);
  cleanOwnOrderInfoArray();
}

// to clean array of chosen ingredients for ability to create new pizza
function cleanOwnOrderInfoArray() {
  ownOrder = [];
}

// form validation and send to email
export const form = document.querySelector(".form-reserv");
export const requiredEls = Array.from(document.querySelectorAll(".reqEl"));
const formCleanBtn = document.querySelector(".reservClean");

form.addEventListener("submit", sendFormToMail);
form.addEventListener("change", validationForm);

formCleanBtn.addEventListener("click", () => {
  cleanFormFields();
  cleanDataFromForm();
});

// function for send to email
const send = async (obj) => {
  try {
    const { data } = await axios.post(
      "https://family-pizza.vercel.app/order",
      obj
    );
    return data;
  } catch (err) {
    return err.message;
  }
};

function showMessage() {
  dataFromClient.orders.forEach((pizzas) => {
    pizzas.forEach((pizza) => {
      dataFromClient.info += ` ${pizza.name}/`;
    });
  });
}

export function sendFormToMail(e) {
  e.preventDefault();
  if (checkObjectValues(dataFromClient)) {
    showModalWindowSuccess("Your order was successfully accepted");
    showMessage();
    send(dataFromClient);
    cleanFormFields();
    cleanPizzaOrderList();
    cleanDataFromForm();
  } else {
    if (dataFromClient.orders.length === 0) {
      showModalWindowError("Your cart is empty");
    } else {
      showModalWindowError("Please, enter complete information");
    }
    return;
  }
}

// check if object  is full
function checkObjectValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" && obj[key].trim() === "") {
        return false;
      }
      if (Array.isArray(obj[key]) && obj[key].length === 0) {
        return false;
      }
    }
  }
  return true;
}

// clean form fields onclick btn
function cleanFormFields() {
  requiredEls.forEach((el) => {
    el.value = "";
  });
}

// clean bill-info and data from client object
function cleanPizzaOrderList() {
  if (outputInfoBill.children.length !== 0) {
    Array.from(outputInfoBill.children).forEach((li) => {
      li.remove();
    });
    totalPriceFieldInBill.value = "";
    discountInBill.value = "";
    toPayFieldBill.value = "";
    dataFromClient.orders = [];
    dataFromClient.price = 0;
    dataFromClient.discount = 0;
    dataFromClient.info = "Pizza with: ";
  }
}

function cleanDataFromForm() {
  dataFromClient.name = "";
  dataFromClient.email = "";
  dataFromClient.phone = "";
}
