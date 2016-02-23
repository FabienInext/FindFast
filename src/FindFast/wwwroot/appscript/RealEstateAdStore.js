System.register(["angular2/core", "./RealEstateAddBackendService", "rxjs/Observable", './realEstateAd', "rxjs/Rx"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, RealEstateAddBackendService_1, Observable_1, realEstateAd_1, Rx_1;
    var RealEstateAddStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RealEstateAddBackendService_1_1) {
                RealEstateAddBackendService_1 = RealEstateAddBackendService_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (realEstateAd_1_1) {
                realEstateAd_1 = realEstateAd_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            RealEstateAddStore = (function () {
                function RealEstateAddStore(realEstateAddBackendService) {
                    this.realEstateAddBackendService = realEstateAddBackendService;
                    this._realEstateAdds = new Rx_1.BehaviorSubject(new Array());
                    this.loadInitialData();
                }
                Object.defineProperty(RealEstateAddStore.prototype, "realEstateAdds", {
                    get: function () {
                        var _this = this;
                        return new Observable_1.Observable(function (fn) { return _this._realEstateAdds.subscribe(fn); });
                    },
                    enumerable: true,
                    configurable: true
                });
                RealEstateAddStore.prototype.loadInitialData = function () {
                    var _this = this;
                    this.realEstateAddBackendService.getAllAdds()
                        .subscribe(function (res) {
                        var realEstateAdds = res.json().map(function (realEstateAd) {
                            return new realEstateAd_1.RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface);
                        });
                        _this._realEstateAdds.next(realEstateAdds);
                    }, function (err) { return console.log("Error retrieving Todos"); });
                };
                RealEstateAddStore.prototype.loadDataByTerm = function (term) {
                    var _this = this;
                    if (term.length > 0) {
                        this.realEstateAddBackendService.getAddsBy(term)
                            .subscribe(function (res) {
                            var realEstateAdds = res.json().map(function (realEstateAd) {
                                return new realEstateAd_1.RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface);
                            });
                            _this._realEstateAdds.next(realEstateAdds);
                        }, function (err) { return console.log("Error retrieving Todos"); });
                    }
                    else {
                        this.loadInitialData();
                    }
                };
                RealEstateAddStore.prototype.deleteAdd = function (deleted) {
                    var _this = this;
                    var obs = this.realEstateAddBackendService.deleteAdd(deleted);
                    obs.subscribe(function (res) {
                        var realEstateAds = _this._realEstateAdds.getValue();
                        var index = realEstateAds.filter(function (realEstateAd) { return realEstateAd.id === deleted.id; })[0];
                        var indexOf = realEstateAds.indexOf(index);
                        realEstateAds.splice(indexOf, 1);
                        _this._realEstateAdds.next(realEstateAds);
                    });
                    return obs;
                };
                RealEstateAddStore.prototype.addRealEstateAd = function (newRealEstateAd) {
                    var _this = this;
                    var obs = this.realEstateAddBackendService.insertAdds(newRealEstateAd);
                    obs.map(function (res) { return res.json(); }).subscribe(function (res) {
                        newRealEstateAd.id = res.Id;
                        _this._realEstateAdds.getValue().push(newRealEstateAd);
                        _this._realEstateAdds.next(_this._realEstateAdds.getValue());
                    });
                    return obs;
                };
                RealEstateAddStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [RealEstateAddBackendService_1.RealEstateAddBackendService])
                ], RealEstateAddStore);
                return RealEstateAddStore;
            })();
            exports_1("RealEstateAddStore", RealEstateAddStore);
        }
    }
});
//# sourceMappingURL=RealEstateAdStore.js.map