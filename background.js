chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
   var f;
	$.ajax({
	    'async': false,
	    'type': "POST",
	    'global': false,
	    'dataType': 'html',
	    'url': "http://localhost/tes-api/api3.php",
	    'data': { opt: request.opt, link: request.link },
	    'success': function (data) {
	        f = data;
	    }
	});
	sendResponse({cont: f});
});