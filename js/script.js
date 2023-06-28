$(document).ready(function () {
  //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', { //main slider
        // Optional parameters
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<i class="' + className + ' fas fa-dot-circle"></i>';
            },
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
    });

    var mySwiper2 = new Swiper ('.swiper-container-2', { //testimonial
        // Optional parameters
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination-2',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">0.' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next.btn-next-test',
            prevEl: '.swiper-button-prev.btn-prev-test',
        },
    });

    var mySwiper3 = new Swiper ('.swiper-container-3', { //testimonial
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next.btn-next-present',
            prevEl: '.swiper-button-prev.btn-prev-present',
        },
    });

    $('#sandbox-container .input-group.date').datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        clearBtn: true,
        language: "fr",
        keyboardNavigation: false,
        todayHighlight: true
    });

});

// $(window).load(function() {
//     $('#main-slider .flexslider').flexslider();
// });