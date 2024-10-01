let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 52000, quantity: 3 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
      { id: 4, color: "white", price: 54000, quantity: 4 },
      { id: 5, color: "blue", price: 51000, quantity: 2 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.6,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 3.9,
        title: "Excellent Product",
        comments: "Ali: I absolutely love it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "orange", price: 48000, quantity: 6 },
      { id: 3, color: "green", price: 55000, quantity: 8 },
      { id: 4, color: "purple", price: 53000, quantity: 3 },
      { id: 5, color: "gold", price: 59000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 3.4,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 2.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 3.0,
        title: "Best Mobile",
        comments: "Ali: Perfect for my needs!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 3 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "blue", price: 58000, quantity: 4 },
      { id: 4, color: "green", price: 57000, quantity: 2 },
      { id: 5, color: "yellow", price: 59000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.4,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Decent Product",
        comments: "Zubair: It's okay, but could be better.",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.1,
        title: "Great Bike",
        comments: "Ali: Fantastic experience riding it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 104,
    title: "Laptop",
    variations: [
      { id: 1, color: "black", price: 70000, quantity: 5 },
      { id: 2, color: "silver", price: 75000, quantity: 2 },
      { id: 3, color: "white", price: 72000, quantity: 3 },
      { id: 4, color: "blue", price: 68000, quantity: 4 },
      { id: 5, color: "red", price: 73000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Sara",
        rating: 1.5,
        title: "Great Laptop",
        comments: "Sara: Works perfectly for my needs.",
        date: "08-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Owais",
        rating: 2.0,
        title: "Good Performance",
        comments: "Owais: Solid performance and battery life.",
        date: "07-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Fatima",
        rating: 3.0,
        title: "Best Purchase",
        comments: "Fatima: Highly recommend!",
        date: "06-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 105,
    title: "Smartwatch",
    variations: [
      { id: 1, color: "black", price: 15000, quantity: 10 },
      { id: 2, color: "silver", price: 16000, quantity: 5 },
      { id: 3, color: "gold", price: 18000, quantity: 2 },
      { id: 4, color: "rose", price: 17000, quantity: 3 },
      { id: 5, color: "blue", price: 15500, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Muneeb",
        rating: 4.4,
        title: "Good Smartwatch",
        comments: "Muneeb: Great features for the price.",
        date: "09-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Nadia",
        rating: 4.5,
        title: "Very Useful",
        comments: "Nadia: Love tracking my workouts!",
        date: "08-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.9,
        title: "Awesome",
        comments: "Ali: Best smartwatch I've owned!",
        date: "07-02-2021",
        status: true,
      },
      {
        id: 4,
        user: "AliAhmed",
        rating: 4.9,
        title: "Awesome",
        comments: "Ali: Best smartwatch I've owned!",
        date: "07-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 106,
    title: "Headphones",
    variations: [
      { id: 1, color: "black", price: 3000, quantity: 4 },
      { id: 2, color: "white", price: 3500, quantity: 1 },
      { id: 3, color: "red", price: 3200, quantity: 2 },
      { id: 4, color: "blue", price: 3400, quantity: 3 },
      { id: 5, color: "green", price: 3100, quantity: 0 },
    ],
    reviews: [
      {
        id: 1,
        user: "Samira",
        rating: 4.2,
        title: "Great Sound",
        comments: "Samira: The sound quality is impressive.",
        date: "10-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Tariq",
        rating: 4.8,
        title: "Good for the Price",
        comments: "Tariq: Comfortable and decent sound.",
        date: "09-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Zara",
        rating: 4.7,
        title: "Love Them!",
        comments: "Zara: Best headphones for my workouts.",
        date: "08-02-2021",
        status: true,
      },
    ],
  },
];

// Exercise 1:
// Get all the variations where the price is greater than 50000.
// Example: [ { color: 'red', price: 52000 }, { color: 'silver', price: 55000 } ]

// function getAllItemsWithPriceGreater50k(products) {
//   for (let i = 0; i < products.length; i++) {
//     let pricePlus50k = [];
//     let miniPrice = 5000;
//     for (let j = 0; j < products[i].variations.length; j++) {
//       if (products[i].variations[j].price >= miniPrice) {
//         pricePlus50k.push(products[i].variations[j]);
//       }
//     }
//     return pricePlus50k;
//   }
// }
// console.log(getAllItemsWithPriceGreater50k(products));

// Exercise 2:
// Get all the product titles that have at least one variation with a quantity greater than 5.
// Example: [ 'Sony LED 40 inch', 'Mobile' ]
// function variationsWithQuantityFive (products){
//   let titlesOfProductsQuantityFive = [];

//   for(let i = 0; i < products.length; i++){
//     for(let j= 0; j < products[i].variations.length; j++){
//       if(products[i].variations[j].quantity >= 5){
//        let title = products[i].title;
//        console.log(title)
//        if(titlesOfProductsQuantityFive.indexOf(title)=== -1){

//          titlesOfProductsQuantityFive.push(products[i].title)
//        }

//       }

//     }
//   }
//   return titlesOfProductsQuantityFive;
// }

// console.log(variationsWithQuantityFive(products));

// Exercise 03:
// Find the product with the highest average review rating.
// Example: { title: 'Headphones', averageRating: 4.7 }
// function productWithHeightAveRating (products){
//   let maxAverageRatings = 0;
//   let maxAverageItem;
//   for(let i =0; i < products.length; i++){
//     let sum = 0;
//     let average = null;

//     for(let j=0; j < products[i].reviews.length; j++){
//       sum += products[i].reviews[j].rating;

//      }
//     average = sum / products[i].reviews.length;
//     if(maxAverageRatings < average){
//       maxAverageRatings = average;
//       maxAverageItem = {
//         "title" : products[i].title,
//         "maxAverage" : average
//       }

//     }

//   }
//   return maxAverageItem;
// }
// let result = productWithHeightAveRating(products);
// console.log(result)

// Exercise 4:
// List the colors available for the product with the most reviews.
// Example: [ 'black', 'silver', 'gold' ]

function productWithMostReviews(products) {
  let colorsOFMostReviewsProduct = [];
  let item = null;
  let productLength = 0;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].reviews.length; j++) {
      if (products[i].reviews.length > productLength) {
        productLength = products[i].reviews.length;
        item = products[i];
      }
    }
  }
  for(let k=0; k < item.variations.length; k++){
    colorsOFMostReviewsProduct.push(item.variations[k].color)
  }

  return colorsOFMostReviewsProduct;
}
let allColorsOfMostReviewedProduct = productWithMostReviews(products);
console.log(allColorsOfMostReviewedProduct);

// Exercise 5:
// Calculate the total number of unique users who have left reviews across all products.
// Example: 6

// Exercise 6:
// Group reviews by users. Each user should have an array of reviews they have written, sorted by date (newest first).
// Example: { 'Ahmad': [ review1, review2 ], 'Ali': [ review1 ] }

// Exercise 7:
// Find the product(s) with the highest total stock (sum of quantities of all variations).
// Example: [ { title: 'Headphones', totalQuantity: 50 } ]

// Exercise 8:
// Get all products where at least 80% of reviews have a rating of 4.5 or higher.
// Example: [ { title: 'Smartwatch' }, { title: 'Laptop' } ]

// Exercise 9:
// Find the product with the largest price range between its cheapest and most expensive variation.
// Example: { title: 'Smartwatch', priceRange: 3000 }

// Exercise 10 :
// Calculate the total revenue that could be generated if all products were sold at their listed prices.
// _Example: sum of all (price * quantity) for each variation of all products.

// function sum (a,b){
//   return a + b;
// }
// let result1 = sum(3,4)
// let result2 = sum(5,4)
// let result3 = sum(2,4)
// console.log(result1)
// console.log(result2)
// console.log(result3)
