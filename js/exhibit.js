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

	$('.plaque').each(function(){
		$(this).on('click', function(){
			el = $(this);
			el.hasClass('stick')
				? el.removeClass('stick')
				: el.addClass('stick');
		});
	});

	var walls = $('.wall');
	$('#next').on('click', function(e){
		e.preventDefault();

		var current = walls.first();
		var pos = $('body').scrollTop();
		walls.each(function(i,v){
			if ($(v).offset().top <= pos) current = v;
		});

		var next = $(current).next('.wall');
		if (next.length == 0)
			next = walls.first();
		$('body').animate({ scrollTop:$(next).offset().top });
	});

});

