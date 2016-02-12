System.register(['angular2/core', './realEstateAdService', "./realEstateAdList.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, realEstateAdService_1, realEstateAdList_component_1;
    var AppComponent;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_realEstateAdService) {
                    this._realEstateAdService = _realEstateAdService;
                }
                AppComponent.prototype.getRealEstateAdList = function () {
                    //this._realEstateAdService.getRealEstateList().then(x => this.realEstateAdList = x);
                    var _this = this;
                    //this._realEstateAdService.getRealEstateList().subscribe((res: Response) => this.doSomething(res));
                    this._realEstateAdService.getRealEstateList().subscribe(function (res) { return _this.doSomething(res); });
                    /*taskService.getTasks()
                  .subscribe(res => this.tasks = res);*/
                };
                AppComponent.prototype.doSomething = function (res) {
                    this.realEstateAdList = res;
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getRealEstateAdList();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<div><realEstateAdList></realEstateAdList>Real estate list <ul><li *ngFor="#realEstateAd of realEstateAdList"><span>{{realEstateAd.title}}</span></li></ul></div>',
                        providers: [realEstateAdService_1.RealEstateAdService],
                        directives: [realEstateAdList_component_1.RealEstateAdListComponent]
                    }), 
                    __metadata('design:paramtypes', [realEstateAdService_1.RealEstateAdService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map