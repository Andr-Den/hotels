let openFormButton = document.getElementById("open-form");
let form = document.getElementById("form");
let closeFormButton = document.getElementById("close-form");

openFormButton.onclick = function() {
  form.style.visibility = "visible"
}

closeFormButton.onclick = function() {
  form.style.visibility = "hidden"
}