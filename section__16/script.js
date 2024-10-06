"use stric";

const img = document.querySelector(".image");
img.src = "gatito.jpg"; // Set the image source
img.addEventListener("load", function () {
  img.classList.add("fadeIn");
});
