try{
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 6000,
  },
});
}catch(e){
	
	console.error(e);
}

console.clear();