//Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("active");
});
//Slider
let slide_index = 1;
displaySlides(slide_index);
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}
