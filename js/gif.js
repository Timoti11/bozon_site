//дожидаемся полной загрузки страницы
window.onload = function () {
  //ищем элемент по селектору
  var a = document.querySelector('#gif-js');
  //вешаем на него события
  a.onmouseout = function(e) {
  	document.getElementById('gif-js').style.backgroundImage='url(img/tima2.gif)';
  	setTimeout(stop, 200)
  }

  a.onmouseover = function(e) {
    document.getElementById('gif-js').style.backgroundImage='url(img/tima.gif)';
  };
}

function stop() {
	document.getElementById('gif-js').style.backgroundImage='url(img/tima2.png)';
}