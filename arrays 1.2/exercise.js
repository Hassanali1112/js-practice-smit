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
        date: "30-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.4,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.9,
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
        title: "nice",
        comments: "It is a very good product ....",
        date: "20-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 2.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "03-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 3.0,
        title: "Best Mobile",
        comments: "Ali: Perfect for my needs!",
        date: "09-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 45000, quantity: 3 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "blue", price: 58000, quantity: 4 },
      { id: 4, color: "green", price: 57000, quantity: 2 },
      { id: 5, color: "yellow", price: 59000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.5,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.7,
        title: "Decent Product",
        comments: "Zubair: It's okay, but could be better.",
        date: "15-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.8,
        title: "Great Bike",
        comments: "Ali: Fantastic experience riding it!",
        date: "11-02-2021",
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
        rating: 4.7,
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
        rating: 4.5,
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
        rating: 4.1,
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

function getAllItemsWithPriceGreater50k(products) {
  let pricePlus50k = [];
  // for (let i = 0; i < products.length; i++) {
  //   let miniPrice = 50000;
  //   for (let j = 0; j < products[i].variations.length; j++) {
  //     if (products[i].variations[j].price > miniPrice) {
  //       pricePlus50k.push(products[i].variations[j]);
  //     }
  //   }
  // }
  // for(let i=0; i < products.length; i++){
  //   for(let j=0; j < products[i].variations.length; j++){
  //     let price = products[i].variations[j].price;
  //     if(price > 50000){
  //       pricePlus50k.push(products[i].variations[j])
  //     }
  //   }
  // }
  return pricePlus50k;
}
<<<<<<< HEAD
=======
let variationsWithPriceMoreThan50k = getAllItemsWithPriceGreater50k(products)
// console.log(variationsWithPriceMoreThan50k)
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319
// console.log(getAllItemsWithPriceGreater50k(products));

// Exercise 2:
// Get all the product titles that have at least one variation with a quantity greater than 5.
// Example: [ 'Sony LED 40 inch', 'Mobile' ]
function variationsWithQuantityFive (products){
  let titlesOfProductsQuantityFive = [];
  // for(let i = 0; i < products.length; i++){
  //   for(let j= 0; j < products[i].variations.length; j++){
  //     if(products[i].variations[j].quantity >= 5){
  //      let title = products[i].title;
  //      if(titlesOfProductsQuantityFive.indexOf(title)=== -1){

  //        titlesOfProductsQuantityFive.push(products[i].title)
  //      }

  //     }

  //   }
  // }
  for(let i=0; i < products.length; i++){
    for(let j=0; j < products[i].variations.length; j++){
      if(products[i].variations[j].quantity >= 5){
       let product = products[i].title;
        if(titlesOfProductsQuantityFive.indexOf(product) === -1){
          titlesOfProductsQuantityFive.push(product)
        }

      }
    }
  }
  return titlesOfProductsQuantityFive;
}
let productsWithOneVariationQuantityequFive = variationsWithQuantityFive(products);
// console.log(productsWithOneVariationQuantityequFive)

// console.log(variationsWithQuantityFive(products));

// Exercise 03:
// Find the product with the highest average review rating.
// Example: { title: 'Headphones', averageRating: 4.7 }
function productWithHeightAveRating(products) {
  let maxAverageRatings = 0;
  let maxAverageItem;
  // for (let i = 0; i < products.length; i++) {
  //   let sum = 0;
  //   let average = null;

  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     sum += products[i].reviews[j].rating;
  //   }
  //   average = sum / products[i].reviews.length;
  //   if (maxAverageRatings < average) {
  //     maxAverageRatings = average;
  //     maxAverageItem = {
  //       title: products[i].title,
  //       maxAverage: average,
  //     };
  //   }
  // }
  for(let i=0; i < products.length; i++){
    let sum = 0;
    for(let j=0; j < products[i].reviews.length; j++){
      sum += products[i].reviews[j].rating;
    }
    let aveRatings = sum / products[i].reviews.length;
    if(aveRatings > maxAverageRatings){
      maxAverageRatings = aveRatings;
      maxAverageItem = {
        "title" : products[i].title,
        "maxAverageRatings" : maxAverageRatings
      }
    }
  }
  return maxAverageItem;
}
<<<<<<< HEAD
let resultRatings = productWithHeightAveRating(products);
=======
let productWithMaxAveRating = productWithHeightAveRating(products);
// console.log(productWithMaxAveRating);
// let resultRatings = productWithHeightAveRating(products);
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319
// console.log(resultRatings);

// Exercise 4:
// List the colors available for the product with the most reviews.
// Example: [ 'black', 'silver', 'gold' ]

function productWithMostReviews(products) {
  let colorsOFMostReviewsProduct = [];
  let item = null;
  let productLength = 0;
  // for (let i = 0; i < products.length; i++) {
  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     if (products[i].reviews.length > productLength) {
  //       productLength = products[i].reviews.length;
  //       item = products[i];
  //     }
  //   }
  // }
  // for (let k = 0; k < item.variations.length; k++) {
  //   colorsOFMostReviewsProduct.push(item.variations[k].color);
  // }
  for(let i=0; i < products.length; i++){
    for(let j=0; j < products[i].reviews.length; j++){
      if(products[i].reviews.length > productLength){
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
<<<<<<< HEAD
let allColorsOfMostReviewedProduct = productWithMostReviews(products);
=======
let colorsOfMostReviewedProduct = productWithMostReviews(products)
// console.log(colorsOfMostReviewedProduct)
// let allColorsOfMostReviewedProduct = productWithMostReviews(products);
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319
// console.log(allColorsOfMostReviewedProduct);

// Exercise 5:
// Calculate the total number of unique users who have left reviews across all products.
// Example: 6

function getUniqueUsers(products) {
  let uniqueUsers = [];
  // for (let i = 0; i < products.length; i++) {
  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     let user = products[i].reviews[j].user;
  //     if (uniqueUsers.indexOf(user) === -1) {
  //       uniqueUsers.push(user);
  //     }
  //   }
  // }
  for(let i =0; i < products.length; i++){
    let user;
    for(let j=0; j < products[i].reviews.length; j++){
      user = products[i].reviews[j].user;
      if(uniqueUsers.indexOf(user) === -1){
        uniqueUsers.push(products[i].reviews[j].user)
      }
    }
  }
  return uniqueUsers;
}
<<<<<<< HEAD
let users = getUniqueUsers(products);
=======
let uniqueUsers = getUniqueUsers(products)
// console.log(uniqueUsers) 
// let users = getUniqueUsers(products);
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319
// console.log(users);

// Exercise 6:
// Group reviews by users. Each user should have an array of reviews they have written, sorted by date (newest first).
// Example: { 'Ahmad': [ review1, review2 ], 'Ali': [ review1 ] }
function groupReviewsByUser(products) {
  let groupedReviews = {};
  // for(let i=0; i < products.length; i++){
  //   for(let j= 0; j < products[i].reviews.length; j++){
  //     let user = products[i].reviews[j].user
  //     if(!groupedReviews[user]){
  //        groupedReviews[user] = [];
  //     }
  //     groupedReviews[user].push(products[i].reviews[j])
  //   }
  // }
  // for (let i = 0; i < products.length; i++) {
  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     let user = products[i].reviews[j].user;
  //     if (!groupedReviews[user]) {
  //       groupedReviews[user] = [];
  //     }
  //     groupedReviews[user].push(products[i].reviews[j]);
  //   }
  // }
  // for (let user in groupedReviews) {
  //   groupedReviews[user].sort(
  //     (a, b) =>
  //       new Date(b.date.split("-").reverse()) -
  //       new Date(a.date.split("-").reverse())
  //   );
  // }
  for(let i=0; i < products.length; i++){
    for(let j=0; j < products[i].reviews.length; j++){
      let user = products[i].reviews[j].user;
      if(!groupedReviews[user]){
        groupedReviews[user] = [];
      }
      groupedReviews[user].push(products[i].reviews[j])
    }
  }
  return groupedReviews;
}
let usergroupedReviews = groupReviewsByUser(products)
// console.log(usergroupedReviews)
// console.log(groupReviewsByUser(products));

<<<<<<< HEAD
let result = groupReviewsByUser(products);
=======
// let result = groupReviewsByUser(products);
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319
// console.log(result);

// Exercise 7:
// Find the product(s) with the highest total stock (sum of quantities of all variations).
// Example: [ { title: 'Headphones', totalQuantity: 50 } ]
function getProductWithHighestStock(products) {
  let productWithHighestStock = [];
  let highestStock = 0;
  let product;
  // for (let i = 0; i < products.length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < products[i].variations.length; j++) {
  //     sum += products[i].variations[j].quantity;
  //   }
  //   if (sum > highestStock) {
  //     highestStock = sum;
  //     product = products[i];
  //   }
  // }
  // productWithHighestStock.push({
  //   title: product.title,
  //   quantity: highestStock,
  // });
 for(let i=0; i < products.length; i++){
  let sum =0;
  for(let j=0; j < products[i].variations.length; j++){
    sum += products[i].variations[j].quantity
  }
  if(sum > highestStock){
    highestStock = sum;
    product = {
      "title" : products[i].title,
      "netQuantity" : highestStock,
    }
  }
 }
 productWithHighestStock.push(product)
  return productWithHighestStock;
}
let higestStockProduct = getProductWithHighestStock(products);
// console.log(higestStockProduct);

// Exercise 8:
// Get all products where at least 80% of reviews have a rating of 4.5 or higher.
// Example: [ { title: 'Smartwatch' }, { title: 'Laptop' } ]

function getAllProductWithHighRatings(products) {
  let productsWithHighRatings = [];
  for(let i=0; i < products.length; i++){
    let count = 0;
    for(let j=0; j < products[i].reviews.length; j++){
      if(products[i].reviews[j].rating >= 4.5){
         count++;
         if (count / products[i].reviews.length > 0.8) {
           productsWithHighRatings.push(products[i].title);
         }
      }
     
    }

  }
  // for (let i = 0; i < products.length; i++) {
  //   let count = 0;
  //   for (let j = 0; j < products[i].reviews.length; j++) {
  //     if (products[i].reviews[j].rating >= 4.5) {
  //       count++;
  //     }
  //   }
  //   if (count / products[i].reviews.length >= 0.8) {
  //     productsWithHighRatings.push(products[i]);
  //   }
  // }
  return productsWithHighRatings;
}
let highRatingsProducts = getAllProductWithHighRatings(products);
// console.log(highRatingsProducts);

// Exercise 9:
// Find the product with the largest price range between its cheapest and most expensive variation.
// Example: { title: 'Smartwatch', priceRange: 3000 }

function getProductWithHighestPriceRange(products) {
  let productWithHighestPriceRange = null;
  let highestPriceRange = 0;
  let priceRange;
  let product;
 for(let i=0; i < products.length; i++){
  for(let j=0; j < products[i].variations.length; j++){
    let maxPrice = products[i].variations[0].price;
    let minPrice = products[i].variations[0].price;
    if(products[i].variations[j].price > maxPrice){
      maxPrice = products[i].variations[j].price;
    }
    if(products[i].variations[j].price < minPrice){
      minPrice = products[i].variations[j].price;
    }
    priceRange = maxPrice - minPrice;
    if(priceRange > highestPriceRange){
      highestPriceRange = priceRange;
      product = products[i];
    }
  }
 }
 
 productWithHighestPriceRange = {
  "title" : product.title,
  "priceRange" :highestPriceRange,
 }
  // for (let i = 0; i < products.length; i++) {
  //   minPrice = products[i].variations[0].price;
  //   maxPrice = products[i].variations[0].price;
  //   for (let j = 0; j < products[i].variations.length; j++) {
  //     if (products[i].variations[j].price < minPrice) {
  //       minPrice = products[i].variations[j].price;
  //     }
  //     if (products[i].variations[j].price > maxPrice) {
  //       maxPrice = products[i].variations[j].price;
  //     }
  //     priceRange = maxPrice - minPrice;
  //   }
  //   if (priceRange > highestPriceRange) {
  //     highestPriceRange = priceRange;
  //     product = products[i];
  //   }
  // }
  // productWithHighestPriceRange = {
  //   title: product.title,
  //   priceRange: highestPriceRange,
  // };
  return productWithHighestPriceRange;
}
let priceRange = getProductWithHighestPriceRange(products);
// console.log(priceRange);

// Exercise 10 :
// Calculate the total revenue that could be generated if all products were sold at their listed prices.
// _Example: sum of all (price * quantity) for each variation of all products.
function getNetRevenue(products) {
  let totalRevenue = 0;
  // for (let i = 0; i < products.length; i++) {
  //   for (let j = 0; j < products[i].variations.length; j++) {
  //     totalRevenue +=
  //       products[i].variations[j].price * products[i].variations[j].quantity;
  //   }
  // }
  for(let i=0; i < products.length; i++){
    for(let j=0; j < products[i].variations.length; j++){
      totalRevenue += products[i].variations[j].price * products[i].variations[j].quantity;
    }
  }
  return totalRevenue;
}
let netRevenue = getNetRevenue(products);
<<<<<<< HEAD
// console.log(netRevenue);

// 1. **Find All Reviews from a Specific User**
//    - Create a function that retrieves all reviews made by a specific user.f

function getReviewsFroSpacificUser(products){
  l
  for(let i=0; i < products.length; i++){
    for(let j=0; j < products[i].reviews.length; j++){
      // if()
    }
  }
}

// 2. **Count Reviews by Rating**
//    - Implement a function to count how many reviews exist for each rating (e.g., how many 4.0, 4.5, etc.).

// 3. **Get Products by Color**
//    - Write a function that returns all products that have variations of a specific color.

// 4. **Get Average Rating of All Products**
//    - Create a function to calculate the average rating for all products combined.

// 5. **Get Products within a Specific Price Range**
//    - Implement a function to get all products within a specific price range.

// 6. **Find Products with No Reviews**
//    - Create a function to list all products that do not have any reviews.

// 7. **Get the Most Common Review Title**
//    - Write a function to determine which review title is the most frequently used across all products.

// 8. **Count Total Variations Across All Products**
//    - Implement a function that counts the total number of variations across all products.

// 9. **Get Products Sorted by Average Rating**
//    - Create a function to return a list of products sorted by their average review rating in descending order.

// 10. **Find Products with Stock Below a Threshold**
//     - Write a function to list all products that have at least one variation with a quantity below a specified threshold.

=======
console.log(netRevenue);
>>>>>>> f839e0376277b7a717450b9ebfbd50b203632319

