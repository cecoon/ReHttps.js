(function () {
    "use strict";

    var localStore = window.localStorage;
    var location = window.location;
    var key = "ReHttpsJs";

    var cacheIsSupported = function () {
        try {
            return 'localStorage' in window && localStore !== null;
        } catch (e) {
            return false;
        }
    };

    //utilizes a little hack to get around that CSRS-stuff
    var checkServerStatus = function (url, success, error) {
        var script = document.body.appendChild(document.createElement("script"));
        script.onload = success;
        if (error) {
            script.onerror = error;
        }
        script.src = url;
    };

    var checkServerStatusCacheResult = function (httpsUrl, success) {
        var cacheResultAndCallSuccess = function () {
            localStore.setItem(key, true);
            success();
        }, cacheResult = function () {
            localStore.setItem(key, false);
        };

        checkServerStatus(httpsUrl, cacheResultAndCallSuccess, cacheResult);
    };

    var testHttpsSupport = function (httpsUrl, success) {
        if (cacheIsSupported()) {
            var cachedAvailability = localStore.getItem(key);
            if (cachedAvailability === null) {
                checkServerStatusCacheResult(httpsUrl, success);
            } else if (cachedAvailability) {
                success();
            }
        } else {
            checkServerStatus(httpsUrl, success);
        }
    };

    if (location.protocol === "http:") {
        var httpsUrl = "https:" + location.href.substring(location.protocol.length);
        testHttpsSupport(httpsUrl, function () {
             location.href = httpsUrl;
        });
    }
})();










