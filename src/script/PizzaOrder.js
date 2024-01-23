import { DOMHelper } from "./DOMHelper";
import { UserFormData, user } from "./UserFormData";

export class PizzaOrder {
  constructor() {
    this.orderSum = 0;
    this.orders = [];
    this.discount = 0;
    this.totalPrice = 0;
    this.outputInfoBill = DOMHelper.select(".order-list");
    this.totalPriceFieldInBill = DOMHelper.select("#total-price");
    this.discountInBill = DOMHelper.select("#discount");
    this.toPayFieldBill = DOMHelper.select("#totalPay");
    this.cleanAllInBill = DOMHelper.select(".output-clean");
    this.cleanAllBillInfo();
  }

  addPizzaToOrder(pizza) {
    this.orders.push(pizza);
  }

  removeOrderListBill() {
    if (this.orders.length > 1) {
      DOMHelper.removeListEls(this.outputInfoBill.children);
    }
  }

  // need to fix after create basket
  displayOrderListBill() {
    this.removeOrderListBill();

    this.orders.forEach((els) => {
      let li = DOMHelper.createElement("li");
      els.forEach((el) => {
        if (
          el.category === "cake" ||
          el.category === "sauce" ||
          el.category === "ingredient"
        ) {
          li.innerHTML += ` ${el.name}, `;
        }
      });
      DOMHelper.appendChild(this.outputInfoBill, li);
    });
  }

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

    this.displayOrderListBill();

    this.totalPrice = (
      this.orderSum -
      this.orderSum * this.discount +
      this.orderSum * 0.02
    ).toFixed(2);

    this.displayInfoOrderInBill();
  }

  displayInfoOrderInBill() {
    this.totalPriceFieldInBill.value = this.orderSum; //order-sum without discont and show at Item Total(bill)
    this.discountInBill.value = this.discount * 100;
    this.toPayFieldBill.value = this.totalPrice;
  }

  cleanOrderListBill() {
    if (this.outputInfoBill.children.length !== 0) {
      DOMHelper.removeListEls(this.outputInfoBill.children);
    }
  }

  cleanAllBillInfo() {
    this.cleanAllInBill.addEventListener("click", () => {
      this.cleanOrderListBill();
      this.totalPriceFieldInBill.value = "";
      this.discountInBill.value = "";
      this.toPayFieldBill.value = "";
      this.setEmptyOrder();

      // dataFromClient.info = "Pizza with: ";
    });
  }

  setEmptyOrder() {
    this.orders = [];
    this.totalPrice = 0;
    this.discount = 0;
    this.orderSum = 0;
  }
}
