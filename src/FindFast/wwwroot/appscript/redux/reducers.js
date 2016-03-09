System.register(['immutable', "angular2/core", "../realEstateAd", './RealEstateAdAction', "../uiState", "../RealEstateAddBackendService", "rxjs/Rx", "rxjs/Observable"], function(exports_1, context_1) {
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
    var immutable_1, core_1, realEstateAd_1, RealEstateAdAction_1, uiState_1, RealEstateAddBackendService_1, Rx_1, Observable_1;
    var Reducers;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (realEstateAd_1_1) {
                realEstateAd_1 = realEstateAd_1_1;
            },
            function (RealEstateAdAction_1_1) {
                RealEstateAdAction_1 = RealEstateAdAction_1_1;
            },
            function (uiState_1_1) {
                uiState_1 = uiState_1_1;
            },
            function (RealEstateAddBackendService_1_1) {
                RealEstateAddBackendService_1 = RealEstateAddBackendService_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            Reducers = (function () {
                function Reducers(realEstateAddBackendService) {
                    this.realEstateAddBackendService = realEstateAddBackendService;
                    this._realEstateAdds = new Rx_1.BehaviorSubject(immutable_1.List([]));
                }
                Reducers.prototype.realEstateAdds = function () {
                    var _this = this;
                    return new Observable_1.Observable(function (fn) { return _this._realEstateAdds.subscribe(fn); });
                };
                Reducers.prototype.calculateRealEstateAd = function (state, action) {
                    var _this = this;
                    if (!state) {
                        this._realEstateAdds.next(immutable_1.List([]));
                    }
                    if (action instanceof RealEstateAdAction_1.LoadRelEstateAdAction) {
                        this.realEstateAddBackendService.getAllAdds()
                            .subscribe(function (res) {
                            var realEstateAdds = res.json().map(function (realEstateAd) {
                                return new realEstateAd_1.RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface);
                            });
                            _this._realEstateAdds.next(immutable_1.List(realEstateAdds));
                        }, function (err) { return console.log("Error2 retrieving Todos"); });
                    }
                    if (action instanceof RealEstateAdAction_1.AddRealEstateAction) {
                        var addAction = action;
                        var obs = this.realEstateAddBackendService.insertAdds(addAction.newRealEstateAd);
                        obs.map(function (res) { return res.json(); }).subscribe(function (res) {
                            addAction.newRealEstateAd.id = res.Id;
                            _this._realEstateAdds.next(_this._realEstateAdds.getValue().push(addAction.newRealEstateAd));
                        });
                    }
                    if (action instanceof RealEstateAdAction_1.DeleteRealEstateAction) {
                        var deleteAction = action;
                        var obs = this.realEstateAddBackendService.deleteAdd(deleteAction.deletedRealEstateAd);
                        obs.subscribe(function (res) {
                            var realEstateAds = _this._realEstateAdds.getValue().toArray();
                            var index = realEstateAds.filter(function (realEstateAd) { return realEstateAd.id === deleteAction.deletedRealEstateAd.id; })[0];
                            var indexOf = realEstateAds.indexOf(index);
                            realEstateAds.splice(indexOf, 1);
                            _this._realEstateAdds.next(immutable_1.List(realEstateAds));
                        });
                    }
                    return this.realEstateAdds();
                    /*
                else if (action instanceof AddRealEstateAction) {
                    return state.push(action.newRealEstateAd);
                }*/
                };
                Reducers.prototype.calculateUiState = function (state, action) {
                    if (!state) {
                        return uiState_1.initialUiState;
                    }
                    if (action instanceof RealEstateAdAction_1.StartBackendAction) {
                        return new uiState_1.UiState(true, action.message);
                    }
                    else if (action instanceof RealEstateAdAction_1.EndBackendAction) {
                        return new uiState_1.UiState(false, action.message ? action.message : uiState_1.initialUiState.message);
                    }
                    else {
                        return state;
                    }
                };
                Reducers = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [RealEstateAddBackendService_1.RealEstateAddBackendService])
                ], Reducers);
                return Reducers;
            }());
            exports_1("Reducers", Reducers);
        }
    }
});
/*export function calculateRealEstateAd(state: List<RealEstateAd>, action) {
    if (!state) {
        return List([]);
    }

    if (action instanceof LoadRelEstateAdAction) {
        return List(action.realEstateAds);
    }
    else if (action instanceof AddRealEstateAction) {
        return state.push(action.newRealEstateAd);
    }
   
    
}

export function calculateUiState(state: UiState, action) {
    if (!state) {
        return initialUiState;
    }

    if (action instanceof StartBackendAction) {
        return new UiState(true, action.message);
    }
    else if (action instanceof EndBackendAction) {
        return new UiState(false, action.message ? action.message : initialUiState.message);
    }
    else {
        return state;
    }
}*/ 
//# sourceMappingURL=reducers.js.map