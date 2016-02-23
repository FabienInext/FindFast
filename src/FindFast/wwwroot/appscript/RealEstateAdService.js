System.register(['angular2/core', './realEstateAd', 'angular2/http', 'rxjs/Rx', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, realEstateAd_1, http_1, Observable_1;
    var RealEstateAdService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (realEstateAd_1_1) {
                realEstateAd_1 = realEstateAd_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            RealEstateAdService = (function () {
                function RealEstateAdService(http) {
                    var _this = this;
                    this.http = http;
                    /*this.realEstateList  = [
                        { "title": "Title1", "description": "description1", "price": 10000, "surface": 38 },
                        { "title": "Title2", "description": "description2", "price": 20000, "surface": 45 }
                    ];*/
                    this.countAdd$ = new Observable_1.Observable(function (observer) { return _this._countAddObserver = observer; }).share();
                }
                RealEstateAdService.prototype.insertRealEstateAd = function (realEstateAd) {
                    var _this = this;
                    var body = JSON.stringify(realEstateAd);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this.http.post('api/realestatead/insert', body, options).map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.saveJwt(data.id_token); }, function (err) { return _this.logError(err); }, function () {
                        console.log('Authentication Complete');
                        _this._currentCountAd++;
                        if (_this._countAddObserver) {
                            _this._countAddObserver.next(_this._currentCountAd);
                        }
                    });
                };
                RealEstateAdService.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        localStorage.setItem('id_token', jwt);
                    }
                };
                RealEstateAdService.prototype.logError = function (error) {
                };
                RealEstateAdService.prototype.getRealEstateList = function () {
                    var _this = this;
                    var realEstateList = this.getGenericRealEstateList('api/realestatead/GetAll');
                    realEstateList.subscribe(function (res) {
                        _this._currentCountAd = res.length;
                        _this._countAddObserver.next(_this._currentCountAd);
                    });
                    return realEstateList;
                };
                RealEstateAdService.prototype.getRealEstateListBy = function (term) {
                    var _this = this;
                    if (term.length > 0) {
                        console.log('getRealEstateListBy');
                        var realEstateList = this.getGenericRealEstateList('api/realestatead/GetBy/' + term);
                        realEstateList.subscribe(function (res) {
                            _this._currentCountAd = res.length;
                            _this._countAddObserver.next(_this._currentCountAd);
                        });
                        return realEstateList;
                    }
                    else {
                        return this.getRealEstateList();
                    }
                };
                RealEstateAdService.prototype.getGenericRealEstateList = function (url) {
                    console.log('getGenericRealEstateList');
                    return this.http.get(url)
                        .map(function (responsedata) {
                        return responsedata.json();
                    })
                        .map(function (results) {
                        var realEstateAds = [];
                        if (results) {
                            results.forEach(function (result) {
                                realEstateAds.push(new realEstateAd_1.RealEstateAd(result.Id, result.Title, result.Description, result.Price, result.Surface));
                            });
                        }
                        return realEstateAds;
                    });
                };
                RealEstateAdService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RealEstateAdService);
                return RealEstateAdService;
            })();
            exports_1("RealEstateAdService", RealEstateAdService);
        }
    }
});
//return Promise.resolve(this.realEstateList);
/*getTasks() {
// return an observable
return this.http.get('/api/v1/tasks.json')
.map( (responseData) => {
  return responseData.json();
})
.map((tasks: Array<any>) => {
  let result:Array<Task> = [];
  if (tasks) {
    tasks.forEach((task) => {
      result.push(
                 new Task(task.id,
                          task.description,
                          task.dueDate,
                          task.complete));
    });
  }
  return result;
});
}
}*/
//# sourceMappingURL=realEstateAdService.js.map