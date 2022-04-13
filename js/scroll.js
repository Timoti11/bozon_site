$(window).on("scroll", function() {
  // Если высота больше 200px 
  // Добавляем классу header класс fixed
    if ($(window).scrollTop() > 200) $('.header').addClass('fixed');
  // Иначе удаляем класс fixed
          else $('.header').removeClass('fixed');
    });