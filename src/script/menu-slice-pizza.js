import { slicePizza } from "./data";

const menuSlice1Blocks = document.querySelector(".slice1");
const menuSlice2Blocks = document.querySelector(".slice2");

const list1 = [];
const list2 = [];

function showMenuSlicePizza(pizza, list) {
  for (let key in pizza) {
    const itemLi = `<li>
                      <p>${key}</p>
                      <p>........</p>
                      <p>$${pizza[key]}</p>
                    </li>`;
    list.push(itemLi);
  }
}

showMenuSlicePizza(slicePizza[0], list1);
showMenuSlicePizza(slicePizza[1], list2);
menuSlice1Blocks.insertAdjacentHTML("afterbegin", list1.join(""));
menuSlice2Blocks.insertAdjacentHTML("afterbegin", list2.join(""));
