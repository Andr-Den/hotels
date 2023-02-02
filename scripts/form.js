let openFormButton = document.getElementById("open-form");
let form = document.getElementById("form");
let closeFormButton = document.getElementById("close-form");
let submitButton = document.getElementById("submit");

openFormButton.onclick = function() {
  form.style.visibility = "visible"
}

closeFormButton.onclick = function() {
  form.style.visibility = "hidden"
}

submitButton.onclick = function(e) {
  e.preventDefault()

  let request = new XMLHttpRequest();
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");

  let person = JSON.stringify({
    name: name.value,
    phone: phone.value
  });
  
  request.open("POST", '/submit')
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send(person);
}
