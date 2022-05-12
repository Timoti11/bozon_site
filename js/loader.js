$(function() {
	$(".loader").delay(1000).fadeOut("slow");
 	setTimeout(scroll, 1000)
});

function scroll(argument) {
	$("body").css("overflow", "visible");
}