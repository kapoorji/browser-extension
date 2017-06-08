"use strict"
var _defaults = {
  'tags': ['p', 'div'],
  'color': 'yellow',
  'pattern': 'all'

};

var modifyDOM = function(callback) {

  callback();
};


chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {

    if (request.msg === "modify") {
      var params = Object.assign({},_defaults,request.defaults);
      
      modifyDOM(function () {
        sendResponse(params);


      });
    }
  }
  );