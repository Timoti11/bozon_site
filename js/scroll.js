let clipboard = new ClipboardJS('.IP');
 

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});



s = 1
$(".welcome__button").click(function(){
	console.log("s14 = " + s)
	if (s == 1) {
		console.log("s15 = " + s)
		s = 0;
		console.log("s17 = " + s)
		firstStep();
		console.log("s19 = " + s)
		setTimeout('secondStep()',1000);
		console.log("s21 = " + s)
		setTimeout('s = 1;',1500);
		console.log("s23 = " + s)
	} else {
	}
}); 

function firstStep(){
		$("#copied").animate(
			{
    			opacity: 1,
    			top: "+=50",
  			}, 500
  		);
}
function secondStep(){
	$("#copied").animate(
			{
		    	opacity: 0,
		    	top: "-=50",
		  	}, 500
		);
}