/** @file exhibit.js */

$(function(){

	// resize all the "walls" on load, and on window resize
	function wresize(){ $('.wall').css('height', window.innerHeight); }
	$(window).resize(wresize);
	wresize();

	$('.wall').each(function(i, el){
		var src = $(el).find('img')[0].src;
		$(el)
			.css('background', 'url('+src+') no-repeat center center fixed')
			.css('background-size', 'cover');
	});

});