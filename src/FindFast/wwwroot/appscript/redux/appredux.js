System.register(['angular2/core', './realEstateAdReduxList.component', './realEstateAdReduxInsert.component'], function(exports_1, context_1) {
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
    var core_1, realEstateAdReduxList_component_1, realEstateAdReduxInsert_component_1;
    var AppReduxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (realEstateAdReduxList_component_1_1) {
                realEstateAdReduxList_component_1 = realEstateAdReduxList_component_1_1;
            },
            function (realEstateAdReduxInsert_component_1_1) {
                realEstateAdReduxInsert_component_1 = realEstateAdReduxInsert_component_1_1;
            }],
        execute: function() {
            AppReduxComponent = (function () {
                function AppReduxComponent(elementRef, loader) {
                    this.elementRef = elementRef;
                    this.loader = loader;
                }
                AppReduxComponent.prototype.AddInsertComponent = function () {
                    this.loader.loadIntoLocation(realEstateAdReduxInsert_component_1.RealEstateAdReduxInsertComponent, this.elementRef, 'container');
                };
                AppReduxComponent = __decorate([
                    core_1.Component({
                        selector: 'app-redux',
                        templateUrl: 'appscript/redux/appredux.html',
                        directives: [realEstateAdReduxInsert_component_1.RealEstateAdReduxInsertComponent, realEstateAdReduxList_component_1.RealEstateAdReduxListComponent]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])
                ], AppReduxComponent);
                return AppReduxComponent;
            }());
            exports_1("AppReduxComponent", AppReduxComponent);
        }
    }
});
//# sourceMappingURL=appredux.js.map