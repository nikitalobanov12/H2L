
//makes the projects transition between each other every x miliseconds
const x = 4000;
const slides = document.querySelectorAll(".swiper-slide");
let i = 0;
setInterval(() => {
  slides[i].classList.add("active");
  //if the slide is not the first one, then remove the class "active" from the previous slide
  if (i > 0) slides[i - 1].classList.remove("active");
  //if the slide is the first one, then remove the class "active" from the last slide
  if (i == 0) slides[slides.length - 1].classList.remove("active");
  i++;
  //if the slide is the last one, then set i back to 0
  if (i >= slides.length) {
    i = 0;
  }
}, x);

//intersection observer for the swiper slides, if the slide is shown then add the class "scrolled" to the nav element
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let nav = document.querySelector("nav");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("intersecting");
      document.querySelector("nav").classList.add("scrolled");
    }
  });
}, options);

observer.observe(slides[0]);

const servicesSlides = document.querySelectorAll(".services-slide");
let slide = 0;
setInterval(() => {
  //give servicesSlides the classlist of "display" if it is the [slide] element, else remove the classlist
  servicesSlides[slide].classList.add("display");
  if (slide > 0) servicesSlides[slide - 1].classList.remove("display");
  if (slide == 0)
    servicesSlides[servicesSlides.length - 1].classList.remove("display");
  slide++;
  if (slide >= servicesSlides.length) {
    slide = 0;
  }
}, x);
