var siteFeature = {
    shrinknav: function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('navbar-shrink')
            } else {
                $('.navbar').removeClass('navbar-shrink')
            }
        });
    },

    accordion: function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    },

    scrollnav: function () {
        $('body').scrollspy({ target: '.navbar', offset: 65 }); 
        $('.nav-item a, .navbar-brand, .scroll-item').on('click', function(event) {
            if (this.hash !== '') {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1e3, 'easeInOutExpo');
            }
        });
    },

    closednav: function () {
        $(document).click(function (event) {
            $('.navbar-collapse').collapse('hide');
        });
    }
}

siteFeature.shrinknav();
siteFeature.accordion();
siteFeature.scrollnav();
siteFeature.closednav();