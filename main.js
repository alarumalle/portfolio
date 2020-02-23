$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


