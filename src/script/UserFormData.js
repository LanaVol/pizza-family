import { DOMHelper } from "./DOMHelper";
import { Form } from "./Form";
import { PizzaOrder } from "./PizzaOrder";

export class UserFormData {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.order = new PizzaOrder();
    this.info = "Pizza with: ";
  }

  cleanFormData() {
    this.name = "";
    this.email = "";
    this.phone = "";
  }
}

export const user = new UserFormData();
