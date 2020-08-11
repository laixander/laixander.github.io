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
    $('#mainNav a, .navbar-brand, .iscroll').on('click', function(event) {
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
        if (!$('#navWrapper').hasClass('navbar-shrink')) {
            $('#navWrapper').addClass('navbar-shrink');
        }
    });

    // for tooltip
     $('[data-toggle="tooltip"]').tooltip({'delay': { show: 1, hide: 0.9 }});
});

AOS.init();

// object-fit polyfill run
// objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));