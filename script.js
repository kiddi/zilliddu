$(document).ready(function() {

	$('.button').mousedown(function() {
		$('.button').addClass('fill');
	});


	$('.button').mouseup(function() {
		$(this).removeClass('fill')
				.removeClass('button')
				.empty()
				.append("IDDU")
				.addClass('johnson');
	});
});