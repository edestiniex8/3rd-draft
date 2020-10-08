console.log("linked");

const menuController = document.getElementById("menu-trigger");
menuController.addEventListener("click", function () {
  console.log("this works!");
  document.getElementById("side-menu").classList.add("side-menu-open");
});

document.getElementById("menu-close").addEventListener("click", function () {
  console.log("close anonymous function was clicked");
  document.getElementById("side-menu").classList.remove("side-menu-open");
});

var input = document.getElementById("myInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
