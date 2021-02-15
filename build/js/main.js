$('body').on('click', '.menu__dropdown span', (e) => {
    $('.menu__dropdown').not($(e.currentTarget).parent()).removeClass('active');
    $(e.currentTarget).parent().toggleClass('active');
});

let aist = new Swiper('.aist .swiper-container', {
    effect: 'fade',
    navigation: {
        nextEl: '.aist .swiper-button-next',
        prevEl: '.aist .swiper-button-prev',
    },
    pagination: {
        el: '.aist .swiper-pagination',
    },
});

let ilich = new Swiper('.ilich .swiper-container', {
    effect: 'fade',
    navigation: {
        nextEl: '.ilich .swiper-button-next',
        prevEl: '.ilich .swiper-button-prev',
    },
    pagination: {
        el: '.ilich .swiper-pagination',
    },
});