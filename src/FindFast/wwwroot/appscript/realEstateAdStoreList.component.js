System.register(['angular2/core', 'angular2/common', './RealEstateAdStore', './realEstateAdInsert.component'], function(exports_1, context_1) {
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
    var core_1, common_1, RealEstateAdStore_1, realEstateAdInsert_component_1;
    var RealEstateAdStoreListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (RealEstateAdStore_1_1) {
                RealEstateAdStore_1 = RealEstateAdStore_1_1;
            },
            function (realEstateAdInsert_component_1_1) {
                realEstateAdInsert_component_1 = realEstateAdInsert_component_1_1;
            }],
        execute: function() {
            RealEstateAdStoreListComponent = (function () {
                function RealEstateAdStoreListComponent(realEstateAddStore) {
                    var _this = this;
                    this.realEstateAddStore = realEstateAddStore;
                    this.termstore = new common_1.Control();
                    this.termstore.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .subscribe(function (termstore) { return _this.realEstateAddStore.loadDataByTerm(_this.termstore.value); });
                }
                RealEstateAdStoreListComponent.prototype.deleteAd = function (adToDelete) {
                    this.realEstateAddStore.deleteAdd(adToDelete).subscribe(function (res) { return console.log("delete"); });
                };
                RealEstateAdStoreListComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdStoreList',
                        templateUrl: 'appscript/realEstateAdStoreList.component.html',
                        directives: [realEstateAdInsert_component_1.RealEstateAdInsertComponent]
                    }), 
                    __metadata('design:paramtypes', [RealEstateAdStore_1.RealEstateAddStore])
                ], RealEstateAdStoreListComponent);
                return RealEstateAdStoreListComponent;
            }());
            exports_1("RealEstateAdStoreListComponent", RealEstateAdStoreListComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdStoreList.component.js.map