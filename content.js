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

function sendMsg(el,e,json){
	var resp;
	chrome.runtime.sendMessage({opt: e, link: json}, function(response) {
	   json = JSON.parse(response.cont);

	   for (var i=0; i<el.length; i++)
	   		el[i].href = json['parsedUrl'][i];

	});

}

function init(){
	var list = ['www.samehadaku.net','awsubs.co'];
	var selector = ['div.download-eps', 'div.dl-item'];
	var domain = document.domain;
	var className, opt, href;

	className = selector[list.indexOf(domain)];
	opt = list.indexOf(domain) + 1;
	href =  $(className + ' a').map( function() { return $(this).attr('href'); }).get();
	element = document.querySelectorAll(className + " a[href]");

	sendMsg(element, opt, JSON.stringify({'urlArray' : href }));
}

clean();
init();