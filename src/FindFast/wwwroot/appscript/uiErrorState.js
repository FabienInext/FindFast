System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UiErrorState, initialUiErrorState;
    return {
        setters:[],
        execute: function() {
            UiErrorState = (function () {
                function UiErrorState(errorMessage) {
                    this.errorMessage = errorMessage;
                }
                return UiErrorState;
            }());
            exports_1("UiErrorState", UiErrorState);
            exports_1("initialUiErrorState", initialUiErrorState = {
                errorMessage: ''
            });
        }
    }
});
//# sourceMappingURL=uiErrorState.js.map