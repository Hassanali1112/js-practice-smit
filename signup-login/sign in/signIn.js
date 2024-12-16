let signInEmail = document.querySelector("#signInEmail");
let signInNumber = document.querySelector("#signInNumber");
let signInPassword = document.querySelector("#signInPassword");
let signInBtn = document.querySelector(".signInBtn");

let userDetails = JSON.parse(localStorage.getItem("userDetails"));
console.log(userDetails);
// let dBtn = document.querySelector(".dBtn")
// dBtn.addEventListener("click",()=>{

// })

signInBtn.addEventListener("click", () => {
  event.preventDefault();
  if (signInEmail.value === userDetails.email) {
    if (signInNumber.value === userDetails.number) {
      if (signInPassword.value === userDetails.password) {
        localStorage.setItem("userSignIn", true);
        Swal.fire({
          title: "login successfully",
          text: "warm welcome",
          icon: "success",
        }); 
        setInterval(()=>{
          window.location.href = "../dash board/dashBoard.html";
        },2000)
        
      } else {
        alert("incorrect password.");
      }
    } else {
      alert("Please enter valid registered number.");
    }
  } else {
    alert("email not found");
  }
});
