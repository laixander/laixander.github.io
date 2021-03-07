$(document).ready(function () {
    // Slick Slider
    $('.client-slides').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Nav Shrink when Scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            $('.navbar').addClass('navbar-shrink');
            // $('#back-to-top').fadeIn();
        } else {
            $('.navbar').removeClass('navbar-shrink');
            // $('#back-to-top').fadeOut();
        }
    });

    // Back to top
    $('[href="#"]').click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1e3, 'easeInOutExpo');
        return false;
    });

    // Button
    // $('#back-to-top').click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 400);
    //     return false;
    // });

    // Modal
    $('#contactModal').on('show.bs.modal', function (event) {
        $('body').addClass('overflow-hidden');
    }).on('hidden.bs.modal', function (event) {
        $('body').removeClass('overflow-hidden');
    })

    // ScrollSpy
    $('body').scrollspy({ target: '.navbar', offset: 68 }); 
    $('.nav-item a, .navbar-brand').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1e3, 'easeInOutExpo');
        }
    });

    // Closed hamburger menu on outside click
    $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });

});