const progressCircle = document.querySelectorAll(".autoplay-progress svg");
const reviewsSlider = new Swiper(".reviews__slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".navigation-next",
    prevEl: ".navigation-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      for (const el of progressCircle) {
        el.style.setProperty("--progress", 1 - progress);
      }
    },
  },
});
const blogSlider = new Swiper(".blog__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".navigation-next",
    prevEl: ".navigation-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      for (const el of progressCircle) {
        el.style.setProperty("--progress", 1 - progress);
      }
    },
  },
});


const dropMenu = document.querySelector('.drop-menu')
const dropMenuBtn = document.querySelector('.drop-menu-btn > a')

dropMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  e.target.closest('.menu__item').classList.toggle('active')
})