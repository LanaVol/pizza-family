import { DOMHelper } from "./DOMHelper";
import { UserFormData, user } from "./UserFormData";

export class PizzaOrder {
  constructor() {
    this.orderSum = 0;
    this.orders = [];
    this.totalPrice = 0;
    this.discount = 0;
    this.totalPriceFieldInBill = DOMHelper.select("#total-price");
    this.discountInBill = DOMHelper.select("#discount");
    this.toPayFieldBill = DOMHelper.select("#totalPay");
  }

  addPizzaToOrder(pizza) {
    this.orders.push(pizza);
  }

  showInfoAboutOrderInBill() {}

  calcResultToPayWithDiscount() {
    let orderSum = 0;
    this.orders.forEach((els) => {
      let totalSumOfOnePizza = 0;
      els.forEach((el) => {
        if (el.name === "Size L" && this.orders.length > 1) {
          // discount 20% if chosen more than one pizza including size L
          this.discount = 0.2;
        }
        totalSumOfOnePizza += el.quantity * el.price;
      });

      orderSum += totalSumOfOnePizza;
      this.orderSum = orderSum;
    });

    this.showInfoAboutOrderInBill();
    this.totalPriceFieldInBill.value = this.orderSum; //order-sum without discont and show at Item Total(bill)
    this.discountInBill.value = this.discount * 100;
    this.totalPrice = (
      this.orderSum -
      this.orderSum * this.discount +
      this.orderSum * 0.02
    ).toFixed(2);

    this.toPayFieldBill.value = this.totalPrice;
  }
}
