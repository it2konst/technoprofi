const aboutSlider = new Splide("#about-slider", {
    type: "loop",

    perPage: 1,
    perMove: 1,

    pagination: false,
    arrows: false,

    lazyLoad: true,
    autoplay: true,
    interval: 3000,
}).mount();
