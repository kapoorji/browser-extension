"use strict"
// var divs = document.querySelectorAll('div');
// for(var i = 0;i < divs.length;i++) {
// 	divs[i].style.color = "red";
// }


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	
		var color = request.color;
		var tags = request.tags;

		for(var i = 0;i < tags.length;i++) {
			var tag = document.querySelectorAll(tags[i]);
			for(var j = 0;j < tag.length;j++)
				tag[j].style.color = color;
		}	

	}
);