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
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObj = {itemName: item, itemPrice: price };
  cart.push(itemObj);
  return item + ' has been added to your cart.';
}

/*function viewCart() {
  var cartItems = [];
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    for(var i in cart) {
      var itemKey = Object.keys(cart[i])[0];
      var itemValue = cart[i][itemKey]
      cartItems.push(`${itemKey} at \$${itemValue}`);
    }
  }
  
  if (cart.length === 1) {
    return `In your cart, you have ${cartItems[0]}.`;
  } else if (cart.length === 2) {
    return (`In your cart, you have ${cartItems[0]} and ${cartItems[1]}.`);
  }else if (cart.length > 2) {
    var endItem = cartItems.pop();
    return (`In your cart, you have ${cartItems.join(", ")}, and ${endItem}.`);
  }
    
}*/

function viewCart() {
  cartItems = []
  
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.` 
  } else if (cart.length === 2) {
    return `In your cart, you have `
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
