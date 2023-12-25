import { cakesList, saucesList } from "../data";

const constructorSizes = document.querySelector(".cakeSize");
const constructorSauces = document.querySelector(".sauces");
const list = { sizes: [], sauces: [] };
// const list = [];

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
                        <span>${item.name} ${item.price}$</span>
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
                          } ${item.price}$</span>
                        </label>
                        <input type="radio"
                          id="${item.category}${index + 1}" 
                          name="${item.category}" />
                      </li>`;
  list.sauces.push(pizzaSauce);
});
constructorSauces.insertAdjacentHTML("afterbegin", list.sauces.join(""));
