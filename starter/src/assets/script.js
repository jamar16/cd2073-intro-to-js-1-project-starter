/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [

  /* Create 3 or more product objects using object literal notation 
     Each product should include five properties
     - name: name of product (string)
     - price: price of product (number)
     - quantity: quantity in cart should start at zero (number)
     - productId: unique id for the product (number)
     - image: picture of product (url string)
  */
  {
    name: "cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "./images/cherry.jpg"
  },
  {
    name: "orange",
    price: 2.75,
    quantity: 0,
    productId: 2,
    image: "./images/orange.jpg"
  },
  {
    name: "strawberry",
    price: 1.99,
    quantity: 0,
    productId: 3,
    image: "./images/strawberry.jpg"
  }
  ];
  /* Images provided in /images folder. All images from Unsplash.com
     - cherry.jpg by Mae Mu
     - orange.jpg by Mae Mu
     - strawberry.jpg by Allec Gomes
  */
  
  /* Declare an empty array named cart to hold the items in the cart */
  
  let cart = []
  
  function addProductToCart(productId) {
    let pushProductToCart = products.find(products => products.productId === productId);
      let cartItemId = cart.map(products => products.productId).indexOf(productId);
      if(cartItemId === -1 ) {
        pushProductToCart.quantity++;
        cart.push(pushProductToCart);
      }
      else {
        cart[cartItemId].quantity++;
      }
  
  }
  /* Create a function named addProductToCart that takes in the product productId as an argument
    - addProductToCart should get the correct product based on the productId
    - addProductToCart should then increase the product's quantity
    - if the product is not already in the cart, add it to the cart
  */
  function increaseQuantity(productId) {
    let productsIdex = cart.map(product => product.productId).indexOf(productId);
    cart[productsIdex].quantity++;   
  }
  /* Create a function named increaseQuantity that takes in the productId as an argument
    - increaseQuantity should get the correct product based on the productId
    - increaseQuantity should then increase the product's quantity
  */
  function decreaseQuantity(productId) {
    let productsIndex = cart.map(product => product.productId).indexOf(productId);
    cart[productsIndex].quantity--;
    let cartProductQuantity = cart[productsIndex].quantity;
    if(cartProductQuantity === 0) {
      let updatedCart = cart.splice(productsIndex,1);
      //let updatedCart = cart.filter(product => product.productId !== productId);
      cart = updatedCart;
    }
  }
  /* Create a function named decreaseQuantity that takes in the productId as an argument
    - decreaseQuantity should get the correct product based on the productId
    - decreaseQuantity should decrease the quantity of the product
    - if the function decreases the quantity to 0, the product is removed from the cart
  */
  function removeProductFromCart(productId) {
    let productsIndex = cart.map(product => product.productId).indexOf(productId);
    cart[productsIndex].quantity = 0;
    let cartProductQuantity = cart[productsIndex].quantity;
      let updatedCart = cart.splice(productsIndex,1);
      //let updatedCart = cart.filter(product => product.productId !== productId);
      
      
  }
  /* Create a function named removeProductFromCart that takes in the productId as an argument
    - removeProductFromCart should get the correct product based on the productId
    - removeProductFromCart should update the product quantity to 0
    - removeProductFromCart should remove the product from the cart
  */
  function cartTotal() {
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity)
    // for (let i = 0; i < cart.length; i++) {
    //   total += cart[i].quantity * cart[i].price;
    //   console.log("cart", cart)
    // }
  return (total);
  }
  /* Create a function named cartTotal that has no parameters
    - cartTotal should iterate through the cart to get the total of all products
    - cartTotal should return the sum of the products in the cart
  */
  
  /* Create a function called emptyCart that empties the products from the cart */
  function emptyCart() {
    cart = [];
  }
  
  
  /* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  */
  let totalPayAmont = 0;
  function pay(amount) {
    totalPayAmont = amount;
    let renamedTotalPayAmount = totalPayAmont - cartTotal();
    console.log('amount', amount);
    console.log(totalPayAmont); 
    console.log(cartTotal());
  
    console.log('renamed tota;', renamedTotalPayAmount);
    return renamedTotalPayAmount;
  }
  
  
  /* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
  
  
  /* The following is for running unit tests. 
     To fully complete this project, it is expected that all tests pass.
     Run the following command in terminal to run tests
     npm run test
  */
  
  module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay, 
    emptyCart
    // /* Uncomment the following line if completing the currency converter bonus */
    // currency
  }
  