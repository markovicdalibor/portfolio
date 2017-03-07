jQuery(document).ready(function(){

	var model = $("#model");
	var holder = $('#holder');
	var close = $('.close')
	var images = $('.img>img');
	var i=0;

	$(images).on('click', function(){
		model.css('display','block');
		var self = $(this);
		var copy = self.clone();
		copy.css({position:'absolte',
		width:holder.width(),
		height:holder.height()});
			holder.append(copy);
		});
		
	close.on('click',function(){
		model.css('display','none');
		holder.empty();
	});
	
	holder.on('click',function(){
		var sl = $('#holder>img').attr('src');
		switch(sl){
			case "pimage/preporuka.jpg":
			holder.empty()
			holder.append('<img src="pimage/digi.jpg" width="50%" height="50%">')
			break;
			case "pimage/digi.jpg":
			holder.empty()
			holder.append('<img src="pimage/port.jpg" width="100%">')
			break;
			case "pimage/port.jpg":
			holder.empty()
			holder.append('<img src="pimage/preporuka.jpg" width="100%">')
			break;
		}
	});
});
