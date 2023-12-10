import { cakesList } from "./data";

const constructorSizes = document.querySelector(".cakeSize");
const list = [];

cakesList.map((item) => {
  const pizzaSize = `<div class="sizeS cake">
                      <label for="sizeS">
                        <img
                          src="./img/sizeS.svg"
                          alt="Small size icon"
                          draggable="true"
                          data-name=${item.name}
                        />
                        <span>${item.name} ${item.price}$</span>
                      </label>
                      <input type="radio" id="sizeS" name="size" />
                    </div>`;
  list.push(pizzaSize);
});
constructorSizes.insertAdjacentHTML("afterbegin", list.join(""));
