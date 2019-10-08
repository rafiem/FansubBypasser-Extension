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
	destroyElement('video');
	destroyElement('iframe');
}

function sendMsg(e, json){
	chrome.runtime.sendMessage({link: json}, function(response) { 
	   $(e +' a').map( function(i=0) { return $(this)
	   		     .attr("href", response.cont['urlArray'][i]); });
	   alert("Mafuyu sudah membypass semua link :)))");
	});
}

function init(){
	var list = ['www.samehadaku.net','awsubs.co','animekompi.web.id','www.oploverz.in'];
	var selector = ['div.download-eps', 'div.dl-item','','div.soraurl list-download'];
	var domain = document.domain;

	className = selector[list.indexOf(domain)];
	links =  $(className + ' a').map( function() { return $(this).attr('href'); }).get();
	sendMsg(className, JSON.stringify({'urlArray' : links}));
	
}

clean();
init();
