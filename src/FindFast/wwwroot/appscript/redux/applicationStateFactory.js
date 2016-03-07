System.register(["rxjs/Observable", "./applicationState", "rxjs/Rx", 'immutable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, applicationState_1, Rx_1, immutable_1;
    function wrapIntoBehaviorSubject(init, obs) {
        var res = new Rx_1.BehaviorSubject(init);
        obs.subscribe(function (s) { return res.next(s); });
        return res;
    }
    function applicationStateFactory(initialState, actions, reducers) {
        var _this = this;
        var appStateObservable = actions.scan(function (state, action) {
            console.log("Processing action ");
            var realEstateAds;
            var subject = new Rx_1.BehaviorSubject(immutable_1.List());
            var obs = new Observable_1.Observable(function (fn) { return _this.subject.subscribe(fn); });
            var newState = new applicationState_1.ApplicationState(state.getRealEstateAds, reducers.calculateUiState(state.uiState, action));
            reducers.calculateRealEstateAd(state.getRealEstateAds, action).subscribe(function (res) {
                realEstateAds = res;
                newState.submitRealEstateAds(realEstateAds);
                /*console.log({
                    realEstateAds: newState.realEstateAds.toJS(),
                    uiState: newState.uiState
                });*/
            });
            return newState;
        }, initialState)
            .share();
        return wrapIntoBehaviorSubject(initialState, appStateObservable);
    }
    exports_1("applicationStateFactory", applicationStateFactory);
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (applicationState_1_1) {
                applicationState_1 = applicationState_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=applicationStateFactory.js.map