// function preloader(){
//     $('.loader-bg').fadeToggle();
// }

var ccciFeature = {
    slickSlider: function() {
        $(document).ready(function(){
            $('.logos').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            infinite: true,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: 'unslick'
                    }
                ]
            });
        });
    },
    
    onScrollChange: function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 120) {
                $('.navbar').addClass('navbar-shrink');
                // $('.navbar-brand').find('.colored-logo').removeClass('d-none').end().find('.white-logo').addClass('d-none');
                $('#back-to-top').fadeIn();
            } else {
                $('.navbar').removeClass('navbar-shrink');
                // $('.navbar-brand').find('.colored-logo').addClass('d-none').end().find('.white-logo').removeClass('d-none');
                $('#back-to-top').fadeOut();
            }
            $('.navbar-collapse').collapse('hide');
            $('.nav-icon').removeClass('open');
            $('.navbar-toggler-icon input').prop('checked', false);
        });
    },

    backToTop: function() {
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1e3, 'easeInOutExpo');
            return false;
        });
    },

    scrollSpy: function() {
        $('body').scrollspy({ target: '.navbar', offset: 68 }); 
        $('.nav-item a, .navbar-brand, .sitemap a, .go-to-msg, .address-map').on('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1e3, 'easeInOutExpo');
            }
        });
    },

    wowo: function() {
        var wTop = $(window).scrollTop(),
            wHeight = $(window).height(),
            wBottom = wTop + wHeight;
        $(".wowo:not(.animated)").each(function() {
            var me = $(this),
                meTop = me.offset().top,
                meHeight = me.innerHeight(),
                meBottom = meTop + meHeight,
                limitTop = wTop - meHeight,
                limitBottom = wBottom + meHeight;
            if (meTop > limitTop && meBottom < limitBottom) {
                me.addClass("animated");
                setTimeout(function() {
                    me.removeClass("animated wowo");
                }, 1500);
            }
        });
    },

    accordionScrollTop: function() {
        $('#accordionProducts').on('shown.bs.collapse', function () {
            $('html,body').animate({
                scrollTop: $('#accordionProducts').offset().top -100
            }, 500);
        });
    },

    parallaxBG: function(){
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            $('.layer').each(function () {
                var layer = $(this);
                var dataSpeed = layer.data('parallax-speed');
                var offsetY = scroll * dataSpeed;
                var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
                layer.css('-webkit-transform', translate);
                layer.css('-moz-transform', translate);
                layer.css('-ms-transform', translate);
                layer.css('-o-transform', translate);
                layer.css('transform', translate);
            });
        });
    },

    closedMenuOnScroll: function() {
        $('.navbar-collapse').on('click', 'a', null, function() {
            $('.navbar-collapse').collapse('hide');
            $('.nav-icon').removeClass('open');
            $('.navbar-toggler-icon input').prop('checked', false);
        });
        $('.navbar-brand').on('click', null, function() {
            $('.navbar-collapse').collapse('hide');
            $('.nav-icon').removeClass('open');
            $('.navbar-toggler-icon input').prop('checked', false);
        });
    },

    gMapHeight: function() {
        $(document).ready(function() {
            // init Height
            $('#map_canvas').height($('.career-form').innerHeight());
        });
        // On Resize
        $(window).resize(function(){ 
            $('#map_canvas').height($('.career-form').innerHeight());
        });
    },

    fadeUpSection: function() {
        $(document).ready(function() {
            $('html').addClass("hidden-c");
            $(window).scroll(function() {
                ccciFeature.wowo();
            });
            $(window).on("load", function() {
                ccciFeature.wowo();
            })
        });
    },

    formValidation: function() {
        'use strict';
        window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            }, false);
        });
        }, false);
    }
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var myEfficientFn = debounce(function() {
	ccciFeature.slickSlider();
}, 250);

window.addEventListener('resize', myEfficientFn);

ccciFeature.slickSlider();
ccciFeature.backToTop();
ccciFeature.accordionScrollTop();
// ccciFeature.parallaxBG();
ccciFeature.gMapHeight();
ccciFeature.formValidation();
ccciFeature.onScrollChange();
ccciFeature.closedMenuOnScroll();
ccciFeature.scrollSpy();
ccciFeature.fadeUpSection();
ccciFeature.wowo();