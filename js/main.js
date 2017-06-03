jQuery(document).ready(function($){
//datum i vreme
function sat() {
var date = new Date();
var noviDatum = date.toDateString();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var vreme = document.getElementById('vreme');
var datum = document.getElementById('datum');

	var h = date.getHours();
	if(h<10){
		h='0'+h;
	}
	var m = date.getMinutes();
	if(m<10){
	m='0'+m;
	}
	var s = date.getSeconds();
	if(s<10){
	s='0'+s;
	}
	var text = h+"h:"+m+"m:"+s+"s";
	vreme.innerHTML = text;
	datum.innerHTML = noviDatum;
	setTimeout(sat,1000);
};
sat();
//kraj datum i vreme
//navMenuJQ
var menu = $('#navmenu');
var menuPo = $('#navmenu').offset().top;
var design = $('#design');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo){
		menu.addClass('fixmenu');
		design.css('display','block');
		design.animate({opacity:1,fontSize:'2em'},1000);
	}else{
		menu.removeClass('fixmenu');
	};
});

//skill
var htmlcss = $('#htmlcss');
htmlcss.animate({left:0},3000);
var javascript = $('#javascript');
javascript.animate({opacity:1},2500);
var python = $('#python');
python.animate({right:0},2000);
});
