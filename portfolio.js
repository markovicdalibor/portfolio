jQuery(document).ready(function(){

	var model = $("#model");
	var modelImg = $('#img01');
	var close = $('.close')
	var images = $('.img>img');

	var modImg=document.getElementById('img01');

	$(images).on('click', function(){
		model.css('display','block');
		//model.addClass("model");
		modImg.src=this.src;
		modImg.alt=this.alt;
	})
	close.on('click',function(){
		model.css('display','none');
	})
	
});
