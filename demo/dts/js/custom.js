$(function() {
    // for Page Refresh to Top
    $(this).scrollTop(0);

    // for Carousel
    $('.carousel').carousel({
        interval: 5000
    })  

    // for Scrollspy
    // Add scrollspy to <body>
    $('body').scrollspy({target: '.navbar', offset: 50});   
    // Add smooth scrolling on all links inside the navbar
    $('#mainNav a, .navbar-brand').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1e3, 'easeInOutExpo', function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        }  // End if
    });

    // for Shrink Navbar & Scroll Top Button
    $(window).scroll(function () {
        scrollFunction();
    });
    $('.scroll-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1e3, 'easeInOutExpo');
        return false;
    });
    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $('#navWrapper').addClass('navbar-shrink');
            $('.scroll-top').fadeIn();
        } else {
            $('#navWrapper').removeClass('navbar-shrink');
            $('.scroll-top').fadeOut();
        }
    }

    // for Auto-collapse mobile navbar on click
    $('.navbar-collapse').on('click', 'a', null, function() {
        $('.navbar-collapse').collapse('hide');
        $('.nav-icon').removeClass('open');
    });
    $('.navbar-brand').on('click', null, function() {
        $('.navbar-collapse').collapse('hide');
        $('.nav-icon').removeClass('open');
    });

    // for Hamburger Menu Icon Animation
    $('.nav-icon').click(function() {
        $(this).toggleClass('open');
    });

    // $(".collapse.show").each(function () {
    //     $(this)
    //       .prev(".card-header")
    //       .find(".fa")
    //       .addClass("fa-minus")
    //       .removeClass("fa-plus");
    //   });
    //   $(".collapse")
    //     .on("show.bs.collapse", function () {
    //       $(this)
    //         .prev(".card-header")
    //         .find(".fa")
    //         .removeClass("fa-plus")
    //         .addClass("fa-minus");
    //     })
    //     .on("hide.bs.collapse", function () {
    //       $(this)
    //         .prev(".card-header")
    //         .find(".fa")
    //         .removeClass("fa-minus")
    //         .addClass("fa-plus");
    //     });
});

AOS.init();

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    centerMode: true,
    focusOnSelect: true
});

