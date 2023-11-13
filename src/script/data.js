import withKetchup from "../img/constructor-img/with-ketchup.svg";
import withCheeseSauce from "../img/constructor-img/with-cheeseSauce.svg";
import withBarbecue from "../img/constructor-img/with-barbecue.svg";
import withPepperoni from "../img/constructor-img/with-pepperoni.svg";
import withBacon from "../img/constructor-img/with-bacon.svg";
import withMushrooms from "../img/constructor-img/with-mushrooms.svg";
import withTomato from "../img/constructor-img/with-tomato.svg";
import withOlives from "../img/constructor-img/with-olives.svg";
import withGrpeppers from "../img/constructor-img/with-grpeppers.svg";
import withOnion from "../img/constructor-img/with-onion.svg";
import withCheese from "../img/constructor-img/with-cheese.svg";

export const saucesList = [
  {
    name: "ketchup",
    price: 1,
    category: "sauce",
    src: "./img/ingredients/ketchup.jpg",
    prevImg: withKetchup,
  },
  {
    name: "cheeseSauce",
    price: 1,
    category: "sauce",
    src: "./img/ingredients/cheeseSauce.jpg",
    prevImg: withCheeseSauce,
  },
  {
    name: "barbecue",
    price: 1,
    category: "sauce",
    src: "./img/ingredients/sauceBarb.jpg",
    prevImg: withBarbecue,
  },
];

export const ingredientsList = [
  {
    name: "pepperoni",
    price: 4,
    category: "ingredient",
    withIngredient: withPepperoni,
  },
  {
    name: "bacon",
    price: 4,
    category: "ingredient",
    withIngredient: withBacon,
  },
  {
    name: "mushrooms",
    price: 3,
    category: "ingredient",
    withIngredient: withMushrooms,
  },
  {
    name: "tomato",
    price: 3,
    category: "ingredient",
    withIngredient: withTomato,
  },
  {
    name: "olives",
    price: 3,
    category: "ingredient",
    withIngredient: withOlives,
  },
  {
    name: "greenPeppers",
    price: 3,
    category: "ingredient",
    withIngredient: withGrpeppers,
  },
  {
    name: "onion",
    price: 3,
    category: "ingredient",
    withIngredient: withOnion,
  },
  {
    name: "cheese",
    price: 3,
    category: "ingredient",
    withIngredient: withCheese,
  },
];

export const cakesList = [
  {
    name: "Size S",
    price: 6,
    category: "cake",
  },
  {
    name: "Size M",
    price: 7,
    category: "cake",
  },
  {
    name: "Size L",
    price: 8,
    category: "cake",
  },
];
