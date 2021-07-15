$(document).ready(function() {
	new WOW().init();

	//scroll down button to about us section
	$("#scroll-to-about-section").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
    });

	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word, .navgition .dropdown>a').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
   	}
	
	// //details Slider Carousel
    ///////// ** details ** /////////
    var specials = new Swiper('.details-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.details-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    });
	


	//video slider Carousel
	///////// ** video* /////////
    var specials = new Swiper('.specials-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.specials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.specials-slider .swiper-btn-next',
            prevEl: '.specials-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

	

});
	// // //simple parellax on details image
		// // CommonJS
		// const simpleParallax = require('simple-parallax-js');
		var image = document.getElementsByClassName('thumbnailll');
		new simpleParallax(image, {
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
	});











	
	
		
	
		

