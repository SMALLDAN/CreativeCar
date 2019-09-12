$(document).ready(function() {

    /*====================================
    SCROLLING SCRIPTS
    ======================================*/

    $('.scroll-me a').bind('click', function(event) { //just pass scroll-me in design and start scrolling
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });


    /*====================================
    SLIDER SCRIPTS
    ======================================*/


    $('#carousel-slider').carousel({
        interval: 4000 //TIME IN MILLI SECONDS originally(2000)
    });


    /*====================================
    VAGAS SLIDESHOW SCRIPTS
    ======================================*/
    $.vegas('slideshow', {
        backgrounds: [
            { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 },
            { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 },
        ]
    })('overlay', {
        /** SLIDESHOW OVERLAY IMAGE **/
        src: 'assets/js/vegas/overlays/06.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
    });


    /*====================================
    POPUP IMAGE SCRIPTS
    ======================================*/
    $('.fancybox-media').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });


    /*====================================
    FILTER FUNCTIONALITY SCRIPTS
    ======================================*/
    $(window).load(function() {
        var $container = $('#work-div');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.caegories a').click(function() {
            $('.caegories .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
});

var filter_select_el = document.getElementById('filter');
var items_el = document.getElementById('items');
filter_select_el.onchange = function() {
    console.log(this.value);
    var items = items_el.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
};