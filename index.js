var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var b = Math.floor((Math.random() * 100) + 1);
var a = {
  itemName: `${item}`,
  itemPrice: b
};
cart.push(a);
return `${item} has been added to your cart.`;
};

function viewCart() {
  if(!cart.length) {
    console.log("Your shopping card is empty.");
  }
};

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
