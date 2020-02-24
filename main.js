$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 80);
});

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


var textWrapper = document.querySelector('.mov');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.mov .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 900,
    delay: (el, i) => 40 * (i+1)
  }).add({
    targets: '.mov',
    opacity: 1,
    duration: 700,
    easing: "easeOutExpo",
    delay: 100
  });

var textWrapper = document.querySelector('.lead');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.lead .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 700,
    delay: (el, i) => 55 * (i+1)
  }).add({
    targets: '.lead',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 700
  });

var textWrapper = document.querySelector('.lead2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.lead2 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 75 * (i+1)
  }).add({
    targets: '.lead2',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });