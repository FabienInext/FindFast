System.register(['angular2/core', './realEstateAdService', "./realEstateAdList.component", "./realEstateAdStoreList.component", 'angular2/router', './RealEstateAdStore', "./uiStateStore", 'angular2-modal', './customModal', './redux/realEstateAdReduxList.component', './redux/realEstateAdReduxInsert.component', './redux/appredux'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, realEstateAdService_1, realEstateAdList_component_1, realEstateAdStoreList_component_1, router_1, RealEstateAdStore_1, uiStateStore_1, angular2_modal_1, customModal_1, realEstateAdReduxList_component_1, realEstateAdReduxInsert_component_1, appredux_1;
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
            function (uiStateStore_1_1) {
                uiStateStore_1 = uiStateStore_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (customModal_1_1) {
                customModal_1 = customModal_1_1;
            },
            function (realEstateAdReduxList_component_1_1) {
                realEstateAdReduxList_component_1 = realEstateAdReduxList_component_1_1;
            },
            function (realEstateAdReduxInsert_component_1_1) {
                realEstateAdReduxInsert_component_1 = realEstateAdReduxInsert_component_1_1;
            },
            function (appredux_1_1) {
                appredux_1 = appredux_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(elementRef, loader, _realEstateAddStore, _realEstateAdService, uiStateStore, modal, injector, _renderer) {
                    var _this = this;
                    this.elementRef = elementRef;
                    this.loader = loader;
                    this._realEstateAddStore = _realEstateAddStore;
                    this._realEstateAdService = _realEstateAdService;
                    this.uiStateStore = uiStateStore;
                    this.modal = modal;
                    this.injector = injector;
                    this._renderer = _renderer;
                    this._realEstateAdService.countAdd$.subscribe(function (res) {
                        _this.realEstateAdCount = res;
                        _this.uiStateStore.uiErrorState.map(function (uiErrorState) { return uiErrorState.errorMessage; })
                            .subscribe(function (error) { if (error)
                            _this.openDialogError(); });
                    });
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.AddInsertComponent = function () {
                    this.loader.loadIntoLocation(realEstateAdReduxInsert_component_1.RealEstateAdReduxInsertComponent, this.elementRef, 'container');
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    var list = this.inputComponent.realEstateAdList;
                };
                AppComponent.prototype.openDialogError = function () {
                    var modalConfig = new angular2_modal_1.ModalConfig("lg", false, 27);
                    var modalData = new angular2_modal_1.YesNoModalContent('Simple Large modal', 'New error message is coming', true);
                    var dialog;
                    var component = angular2_modal_1.YesNoModal;
                    var bindings = this.getBinding(modalData);
                    dialog = this.modal.open(component, bindings, modalConfig);
                };
                AppComponent.prototype.getBinding = function (modalData) {
                    return core_1.Injector.resolve([
                        core_1.provide(angular2_modal_1.ICustomModal, { useValue: modalData }),
                        core_1.provide(core_1.IterableDiffers, { useValue: this.injector.get(core_1.IterableDiffers) }),
                        core_1.provide(core_1.KeyValueDiffers, { useValue: this.injector.get(core_1.KeyValueDiffers) }),
                        core_1.provide(core_1.Renderer, { useValue: this._renderer })
                    ]);
                };
                AppComponent.prototype.openDialog = function (type) {
                    var dialog;
                    var component = customModal_1.AdditionCalculateWindow;
                    // Workaround for https://github.com/angular/angular/issues/4330
                    // providing resolved providers to IterableDiffers, KeyValueDiffers & Renderer.
                    // Since customWindow uses 'ngClass' directive & 'ngClass' requires the above providers we need to supply them.
                    // One would expect angular to get them automatically but that not the case at the moment.
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(angular2_modal_1.ICustomModal, { useValue: AppComponent.modalData[type] }),
                        core_1.provide(core_1.IterableDiffers, { useValue: this.injector.get(core_1.IterableDiffers) }),
                        core_1.provide(core_1.KeyValueDiffers, { useValue: this.injector.get(core_1.KeyValueDiffers) }),
                        core_1.provide(core_1.Renderer, { useValue: this._renderer }),
                        core_1.provide(RealEstateAdStore_1.RealEstateAddStore, { useValue: this._realEstateAddStore })
                    ]);
                    dialog = this.modal.open(component, bindings, AppComponent.modalConfigs[type]);
                };
                Object.defineProperty(AppComponent.prototype, "uiStateMessage", {
                    get: function () {
                        return this.uiStateStore.uiState.map(function (uiState) { return uiState.message; });
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.modalConfigs = {
                    'customWindow': new angular2_modal_1.ModalConfig("lg", true, 27)
                };
                AppComponent.modalData = {
                    'customWindow': new customModal_1.AdditionCalculateWindowData(2, 3)
                };
                __decorate([
                    core_1.ViewChild(realEstateAdStoreList_component_1.RealEstateAdStoreListComponent), 
                    __metadata('design:type', realEstateAdStoreList_component_1.RealEstateAdStoreListComponent)
                ], AppComponent.prototype, "inputComponent", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [
                            core_1.provide(realEstateAdService_1.RealEstateAdService, { useClass: realEstateAdService_1.RealEstateAdService }),
                            core_1.provide(RealEstateAdStore_1.RealEstateAddStore, { useClass: RealEstateAdStore_1.RealEstateAddStore }),
                            angular2_modal_1.Modal
                        ],
                        templateUrl: 'appscript/app.html',
                        directives: [appredux_1.AppReduxComponent, realEstateAdReduxInsert_component_1.RealEstateAdReduxInsertComponent, realEstateAdList_component_1.RealEstateAdListComponent, realEstateAdStoreList_component_1.RealEstateAdStoreListComponent, realEstateAdReduxList_component_1.RealEstateAdReduxListComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/list', name: 'RealEstateAdList', component: realEstateAdList_component_1.RealEstateAdListComponent, useAsDefault: true },
                        new router_1.AsyncRoute({
                            path: '/add',
                            loader: function () { return ComponentHelper.LoadComponentAsync('RealEstateAdInsertComponent', 'appscript/realEstateAdInsert.component'); },
                            name: 'RealEstateAdAdd'
                        })
                    ]), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, RealEstateAdStore_1.RealEstateAddStore, realEstateAdService_1.RealEstateAdService, uiStateStore_1.UiStateStore, angular2_modal_1.Modal, core_1.Injector, core_1.Renderer])
                ], AppComponent);
                return AppComponent;
            }());
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
            }());
        }
    }
});
//# sourceMappingURL=app.js.map