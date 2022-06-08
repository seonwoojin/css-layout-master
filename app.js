const image = document.querySelector(".center-image");
const numbers = document.querySelectorAll(".number");

function onMouseOver(event) {
  image.style.backgroundImage = "url(" + event.target.id + ")";
}

numbers.forEach(function (item) {
  item.addEventListener("mouseover", onMouseOver);
});
