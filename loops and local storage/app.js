// light mode dark mode
let dark = document.querySelector("#dark")

dark.addEventListener("click",()=>{
    let dark = localStorage.setItem("mode","dark")
    setMode()

})

let light = document.querySelector("#light")
light.addEventListener("click",()=>{
    let light = localStorage.setItem("mode","light")
    setMode()
})

let body = document.querySelector("body")


let setMode = ()=>{
    let currentMode = localStorage.getItem("mode")
    // alert(currentMode)
    // alert(currentMode)
    if(currentMode === "dark"){
        body.style.backgroundColor = "black"
        // alert("light")
    } else {
        body.style.backgroundColor = "white"
        // alert('dark')
    }
}

let checkDefault = ()=>{
    let currentMode = localStorage.getItem("mode")
     if(currentMode === null){
        body.style.backgroundColor = "white";
        setMode()
    } else{
        setMode()
    }

}
window.onload = checkDefault()


// -----------------------------------------------------------------------------------
// local storage
// let set = document.querySelector("#set")

// let person = {
//     name :  "Hassan Ali",
//     age : 23,
//     course: "Web and app Development"
// }
// set.addEventListener("click", ()=>{
//     let setData = JSON.stringify(person)
//     localStorage.setItem("data", setData)
// })


// let get = document.querySelector("#get")
// get.addEventListener("click", ()=>{
//     let response = localStorage.getItem("data")
//     console.log(response)
//     finalData = JSON.parse(response);
//     console.log(finalData)
// })
//  let data = JSON.stringify(person);
//  localStorage.setItem("data", data);

//  let response = localStorage.getItem("data")
//  let responseObj = JSON.parse(response)
//  console.log(responseObj)



// localStorage.setItem("name", "hassan ali");
// let value = localStorage.getItem("name");


//  loops

// for (var i = 0; i <= 3; i++) {
//   console.log(i);
// }

// var i = 0;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// var i = 0;
// do{
//     console.log(i)
//     i++
// }while(i <= 3)

// for (var i = 4; i <= 3; i++) {
//   console.log(i);
// }

// var i = 4
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// var i = 4;
// do{
//     console.log(i)
//     i++
// }while(i <= 3)
