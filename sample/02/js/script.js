$(document).ready(function () {
    $('.plan').on('mouseenter', '.card', function () {
        $(this).addClass('shadow-lg');
    })
    $('.plan').on('mouseleave', '.card', function () {
        $(this).removeClass('shadow-lg');
    })

    // Slick Slider
    $('.user-slides').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2
                }
            }
        ]
    })

    // ScrollSpy
    $('body').scrollspy({ target: '.navbar', offset: 150 }); 
    $('.nav-item a, .navbar-brand').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top -140
            }, 1e3, 'easeInOutExpo');
        }
    });

    // Closed hamburger menu on outside click
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});