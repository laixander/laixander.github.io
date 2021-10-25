var siteFeature = {
    slickSlider: function() {
        $(document).ready(function(){
            $('.your-class').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true
            });
        });
    },
    
    onScrollChange: function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 180) {
                $('.navbar').addClass('navbar-shrink');
                $('.navbar-brand').find('.colored-logo').removeClass('d-none').end().find('.white-logo').addClass('d-none');
                $('#back-to-top').fadeIn();
            } else {
                $('.navbar').removeClass('navbar-shrink');
                $('.navbar-brand').find('.colored-logo').addClass('d-none').end().find('.white-logo').removeClass('d-none');
                $('#back-to-top').fadeOut();
            }
        });
    },

    backToTop: function(){
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1e3, 'easeInOutExpo');
            return false;
        });
    },

    scrollSpy: function() {
        $('body').scrollspy({ target: '.navbar', offset: 68 }); 
        $('.nav-item a, .navbar-brand, .sitemap a, .got-to-msg').on('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1e3, 'easeInOutExpo');
            }
        });
    },

    wowo: function(){
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
    }
}

siteFeature.slickSlider();
siteFeature.onScrollChange();
siteFeature.backToTop();
siteFeature.scrollSpy();
siteFeature.wowo();

$(document).ready(function() {
    $('html').addClass("hidden-c");
    $(window).scroll(function() {
        siteFeature.wowo();
    });
    $(window).on("load", function() {
        siteFeature.wowo();
    })
});