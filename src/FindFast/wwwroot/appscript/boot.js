System.register(['angular2/platform/browser', './app', 'angular2/http', 'angular2/router', 'angular2/platform/common_dom', 'angular2/core', 'angular2-modal', "./uiStateStore", "./redux/di-tokens", "rxjs/Subject", "immutable", "./redux/applicationStateFactory", './uiState', './redux/reducers', "./RealEstateAddBackendService", "./redux/applicationState", "./realEstateAd"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_1, http_1, router_1, common_dom_1, core_1, angular2_modal_1, uiStateStore_1, di_tokens_1, Subject_1, immutable_1, applicationStateFactory_1, uiState_1, reducers_1, RealEstateAddBackendService_1, applicationState_1, realEstateAd_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_dom_1_1) {
                common_dom_1 = common_dom_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (uiStateStore_1_1) {
                uiStateStore_1 = uiStateStore_1_1;
            },
            function (di_tokens_1_1) {
                di_tokens_1 = di_tokens_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (applicationStateFactory_1_1) {
                applicationStateFactory_1 = applicationStateFactory_1_1;
            },
            function (uiState_1_1) {
                uiState_1 = uiState_1_1;
            },
            function (reducers_1_1) {
                reducers_1 = reducers_1_1;
            },
            function (RealEstateAddBackendService_1_1) {
                RealEstateAddBackendService_1 = RealEstateAddBackendService_1_1;
            },
            function (applicationState_1_1) {
                applicationState_1 = applicationState_1_1;
            },
            function (realEstateAd_1_1) {
                realEstateAd_1 = realEstateAd_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                core_1.provide(angular2_modal_1.ModalConfig, { useValue: new angular2_modal_1.ModalConfig('lg', true, 81) }),
                core_1.provide(di_tokens_1.dispatcher, { useValue: new Subject_1.Subject() }),
                core_1.provide(reducers_1.Reducers, { useClass: reducers_1.Reducers }),
                core_1.provide(RealEstateAddBackendService_1.RealEstateAddBackendService, { useClass: RealEstateAddBackendService_1.RealEstateAddBackendService }),
                core_1.provide(di_tokens_1.initialState, {
                    useValue: new applicationState_1.ApplicationState(immutable_1.List([]).push(new realEstateAd_1.RealEstateAd('test', 'test', 'test', 1, 1)), uiState_1.initialUiState) }),
                core_1.provide(di_tokens_1.state, { useFactory: applicationStateFactory_1.applicationStateFactory, deps: [new core_1.Inject(di_tokens_1.initialState), new core_1.Inject(di_tokens_1.dispatcher), new core_1.Inject(reducers_1.Reducers)] }),
                uiStateStore_1.UiStateStore,
                common_dom_1.ELEMENT_PROBE_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map