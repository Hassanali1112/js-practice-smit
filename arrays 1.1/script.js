let products = [
  {
    id :"101",
    title : "Mobile",
    variations : [
      {color : "black", prize :"$100", stock : 4},
      {color : "blue", prize :"$200", stock : 5},
      {color : "golden", prize :"$300", stock : 3}
    ],
    reviews : [
      {id : 1, name : "hassan", comment : "good", ratings : 4.5, status : true},
      {id : 1, name : "ali", comment : "fine", ratings : 4, status : true},
      {id : 1, name : "taimoor", comment : "poor", ratings : 2.5, status : false},
    ]
  },
  {
    id :"102",
    title : "laptop",
    variations : [
      {color : "black", prize :"$100", stock : 4},
      {color : "blue", prize :"$200", stock : 5},
      {color : "golden", prize :"$300", stock : 3}
    ],
    reviews : [
      {id : 1, name : "walid", comment : "good", ratings : 4.2, status : true},
      {id : 1, name : "sami", comment : "fine", ratings : 3.8, status : true},
      {id : 1, name : "wajid", comment : "poor", ratings : 3, status : false},
    ]
  },
  {
    id :"103",
    title : "camera",
    variations : [
      {color : "black", prize :"$100", stock : 4},
      {color : "blue", prize :"$200", stock : 5},
      {color : "golden", prize :"$300", stock : 3}
    ],
    reviews : [
      {id : 1, name : "shoaib", comment : "average", ratings : 3.2, status : true},
      {id : 1, name : "saif", comment : "poooor", ratings : 2.1, status : false},
      {id : 1, name : "zeeshan", comment : "well", ratings : 4, status : true},
    ]
  }
]

for(let i =0; i < products.length; i++){
  let sum = 0;
  for(let j=0; j < products[i].reviews.length; j++){
    if(products[i].reviews[j].status){
      sum += products[i].reviews[j].ratings
    }
  }
  console.log(" id "+ products[i].id + " total " + sum + " and average is (" + sum/products[i].reviews.length + ")")
}