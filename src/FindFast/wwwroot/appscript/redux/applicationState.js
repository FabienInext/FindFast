System.register(["rxjs/Observable", "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, Rx_1;
    var ApplicationState;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ApplicationState = (function () {
                function ApplicationState(realEstateAdsInit, uiState) {
                    var _this = this;
                    this.realEstateAdsInit = realEstateAdsInit;
                    this.uiState = uiState;
                    this.realEstateAdsSubject = new Rx_1.BehaviorSubject(realEstateAdsInit);
                    this.realEstateAds = new Observable_1.Observable(function (fn) { return _this.realEstateAdsSubject.subscribe(fn); });
                }
                Object.defineProperty(ApplicationState.prototype, "getRealEstateAds", {
                    get: function () {
                        return this.realEstateAdsSubject.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApplicationState.prototype, "getObservableRealEstateAds", {
                    get: function () {
                        return this.realEstateAds;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationState.prototype.submitRealEstateAds = function (param) {
                    this.realEstateAdsSubject.next(param);
                };
                ;
                return ApplicationState;
            }());
            exports_1("ApplicationState", ApplicationState);
        }
    }
});
//# sourceMappingURL=applicationState.js.map