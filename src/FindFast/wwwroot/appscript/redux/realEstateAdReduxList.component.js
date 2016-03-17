System.register(['angular2/core', 'rxjs/Rx', "./di-tokens", "./RealEstateAdAction", "../RealEstateAddBackendService", '../directives/highlight.directive'], function(exports_1, context_1) {
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
    var core_1, Rx_1, di_tokens_1, RealEstateAdAction_1, RealEstateAddBackendService_1, highlight_directive_1;
    var RealEstateAdReduxListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (di_tokens_1_1) {
                di_tokens_1 = di_tokens_1_1;
            },
            function (RealEstateAdAction_1_1) {
                RealEstateAdAction_1 = RealEstateAdAction_1_1;
            },
            function (RealEstateAddBackendService_1_1) {
                RealEstateAddBackendService_1 = RealEstateAddBackendService_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            RealEstateAdReduxListComponent = (function () {
                function RealEstateAdReduxListComponent(dispatcher, state, cd) {
                    this.dispatcher = dispatcher;
                    this.state = state;
                    this.cd = cd;
                    this.index = 0;
                    this.dispatcher.next(new RealEstateAdAction_1.LoadRelEstateAdAction(null));
                }
                RealEstateAdReduxListComponent.prototype.deleteAd = function (deletedAd) {
                    this.dispatcher.next(new RealEstateAdAction_1.DeleteRealEstateAction(deletedAd));
                };
                Object.defineProperty(RealEstateAdReduxListComponent.prototype, "sourceData", {
                    get: function () {
                        this.index = this.index + 1;
                        console.log("source data : " + this.index);
                        return this.datasource;
                    },
                    enumerable: true,
                    configurable: true
                });
                RealEstateAdReduxListComponent.prototype.ngOnInit = function () {
                    this.realEstateAds();
                    this.cd.markForCheck();
                };
                RealEstateAdReduxListComponent.prototype.realEstateAds = function () {
                    var _this = this;
                    return this.state.map(function (state) { return state.getObservableRealEstateAds; }).subscribe((function (res) {
                        res.subscribe(function (r) {
                            _this.datasource = r;
                            _this.cd.markForCheck();
                        });
                    }));
                    //.map( (res:List<RealEstateAd>) => new Array()); 
                    ;
                };
                RealEstateAdReduxListComponent = __decorate([
                    core_1.Component({
                        selector: 'realEstateAdReduxList',
                        templateUrl: 'appscript/redux/realEstateAdReduxList.component.html',
                        providers: [RealEstateAddBackendService_1.RealEstateAddBackendService],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                        directives: [highlight_directive_1.HighlightDirective]
                    }),
                    __param(0, core_1.Inject(di_tokens_1.dispatcher)),
                    __param(1, core_1.Inject(di_tokens_1.state)), 
                    __metadata('design:paramtypes', [Object, Rx_1.Observable, core_1.ChangeDetectorRef])
                ], RealEstateAdReduxListComponent);
                return RealEstateAdReduxListComponent;
            }());
            exports_1("RealEstateAdReduxListComponent", RealEstateAdReduxListComponent);
        }
    }
});
//# sourceMappingURL=realEstateAdReduxList.component.js.map