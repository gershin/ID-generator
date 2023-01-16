const create = document.getElementById("create");
create.addEventListener("click", getValue);

function getValue() {
  const Uname = document.getElementById("Uname").value;
  const Uposition = document.getElementById("Uposition").value;
  const Uemail = document.getElementById("Uemail").value;
  const Upnum = document.getElementById("Upnum").value;

  const name = document.getElementById("name");
  const position = document.getElementById("position");
  const email = document.getElementById("email");
  const phonenumber = document.getElementById("phonenumber");

  name.innerHTML = "Name: " + Uname.toUpperCase();
  position.innerHTML = "Position: " + Uposition.toUpperCase();
  email.innerHTML = "Email: " + Uemail.toUpperCase();
  phonenumber.innerHTML = "#: " + Upnum.toUpperCase();

  document.getElementById("result").style.visibility = "visible";
}