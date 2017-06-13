$(document).ready(function() {
	



	// burger-animation
	$('.burger-btn').click(function(){
		$(this).toggleClass('open');
	});

	// block-header-navigation 
	$(".burger-btn:not(.burger-btn.tour)").on('click', function(e) {
		e.preventDefault();
		$("body").toggleClass('open-menu');
		$(".block-header-navigation").slideToggle();
	});

 
	$(".burger-btn.tour").on('click', function(e) {
		e.preventDefault();
		$(".block-header-navigation").slideToggle();
	});


		$(".block-tour .open-slider").on('click', function(e) {
			e.preventDefault();
			$(".open-slider-btn").toggleClass('active');
			$(".block-tour .slider-wrapper").slideToggle();
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

	// block-about SMOOTH SCROLL

	$(".link.characteristics").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset - 85
		}, 500);
	});

	$(".link.technical").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset + 10
		}, 500);
	});

		$(".link.infrastructure").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset + 120
		}, 500);
	});



	// block-gallery range slider
$('.images-range-control').slider({ disabled: "true" });

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

		// block-offices popup-stock1
	$('.block-offices-popup-stock1 .popup-actions-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.block-offices-popup-stock1 .popup-actions-slider-prev'),
		nextArrow: $('.block-offices-popup-stock1 .popup-actions-slider-next')
	});

		// block-offices popup-stock2
	$('.block-offices-popup-stock2 .popup-actions-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.block-offices-popup-stock1 .popup-actions-slider-prev'),
		nextArrow: $('.block-offices-popup-stock1 .popup-actions-slider-next')
	});

		// block-offices popup-stock3
	$('.block-offices-popup-stock3 .popup-actions-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0,
		prevArrow: $('.block-offices-popup-stock1 .popup-actions-slider-prev'),
		nextArrow: $('.block-offices-popup-stock1 .popup-actions-slider-next')
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

	// block-about info
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

		// block-tour
	$('.block-tour .slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		variableWidth: true,
		arrows: true,
		initialSlide: 0
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

		// popup-offices-stock1
		$(".block-offices .item.stock1").fancybox({
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

		// popup-offices-stock2
		$(".block-offices .item.stock2").fancybox({
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

		// popup-offices-stock3
		$(".block-offices .item.stock3").fancybox({
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
			// popup-offices-success
	$(".block-offices .item.success").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'padding' : 0,
		'closeBtn' : false
	});
	$(".popup-success-close").click( function(e) {
		$.fancybox.close();
	});


	// gallery
		$(".show-gallery-js").fancybox({
			'padding': 0,
			margin: [50, 0, 0, 0],
			'width' : 880,
			'height' : 1313,
			'fitToView' : false,
			'closeBtn' : false,
			'arrows' : false,
			 beforeShow: function(){
				$(".fancybox-skin").css("backgroundColor","transparent");
				}
		});
		

	$(".popup-gallery-close").click( function(e) {
		$.fancybox.close();
	});

	$(".gallery-popup-prev").click( function(e) {
		$.fancybox.prev();
	});

	$(".gallery-popup-next").click( function(e) {
		$.fancybox.next();
	});

	$(".show-gallery-js").click( function(e) {
		var imgSrc = $(this).children("img").attr("src");
		$("#show-gallery-modal img").attr("src", imgSrc);
	});


	// infrastructure
		$(".infrastructure-item-js").fancybox({
			'padding': 0,
			margin: [50, 0, 0, 0],
			'width' : 880,
			'height' : 1313,
			'fitToView' : false,
			'closeBtn' : false,
			beforeShow: function(){
				$(".fancybox-skin").css("backgroundColor","transparent");
				}
		});

	$(".popup-infrastructure-close").click( function(e) {
		$.fancybox.close();
	});

	$(".infrastructure-item-js").click( function(e) {
		var imgSrc = $(this).find("img").attr("src");
		$("#show-infrastructure-modal img").attr("src", imgSrc);
	});



 // block-eventsAndActions filter
	$('.eventsAndActions-filters span').click(function(){
		var slider = $( '.eventsAndActions-slider' );
		slider[0].slick.slickGoTo(parseInt(0));
	});
	$(".eventsAndActions-filters span").click(function() {
		var $this = $(this);
		$(".eventsAndActions-filters span").removeClass("active-filter");
		$this.addClass("active-filter");
		
		var filter = $this.attr("data-filter");
		$(".eventsAndActions-slider .all").hide();
		$(".eventsAndActions-slider ." + filter).stop( true, true ).fadeIn(700);
	});

});