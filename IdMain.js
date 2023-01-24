// const create = document.getElementById("create");
// create.addEventListener("click", getValue);

export function getValue() {
  //input
  const Uname = document.getElementById("Uname").value;
  const Uposition = document.getElementById("Uposition").value;
  const Uemail = document.getElementById("Uemail").value;
  const Upnum = document.getElementById("Upnum").value;

  //output
  const name = document.getElementById("name");
  const position = document.getElementById("position");
  const email = document.getElementById("email");
  const phonenumber = document.getElementById("phonenumber");

  //results preview on card
  name.innerHTML = "Name: " + Uname.toUpperCase();
  position.innerHTML = "Position: " + Uposition.toUpperCase();
  email.innerHTML = "Email: " + Uemail.toUpperCase();
  phonenumber.innerHTML = "#: " + Upnum;

  document.getElementById("result").style.visibility = "visible";
}

export function onButton() {
  const create = document.getElementById("create");
  create.addEventListener("click", getValue);
}
document.addEventListener("DOMContentLoaded", function () {
  onButton();
});
