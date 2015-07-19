(function () {
    var localStore = window.localStorage;
    var location = window.location;
    var key = "ReHttpsJs",
        supportsLocalStorage = function () {
            try {
                return 'localStorage' in window && localStore !== null;
            } catch (e) {
                return false;
            }
        };

    var requestHeader = function (url, success) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        success();
                    }
                }
            };
            request.open("HEAD", httpsUrl);
            request.send();
        },
        requestHeaderAndCacheResult = function (httpsUrl, success) {
            requestHeader(httpsUrl, function () {
                localStore.setItem(key, true);
                success();
            }, function () {
                localStore.setItem(key, false);
            });
        };

    var testHttpsSupport = function (httpsUrl, success) {
        var canAccessDataStore = supportsLocalStorage();
        if (canAccessDataStore) {
            var item = localStore.getItem(key);
            if (item === null) {
                requestHeaderAndCacheResult(httpsUrl, success);
            } else if (item) {
                success();
            }
        } else {
            requestHeader(httpsUrl, success);
        }
    };

    if (location.protocol === "http:") {
        var httpsUrl = "https:" + location.href.substring(location.protocol.length);

        testHttpsSupport(httpsUrl, function () {
            window.location.href = httpsUrl;
        });
    }
})();










