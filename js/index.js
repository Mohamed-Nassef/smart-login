/// =============== declaration =================
var userSignupName = document.getElementById("signupName");
var userSignupEmail = document.getElementById("signupEmail");
var userSignupPassword = document.getElementById("signupPassword");
var signInSection = document.getElementById("signInSection");
var signUpSection = document.getElementById("signUpSection");
var welcomeSection = document.getElementById("welcomeSection");
var userSigninEmail = document.getElementById("signinEmail");
var userSigninPassword = document.getElementById("signinPassword");
var userName = document.getElementById("username");
var usersList = [];
var cheak = true;
var user = {
  name: "",
  email: "",
  password: "",
};
if (localStorage.getItem("user") == null) usersList = [];
else usersList = JSON.parse(localStorage.getItem("user"));

function clearInput() {
  userSignupName.value = null;
  userSignupEmail.value = null;
  userSignupPassword.value = null;
  userSigninEmail.value = null;
  userSigninPassword.value = null;
  userSignupName.classList.remove("is-valid", "is-invalid");
  userSignupEmail.classList.remove("is-valid", "is-invalid");
  userSignupPassword.classList.remove("is-valid", "is-invalid");
  userSigninEmail.classList.remove("is-valid", "is-invalid");
  userSigninPassword.classList.remove("is-valid", "is-invalid");
}
function signUp() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email == userSignupEmail.value) {
      cheak = false;
    }
  }
  if (cheak) {
    if (
      userSignupName.classList.contains("is-valid") &&
      userSignupEmail.classList.contains("is-valid") &&
      userSignupPassword.classList.contains("is-valid")
    ) {
      user = {
        name: userSignupName.value,
        email: userSignupEmail.value,
        password: userSignupPassword.value,
      };
      usersList.push(user);
      localStorage.setItem("user", JSON.stringify(usersList));
      clearInput();
      document.getElementById("succ").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("succ").classList.add("d-none");
        switchPage();
      }, 1000);
    } else alert("you should enter valid data to sign up");
  } else {
    alert("this mail used befor try to login");
    clearInput();
    cheak = true;
  }
}
function validateInpute(elment) {
  var regex = {
    signupName: /^[A-Za-z][A-Za-z0-9_ ]{5,29}$/,
    signupEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    signupPassword: /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/,
  };
  if (regex[elment.id].test(elment.value)) {
    elment.classList.add("is-valid");
    elment.classList.remove("is-invalid");
    elment.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    elment.classList.add("is-invalid");
    elment.classList.remove("is-valid");
    elment.nextElementSibling.classList.replace("d-none", "d-block");
  }
}
function login() {
  cheak = false;
  for (var i = 0; i < usersList.length; i++) {
    if (
      usersList[i].email == userSigninEmail.value &&
      usersList[i].password == userSigninPassword.value
    ) {
      signInSection.classList.add("d-none");
      welcomeSection.classList.remove("d-none");
      userName.innerHTML = "Welcome " + usersList[i].name;
      clearInput();
      cheak = true;
    }
    if (
      usersList[i].email == userSigninEmail.value &&
      usersList[i].password != userSigninPassword.value
    ) {
      cheak = true;
      userSigninPassword.classList.add("is-invalid");
      userSigninPassword.nextElementSibling.classList.replace(
        "d-none",
        "d-block"
      );
      setTimeout(() => {
        userSigninPassword.nextElementSibling.classList.replace(
          "d-block",
          "d-none"
        );
      }, 2000);
    }
  }
  if (cheak == false) {
    alert("Email or Password not correct");
    clearInput();
  }
  //   if (
  //     (usersList[i].email != userSigninEmail.value) |
  //     (usersList[i].password != userSigninPassword.value)
  //   ) {
  //     if (usersList[i].email != userSigninEmail.value) {
  //       userSigninEmail.classList.add("is-invalid");
  //       userSigninEmail.nextElementSibling.classList.replace(
  //         "d-none",
  //         "d-block"
  //       );
  //       setTimeout(() => {
  //         userSigninEmail.nextElementSibling.classList.replace(
  //           "d-block",
  //           "d-none"
  //         );
  //       }, 3000);
  //     }
  //     if (usersList[i].password != userSigninPassword.value) {
  //       userSigninPassword.classList.add("is-invalid");
  //       userSigninPassword.nextElementSibling.classList.replace(
  //         "d-none",
  //         "d-block"
  //       );
  //       setTimeout(() => {
  //         userSigninPassword.nextElementSibling.classList.replace(
  //           "d-block",
  //           "d-none"
  //         );
  //       }, 3000);git
  //     }
  //   } else {
  //     signInSection.classList.add("d-none");
  //     welcomeSection.classList.remove("d-none");
  //     userName.innerHTML = "welcome " + usersList[i].name;
  //     clearInput();
  //     //console.log(usersList[i].name);
  //   }
  // }

  clearInput();
}
function logout() {
  welcomeSection.classList.add("d-none");
  signInSection.classList.remove("d-none");
}
function switchPage2() {
  signUpSection.classList.remove("d-none");
  signInSection.classList.add("d-none");
}
function switchPage() {
  signUpSection.classList.add("d-none");
  signInSection.classList.remove("d-none");
}
