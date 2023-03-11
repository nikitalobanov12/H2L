const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const closeButton = document.querySelector(".close-hamburger");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("navigation--open");
});

closeButton.addEventListener("click", () => {
  navigation.classList.toggle("navigation--open");
});

const copy = document.querySelector(".copy");
copy.addEventListener("click", () => {
 navigator.clipboard.writeText("h2l.designstudio@gmail.com");
});

const phone = document.querySelector(".phone");
phone.addEventListener("click", () => {
  navigator.clipboard.writeText("+1 778 837 9808");
  });