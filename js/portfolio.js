jQuery(document).ready(function(){

	var model = $("#model");
	var holder = $('#holder');
	var close = $('.close')
	var images = $('.img');
	var wrapp =$('#wrapp');
	var i=0;

	images.on('click', function(){
		model.css('display','block');
		wrapp.css('display','none');
		var self = $(this).find('img');
		console.log(self);
		var copy = self.clone();
		copy.css({position:'absolte',
		width:holder.width(),
		height:holder.height()});
		holder.append(copy);
		});
	close.on('click',function(){
		model.css('display','none');
		wrapp.css('display','block');
		holder.empty();
	});

	window.onclick = function(e){
		var mod = document.getElementById('model');
		var hold = $('#holder');
		if(e.target==mod){
			mod.style.display="none";
			wrapp.css('display','block');
			hold.empty();
		}
	};

	holder.on('click',function(){
		var sl = $('#holder>img').attr('src');
		switch(sl){
			case "pimage/preporuka.jpg":
			holder.empty()
			holder.append('<img src="pimage/green.JPG" width="100%" height="100%">')
			break;
			case "pimage/digi.jpg":
			holder.empty()
			holder.append('<img src="pimage/port.jpg" width="100%" height="100%">')
			break;
			case "pimage/port.jpg":
			holder.empty()
			holder.append('<img src="pimage/preporuka.jpg" width="100%" height="100%">')
			break;
		}
	});
});
