$(document).ready(function () {
	$('.pagescroll').on('click', function(e) {
		e.preventDefault();
		var $anchor = $(this);
		$('body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutCirc', function(){
			document.location.hash = $anchor.attr('href');
		});
	});
});