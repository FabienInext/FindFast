System.register(['angular2/core', 'angular2/common', './realEstateAdService', "./realEstateAd", "./validationService", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, realEstateAdService_1, realEstateAd_1, validationService_1, router_1;
    var RealEstateAdInsertComponent;
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
            function (validationService_1_1) {
                validationService_1 = validationService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RealEstateAdInsertComponent = (function () {
                function RealEstateAdInsertComponent(_router, _builder, _realEstateAdService) {
                    this._router = _router;
                    this._builder = _builder;
                    this._realEstateAdService = _realEstateAdService;
                    this.title = new common_1.Control('', common_1.Validators.required);
                    this.description = new common_1.Control('', common_1.Validators.required);
                    this.price = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, validationService_1.ValidationService.numericValidator]));
                    this.surface = new common_1.Control('', common_1.Validators.required);
                    this.formGroup = _builder.group({
                        title: this.title,
                        description: this.description,
                        price: this.price,
                        surface: this.surface
                    });
                }
                RealEstateAdInsertComponent.prototype.submitRealEstateAd = function () {
                    var realEstateAd = new realEstateAd_1.RealEstateAd(this.title.value, this.description.value, this.price.value, this.surface.value);
                    this._realEstateAdService.insertRealEstateAd(realEstateAd);
                    this._router.navigate(['RealEstateAdList']);
                };
                RealEstateAdInsertComponent.prototype.ngOnInit = function () {
                };
                RealEstateAdInsertComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdInsert',
                        templateUrl: 'appscript/realEstateAdInsert.component.html',
                        providers: [realEstateAdService_1.RealEstateAdService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, realEstateAdService_1.RealEstateAdService])
                ], RealEstateAdInsertComponent);
                return RealEstateAdInsertComponent;
            })();
            exports_1("RealEstateAdInsertComponent", RealEstateAdInsertComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdInsert.component.js.map