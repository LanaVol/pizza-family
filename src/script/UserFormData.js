import { PizzaOrder } from "./PizzaOrder";

export class UserFormData {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.order = new PizzaOrder();
  }
}

export const user = new UserFormData();
