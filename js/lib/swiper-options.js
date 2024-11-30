const swiper = new Swiper(".swiper", {
    loop: true,
    // spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".myslider-next",
        prevEl: ".myslider-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerGroup: 1,
            slidesPerView: 2,
        },
        768: {
            slidesPerGroup: 1,
            slidesPerView: 3,
        },
        1200: {
            slidesPerGroup: 1,
            // slidesPerView: 4,
            slidesPerView: "auto",
            // autoHeight: true,
        },
    },
});
