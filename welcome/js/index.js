import { 
  $signInTitle,
  $signUpTitle,
  $signUpForm,
  $signInForm
} from "./dom-elements.js";

import {
  signUp,
  logIn,
} from "../../java_general/user_session/user-ops.js";

import {
  formDataToJSON
} from "../../java_general/user_session/utils.js";


// Form tab
$signInTitle.addEventListener("click", ()=> {
  $signInTitle.classList.add("selected");
  $signUpTitle.classList.remove("selected");
  $signInForm.classList.remove("hidden");
  $signUpForm.classList.add("hidden")
});
$signUpTitle.addEventListener("click", ()=> {
  $signUpTitle.classList.add("selected");
  $signInTitle.classList.remove("selected");
  $signUpForm.classList.remove("hidden");
  $signInForm.classList.add("hidden")
});

// signUp integración
$signUpForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const data = formDataToJSON(new FormData($signUpForm));
  signUp({
    username: data.username,
    email: data.email,
    password: data.password
  })
})


// Sign in integration
$signInForm.addEventListener("submit", (e)=> {
  e.preventDefault();
  const data = formDataToJSON(new FormData($signInForm));
  logIn({
    username: data.username,
    password: data.password,
  })
})
