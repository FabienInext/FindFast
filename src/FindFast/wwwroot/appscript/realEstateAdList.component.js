System.register(['angular2/core', 'angular2/common', './realEstateAdService', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, realEstateAdService_1, Rx_1;
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
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            RealEstateAdListComponent = (function () {
                function RealEstateAdListComponent(_realEstateAdService) {
                    this._realEstateAdService = _realEstateAdService;
                    this.term = new common_1.Control();
                    //
                }
                RealEstateAdListComponent.prototype.getRealEstateAdList = function () {
                    var _this = this;
                    this.realEstateAdList = Rx_1.Observable.concat(this._realEstateAdService.getRealEstateList(), this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._realEstateAdService.getRealEstateListBy(_this.term.value); }));
                };
                RealEstateAdListComponent.prototype.ngOnInit = function () {
                    this.getRealEstateAdList();
                };
                RealEstateAdListComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdList',
                        templateUrl: 'appscript/realEstateAdList.component.html',
                        providers: [realEstateAdService_1.RealEstateAdService]
                    }), 
                    __metadata('design:paramtypes', [realEstateAdService_1.RealEstateAdService])
                ], RealEstateAdListComponent);
                return RealEstateAdListComponent;
            })();
            exports_1("RealEstateAdListComponent", RealEstateAdListComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdList.component.js.map