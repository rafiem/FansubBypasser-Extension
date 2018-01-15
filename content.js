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

function sendMsg(el, json){
	chrome.runtime.sendMessage({link: json}, function(response) {
	   for (var i=0; i<el.length; i++)
	   		el[i].href = response.cont['urlArray'][i];
		alert("Mafuyu sudah membypass semua link ^_^");
	});

}

function init(){
	var list = ['www.samehadaku.net','awsubs.co'];
	var selector = ['div.download-eps', 'div.dl-item'];
	var domain = document.domain;

	className = selector[list.indexOf(domain)];
	links =  $(className + ' a').map( function() { return $(this).attr('href'); }).get();
	element = document.querySelectorAll(className + " a[href]");

	sendMsg(element, JSON.stringify({'urlArray' : links}));
}

clean();
init();
