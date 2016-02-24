System.register(["angular2/core", "./uiState", "rxjs/Rx", "rxjs/Observable"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, uiState_1, Rx_1, Observable_1;
    var UiStateStore;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (uiState_1_1) {
                uiState_1 = uiState_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UiStateStore = (function () {
                function UiStateStore() {
                    this._uiState = new Rx_1.BehaviorSubject(uiState_1.initialUiState);
                }
                Object.defineProperty(UiStateStore.prototype, "uiState", {
                    get: function () {
                        var _this = this;
                        return new Observable_1.Observable(function (fn) { return _this._uiState.subscribe(fn); });
                    },
                    enumerable: true,
                    configurable: true
                });
                UiStateStore.prototype.startBackendAction = function (message) {
                    this._uiState.next({
                        actionOngoing: true,
                        message: message
                    });
                };
                UiStateStore.prototype.displayMessage = function (message) {
                    var currentState = this._uiState.getValue();
                    this._uiState.next({
                        actionOngoing: currentState.actionOngoing,
                        message: message
                    });
                };
                UiStateStore.prototype.endBackendAction = function () {
                    this._uiState.next({
                        actionOngoing: false,
                        message: ''
                    });
                };
                UiStateStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UiStateStore);
                return UiStateStore;
            })();
            exports_1("UiStateStore", UiStateStore);
        }
    }
});
//# sourceMappingURL=uiStateStore.js.map