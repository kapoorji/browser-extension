"use strict"
var _defaults = {
  'tags': ['p', 'div'],
  'color': 'yellow',
  'pattern': 'all'

};

function modifyDOM(callback) {

  callback();
}

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {

    if (request.msg === "modify") {

      modifyDOM(function () {
        sendResponse(_defaults);


      });
    }
  }
);