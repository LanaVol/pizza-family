import { cakesList, saucesList, ingredientsList } from "../data";

const constructorSizes = document.querySelector(".cakeSize");
const constructorSauces = document.querySelector(".sauces");
const constructorIngredients = document.querySelector(".ingredients-list");
const list = { sizes: [], sauces: [], ingredients: [] };

cakesList.map((item) => {
  const pizzaSize = `<div class="${item.className} cake">
                      <label for="${item.className}">
                        <img
                          src="./img/${item.className}.svg"
                          alt="Size icon"
                          draggable="true"
                          data-name="${item.name}"
                          data-category="${item.category}"
                        />
                        <span>${item.name} ${item.price} $</span>
                      </label>
                      <input type="radio" id="${item.className}" name="size" />
                    </div>`;
  list.sizes.push(pizzaSize);
});
constructorSizes.insertAdjacentHTML("afterbegin", list.sizes.join(""));

saucesList.map((item, index) => {
  const pizzaSauce = `<li class="${item.category}">
                        <label for="${item.category}${index + 1}">
                          <img
                            src="${item.src}"
                            alt="Sauce icon"
                            data-name="${item.name}"
                            data-category="${item.category}"
                            draggable="true"
                          />
                          <span>${
                            item.name === "cheeseSauce"
                              ? item.name[0].toUpperCase() +
                                item.name.slice(1, 6)
                              : item.name[0].toUpperCase() + item.name.slice(1)
                          } ${item.price} $</span>
                        </label>
                        <input type="radio"
                          id="${item.category}${index + 1}" 
                          name="${item.category}" />
                      </li>`;
  list.sauces.push(pizzaSauce);
});
constructorSauces.insertAdjacentHTML("afterbegin", list.sauces.join(""));

ingredientsList.map((item) => {
  const pizzaIngredient = `<li class="${item.category}" draggable="true" data-category="${item.category}" data-name="${item.name}">
                            <label for="${item.name}">
                            <div class="ingredientImg" style="background-position: ${item.imgPosition.x}px ${item.imgPosition.y}px" ></div>
                              <span>${item.price} $</span>
                            </label>
                            <input type="checkbox" id="${item.name}" />
                          </li>`;
  list.ingredients.push(pizzaIngredient);
});
constructorIngredients.insertAdjacentHTML(
  "afterbegin",
  list.ingredients.join("")
);
