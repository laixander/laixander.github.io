$(function () {
    $('[data-toggle="tooltip"]').tooltip(
        {
            boundary: 'window'
        }
    );

    // for Page Refresh to Top
    $(this).scrollTop(0);

    // for Carousel
    $('.carousel').carousel({
        interval: 2000
    })  

    // for Scrollspy
    // Add scrollspy to <body> this add active state to the nav item
    $('body').scrollspy({target: '.navbar', offset: 68});   
    // Add smooth scrolling on all links inside the navbar
    $('.nav-item a, .navbar-brand, .cta').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                // this offset content to navbar by 67
                scrollTop: $(hash).offset().top - 67 
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
            $('.navbar').addClass('navbar-shrink');
            $('.scroll-top').fadeIn();
            $('.nav-icon').find('span').css('background', '#212529');
            $('.navbar-nav').removeClass('navbar-nav-spacing').addClass('navbar-nav-spacing-custom');
        } else {
            $('.navbar').removeClass('navbar-shrink');
            $('.scroll-top').fadeOut();
            $('.nav-icon').find('span').css('background', '#fff');
            $('.navbar-nav').addClass('navbar-nav-spacing').removeClass('navbar-nav-spacing-custom');
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

    // Form
    $("body").on("input propertychange", ".floating-label-form-group", function(t) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(t.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Close Modal when Visit button click
    $('.modal').on('click', '.btn-visit', function () {
        $(this).parents().find('.close').trigger('click');
    });
})
  
// $('.portfolio-item-caption').hover(function () {
//     const randomColor = function() {
//         let letters = '0123456789ABCDEF'.split('');
//         let color = '#';
//         for (let i = 0; i < 6; i++ ) {
//             color += letters[Math.round(Math.random() * 15)];
//         }
//         return color;
//     }
//     $(this).css({
//         'background-color' : randomColor,
//     });
// });

// var safeColors = ['00','33','66','99','cc','ff'];
// var rand = function() {
//     return Math.floor(Math.random()*6);
// };
// var randomColor = function() {
//     var r = safeColors[rand()];
//     var g = safeColors[rand()];
//     var b = safeColors[rand()];
//     return "#"+r+g+b;
// };

// $(document).ready(function() {
//     $('.portfolio-item-caption').hover(function() {
//         $(this).css('background',randomColor());
//     });
// });

var samples = new Vue({
    el: '#samples',
    data: {
        samples: [
            {
                targetID: 'portfolio01Modal',
                imgSrc: '01.jpg',
                imgSrcFull: '01-full.jpg',
                imgAlt: 'Sample 01',
                visit: '01'
            },
            // {
            //     targetID: 'portfolio02Modal',
            //     imgSrc: '02.jpg',
            //     imgSrcFull: '02-full.jpg',
            //     imgAlt: 'Sample 02',
            //     visit: '02'
            // },
            {
                targetID: 'portfolio03Modal',
                imgSrc: '03.jpg',
                imgSrcFull: '03-full.jpg',
                imgAlt: 'Sample 03',
                visit: '03'
            },
            {
                targetID: 'portfolio04Modal',
                imgSrc: '04.jpg',
                imgSrcFull: '04-full.jpg',
                imgAlt: 'Sample 04',
                visit: '04'
            },
            {
                targetID: 'portfolio05Modal',
                imgSrc: '05.jpg',
                imgSrcFull: '05-full.jpg',
                imgAlt: 'Sample 05',
                visit: '05'
            },
        ]
    }
});

var emails = new Vue({
    el: '#emails',
    data: {
        emails: [
            {
                targetID: 'email01Modal',
                imgSrc: '01.jpg',
                imgSrcFull: '01-full.jpg',
                imgAlt: 'Sample 01',
                visit: '01'
            },
            {
                targetID: 'email02Modal',
                imgSrc: '02.jpg',
                imgSrcFull: '02-full.jpg',
                imgAlt: 'Sample 02',
                visit: '02'
            },
            {
                targetID: 'email03Modal',
                imgSrc: '03.jpg',
                imgSrcFull: '03-full.jpg',
                imgAlt: 'Sample 03',
                visit: '03'
            },
            {
                targetID: 'email04Modal',
                imgSrc: '04.jpg',
                imgSrcFull: '04-full.jpg',
                imgAlt: 'Sample 04',
                visit: '04'
            },
        ]
    }
});

var skills = new Vue({
    el: '#skills',
    data: {
        skills: [
            {
                imgSrc: 'html.svg',
                imgAlt: 'HTML Logo',
                imgTitle: 'HTML'
            },
            {
                imgSrc: 'css.svg',
                imgAlt: 'CSS Logo',
                imgTitle: 'CSS'
            },
            {
                imgSrc: 'js.svg',
                imgAlt: 'JS Logo',
                imgTitle: 'JS'
            },
            {
                imgSrc: 'jquery.svg',
                imgAlt: 'jQuery Logo',
                imgTitle: 'jQuery'
            },
            {
                imgSrc: 'sass.svg',
                imgAlt: 'Sass Logo',
                imgTitle: 'Sass'
            },
            // {
            //     imgSrc: 'vue.svg',
            //     imgAlt: 'Vue JS Logo',
            //     imgTitle: 'Vue JS'
            // },
            {
                imgSrc: 'git.svg',
                imgAlt: 'Git Logo',
                imgTitle: 'Git'
            },
            // {
            //     imgSrc: 'wordpress.svg',
            //     imgAlt: 'Wordpress Logo',
            //     imgTitle: 'Wordpress'
            // },
            {
                imgSrc: 'photoshop.svg',
                imgAlt: 'Photoshop Logo',
                imgTitle: 'Photoshop'
            },
            {
                imgSrc: 'illustrator.svg',
                imgAlt: 'Illustrator Logo',
                imgTitle: 'Illustrator'
            },
            {
                imgSrc: 'figma.svg',
                imgAlt: 'Figma Logo',
                imgTitle: 'Figma'
            },
        ]
    }
});