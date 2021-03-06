System.register(['angular2/core', '../models/ICustomModal', '../models/ModalDialogInstance'], function(exports_1, context_1) {
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
    var core_1, ICustomModal_1, ModalDialogInstance_1;
    var OKOnlyContent, OKOnlyModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ICustomModal_1_1) {
                ICustomModal_1 = ICustomModal_1_1;
            },
            function (ModalDialogInstance_1_1) {
                ModalDialogInstance_1 = ModalDialogInstance_1_1;
            }],
        execute: function() {
            /**
             * Data definition
             */
            OKOnlyContent = (function () {
                function OKOnlyContent(title, body, okText) {
                    if (title === void 0) { title = 'Hello World Title'; }
                    if (body === void 0) { body = 'Hello World Body!'; }
                    if (okText === void 0) { okText = 'OK'; }
                    this.title = title;
                    this.body = body;
                    this.okText = okText;
                }
                return OKOnlyContent;
            }());
            exports_1("OKOnlyContent", OKOnlyContent);
            /**
             * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
             */
            OKOnlyModal = (function () {
                function OKOnlyModal(dialog, modelContentData) {
                    this.dialog = dialog;
                    this.context = modelContentData;
                }
                OKOnlyModal.prototype.ok = function () {
                    this.dialog.close(true);
                };
                OKOnlyModal = __decorate([
                    core_1.Component({
                        selector: 'modal-content',
                        template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{context.title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{context.body}}</div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary\" (click)=\"ok()\">{{context.okText}}</button>\n        </div>"
                    }), 
                    __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance, ICustomModal_1.ICustomModal])
                ], OKOnlyModal);
                return OKOnlyModal;
            }());
            exports_1("OKOnlyModal", OKOnlyModal);
        }
    }
});
//# sourceMappingURL=okOnlyModal.js.map