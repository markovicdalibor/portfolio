var text='Dalibor Marković';
var text1='WEB design';

var stext= text.split('');
var stext1= text1.split('');

var scroll1=document.getElementById('scroll1');
var loop;
var i=0;

function start(){
    if(stext.length>0) {
        scroll1.innerHTML += stext.shift();//+= se kodisti za pojedinacno dodavanje a ne da se ne menja
        loop=setTimeout(start,500);
		
    }else{
        if(stext1.length>0) {
        scroll2.innerHTML += stext1.shift();//+= se kodisti za pojedinacno dodavanje a ne da se ne menja
        loop=setTimeout(start,500);
			}
		}

}
start();
