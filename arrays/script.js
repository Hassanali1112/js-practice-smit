let products = [
  {
    id: "101",
    name: "Mobile",
    variation: [
      { color: "black", prize: "$50" },
      { color: "white", prize: "$60" },
      { color: "golden", prize: "$70" },
      { color: "green", prize: "$80" },
    ],
    reviews: [
      {
        id: 1,
        name: "taimoor",
        comment: " good product",
        ratings: 4,
        status: true,
      },
      {
        id: 2,
        name: "hassan",
        comment: "easy to use",
        ratings: 4.5,
        status: true,
      },
      {
        id: 3,
        name: "abdul rehman",
        comment: "average",
        ratings: 4,
        status: false,
      },
    ],
  },
  {
    id: "102",
    name: "laptop",
    variation: [
      { color: "black", prize: "$50" },
      { color: "white", prize: "$60" },
      { color: "golden", prize: "$70" },
      { color: "green", prize: "$80" },
    ],
    reviews: [
      {
        id: 1,
        name: "taimoor",
        comment: " good product",
        ratings: 4,
        status: true,
      },
      {
        id: 2,
        name: "hassan",
        comment: "easy to use",
        ratings: 4.5,
        status: true,
      },
      {
        id: 3,
        name: "abdul rehman",
        comment: "average",
        ratings: 4,
        status: false,
      },
    ],
  },
  {
    id: "103",
    name: "smart watch",
    variation: [
      { color: "black", prize: "$50" },
      { color: "white", prize: "$60" },
      { color: "golden", prize: "$70" },
      { color: "green", prize: "$80" },
    ],
    reviews: [
      {
        id: 1,
        name: "taimoor",
        comment: " good product",
        ratings: 4,
        status: true,
      },
      {
        id: 2,
        name: "hassan",
        comment: "easy to use",
        ratings: 4.5,
        status: true,
      },
      {
        id: 3,
        name: "abdul rehman",
        comment: "average",
        ratings: 4,
        status: false,
      },
    ],
  },
];
// console.log(products[1].reviews.length)
// console.log(products[0].reviews.length)
// debugger
// let sum= 0;
// for (let i = 0; i < products.length; i++) {
//   // console.log(products[i].id);

//   for(let j=0; j <products[i].reviews.length; j++){
//     sum += products[i].reviews[j].ratings
//   }
//   console.log(sum)
// }

for (let i=0; i <products.length; i++){
 let sum = 0;
  for (let j = 0; j <products[i].reviews.length; j++) {
    sum += products[i].reviews[j].ratings;
  }
  let aveRatings = sum /products[i].reviews.length;
  console.log("id of product is "+ products[i].id + " total ratings "+ sum +
 " and average ratins is " + aveRatings);
}
// -----------------------------------------------------------------------------------
// let product = {
//   id : "101",
//   name : "Mobile",
//   variation : [
//     {color : "black", prize : "$50"},
//     {color : "white", prize : "$60"},
//     {color : "golden", prize : "$70"},
//     {color : "green", prize : "$80"},
//   ],
//   reviews :[
//     {id :1 , name : "taimoor", comment :" good product", ratings : 4, status : true},
//     {id :2 , name : "hassan", comment :"easy to use", ratings : 4.5, status : true},
//     {id :3 , name : "abdul rehman", comment :"average", ratings : 2, status : false},
//   ]
// };
// debugger
// for (let i = 0; i < product.reviews.length; i++){
//   if(product.reviews[i].status){
//     console.log(product.reviews[i].name + " review is approved");
//   }
// }
// --------------------------------------------------------------------------------
// for ratings if status is true
// let sum = 0;

// for(let i =0; i < product.reviews.length; i++){

//   if(product.reviews[i].ratings){

//     sum += product.reviews[i].ratings
//   }
// }
// console.log("total ratings is " +sum/product.reviews.length )
// console.log(product.reviews.length )

// -------------------------------------------------------------------------------------------
// let product = {
//   id : "101",
//   name : "Mobile",
//   variation : [
//     {color : "black", prize : "$50"},
//     {color : "white", prize : "$60"},
//     {color : "golden", prize : "$70"},
//     {color : "green", prize : "$80"},
//   ]
// };

// console.log(product.variation[2].color)

// ----------------------------------------------------------------------------------------------
// let product = {
//   id : "101",
//   name : "Mobile",
//   color : ["green", "black","white","golden"]
// };

// console.log(product.color[3])
