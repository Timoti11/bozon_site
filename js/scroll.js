let clipboard = new ClipboardJS('.IP');
 

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});

s = 1
$(".welcome__button").click(function(){
	$("#copied").removeClass('ns').addClass('fade');
	setTimeout( () => (
		$("#copied").addClass('ns').removeClass('fade')
	), 1500)

}); 