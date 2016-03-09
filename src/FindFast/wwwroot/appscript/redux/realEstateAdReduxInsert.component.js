System.register(['angular2/core', 'angular2/common', '../realEstateAdService', "../realEstateAd", "../validationService", "./di-tokens", "./RealEstateAdAction"], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, realEstateAdService_1, realEstateAd_1, validationService_1, di_tokens_1, RealEstateAdAction_1;
    var RealEstateAdReduxInsertComponent;
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
            function (di_tokens_1_1) {
                di_tokens_1 = di_tokens_1_1;
            },
            function (RealEstateAdAction_1_1) {
                RealEstateAdAction_1 = RealEstateAdAction_1_1;
            }],
        execute: function() {
            RealEstateAdReduxInsertComponent = (function () {
                function RealEstateAdReduxInsertComponent(dispatcher, _builder, _realEstateAdService) {
                    this.dispatcher = dispatcher;
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
                RealEstateAdReduxInsertComponent.prototype.submitRealEstateAd = function () {
                    var realEstateAd = new realEstateAd_1.RealEstateAd(null, this.title.value, this.description.value, this.price.value, this.surface.value);
                    this.dispatcher.next(new RealEstateAdAction_1.AddRealEstateAction(realEstateAd));
                };
                RealEstateAdReduxInsertComponent.prototype.ngOnInit = function () {
                };
                RealEstateAdReduxInsertComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdReduxInsert',
                        templateUrl: 'appscript/redux/realEstateAdReduxInsert.component.html',
                        providers: [realEstateAdService_1.RealEstateAdService]
                    }),
                    __param(0, core_1.Inject(di_tokens_1.dispatcher)), 
                    __metadata('design:paramtypes', [Object, common_1.FormBuilder, realEstateAdService_1.RealEstateAdService])
                ], RealEstateAdReduxInsertComponent);
                return RealEstateAdReduxInsertComponent;
            }());
            exports_1("RealEstateAdReduxInsertComponent", RealEstateAdReduxInsertComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdReduxInsert.component.js.map