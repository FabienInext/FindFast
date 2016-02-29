System.register(['./models/ICustomModal', './models/ModalConfig', './models/ModalDialogInstance', './components/modalBackdrop', './components/bootstrapModalContainer', './providers/Modal', './commonModals/yesNoModal', './commonModals/okOnlyModal'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (ICustomModal_1_1) {
                exportStar_1(ICustomModal_1_1);
            },
            function (ModalConfig_1_1) {
                exportStar_1(ModalConfig_1_1);
            },
            function (ModalDialogInstance_1_1) {
                exportStar_1(ModalDialogInstance_1_1);
            },
            function (modalBackdrop_1_1) {
                exportStar_1(modalBackdrop_1_1);
            },
            function (bootstrapModalContainer_1_1) {
                exportStar_1(bootstrapModalContainer_1_1);
            },
            function (Modal_1_1) {
                exportStar_1(Modal_1_1);
            },
            function (yesNoModal_1_1) {
                exportStar_1(yesNoModal_1_1);
            },
            function (okOnlyModal_1_1) {
                exportStar_1(okOnlyModal_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=angular2-modal.js.map