/**
 * Placing Order
 * Restaurant ordering system
 * user Placed Order
 * user watches phone
 * user pllaced order-> order time 7 -> milk buying 5 -> chapatis 5
 */
const OrderTime = () => {
  console.log("Order has been place wait for 7 seconds ");
};
const OrderReady = () => {
  console.log("You order is ready");
};
const buyMilk = () => {
  console.log("buying Milk will take 5 seconds");
};
const boughtMilk = () => {
  console.log(`bought milk`);
};

console.log(
  "USECASE : I want to place order then i will go to buy milk to safe time ,after that I hope my order will be ready i will recieve it and at last i will buy chapati",
);
OrderTime();
setTimeout(() => {
  OrderReady();
}, 7000);
console.log("let me buy milk ");
buyMilk();
setTimeout(() => {
  boughtMilk();
}, 5000);

setTimeout(() => {
  console.log("bought rottian");
}, 12000);
