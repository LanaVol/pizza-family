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
import ketchup from "../img/ingredients/ketchup.jpg";
import cheeseSause from "../img/ingredients/cheeseSauce.jpg";
import barbecue from "../img/ingredients/sauceBarb.jpg";

export const saucesList = [
  {
    name: "ketchup",
    price: 1,
    category: "sauce",
    src: ketchup,
    prevImg: withKetchup,
  },
  {
    name: "cheeseSauce",
    price: 1,
    category: "sauce",
    src: cheeseSause,
    prevImg: withCheeseSauce,
  },
  {
    name: "barbecue",
    price: 1,
    category: "sauce",
    src: barbecue,
    prevImg: withBarbecue,
  },
];

export const ingredientsList = [
  {
    name: "pepperoni",
    price: 4,
    category: "ingredient",
    withIngredient: withPepperoni,
    imgPosition: { x: 2, y: -133 },
  },
  {
    name: "bacon",
    price: 4,
    category: "ingredient",
    withIngredient: withBacon,
    imgPosition: { x: -10, y: 14 },
  },
  {
    name: "mushrooms",
    price: 3,
    category: "ingredient",
    withIngredient: withMushrooms,
    imgPosition: { x: -12, y: -1050 },
  },
  {
    name: "tomato",
    price: 3,
    category: "ingredient",
    withIngredient: withTomato,
    imgPosition: { x: -23, y: -394 },
  },
  {
    name: "olives",
    price: 3,
    category: "ingredient",
    withIngredient: withOlives,
    imgPosition: { x: -19, y: -546 },
  },
  {
    name: "greenPeppers",
    price: 3,
    category: "ingredient",
    withIngredient: withGrpeppers,
    imgPosition: { x: -59, y: -875 },
  },
  {
    name: "onion",
    price: 3,
    category: "ingredient",
    withIngredient: withOnion,
    imgPosition: { x: 2, y: -705 },
  },
  {
    name: "cheese",
    price: 3,
    category: "ingredient",
    withIngredient: withCheese,
    imgPosition: { x: -10, y: -250 },
  },
];

export const cakesList = [
  {
    name: "Size S",
    price: 6,
    category: "cake",
    className: "sizeS",
  },
  {
    name: "Size M",
    price: 7,
    category: "cake",
    className: "sizeM",
  },
  {
    name: "Size L",
    price: 8,
    category: "cake",
    className: "sizeL",
  },
];

export const gourmetPizza = [
  {
    name: "Barbecue",
    price: "14.99",
    ingredients: [
      "Chicken",
      "Barbecue Sauce",
      "Mozzarella",
      "Onions",
      "Mushrooms",
      "Bacon",
    ],
  },
  {
    name: "Pepperoni",
    price: "13.99",
    ingredients: ["Barbecue Sauce", "Mozzarella", "Tomatoes", "Pepperoni"],
  },
  {
    name: "Carbonara",
    price: "14.99",
    ingredients: ["Alfredo sauce", "Mozzarella", "Mushrooms", "Ham", "Bacon"],
  },
  {
    name: "Country",
    price: "15.99",
    ingredients: [
      "Pickled cucumbers",
      "Mozzarella",
      "Onion",
      "Garlic sauce",
      "Bacon",
      "Ham",
      "Mushrooms",
    ],
  },
];

export const slicePizza = [
  {
    ["Pepperoni"]: "3.7",
    ["Country"]: "4.3",
    ["Italian"]: "3.5",
    ["Beverian"]: "3.8",
  },
  {
    ["Hawaiian"]: "4.2",
    ["Italian"]: "3.5",
    ["Country"]: "4.3",
    ["Provence"]: "3.8",
  },
];
