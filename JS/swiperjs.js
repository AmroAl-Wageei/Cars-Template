// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 3,
//   spaceBetween: 25,
//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     950: {
//       slidesPerView: 3,
//     },
//   },
// });

//     <!-- <section class="sectiontest">
//     <div class="slide-container swiper">
//     <div class="slide-content">
//       <div class="card-wrapper swiper-wrapper">
//         <div class="card swiper-slide">
//           <div class="image-content">
//              <span class="overlay"> </span>
//             <div class="card-image">
//               <img
//                 src="./images/Carstype/خارج الطرقات.png"
//                 alt="cardtype-icon"
//                 class="card-img"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="swiper-button-next swiper-navBtn"></div>
//     <div class="swiper-button-prev swiper-navBtn"></div>
//     <div class="swiper-pagination"></div>
//   </div>
// </section> -->

const swiperr = new Swiper(".swiper", {
  speed: 700,
  spaceBetween: -20,
  slidesPerView: 5,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    522: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },

    1050: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
