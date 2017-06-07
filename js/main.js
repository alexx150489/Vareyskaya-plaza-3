$(document).ready(function() {

 // block-mainPage SMOOTH SCROLL

	$(".scrollDown-wrapper").on("click", function(e) {

	e.preventDefault();

	var currentBlock = $(this).attr("href"),
	currentBlockOffset = $(currentBlock).offset().top;

	$("html, body").animate({
		scrollTop: currentBlockOffset
	}, 500);

});

	// slcik slider http://kenwheeler.github.io/slick/ >>>

	// block-location
	$('.block-location .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-location .slide-prev'),
		nextArrow: $('.block-location .slide-next')
	});

	// block-about technical
	$('.block-about .technical-gallery .slider-wrapper').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-about .technical-gallery .slide-prev'),
		nextArrow: $('.block-about .technical-gallery .slide-next')
	});

	// block-eventsAndActions
	$('.block-eventsAndActions .eventsAndActions-slider').slick({
		arrows: true,
		autoplay: false,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		prevArrow: $('.block-eventsAndActions .eventsAndActions-slider-prev'),
		nextArrow: $('.block-eventsAndActions .eventsAndActions-slider-next')
	});

	// block-about organisation
	$('.block-about .organisation-slider').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.organisation-gallery .slider-prev'),
		nextArrow: $('.organisation-gallery .slider-next')
	});

});