System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoadRelEstateAdAction, AddRealEstateAction, DeleteRealEstateAction, StartBackendAction, EndBackendAction;
    return {
        setters:[],
        execute: function() {
            LoadRelEstateAdAction = (function () {
                function LoadRelEstateAdAction(realEstateAds) {
                    this.realEstateAds = realEstateAds;
                }
                return LoadRelEstateAdAction;
            }());
            exports_1("LoadRelEstateAdAction", LoadRelEstateAdAction);
            AddRealEstateAction = (function () {
                function AddRealEstateAction(newRealEstateAd) {
                    this.newRealEstateAd = newRealEstateAd;
                }
                return AddRealEstateAction;
            }());
            exports_1("AddRealEstateAction", AddRealEstateAction);
            DeleteRealEstateAction = (function () {
                function DeleteRealEstateAction(deletedRealEstateAd) {
                    this.deletedRealEstateAd = deletedRealEstateAd;
                }
                return DeleteRealEstateAction;
            }());
            exports_1("DeleteRealEstateAction", DeleteRealEstateAction);
            StartBackendAction = (function () {
                function StartBackendAction(message) {
                    this.message = message;
                }
                return StartBackendAction;
            }());
            exports_1("StartBackendAction", StartBackendAction);
            EndBackendAction = (function () {
                function EndBackendAction(message) {
                    this.message = message;
                }
                return EndBackendAction;
            }());
            exports_1("EndBackendAction", EndBackendAction);
        }
    }
});
//# sourceMappingURL=RealEstateAdAction.js.map