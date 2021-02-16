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

let fish = new Swiper('.modal[data-modal="fish"] .swiper-container', {
    effect: 'fade',
    navigation: {
        nextEl: '.modal[data-modal="fish"] .swiper-button-next',
        prevEl: '.modal[data-modal="fish"] .swiper-button-prev',
    },
    pagination: {
        el: '.modal[data-modal="fish"] .swiper-pagination',
    },
});

// show modal
$('body').on('click', '[data-modal]:not(.modal)', (e) => {
    if (!$('.backdrop').hasClass('active')) $('.backdrop').addClass('active');
    $('.modal.active').removeClass('active');
    $(`.modal[data-modal="${$(e.currentTarget).attr('data-modal')}"]`).addClass('active');

    if ($(e.currentTarget).attr('data-modal') === 'thanks') {
        setTimeout(() => {
            $('.modal.active').find('svg').addClass('animate');
        }, 100);
    }
});

// close modal events
let closeModal = () => {
    $('.backdrop').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal').find('svg').removeClass('animate');
}

$('body').on('click', '.modal__close, .modal .close', closeModal);

$('body').on('click', '.backdrop', (e) => {
    if ($(e.target)[0].className === 'backdrop active') closeModal();
});

// close modal on press ESC
$(document).keyup((e) => {
    if (e.keyCode === 27 && $('.backdrop').hasClass('active')) closeModal();
});

$('input[name="phone"]').mask('+7 000 000 00 00', { placeholder: '+7 ___ ___ __ __' });
$('input[name="date"]').mask('00/00/0000', { placeholder: '__ / __ / ____' });
$('input[name="passport"]').mask('00/00/0000', { placeholder: '__ / __ / ____' });
$('input[name="number"]').mask('00 00 000000', { placeholder: 'XX XX YYYYYY' });

$('body').on('click', '.minus', (e) => {
    if ($(e.currentTarget).parent().find('input').val() > 1) {
        $(e.currentTarget).parent().find('input').val($(e.currentTarget).parent().find('input').val() - 1);
    }
});

$('body').on('click', '.plus', (e) => {
    $(e.currentTarget).parent().find('input').val(parseInt($(e.currentTarget).parent().find('input').val()) + 1);
});

$('body').on('change', '#dr', (e) => {
    console.log('object');
    $(e.currentTarget).closest('.modal__col').next('.hide').slideToggle().css('display', 'flex');
});

$('.modal').addClass('init');