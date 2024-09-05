/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

const products = [
  /* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/
  {
    name: "Cherry",
    price: 0.56,
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

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  [✅] addProductToCart should get the correct product based on the productId
  [✅] if the product is not already in the cart, add it to the cart
  [✅] addProductToCart should then increase the product's quantity */
const addProductToCart = function (productId) {
  // checks if product isnt in cart
  if (!cart.includes(products[productId])) {
    // adds to cart by ID
    cart.push(products[productId]);
    products[productId].quantity = 1;
  } else {
    // increases quantity if already inside
    products[productId].quantity++;
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  [✅] increaseQuantity should get the correct product based on the productId
  [✅] increaseQuantity should then increase the product's quantity */
const increaseQuantity = function (productId) {
  products[productId].quantity++;
};

/* Create a function named decreaseQuantity that takes in the productId as an argument
  [✅] decreaseQuantity should get the correct product based on the productId
  [✅] decreaseQuantity should decrease the quantity of the product
  [✅] if the function decreases the quantity to 0, the product is removed from the cart*/
const decreaseQuantity = function (productId) {
  // check if product  is greater than 0
  if (products[productId].quantity > 0) {
    products[productId].quantity--;
  } else {
    // if less than 0, it removes it from cart
    cart.splice(cart[productId], 1);
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
[✅] removeProductFromCart should get the correct product based on the productId
[✅] removeProductFromCart should update the product quantity to 0
[✅] removeProductFromCart should remove the product from the cart*/
const removeProductFromCart = function (productId) {
  // gets correct product
  if (cart[productId] <= 0) {
    // updates its quantity to 0;
    products[productId].quantity = 0;
    // removes the product from cart
    cart.splice(productId, 1);
  }
};

/* Create a function named cartTotal that has no parameters
  [✅] cartTotal should iterate through the cart to get the total cost of all products
  [✅] cartTotal should return the total cost of the products in the cart
Hint: price and quantity can be used to determine total cost*/
const cartTotal = function () {
  let total = 0;
  cart.map(function (item, index) {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
};

/* [✅] Create a function called emptyCart that empties the products from the cart */
const emptyCart = function () {
  cart = [];
};

/* Create a function named pay that takes in an amount as an argument
  [✅] amount is the money paid by customer
  [✅] pay will return a negative number if there is a remaining balance
  [✅] pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  */
const pay = function (amount) {
  const totalCost = cartTotal();
  return (amount - totalCost).toFixed(2);
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
  To fully complete this project, it is expected that all tests pass.
  Run the following command in terminal to run tests
  npm run test*/
console.log(cart, products);
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
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
