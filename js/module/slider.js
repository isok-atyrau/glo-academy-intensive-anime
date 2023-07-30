export const slider = () => {
   const swiper = new Swiper(".swiper", {
      effect: "fade",
      speed: 1000,
      pagination: {
         el: ".swiper-pagination",
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   })
}
