import { gourmetPizza } from "../data";

const menuGourmetBlock = document.querySelector(".gourmet");
const list = [];

gourmetPizza.map((item) => {
  const menuGourmetItem = `<li class="block-item">
                              <div>
                                <p class="item-name">${item["name"]}</p>
                                <p class="item-info">
                                  ${item["ingredients"]}
                                </p>
                              </div>
                              <p class="item-price">$${item["price"]}</p>
                            </li>`;

  list.push(menuGourmetItem);
});
menuGourmetBlock.insertAdjacentHTML("afterbegin", list.join(""));
