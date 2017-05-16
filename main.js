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
// da se pojavi about
var opa02 = $('.opa02');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo-100){
		opa02.removeClass('opa02');
		opa02.addClass('opa1');
	}
});
// da se pojavi portfolio
var opa01 = $('.opa01');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo+100){
		opa01.removeClass('opa01');
		opa01.addClass('opa1');
	}
});
// da se pojavi contac
var opa03 = $('.opa03');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo+500){
		opa03.removeClass('opa03');
		opa03.addClass('opa1');
	}
});

var htmlcss = $('#htmlcss');
htmlcss.animate({left:0},3000);
var javascript = $('#javascript');
javascript.animate({opacity:1},2500);
var python = $('#python');
python.animate({right:0},2000);


//progres bar
var broj = 0;
var boxs = $('.box');
var front = $('.front');
var back = $('.back')
	boxs.on('click',function(){
		console.log(this);
		if (broj == 0) {
		$(this).find(front).css('transform','perspective(900px) rotateY(180deg)');
		$(this).find(back).css('transform','perspective(900px) rotateY(0deg)');
		$(this).find('#myBar1').animate({width: '90%'},2000,function(){
			var myBar1 = $('#myBar1');
			myBar1.html('<mark>90%</mark>');
		});
		$(this).find('#myBar2').animate({width: '75%'},2000,function(){
			var myBar2 = $('#myBar2');
			myBar2.html('<mark>75%</mark>');
		});
		$(this).find('#myBar3').animate({width: '40%'},2000,function(){
			var myBar3 = $('#myBar3');
			myBar3.html('<mark>40%</mark>');
		});
		broj++;
	}else {
		$(this).find('.back').css('transform','perspective(900px) rotateY(180deg)');
		$(this).find('.front').css('transform','perspective(900px) rotateY(0deg)');
		broj=0;
	}
});
});
