var clickonme_button = document.querySelector("button");
clickonme_button.addEventListener("click", inputmsg);

function inputmsg() {
  var a = prompt("input a new button name:");
  clickonme_button.textContent = "new name of button is: " + a;
}
