// DOM basics

// 3 ways

// By getElementById
const headingEl = document.getElementById("heading");
// console.log(headingEl);

// By getElementByClassName - HTML collection
const descriptionEl = document.getElementsByClassName("description")[0];
// console.log(descriptionEl);

// By querySelector
const headingElq = document.querySelector("#heading");
headingElq.setAttribute("class","headingClass");

// By querySelector
const descriptionElq = document.querySelector(".description");
// console.log(descriptionElq);

// getAttribute
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// setAttribute
link.setAttribute("href", "https://www.youtube.com/");
link.textContent = "go to YOUTUBE"
// link.setAttribute("href", "https://www.youtube.com/");

// link.textContent = "Go to Youtube!";

// select style
headingEl.style.color = "orange";

// add, remove, toggle class
// const descriptionEl2 = document.querySelector(".description_2");
const descriptionElem_2 = document.querySelector(".description_2");
// descriptionElem_2.classList.add("myclass");
// descriptionElem_2.setAttribute("class", "myclass")
console.log(descriptionElem_2.getAttribute("class"))
// descriptionEl2.setAttribute("class", "success");
// descriptionEl2.setAttribute("class", "error");
// descriptionEl2.classList.add("success", "error");
// descriptionEl2.classList.add("success")

// descriptionEl2.addEventListener("click", function () {
//   descriptionEl2.classList.toggle("success");
// });
// descriptionElem_2.addEventListener("click",function(){
//   descriptionElem_2.classList.toggle("myclass")
// })
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", function () {
  console.log("clicked");
  descriptionElem_2.classList.toggle("myclass");
});
