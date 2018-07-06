'use strict'; 
// Check if the loader has disappear


$(document).ready( function() {	
    $(".close").on("click", function() {
        $("#popup1").addClass("hide-popup");
    });
    $(".offer").on("click", function() {
        $("#popup1").removeClass("hide-popup");
    });
    //PRELOADER
        /** Loader */
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast').addClass("faded-out");
        (loader).fadeOut('fast');
    }, 3500);



	 // HOME PAGE HEIGHT
     function homeh() {
        var hometext = $('.home')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }

    homeh();
    $(window).resize(homeh);


    // RIGHT MENU OPEN
    $('.nav-icon').on("click", function(){
        $('body').toggleClass('full-open');
    });

    $('.menu-close').on("click", function(){
        $('body').removeClass('full-open');
    });
    $('.right-menu nav ul li a').on('click', function () {
        $('body').removeClass('full-open');
    });

    //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            });
                
            $(this).addClass('active');
          
            var target = this.hash,
            target = $(target);
            $('html, body').stop().animate({
                'scrollTop': target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target.selector;
                $(document).on("scroll", onScroll);
        });
    });
        
    function onScroll(event){
        if ($('#home').length) {     
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
            });
        }              
    }


    // HOME TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2'),  $(this).data('text3')],
                loop: $(this).data('loop') ? $(this).data('loop') : false ,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                typeSpeed: 10,
            });
        });
    }

    // PORTFOLIO ISOTOPE
    if ($('.isotope_items').length) {

         var $container = $('.isotope_items');
         $container.isotope();

        $('.portfolio_filter ul li').on("click", function(){
            $(".portfolio_filter ul li").removeClass("select-cat");
            $(this).addClass("select-cat");              
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
        });
            return false;
        });  
        
    }

  // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });

     // LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    // SMOOTH SCROLL
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    // Scroll in big screen
    function onScroll(event){
        if ($('#home').length) {     
        var scrollPos = $(document).scrollTop();
        $('nav .navbar-nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav .navbar-nav a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
            });
        }              
    }

}); // document load end 