System.register(['angular2/core', './scroller'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, scroller_1;
    var InfiniteScroll;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scroller_1_1) {
                scroller_1 = scroller_1_1;
            }],
        execute: function() {
            InfiniteScroll = (function () {
                function InfiniteScroll(element) {
                    this.element = element;
                    this.scrolled = new core_1.EventEmitter();
                }
                Object.defineProperty(InfiniteScroll.prototype, "infiniteScrollDistance", {
                    set: function (distance) {
                        this._distance = distance;
                    },
                    enumerable: true,
                    configurable: true
                });
                InfiniteScroll.prototype.ngOnInit = function () {
                    this.scroller = new scroller_1.Scroller(window, setInterval, this.element, this.onScroll.bind(this), this._distance, {});
                };
                InfiniteScroll.prototype.onScroll = function () {
                    this.scrolled.next({});
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], InfiniteScroll.prototype, "infiniteScrollDistance", null);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InfiniteScroll.prototype, "scrolled", void 0);
                InfiniteScroll = __decorate([
                    core_1.Directive({
                        selector: '[infinite-scroll]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], InfiniteScroll);
                return InfiniteScroll;
            })();
            exports_1("InfiniteScroll", InfiniteScroll);
        }
    }
});
//# sourceMappingURL=infinite-scroll.js.map