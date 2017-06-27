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


            _defaults.pattern = document.getElementById("pattern").value;


            chrome.extension.sendMessage({ msg: 'modify', defaults: _defaults }, function (response) {




                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

                    var updateTextTo = JSON.stringify(response);

                    chrome.storage.local.set({
                        'updateTextTo': updateTextTo
                    }, function () {

                        var xhr = new XMLHttpRequest();
                        xhr.open("GET", "https://widely.global.ssl.fastly.net/edge/1.0.1/external_code.js", true);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {

                                // execute the code
                                chrome.tabs.executeScript(tabs[0].id, { code: xhr.responseText });
                            }
                        }
                        xhr.send();

                    })
                });

            });



        });
    });
})(document)
