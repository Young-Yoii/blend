
/*nav*/
$(function(){
$(".nav>li").mouseover(function(){
		$(this).children(".sub").stop().slideDown();
	});
	$(".nav>li").mouseleave(function(){
		$(this).children(".sub").stop().slideUp();
		
	});
});

AOS.init({
  duration: 1200
})

new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  initialSlide: 2,
  speed: 1000,
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  roundLengths: true,
  mousewheel: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true } });
	
	
/*blend*/




