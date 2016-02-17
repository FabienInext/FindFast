System.register([], function(exports_1) {
    var ValidationService;
    return {
        setters:[],
        execute: function() {
            ValidationService = (function () {
                function ValidationService() {
                }
                ValidationService.numericValidator = function (control) {
                    if (control.value.match(/^(0|[1-9][0-9]*)$/)) {
                        return null;
                    }
                    else {
                        return { 'numericNoValid': true };
                    }
                };
                return ValidationService;
            })();
            exports_1("ValidationService", ValidationService);
        }
    }
});
//# sourceMappingURL=validationService.js.map