$('body').on('click', '.menu__dropdown span', (e) => {
    $('.menu__dropdown').not($(e.currentTarget).parent()).removeClass('active');
    $(e.currentTarget).parent().toggleClass('active');
});