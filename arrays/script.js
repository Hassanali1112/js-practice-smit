
let product = {
  id : "101",
  name : "Mobile",
  variation : [
    {color : "black", prize : "$50"},
    {color : "white", prize : "$60"},
    {color : "golden", prize : "$70"},
    {color : "green", prize : "$80"},
  ],
  reviews :[
    {id :1 , name : "taimoor", comment :" good product", ratings : 4, status : true},
    {id :2 , name : "hassan", comment :"easy to use", ratings : 4.5, status : true},
    {id :3 , name : "abdul rehman", comment :"average", ratings : 2, status : false},
  ]
};
let sum = 0;

for(let i =0; i < product.reviews.length; i++){

  if(product.reviews[i].ratings){
   
    sum += product.reviews[i].ratings
  }
}
console.log("total ratings is " +sum/product.reviews.length )
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
