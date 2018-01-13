// //TO-DO --> SSL-ERROR when sending AJAX REQ (Referrer : www.samehadaku.net)
// Solved --> with get manipulation ;v

function destroyElement(selector){
	var sc = document.querySelectorAll(selector);
	for (var i = (sc.length-1); i >= 0; i--) {
	    if(sc[i].getAttribute('src') != ''){
	        sc[i].parentNode.removeChild(sc[i]);
	    }
	}	
}

function clean(){
	destroyElement('script');
	destroyElement('img');
	destroyElement('iframe');
}

function sendPayload(element, option){
	$.post( "http://reiryoku.000webhostapp.com/api.php", { opt: option, link: element.href })
	  .done(function( data ){
	  	element.href = data;
    });
}

function lol(className,opt,path){
	if (path.substring(31,32) == '/' && path.substring(34,35) == '/'){
		var href = document.querySelectorAll("div." + className + " a[href]");	
		var tmp = '?'
		var path = location.href;

		for(var i=0; i<href.length; i++){
			tmp += href[i].href + '-';
		}
		document.location.href = 'http://reiryoku.000webhostapp.com/2018/01/demo.html' + tmp;
	}
}

function init(){
	clean();
	
	var className = (document.domain == 'awsubs.co') ? 'dl-item' : 'download-eps';
	var opt = (document.domain == 'awsubs.co') ? '2' : '1';
	var path = document.location.toString()

	if (document.domain == 'awsubs.co'){
		var href = document.querySelectorAll("div." + className + " a[href]");
		for(var i=0; i<href.length; i++){
			sendPayload(href[i],opt);
		}
	}
	else{
		lol(className,opt,path);
	}
}

init();