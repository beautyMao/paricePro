SystemJS.config({
	baseURL: './js_es'
});

SystemJS.import('praise-es.js').then(function(m) {
	$.extend({
		thumb:m.default.Thumb
	})
	
	callBack();
      			//var a = new m.default.Thumb(0,10,'praise-box');
      			//a.action();
      		});
function callBack(){
	let f = new $.thumb(0,10,'praise-box');
	f.action();
}