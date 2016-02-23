import {Injectable} from 'angular2/core';
import {RealEstateAd}     from './realEstateAd';
import {HTTP_PROVIDERS, Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RealEstateAdService {
    public countAdd$: Observable<number>;
    private _countAddObserver: any;
    private _currentCountAd : number;
    realEstateList: RealEstateAd[];

    constructor(private http: Http) {
        /*this.realEstateList  = [
            { "title": "Title1", "description": "description1", "price": 10000, "surface": 38 },
            { "title": "Title2", "description": "description2", "price": 20000, "surface": 45 }
        ];*/
        this.countAdd$ = new Observable(observer => this._countAddObserver = observer).share();
    }

    insertRealEstateAd(realEstateAd: RealEstateAd) {
        let body = JSON.stringify(realEstateAd);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.post('api/realestatead/insert', body, options).map(res => res.json())
            .subscribe(
            data => this.saveJwt(data.id_token),
            err => this.logError(err),
            () => {               
                console.log('Authentication Complete');
                this._currentCountAd++;
                if (this._countAddObserver) {
                    this._countAddObserver.next(this._currentCountAd);
                }
            }
        );

        
    }
    saveJwt(jwt) {
        if (jwt) {
            localStorage.setItem('id_token', jwt)
        }
    }

    logError(error) {
    }

    getRealEstateList() {
        let realEstateList = this.getGenericRealEstateList('api/realestatead/GetAll');
       
        realEstateList.subscribe((res: Array<RealEstateAd>) =>
        {
            this._currentCountAd = res.length;
            this._countAddObserver.next(this._currentCountAd);
        }
        );

        return realEstateList;      
    }

    getRealEstateListBy(term: string) {
        if (term.length > 0) {
            console.log('getRealEstateListBy');
            let realEstateList = this.getGenericRealEstateList('api/realestatead/GetBy/' + term);

            realEstateList.subscribe((res: Array<RealEstateAd>) => {
                this._currentCountAd = res.length;
                this._countAddObserver.next(this._currentCountAd);
            }
            );

            return realEstateList;
        }
        else {
            return this.getRealEstateList();
        } 
    }

    getGenericRealEstateList(url: string) {
        console.log('getGenericRealEstateList');
        return this.http.get(url)
            .map((responsedata) => {
                return responsedata.json();
            })
            .map((results: Array<any>) => {
                let realEstateAds: Array<RealEstateAd> = [];

                if (results) {
                    results.forEach((result) => {
                        realEstateAds.push(new RealEstateAd(result.Id,result.Title, result.Description, result.Price, result.Surface));

                    });

                }

                return realEstateAds;
            });
    }
}

         

            
        
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
