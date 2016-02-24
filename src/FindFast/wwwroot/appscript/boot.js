System.register(['angular2/platform/browser', './app', 'angular2/http', 'angular2/router', 'angular2/platform/common_dom', 'angular2/core', 'angular2-modal', "./uiStateStore"], function(exports_1) {
    var browser_1, app_1, http_1, router_1, common_dom_1, core_1, angular2_modal_1, uiStateStore_1;
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
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                core_1.provide(angular2_modal_1.ModalConfig, { useValue: new angular2_modal_1.ModalConfig('lg', true, 81) }),
                uiStateStore_1.UiStateStore,
                common_dom_1.ELEMENT_PROBE_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map