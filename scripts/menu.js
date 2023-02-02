let openMenuButton = document.getElementById("open-menu");
let menu = document.getElementById("menu");
let closeMenuButton = document.getElementById("close-menu");

openMenuButton.onclick = function() {
  menu.style.visibility = "visible"
}

closeMenuButton.onclick = function() {
  menu.style.visibility = "hidden"
}