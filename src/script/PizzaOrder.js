export class PizzaOrder {
  constructor() {
    this.totalOrderSum = 0;
  }

  calcResultToPayWithDiscount() {
    dataFromClient.orders.forEach((els) => {
      let totalSumOfOnePizza = 0;

      els.forEach((el) => {
        if (el.name === "Size L" && dataFromClient.orders.length > 1) {
          // discount 20% if chosen more than one pizza including size L
          dataFromClient.discount = 0.2;
        }
        totalSumOfOnePizza += el.quantity * el.price;
      });
      this.totalOrderSum += totalSumOfOnePizza;
    });
    showInfoAboutOrderInBill();
    totalPriceFieldInBill.value = this.totalOrderSum; //order-sum without discont and show at Item Total(bill)
    discountInBill.value = dataFromClient.discount * 100;
    dataFromClient.price = (
      this.totalOrderSum -
      this.totalOrderSum * dataFromClient.discount +
      this.totalOrderSum * 0.02
    ).toFixed(2);
    toPayFieldBill.value = dataFromClient.price;
  }
}
