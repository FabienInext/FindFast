System.register(['angular2/core', 'angular2/common', './realEstateAdService', "./realEstateAd", 'rxjs/Rx', './realEstateAdInsert.component'], function(exports_1, context_1) {
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
    var core_1, common_1, realEstateAdService_1, realEstateAd_1, Rx_1, realEstateAdInsert_component_1;
    var RealEstateAdListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (realEstateAdService_1_1) {
                realEstateAdService_1 = realEstateAdService_1_1;
            },
            function (realEstateAd_1_1) {
                realEstateAd_1 = realEstateAd_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (realEstateAdInsert_component_1_1) {
                realEstateAdInsert_component_1 = realEstateAdInsert_component_1_1;
            }],
        execute: function() {
            RealEstateAdListComponent = (function () {
                function RealEstateAdListComponent(_realEstateAdService) {
                    var _this = this;
                    this._realEstateAdService = _realEstateAdService;
                    this.realEstateListFound = new core_1.EventEmitter();
                    this.term = new common_1.Control();
                    this.termstore = new common_1.Control();
                    this._realEstateAdService.countAdd$.subscribe(function (res) {
                        _this.realEstateAdCount = res;
                    });
                }
                RealEstateAdListComponent.prototype.addRealEstateAd = function () {
                    var realEstateAd = new realEstateAd_1.RealEstateAd("", "New Test4", "New description", 222, 333);
                    this._realEstateAdService.insertRealEstateAd(realEstateAd);
                };
                RealEstateAdListComponent.prototype.getRealEstateAdList = function () {
                    var _this = this;
                    this.realEstateAdList = Rx_1.Observable.concat(this._realEstateAdService.getRealEstateList(), this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._realEstateAdService.getRealEstateListBy(_this.term.value); }));
                    /*    .subscribe(term => this._realEstateAdService.getRealEstateListBy(this.term.value)
                            .subscribe((res: Array<RealEstateAd>) => this.loadRealEstateAdList(res)));
                }*/
                    this.realEstateAdList.subscribe(function (res) {
                        _this.realEstateListFound.emit({ count: res.length });
                    });
                };
                RealEstateAdListComponent.prototype.ngOnInit = function () {
                    this.getRealEstateAdList();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RealEstateAdListComponent.prototype, "realEstateListFound", void 0);
                RealEstateAdListComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdList',
                        templateUrl: 'appscript/realEstateAdList.component.html',
                        directives: [realEstateAdInsert_component_1.RealEstateAdInsertComponent]
                    }), 
                    __metadata('design:paramtypes', [realEstateAdService_1.RealEstateAdService])
                ], RealEstateAdListComponent);
                return RealEstateAdListComponent;
            }());
            exports_1("RealEstateAdListComponent", RealEstateAdListComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdList.component.js.map