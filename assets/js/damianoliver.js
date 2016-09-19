$(document).ready(function () {
    $("img.lazy").lazyload({
        threshold : 1000,
        effect : "fadeIn"
        }

    );


    /* Smooth Scrolling */

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $('.menu-fixed-container li a').click(function () {
        $('.open-menu').toggleClass('active');

        $('.menu-fixed-container').toggleClass('open');
    });



})