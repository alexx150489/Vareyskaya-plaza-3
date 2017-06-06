$(document).ready(function() {

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

});