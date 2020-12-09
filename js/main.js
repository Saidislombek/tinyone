$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    	//отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();
        //В скрипте можно указать скорость прокрутки до якоря var t = 1000;, 
        //меняем 1000 на нужное нам значение, 1000 равно 1 секунде.
        var t = 3000;
        //забираем идентификатор бока с атрибута href
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});