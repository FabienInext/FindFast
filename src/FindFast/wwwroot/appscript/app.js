System.register(['angular2/core', "./realEstateAdList.component", "./realEstateAdInsert.component", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, realEstateAdList_component_1, realEstateAdInsert_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (realEstateAdList_component_1_1) {
                realEstateAdList_component_1 = realEstateAdList_component_1_1;
            },
            function (realEstateAdInsert_component_1_1) {
                realEstateAdInsert_component_1 = realEstateAdInsert_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   \n        <a [routerLink]=\"['RealEstateAdAdd']\">Add</a>\n       \n        <router-outlet></router-outlet>\n\n    ",
                        directives: [realEstateAdList_component_1.RealEstateAdListComponent, realEstateAdInsert_component_1.RealEstateAdInsertComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/list', name: 'RealEstateAdList', component: realEstateAdList_component_1.RealEstateAdListComponent, useAsDefault: true },
                        { path: '/add', name: 'RealEstateAdAdd', component: realEstateAdInsert_component_1.RealEstateAdInsertComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map