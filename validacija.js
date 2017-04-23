jQuery(document).ready(function ($) {
	var name = $('#inp1');
	var tel = $('#inp2');
	var mail = $('#inp3');
	var send = $('#btn');
	var test;
	var probni = $('#probni');
	
	send.on('click',validacija);
	name.on('focus',clear);
	tel.on('focus',clear);
	mail.on('focus',clear);
	
	function validacija() {
		test = 0;
		var y = name.val();
		if(name.val()==='Ovo polje je obavezno!!!'){
			name.val('');
		};
		if(name.val()==''){
			name.val('Ovo polje je obavezno!!!');
			name.css({'color':'red','textAlign':'center'});
			test = 1;
		};
		if(tel.val()==='Ovo polje je obavezno!!!'){
			tel.val('');
		};
		if (tel.val()=='') {
			tel.val('Ovo polje je obavezno!!!');
			tel.css({'color':'red','textAlign':'center'});
			test = 1;
		};
		if(mail.val()==='Ovo polje je obavezno!!!'){
			mail.val('');
		};
		if (mail.val()=='') {
			mail.val('Ovo polje je obavezno!!!');
			mail.css({'color':'red','textAlign':'center'})
			test = 1;
		};	
		
		if (test == 0) {
			window.location.assign('second.html');
		};
	};
	function clear() {
		$(this).val('');
		$(this).css({'color':'black','textAlign':'left'});
	}
		
		var x = $('#sech');
		x.append("<h1 style='text-align:center;color:snow;'>Uspesno ste se prijavili<br>Hvala :)</h1>");
});
