var swiper = new Swiper(".swiperLibros", {
    grid: {
        rows: 1,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 480px
        481: {
            slidesPerView: 2,
            spaceBetween: 30 
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 30 
        }

      }
});

var swiper = new Swiper(".swiperPublicaciones", {
    grid: {
        rows: 1,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        481: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 5
        }

      }
});

// siper del filtro 

var swiper = new Swiper(".swiperFilter", {
    grid: {
        rows: 1,
    },
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        480: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 480px
        481: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 5,
            spaceBetween: 5
        }

      }
});