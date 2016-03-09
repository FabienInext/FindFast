System.register(["./applicationState", "rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var applicationState_1, Rx_1;
    function wrapIntoBehaviorSubject(init, obs) {
        var res = new Rx_1.BehaviorSubject(init);
        obs.subscribe(res);
        return res;
    }
    function applicationStateFactory(initialState, actions, reducers) {
        var appStateObservable = actions.scan(function (state, action) {
            console.log("Processing action ");
            var realEstateAds;
            //let subject: BehaviorSubject<List<RealEstateAd>> = new BehaviorSubject(List<RealEstateAd>());
            //let obs: Observable<List<RealEstateAd>> = new Observable(fn => this.subject.subscribe(fn));
            var newState = new applicationState_1.ApplicationState(state.getRealEstateAds, reducers.calculateUiState(state.uiState, action));
            reducers.calculateRealEstateAd(state.getRealEstateAds, action).subscribe(function (res) {
                newState.submitRealEstateAds(res);
            });
            return newState;
        }, initialState)
            .share();
        return wrapIntoBehaviorSubject(initialState, appStateObservable);
    }
    exports_1("applicationStateFactory", applicationStateFactory);
    return {
        setters:[
            function (applicationState_1_1) {
                applicationState_1 = applicationState_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=applicationStateFactory.js.map