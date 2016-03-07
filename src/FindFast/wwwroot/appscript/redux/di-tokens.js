System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var initialState, dispatcher, state;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("initialState", initialState = new core_1.OpaqueToken("initialState"));
            exports_1("dispatcher", dispatcher = new core_1.OpaqueToken("dispatcher"));
            exports_1("state", state = new core_1.OpaqueToken("state"));
        }
    }
});
//# sourceMappingURL=di-tokens.js.map