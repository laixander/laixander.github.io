const $window = $(window);

$window.scroll(function () {
    // Parallax
    var scroll = $(this).scrollTop();
    $('.layer').each(function () {
        var layer = $(this);
        var dataSpeed = layer.data('parallax-speed');
        // var offsetY = -(scroll * dataSpeed); // going fast
        var offsetY = scroll * dataSpeed; // going slow
        var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
        layer.css('-webkit-transform', translate);
        layer.css('-moz-transform', translate);
        layer.css('-ms-transform', translate);
        layer.css('-o-transform', translate);
        layer.css('transform', translate);
    });
    // Nav Shrink when Scroll
    // if ($window.scrollTop() > 180) {
    //     $('.navbar').addClass('bg-dark');
    // } else {
    //     $('.navbar').removeClass('bg-dark');
    // }

    if($window.scrollTop() < 500) {
        $('.navbar').removeClass('sticky-bar');
    } else {
        $('.navbar').addClass('sticky-bar');
        $('#navbarsDefault').removeClass('show');
    }
});

// $('.navbar-toggler').on('click', function () {
//     if ($window.scrollTop() > 180) {
//         $('.navbar').addClass('bg-dark');
//     } else {
//         $('.navbar').toggleClass('bg-dark');
//     }
// });

// $window.on('scroll', function () {
//     var scroll = $(this).scrollTop();
//     if (scroll < 500) {
//         $('.navbar').removeClass('sticky-bar');
//     } else {
//         $('.navbar').addClass('sticky-bar');
//         $('#navbarsDefault').removeClass('show');
//     }
// });

$window.on('load resize', function () {
    if (this.matchMedia('(min-width: 992px)').matches) {
        $('#navbarsDefault').removeClass('bg-dark');
    } else {
        $('#navbarsDefault').addClass('bg-dark');
        $('#navbarsDefault').removeClass('show');
    }
});


$('.team-group').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev custom"><i class="fas fa-chevron-left fa-fw"></i></button>',
    nextArrow: '<button type="button" class="slick-next custom"><i class="fas fa-chevron-right fa-fw"></i></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
    ]
});