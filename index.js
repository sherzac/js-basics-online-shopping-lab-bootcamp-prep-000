var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  var itemObj = {itemName: item, itemPrice: price };
  cart.push(itemObj);
  return item + ' has been added to your cart.';
}

function viewCart() {
  // write your code here
  var cartItems = [];
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
   /* {
     
     }return `In your cart, you have` + [cartItems] + `.`;*/
    } else {
      for(var i in cart) {
         cartItems.push(` ${Object.keys(cart[i])[0]} at \$${cart[i][Object.keys(cart[i])[0]]}`);
      }
     
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
