const wes = document.querySelector(".wes");
// wes.addEventListener("click", function(e){
//     console.log(e);
// })

// wes.addEventListener("click", function(event) {
//     console.log("YOU CLICKED IT");
//     event.preventDefault();
//   });

// wes.addEventListener("click", function(event) {
//     event.preventDefault();
//     const shouldChangePage = confirm(
//       "This website might be malicious! Do you wish to proceed?"
//     );
//     if (shouldChangePage) {
//       window.location = event.currentTarget.href;
//     }
//     console.log(shouldChangePage);
// });

// wes.addEventListener("click", function(event) {
//   const shouldChangePage = confirm(
//     "This website might be malicious! Do you wish to proceed?"
//   );
//   if (!shouldChangePage) {
//     event.preventDefault();
//   }
//   console.log(shouldChangePage);
// });

// const signupForm = document.querySelectorAll("form");
const signupForm = document.querySelector("[name='signup']");
const signupFormName = signupForm.querySelector("#name");
console.log(signupFormName);
// console.log(signupForm);

// signupForm.addEventListener("submit", function(event){
//   event.preventDefault();
//   console.log(event.currentTarget.name.value);
//   console.log(event.currentTarget.email.value);
//   console.log(event.currentTarget.agree.value);
// })

// Let us check if the name include chad;
// signupForm.addEventListener("submit", function(event){
//   const name = event.currentTarget.name.value;
//   if (name.includes("chad")){
//     alert("Sorry bro!");
//     event.preventDefault();
//   }
// })

// using "keyup" and "keydown" event;
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
// signupFormName.addEventListener("keyup", logEvent);
signupFormName.addEventListener("keydown", logEvent);