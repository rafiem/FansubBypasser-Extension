chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
	 var f;
	 // alert(request.link)
	  $.ajax({
		  'async': false,
		  'type': "POST",
		  'global': false,
			 'contentType': "application/json",
		  'dataType': 'json',
		  'url': "https://mafuyu-bypasser.herokuapp.com/bypass",
		  'data': request.link,
		  'success': function (data) {
			  f = data;
		  }
	  });
	  sendResponse({cont: f});
  });