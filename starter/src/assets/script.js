/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  /* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
  {
    name: "Cherry",
    price: 0.5,
    quantity: 0,
    productId: 0,
    image: "../images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 1,
    quantity: 0,
    productId: 1,
    image: "../images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 3.0,
    quantity: 0,
    productId: 2,
    image: "../images/strawberry.jpg",
  },
  /* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

  {
    name: "Cherry Pie",
    price: 8.99,
    quantity: 0,
    productId: 3,
    image:
      "https://images.unsplash.com/photo-1476887334197-56adbf254e1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Calzone",
    price: 10.0,
    quantity: 0,
    productId: 4,
    image:
      "https://images.unsplash.com/photo-1707080032705-ec2df78fd395?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicken Scarpariello",
    price: 14.99,
    quantity: 0,
    productId: 5,
    image:
      "https://assets.bonappetit.com/photos/59c94a8f3b3bf713cb63808f/1:1/w_2560%2Cc_limit/chicken-scarpariello.jpg",
  },
  {
    name: "Baked Stuffed Eggplant with Italian Sausage",
    price: 14.99,
    quantity: 0,
    productId: 6,
    image:
      "https://www.foodandwine.com/thmb/zuTM2DyGbvdso_PSGZmPIwqgNgQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/0895_191203_dupree_fw_seo_bakedstuffedeggplant_16352-4f71168c25ba4bafabc21c2ebb08848e.jpg",
  },
];

// helper function
function getProductId(productId) {
  return products[productId];
}
/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

const addProductToCart = function (productId) {
  const product = getProductId(productId);

  // checks if product isnt in cart
  if (!cart.includes(product)) {
    // if isn't in cart, add it to cart
    cart.push(product);
  }
  // increases quantity if already inside
  product.quantity++;
};

const increaseQuantity = function (productId) {
  // selected product quantity increases by 1
  products[productId].quantity++;
};

const decreaseQuantity = function (productId) {
  const product = getProductId(productId);

  if (product.quantity > 1) {
    // decreases quant. if more than 1
    product.quantity--;
  } else {
    // sets the quantity to 0
    product.quantity = 0;

    if (cart.indexOf(product) > -1) {
      // if the item in cart is greater than -1, it removes it from the cart
      cart.splice(cart.indexOf(product), 1);
    }
  }
};

const removeProductFromCart = function (productId) {
  const product = getProductId(productId);

  // Set product quantity to 0
  product.quantity = 0;

  // checks to see if product is less than > -1
  if (cart.indexOf(product) > -1) {
    // if it is greater than -1 it removes product from the cart
    cart.splice(cart.indexOf(product), 1);
  }
};

const cartTotal = function () {
  let total = 0;
  // each product price is added to total
  cart.forEach(function (product) {
    // whatever the price * quantity is added to the total
    total += product.price * product.quantity;
  });

  // returns all the price and quantity multiplications
  return total;
};

const emptyCart = function () {
  // sets back to empty
  cart = [];
};

const pay = function (amount) {
  // gets the returned value of totalCart
  const totalCost = cartTotal();
  // returns the remaining balance rather its negative or positive
  return amount - totalCost;
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
  To fully complete this project, it is expected that all tests pass.
  Run the following command in terminal to run tests
  npm run test*/
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};
