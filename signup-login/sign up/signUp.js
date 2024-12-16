let signUpName = document.querySelector("#signUpName");
let signUpEmail = document.querySelector("#signUpEmail");
let signUpNumber = document.querySelector("#signUpNumber");
let signUpPassword = document.querySelector("#signUpPassword");
let signUpRePassword = document.querySelector("#signUpRePassword");

let signUpNameRegex = /^[a-zA-Z]+$/;
let signUpEmailRegex = /^\S+@\S+\.\S+$/;
let signUpNumberRegex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;

let signUpBtn = document.querySelector(".signUpBtn");

signUpBtn.addEventListener("click", () => {
  event.preventDefault();
  if (signUpNameRegex.test(signUpName.value)) {
    if (signUpEmailRegex.test(signUpEmail.value)) {
      if (signUpNumberRegex.test(signUpNumber.value)) {
        if (!signUpPassword.value == "") {
          if (signUpRePassword.value == signUpPassword.value) {
            let userDetails = {
              name: signUpName.value,
              email: signUpEmail.value,
              number: signUpNumber.value,
              password: signUpPassword.value,
            };
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            Swal.fire({
              title: "Registered successfully",
              text: "warm welcome",
              icon: "success",
            });
            setInterval(() => {
              window.location.href = "../sign in/signIn.html";
            }, 2000);
          } else {
            alert("password does not match");
          }
        } else {
          alert("Password should not be null");
        }
      } else {
        alert("Please enter a valid Pakistani Phone Number");
      }
    } else {
      alert("Please enter a valid Email address");
    }
  } else {
    alert("Please enter a valid Name");
  }
});
