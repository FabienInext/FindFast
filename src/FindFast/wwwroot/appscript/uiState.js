System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UiState, initialUiState;
    return {
        setters:[],
        execute: function() {
            UiState = (function () {
                function UiState(actionOngoing, message) {
                    this.actionOngoing = actionOngoing;
                    this.message = message;
                }
                return UiState;
            }());
            exports_1("UiState", UiState);
            exports_1("initialUiState", initialUiState = {
                actionOngoing: false,
                message: 'Ready'
            });
        }
    }
});
//# sourceMappingURL=uiState.js.map