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
		design.animate({opacity:1,fontSize:'2em'},1000);
	}else{
		menu.removeClass('fixmenu');
	};
});

// da se pojavi portfolio
var to = $('.to');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo+100){
		to.removeClass('to');
		to.addClass('to1');
	}
});
// da se pojavi about
var to0 = $('.to0');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo+500){
		to0.removeClass('to0');
		to0.addClass('to1');
	}
});
// da se pojavi contac
var to01 = $('.to01');
$(window).scroll(function(){
	var scrollPo = $(window).scrollTop();
	if(scrollPo>=menuPo+800){
		to01.removeClass('to01');
		to01.addClass('to1');
	}
});
//slajder
var current=1;
var slider = $("#slider");
var slideContainer = $(".slides");
var slides= $(".slide");
var interval;

function startSlajder(){
	interval = setInterval(function(){
		slideContainer.animate({'marginLeft':'-=100vw'},1000,function(){
			current++;
			if(current==slides.length){
				current=1;
				slideContainer.css("marginLeft",0);
			}
		})
	},4000)
};
function stopSlajder(){
	clearInterval(interval);
};

slideContainer
.on('mouseenter',stopSlajder)
.on('mouseleave',startSlajder);

startSlajder();

window.onclick = function(e){
	var mod = document.getElementById('model');
	var hold = $('#holder');
	if(e.target==mod){
		mod.style.display="none";
		hold.empty();
	}
};
});
