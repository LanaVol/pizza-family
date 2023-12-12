import { cakesList } from "./data";

const constructorSizes = document.querySelector(".cakeSize");
const list = [];

cakesList.map((item) => {
  const pizzaSize = `<div class="${item.className} cake">
                      <label for="${item.className}">
                        <img
                          src="./img/${item.className}.svg"
                          alt="Small size icon"
                          draggable="true"
                          data-name="${item.name}"
                        />
                        <span>${item.name} ${item.price}$</span>
                      </label>
                      <input type="radio" id="${item.className}" name="size" />
                    </div>`;
  list.push(pizzaSize);
});
constructorSizes.insertAdjacentHTML("afterbegin", list.join(""));
