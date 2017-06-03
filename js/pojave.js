jQuery(document).ready(function ($) {

// da se pojavi about
var menuPo = $('#navmenu').offset().top
var opa = $('.opa0');
function show(e,h) {
  $(window).scroll(function(){
  	var scrollPo = $(window).scrollTop();
  	if(scrollPo>=menuPo+h){
  		e.removeClass('e');
  		e.addClass('opa1');
  	}
  });
}
show(opa.eq(0),-150);
// da se pojavi portfolio
show(opa.eq(1),150);
// da se pojavi contac
show(opa.eq(2),350);
});
