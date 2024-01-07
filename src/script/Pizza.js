export class Pizza {
  constructor() {
    this.user = new UserFormData();
    this.orders = [];
    this.price = 0;
    this.discount = 0;
    this.ownOrder = [];
    this.prevPizza = this.showPrevPizza();
  }

  showPrevPizza() {
    const prevPizza = document.querySelector(".prevImg");
    return prevPizza;
  }

  chooseSauseToPizzaPreview(img) {
    return this.prevPizza.firstElementChild.setAttribute("src", img);
  }

  createNewLayerPizza(url) {
    const inscription = document.createElement("div");
    inscription.classList.add("inscription");
    this.prevPizza.appendChild(inscription);
    inscription.style.backgroundImage = `url(${url})`;
  }
}

export class UserFormData {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
