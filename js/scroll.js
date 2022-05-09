 var menu = $("#header");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      menu.css(background-color: 'green');
    } else if ( top <= 200 ) {
      menu.css(background-color: 'blue');
    }
  });