/*
	Author       :	Themesfamily
	Template Name:	Matin - Digital Agency & Business HTML Template
	Version      :	1.0.2
	
/***************************************************
==================== JS ======================
****************************************************
01. PRELOADER JS
02. ACTIVE SLICK NAV
03. START AOS ANIMATION
04. MOUSE HOVER EFFECT
05. START PARTNER LOGO
06. START ODOMETER JS
07. START POPUP VIDEO
08. START MAGNIFIC POPUP
09. START CLIENT JS
10.	START MAILCHAMP JS
11.	START Porfolio isotope

****************************************************/

(function($) {
    "use strict";
	

	/*--------------------------------------------------------------
	01.	PRELOADER JS
	--------------------------------------------------------------*/
	$(window).on("load", function () {
		$(".atf-status").fadeOut();
		$(".atf-preloader").delay(350).fadeOut("slow");
	});
	/*--------------------------------------------------------------
	END PRELOADER JS
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	02.	ACTIVE SLICK NAV
	--------------------------------------------------------------*/
	$(".atf-main-menu").slicknav({
		label: "",
		duration: 1000,
		easingOpen: "easeOutBounce", //available with jQuery UI
		prependTo: "#mobile_menu",
		closeOnClick: true,
	});

	//**================= START ONEPAGE NAV JS =====================**//

	$(".atf-main-menu").onePageNav({
		currentClass: "current",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {
			//I get fired when the animation is starting
		},
		end: function () {
			//I get fired when the animation is ending
		},
		scrollChange: function ($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		},
	});

	/*END ONEPAGE NAV JS*/

	//**================= Sticky Header Js =====================**//
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#atf-sticky-active").removeClass("atf-sticky-active");
		} else {
			$("#atf-sticky-active").addClass("atf-sticky-active");
		}
	});

	//**================= Sticky =====================**//

	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 50) {
			$(".navbar-expand-md").addClass("navbar-collaps");
			$(".atf-back-to-top").addClass("open");
		} else {
			$(".atf-header-area").removeClass("navbar-collaps");
			$(".atf-back-to-top").removeClass("open");
		}
	});

	//**===================Scroll UP ===================**//

	if ($(".atf-back-to-top").length) {
		$(".atf-back-to-top").on("click", function () {
			var target = $(this).attr("data-targets");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top,
				},
				1000
			);
		});
	}
	/*--------------------------------------------------------------
	02. END	ACTIVE SLICK NAV
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	03. START AOS ANIMATION
	--------------------------------------------------------------*/
	AOS.init({
		offset: 120,

		delay: 0,

		easing: "ease",

		duration: 500,

		disable: false, // Condition when AOS should be disabled. e.g. 'mobile'

		once: false,

		mirror: false, // whether elements should animate out while scrolling past them

		startEvent: "DOMContentLoaded",
	});
	/*--------------------------------------------------------------
	03. END AOS ANIMATION
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	04. MOUSE HOVER EFFECT
	--------------------------------------------------------------*/
	$(".card-s").tilt({
		maxTilt: -20,
		perspective: 2400,
		speed: 2200,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		scale: 1,
	});
	/*--------------------------------------------------------------
	END MOUSE HOVER EFFECT
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	05. START PARTNER LOGO
	--------------------------------------------------------------*/
	$(".atf-brand-active").owlCarousel({
		margin: 20,
		autoplay: true,
		items: 5,
		loop: true,
		nav: false,
		dot: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});
	/*--------------------------------------------------------------
	05. END PARTNER LOGO
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	06. START ODOMETER JS
	--------------------------------------------------------------*/
	$(".odometer").appear(function () {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	/*--------------------------------------------------------------
	06. END ODOMETER JS
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	07. START POPUP VIDEO
	--------------------------------------------------------------*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
	/*--------------------------------------------------------------
	07. END POPUP VIDEO
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	08. START MAGNIFIC POPUP
	--------------------------------------------------------------*/
	var magnifPopup = function () {
		$(".atf-popup-img").magnificPopup({
			type: "image",
			removalDelay: 300,
			mainClass: "mfp-with-zoom",
			gallery: {
				enabled: true,
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: "ease-in-out", // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function (openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is("img") ? openerElement : openerElement.find("img");
				},
			},
		});
	};

	// Call the functions
	magnifPopup();
	/*--------------------------------------------------------------
	08. END POPUP VIDEO
	--------------------------------------------------------------*/
	/*--------------------------------------------------------------
	09. START CLIENT JS
	--------------------------------------------------------------*/
	$("#testimonial-slider").owlCarousel({
		margin: 25,
		nav: false,
		loop: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 2,
			},
		},
	});

	/*--------------------------------------------------------------
	09. END CLIENT JS
	--------------------------------------------------------------*/

	/*--------------------------------------------------------------
	10. START MAILCHAMP JS
	--------------------------------------------------------------*/
	$("#mc-form").ajaxChimp({
		url: "https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0",
		/* Replace Your AjaxChimp Subscription Link */
	});
	/*--------------------------------------------------------------
	10. END MAILCHAMP JS
	--------------------------------------------------------------*/
	
	/*--------------------------------------------------------------
	11. START Porfolio JS
	--------------------------------------------------------------*/
	var portfolioIsotope = $('.atf-main-portfolio').isotope({
		itemSelector: '.atf-grid-portfolio'
	});

	$('#atf-portfolio-flters li').on('click', function() {
		$("#atf-portfolio-flters li").removeClass('filter-active');
		$(this).addClass('filter-active');

		portfolioIsotope.isotope({
			filter: $(this).data('filter')
		});
	});
	/*--------------------------------------------------------------
	11. END Porfolio JS
	--------------------------------------------------------------*/

})(jQuery);

