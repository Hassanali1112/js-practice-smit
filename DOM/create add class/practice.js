const heading = document.createElement("h1");
heading.textContent  = "hello world";
const body = document.querySelector("body");
heading.style.color = "green";
// heading.classList.add("fs")
heading.setAttribute("class","fs")
console.log(heading.getAttribute("class"))
body.appendChild(heading)
console.log(body)