$(document).ready(function() {
	$('.button').mousedown(function() {
		$('this').addClass('fill');
	});
	$('.button').mouseup(function() {
		$('this').removeClass('fill');
	});
});