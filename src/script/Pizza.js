import { DOMHelper } from "./DOMHelper";
import { UserFormData } from "./UserFormData";

export class Pizza {
  constructor() {
    this.user = new UserFormData();
    this.orders = [];
    this.price = 0;
    this.discount = 0;
    this.ownOrder = [];
    this.prevPizza = DOMHelper.select(".prevImg");
    this.draghandle();
  }

  draghandle() {
    this.prevPizza.addEventListener("dragover", (e) => this.preventEvent(e));
    this.prevPizza.addEventListener("drop", (e) =>
      this.dropElementToPreview(e)
    );
  }

  preventEvent(e) {
    e.preventDefault();
  }

  chooseSauseToPizzaPreview(img) {
    return this.prevPizza.firstElementChild.setAttribute("src", img);
  }

  createNewLayerPizza(url) {
    const inscription = document.createElement("div");
    DOMHelper.addClass(inscription, "inscription");
    this.prevPizza.appendChild(inscription);
    inscription.style.backgroundImage = `url(${url})`;
  }

  dropElementToPreview(e) {
    this.preventEvent(e);

    this.ownOrder
      .sort((a, b) => a.data - b.data)
      .forEach((el) => {
        switch (el.category) {
          case "cake":
            return (prevSize.innerHTML = el.name);
          case "sauce":
            return this.chooseSauseToPizzaPreview(el.prevImg);
          case "ingredient":
            return this.createNewLayerPizza(el.withIngredient);
        }
      });
  }
}
