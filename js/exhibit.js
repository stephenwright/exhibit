/** @file exhibit.js */

$(function(){

	// resize all the "walls" on load, and on window resize
	function wresize(){ $('.wall').css('height', window.innerHeight); }
	$(window).resize(wresize);
	wresize();

	// set the background for each image to be the image itself
	$('.wall').each(function(i, el){
		var src = $(el).find('img')[0].src;
		$(el)
			.css('background', 'url('+src+') no-repeat center center fixed')
			.css('background-size', 'cover');
	});

	$('.plaque').on('click', function(){
		el = $(this);
		el.hasClass('stick') ? el.removeClass('stick') : el.addClass('stick');
	});

	$('.frame').on('click', function(){
		el = $(this);
		el.hasClass('zoom') ? el.removeClass('zoom') : el.addClass('zoom');
	});

	var current;
	var walls = $('.wall');
	var $next = $('#next');

	function updateCurrentWall(){
		current = walls.first();
		var pos = $(window).scrollTop();
		walls.each(function(i,v){
			if ($(v).offset().top <= pos) current = v;
		});
	}

	function getNextWall() {
		updateCurrentWall();
		var next = $(current).next('.wall');
		if (next.length == 0)
			next = walls.first();
		return next[0];
	}

	$next.on('click', function(e){
		e.preventDefault();
		current = getNextWall();
		$('html,body').animate({ scrollTop:$(current).offset().top });
	});

	$(window).on('scroll', function(){
		updateCurrentWall();
		current == walls.last()[0] ? $next.addClass('flip') : $next.removeClass('flip');
	});

});

