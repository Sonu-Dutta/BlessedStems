const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const repPass = document.querySelector("#repPass");
let flag = 1;

const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm() {
  // username
  if (username.value == "") {
    document.getElementById(
      "userError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Name cannot be empty!`;

    flag = 0;
  } else if (username.value.length < 6) {
    document.getElementById(
      "userError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Username should be atleast 6 characters long!`;

    flag = 0;
  }

  // email
  if (email.value == "") {
    document.getElementById(
      "emailError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt="">  Email cannot be empty!`;

    flag = 0;
  } else if (!email.value.match(validEmailFormat)) {
    document.getElementById(
      "emailError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt="">  Looks like this is not a valid Email!`;

    flag = 0;
    e.preventDefault();
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = 1;
  }

  //   password
  if (password.value == "") {
    document.getElementById(
      "passError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Password cannot be empty!`;

    flag = 0;
  } else if (password.value < 6) {
    document.getElementById(
      "passError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Password should be atleast 6 characters long!`;

    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  //   repPass
  if (repPass.value == "") {
    document.getElementById(
      "passError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Repeat your password!`;

    flag = 0;
  } else if (password.value != repPass.value) {
    document.getElementById(
      "repPassError"
    ).innerHTML = ` <img src="./images/icon-error.svg" alt=""> Password dosen't match!`;

    flag = 0;
  } else {
    document.getElementById("passError").innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
