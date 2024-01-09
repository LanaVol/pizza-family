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
}
