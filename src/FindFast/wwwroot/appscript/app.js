System.register(['angular2/core', './realEstateAdService', "./realEstateAdList.component", "./realEstateAdStoreList.component", 'angular2/router', './RealEstateAdStore', "./RealEstateAddBackendService", "./uiStateStore"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, realEstateAdService_1, realEstateAdList_component_1, realEstateAdStoreList_component_1, router_1, RealEstateAdStore_1, RealEstateAddBackendService_1, uiStateStore_1;
    var AppComponent, ComponentHelper;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (realEstateAdService_1_1) {
                realEstateAdService_1 = realEstateAdService_1_1;
            },
            function (realEstateAdList_component_1_1) {
                realEstateAdList_component_1 = realEstateAdList_component_1_1;
            },
            function (realEstateAdStoreList_component_1_1) {
                realEstateAdStoreList_component_1 = realEstateAdStoreList_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (RealEstateAdStore_1_1) {
                RealEstateAdStore_1 = RealEstateAdStore_1_1;
            },
            function (RealEstateAddBackendService_1_1) {
                RealEstateAddBackendService_1 = RealEstateAddBackendService_1_1;
            },
            function (uiStateStore_1_1) {
                uiStateStore_1 = uiStateStore_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_realEstateAdService, uiStateStore) {
                    var _this = this;
                    this._realEstateAdService = _realEstateAdService;
                    this.uiStateStore = uiStateStore;
                    this._realEstateAdService.countAdd$.subscribe(function (res) {
                        _this.realEstateAdCount = res;
                    });
                }
                Object.defineProperty(AppComponent.prototype, "uiStateMessage", {
                    get: function () {
                        return this.uiStateStore.uiState.map(function (uiState) { return uiState.message; });
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [
                            core_1.provide(realEstateAdService_1.RealEstateAdService, { useClass: realEstateAdService_1.RealEstateAdService }),
                            core_1.provide(RealEstateAdStore_1.RealEstateAddStore, { useClass: RealEstateAdStore_1.RealEstateAddStore }),
                            core_1.provide(RealEstateAddBackendService_1.RealEstateAddBackendService, { useClass: RealEstateAddBackendService_1.RealEstateAddBackendService })
                        ],
                        template: "Message : {{uiStateMessage | async}}\n        <realEstateAdStoreList></realEstateAdStoreList>\n        XXX\n        <a [routerLink]=\"['RealEstateAdList']\">Back</a>\n        <a [routerLink]=\"['RealEstateAdAdd']\">Add</a>\n        <p>Number of Add  : {{realEstateAdCount}}</p>\n        <router-outlet></router-outlet>\n\n    ",
                        directives: [realEstateAdList_component_1.RealEstateAdListComponent, realEstateAdStoreList_component_1.RealEstateAdStoreListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/list', name: 'RealEstateAdList', component: realEstateAdList_component_1.RealEstateAdListComponent, useAsDefault: true },
                        new router_1.AsyncRoute({
                            path: '/add',
                            loader: function () { return ComponentHelper.LoadComponentAsync('RealEstateAdInsertComponent', 'appscript/realEstateAdInsert.component'); },
                            name: 'RealEstateAdAdd'
                        })
                    ]), 
                    __metadata('design:paramtypes', [realEstateAdService_1.RealEstateAdService, uiStateStore_1.UiStateStore])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            ComponentHelper = (function () {
                function ComponentHelper() {
                }
                ComponentHelper.LoadComponentAsync = function (name, path) {
                    return System.import(path).then(function (c) {
                        var t = c[name];
                        return t;
                    });
                };
                return ComponentHelper;
            })();
        }
    }
});
//# sourceMappingURL=app.js.map