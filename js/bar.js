//progres bar
var A = 0;
var B = 0;
var C = 0;
var boxs = $('.box');
var front = $('.front');
var back = $('.back');

$('#htmlcss').on('click',function(){
		if (A == 0) {
		$(this).find(front).css('transform','perspective(900px) rotateY(180deg)');
		$(this).find(back).css('transform','perspective(900px) rotateY(0deg)');
			var elem = $(this).find('.myBar');
			setTimeout(function(){
			var X = 10;
			var id = $(setInterval(function() {
			if (X >= 90) {
			clearInterval(id);
			} else {
			X++;
			elem.width(X+'%');
			elem.html(X+"%");
			};
		}, 10));
			},1000);
			A=1;
			}else {
		setTimeout(function(){$('#htmlcss').find('.myBar').width(0)},1000);
		$(this).find('.front').css('transform','perspective(900px) rotateY(0deg)');
		$(this).find('.back').css('transform','perspective(900px) rotateY(180deg)');
		A=0;
	};
		});
$('#javascript').on('click',function(){
		if (B == 0) {
		$(this).find(front).css('transform','perspective(900px) rotateY(180deg)');
		$(this).find(back).css('transform','perspective(900px) rotateY(0deg)');
			var elem = $(this).find('.myBar');
			setTimeout(function(){
			var Y = 10;
			var id = $(setInterval(function() {
			if (Y >= 85) {
			clearInterval(id);
			} else {
			Y++;
			elem.width(Y+'%');
			elem.html(Y+"%");
			};
		}, 10));
			},1000);
			B=1;
			}else {
		setTimeout(function(){$('#javascript').find('.myBar').width(0)},1000);
		$(this).find('.front').css('transform','perspective(900px) rotateY(0deg)');
		$(this).find('.back').css('transform','perspective(900px) rotateY(180deg)');
		B=0;
	};
		});
$('#python').on('click',function(){
		if (C == 0) {
		$(this).find(front).css('transform','perspective(900px) rotateY(180deg)');
		$(this).find(back).css('transform','perspective(900px) rotateY(0deg)');
			var elem = $(this).find('.myBar');
			setTimeout(function(){
			var Z = 10;
			var id = $(setInterval(function() {
			if (Z >= 40) {
			clearInterval(id);
			} else {
			Z++;
			elem.width(Z+'%');
			elem.html(Z+"%");
			};
		}, 10));
			},1000);
			C=1;
			}else {
			setTimeout(function(){$('#python').find('.myBar').width(0)},1000);
		$(this).find('.front').css('transform','perspective(900px) rotateY(0deg)');
		$(this).find('.back').css('transform','perspective(900px) rotateY(180deg)');
		C=0;
	};
		});
