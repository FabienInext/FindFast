System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Scroller;
    return {
        setters:[],
        execute: function() {
            Scroller = (function () {
                function Scroller($window, $interval, $elementRef, infiniteScrollCallback, infiniteScrollDistance, infiniteScrollParent) {
                    var THROTTLE_MILLISECONDS = 300;
                    this.windowElement = $window;
                    this.infiniteScrollCallback = infiniteScrollCallback;
                    this.$interval = $interval;
                    this.$elementRef = $elementRef;
                    if (THROTTLE_MILLISECONDS != null) {
                        this.handler = this.throttle(this.handler, THROTTLE_MILLISECONDS);
                    }
                    this.handleInfiniteScrollDistance(infiniteScrollDistance);
                    // if (attrs.infiniteScrollParent != null) {
                    // 	changeContainer(angular.element(elem.parent()));
                    // }
                    // if (attrs.infiniteScrollImmediateCheck != null) {
                    // 	immediateCheck = scope.$eval(attrs.infiniteScrollImmediateCheck);
                    // }
                    var _self = this;
                    this.handleInfiniteScrollDisabled(false);
                    this.changeContainer(_self.windowElement);
                    this.checkInterval = setInterval((function () {
                        if (_self.immediateCheck) {
                            return _self.handler();
                        }
                    }), 0);
                }
                Scroller.prototype.height = function (elem) {
                    // elem = elem.nativeElement;
                    if (isNaN(elem.offsetHeight)) {
                        return elem.document.documentElement.clientHeight;
                    }
                    else {
                        return elem.offsetHeight;
                    }
                };
                Scroller.prototype.offsetTop = function (elem) {
                    // elem = elem.nativeElement;
                    if (!elem.getBoundingClientRect) {
                        return;
                    }
                    return elem.getBoundingClientRect().top + this.pageYOffset(elem);
                };
                Scroller.prototype.pageYOffset = function (elem) {
                    // elem = elem.nativeElement;
                    if (isNaN(window.pageYOffset)) {
                        return elem.document.documentElement.scrollTop;
                    }
                    else {
                        return elem.ownerDocument.defaultView.pageYOffset;
                    }
                };
                Scroller.prototype.handler = function () {
                    var containerBottom, containerTopOffset, elementBottom, remaining, shouldScroll;
                    if (this.container === this.windowElement) {
                        containerBottom = this.height(this.container) + this.pageYOffset(this.container.document.documentElement);
                        elementBottom = this.offsetTop(this.$elementRef.nativeElement) + this.height(this.$elementRef.nativeElement);
                    }
                    else {
                        containerBottom = this.height(this.container);
                        containerTopOffset = 0;
                        if (this.offsetTop(this.container) !== void 0) {
                            containerTopOffset = this.offsetTop(this.container);
                        }
                        elementBottom = this.offsetTop(this.$elementRef.nativeElement) - containerTopOffset + this.height(this.$elementRef.nativeElement);
                    }
                    if (this.useDocumentBottom) {
                        elementBottom = this.height((this.$elementRef.nativeElement.ownerDocument || this.$elementRef.nativeElement.document).documentElement);
                    }
                    remaining = elementBottom - containerBottom;
                    shouldScroll = remaining <= this.height(this.container) * this.scrollDistance + 1;
                    if (shouldScroll) {
                        this.checkWhenEnabled = true;
                        if (this.scrollEnabled) {
                            // if (scope.$$phase || $rootScope.$$phase) {
                            // 	return scope.infiniteScroll();
                            // } else {
                            // 	return scope.$apply(scope.infiniteScroll);
                            // }
                            this.infiniteScrollCallback();
                        }
                    }
                    else {
                        if (this.checkInterval) {
                            // this.$interval.cancel(this.checkInterval);
                            clearInterval(this.checkInterval);
                        }
                        return this.checkWhenEnabled = false;
                    }
                };
                Scroller.prototype.throttle = function (func, wait) {
                    var later, previous, timeout;
                    var _self = this;
                    timeout = null;
                    previous = 0;
                    later = function () {
                        var context;
                        previous = new Date().getTime();
                        clearInterval(timeout);
                        timeout = null;
                        func.call(_self);
                        return context = null;
                    };
                    return function () {
                        var now, remaining;
                        now = new Date().getTime();
                        remaining = wait - (now - previous);
                        if (remaining <= 0) {
                            clearTimeout(timeout);
                            clearInterval(timeout);
                            timeout = null;
                            previous = now;
                            return func.call(_self);
                        }
                        else {
                            if (!timeout) {
                                return timeout = _self.$interval(later, remaining, 1);
                            }
                        }
                    };
                };
                Scroller.prototype.handleInfiniteScrollDistance = function (v) {
                    return this.scrollDistance = parseFloat(v) || 0;
                };
                Scroller.prototype.changeContainer = function (newContainer) {
                    // if (this.container != null) {
                    // this.container.unbind('scroll', this.handler);
                    // }
                    this.container = newContainer;
                    if (newContainer != null) {
                        return this.container.addEventListener('scroll', this.handler.bind(this));
                    }
                };
                Scroller.prototype.handleInfiniteScrollDisabled = function (v) {
                    this.scrollEnabled = !v;
                    // if (this.scrollEnabled && checkWhenEnabled) {
                    // 	checkWhenEnabled = false;
                    // 	return handler();
                    // }
                };
                return Scroller;
            }());
            exports_1("Scroller", Scroller);
        }
    }
});
//# sourceMappingURL=scroller.js.map