(function (d) {
	"use strict"
	
	d.addEventListener('DOMContentLoaded', function () {
		var modify = d.getElementById('modify');
		// onClick's logic below:
		modify.addEventListener('click', function () {
			chrome.extension.sendMessage({ msg: 'modify' }, function (response) {

				chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

					chrome.tabs.sendMessage(tabs[0].id, response, function (response) {

					});
				});
			});
		});
	});
})(document)
