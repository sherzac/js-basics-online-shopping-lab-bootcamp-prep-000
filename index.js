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
  var itemObj = {itemName: [item], itemPrice: price };
  cart.push(itemObj);
  return [item] + ' has been added to your cart.';
}

function viewCart() {
  // write your code here
<<<<<<< HEAD
  var cartItems = []
  if (cart.length !== 0) {
   for(var i = 0; i < cart.length; i++) {
     cartItems.push(` ${Object.keys(cart[i])} at ${Object.values(cart[i])}`)
     }return `In your cart, you have` + [cartItems] + `.`;
    } else {
        return 'Your shopping cart is empty.';
    }
=======
  let cartItems = [];

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  
  } else if (cart.length === 1) {
    let oneItem = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
    return oneItem;

  } else if (cart.length === 2) {
    let twoItems = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}, and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
    console.log(twoItems);

  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      cartItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
    }
    let threeOrMoreItems = `In your cart, you have ${cartItems}, and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}`;
    console.log(threeOrMoreItems);
  }
>>>>>>> c6db1b344520ceae49e183fba0f5ebf792de04b5
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
