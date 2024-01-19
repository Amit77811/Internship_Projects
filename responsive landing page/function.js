const open_search = () => {
  document.getElementById("search-input").style.display = "inline-block";
};
const close_search = () => {
  document.getElementById("search-input").style.display = "none";
};
//new
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  direction: "horizontal",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
