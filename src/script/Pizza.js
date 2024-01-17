import { DOMHelper } from "./DOMHelper";
import { UserFormData } from "./UserFormData";
import { cakesList, ingredientsList, saucesList } from "./data";
import { showModalWindowError } from "./modals";
import empty from "../img/ingredients/empty.svg";

export class Pizza {
  constructor() {
    this.user = new UserFormData();
    this.ownOrder = [];
    this.prevPizza = DOMHelper.select(".prevImg");
    this.constructorBlockMenu = DOMHelper.select(".constructor");
    this.previewSize = DOMHelper.select(".previewSize");
    this.previewPrice = DOMHelper.select(".previewPrice").firstElementChild;
    this.dragOverHandle();
    this.dropElementToPreview();
    this.dragStartHandle();
    this.pizzaBtnHandle();
  }

  dragOverHandle() {
    this.prevPizza.addEventListener("dragover", (e) => e.preventDefault());
  }

  dropElementToPreview() {
    this.prevPizza.addEventListener("drop", (e) => {
      e.preventDefault();

      this.ownOrder
        .sort((a, b) => a.data - b.data)
        .forEach((el) => {
          switch (el.category) {
            case "cake":
              return (this.previewSize.innerHTML = el.name);
            case "sauce":
              return this.chooseSauseToPizzaPreview(el.prevImg);
            case "ingredient":
              return this.createNewLayerPizza(el.withIngredient);
          }
        });
      this.calcTotalSumOnPreview();
    });
  }

  dragStartHandle() {
    this.constructorBlockMenu.addEventListener("dragstart", (e) => {
      switch (e.target.getAttribute("data-category")) {
        case "cake":
          this.getChosenCake(e);
          break;
        case "sauce":
          this.addIngredientsToPizza(e, saucesList);
          break;
        case "ingredient":
          this.addIngredientsToPizza(e, ingredientsList);
          break;
      }
    });
  }

  chooseSauseToPizzaPreview(img) {
    return DOMHelper.setSRCAttributeElement(
      this.prevPizza.firstElementChild,
      img
    );
  }

  createNewLayerPizza(url) {
    const inscription = document.createElement("div");
    DOMHelper.addClass(inscription, "inscription");
    this.prevPizza.appendChild(inscription);
    inscription.style.backgroundImage = `url(${url})`;
  }

  getChosenCake(e) {
    cakesList.forEach((oneCake) => {
      if (e.target.getAttribute("data-name") === oneCake.name) {
        if (this.ownOrder.length === 0) {
          this.ownOrder.push({ ...oneCake, quantity: 1 });
        } else if (this.ownOrder.length !== 0) {
          const item = this.ownOrder.find((obj) => obj.name === oneCake.name);
          if (!item) {
            this.ownOrder.splice(0, 1, { ...oneCake, quantity: 1 });
          } else {
            return;
          }
        }
      }
    });
  }

  addIngredientsToPizza(e, ingredientsList) {
    ingredientsList.forEach((element) => {
      if (e.target.getAttribute("data-name") === element.name) {
        if (this.ownOrder.length === 0) {
          showModalWindowError("First choose the size:)");
        } else if (this.ownOrder.length !== 0) {
          const i = this.ownOrder.findIndex((obj) => obj.name === element.name);
          if (i !== -1) {
            this.ownOrder[i].quantity++;
            this.ownOrder[i].data = new Date();
          } else {
            this.ownOrder.push({ ...element, quantity: 1, data: new Date() });
          }
        }
      }
    });
  }

  // calculate totalSum from one creating pizza and show price in preview
  calcTotalSumOnPreview() {
    let totalSum = 0;

    this.ownOrder.forEach((el) => {
      totalSum += el.quantity * el.price;
      this.previewPrice.innerHTML = totalSum;
    });
  }

  checkPizzaBeforeOrder() {
    // console.log(this.ownOrder);
    // const categories = ["cake", "sauce", "ingredient"];
    // let isComplete = false;
    // this.ownOrder.forEach((el) => {
    //   categories.forEach((category) => {
    //     if (el.category === category) {
    //       isComplete = true;
    //     }
    //   });
    // });
    // console.log(isComplete);
    // return isComplete;
  }

  addChosenPizzaToOrder() {
    this.checkPizzaBeforeOrder();
  }

  pizzaBtnHandle() {
    this.constructorBlockMenu.addEventListener("click", (e) => {
      if (DOMHelper.isContainsClass(e.target, "addToOrder")) {
        this.addChosenPizzaToOrder();
      } else if (DOMHelper.isContainsClass(e.target, "cleanAll")) {
        this.cleanPreviewPizza();
      }
    });
  }

  // to clean array of chosen ingredients for ability to create new pizza
  cleanOwnOrderInfoArray() {
    this.ownOrder = [];
  }

  // clean preview pizza in constructor
  cleanPreviewPizza() {
    this.previewPrice.innerHTML = "";
    const allLayersPizza = Array.from(
      document.querySelectorAll(".inscription")
    );
    allLayersPizza.forEach((layer) => {
      layer.remove();
    });

    DOMHelper.setSRCAttributeElement(this.prevPizza.firstElementChild, empty);

    this.cleanOwnOrderInfoArray();
  }
}
