(function (d) {
    "use strict"

    d.addEventListener('DOMContentLoaded', function () {
        var modify = d.getElementById('modify');
        // onClick's logic below:
        modify.addEventListener('click', function () {
            var _defaults = {};
            var color = document.getElementById("color").value || "yellow";

            var values = [].filter.call(document.getElementsByName('tags[]'), function (c) {
                return c.checked;
            }).map(function (c) {
                return c.value;
            });


            _defaults.color = color;

            values.length ? (_defaults.tags = values) : (_defaults.tags = ['p']);


            chrome.extension.sendMessage({ msg: 'modify', defaults: _defaults }, function (response) {

                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

                    chrome.tabs.sendMessage(tabs[0].id, response, function (response) {

                    });
                });
            });
        });
    });
})(document)
