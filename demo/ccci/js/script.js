var ccciFeature = {
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
                // $('.navbar-brand').find('.colored-logo').removeClass('d-none').end().find('.white-logo').addClass('d-none');
                $('#back-to-top').fadeIn();
            } else {
                $('.navbar').removeClass('navbar-shrink');
                // $('.navbar-brand').find('.colored-logo').addClass('d-none').end().find('.white-logo').removeClass('d-none');
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
    },

    accordionScrollTop: function(){
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
    }
}

ccciFeature.slickSlider();
ccciFeature.onScrollChange();
ccciFeature.backToTop();
ccciFeature.scrollSpy();
ccciFeature.wowo();
ccciFeature.accordionScrollTop();
ccciFeature.parallaxBG();

$(document).ready(function() {
    $('html').addClass("hidden-c");
    $(window).scroll(function() {
        ccciFeature.wowo();
    });
    $(window).on("load", function() {
        ccciFeature.wowo();
    })
});