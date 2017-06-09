$(document).ready(function() {
	
	
	$('.burger-btn').click(function(){
		$(this).toggleClass('open');
	});

	// block-header-navigation 

	$(".burger-btn").on('click', function(e) {
		e.preventDefault();
		$(".block-header-navigation").slideToggle();
	});

	// block-mainPage SMOOTH SCROLL

	$(".scrollDown-wrapper").on("click", function(e) {

	e.preventDefault();

	var currentBlock = $(this).attr("href"),
	currentBlockOffset = $(currentBlock).offset().top;

	$("html, body").animate({
		scrollTop: currentBlockOffset
	}, 500);

});

	// block-gallery range slider
	$(".images-range-control").slider();

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
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.block-eventsAndActions .eventsAndActions-slider-prev'),
		nextArrow: $('.block-eventsAndActions .eventsAndActions-slider-next')
	});

		// block-offices
	$('.offices-actions .actions-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.offices-actions .actions-slider-prev'),
		nextArrow: $('.offices-actions .actions-slider-next')
	});


	// block-offices popup
	$('.block-offices-popup .popup-actions-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.block-offices-popup .popup-actions-slider-prev'),
		nextArrow: $('.block-offices-popup .popup-actions-slider-next')
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

	$('.about-info-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		initialSlide: 1,
		prevArrow: $('.about-info-gallery .slider-prev'),
		nextArrow: $('.about-info-gallery .slider-next')
	});

	$('.about-info-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.about-info-slider .slide').css('width', '488px');
		$('.about-info-slider .slide:eq(' + (nextSlide) + ')').css('width', '800px');
	});

	//	http://fancybox.net/ >>>

 $(".block-header .callback-btn-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'width': 882,
		'padding' : 0,
		'closeBtn' : false
	});

	 $(".block-footer .footer-callback-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'width': 882,
		'padding' : 0,
		'closeBtn' : false
	});

	$(".block-offices .office-feedback-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'width': 882,
		'padding' : 0,
		'closeBtn' : false
	});

	$(".popup-callback-close").click( function(e) {
		$.fancybox.close();
	});


	$(".block-header .feedback-btn-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'width': 882,
		'padding' : 0,
		'closeBtn' : false
	});

	$(".block-footer .footer-feedback-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'width': 882,
		'padding' : 0,
		'closeBtn' : false
	});

	$(".popup-feedback-close").click( function(e) {
		$.fancybox.close();
	});

		// popup-offices
		$(".block-offices .offices-plan").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'padding' : 0,
		margin: [80, 0, 80, 0],
		'width' : 882,
	 	'height' : 1229,
	 	'fitToView' : false,
	 	'autoSize' : false,
		'closeBtn' : false
	});

	$(".offices-popup-close").click( function(e) {
		$.fancybox.close();
	});

		// popup-offices-detail
	$(".offices-popup-actions .slide").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'padding' : 0,
		 margin: [80, 0, 0, 0],
		'width' : 880,
	 	'height' : 1313,
	 	'fitToView' : false,
	 	'autoSize' : false,
		'closeBtn' : false
	});

	$(".popup-detail-close").click( function(e) {
		$.fancybox.close();
	});


});