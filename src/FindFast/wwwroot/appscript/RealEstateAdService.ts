import {Injectable} from 'angular2/core';
import {RealEstateAd}     from './realEstateAd';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class RealEstateAdService {
    realEstateList: RealEstateAd[];

    constructor(private http: Http) {
        /*this.realEstateList  = [
            { "title": "Title1", "description": "description1", "price": 10000, "surface": 38 },
            { "title": "Title2", "description": "description2", "price": 20000, "surface": 45 }
        ];*/
    }

    getRealEstateList() {
        return this.getGenericRealEstateList('api/realestatead/GetAll');
        /*return this.http.get('api/realestatead/GetAll')
            .map((responsedata) => {
                return responsedata.json();
            })
            .map((results: Array<any>) => {
                let realEstateAds: Array<RealEstateAd> = [];

                if (results) {
                    results.forEach((result) => {
                        realEstateAds.push(new RealEstateAd(result.Title, result.Description, result.Price, result.Surface));

                    });
                }

                return realEstateAds;
            });*/
    }

    getRealEstateListBy(term: string) {
        return this.getGenericRealEstateList('api/realestatead/GetBy/' + term);
    }

    getGenericRealEstateList(url: string) {
        return this.http.get(url)
            .map((responsedata) => {
                return responsedata.json();
            })
            .map((results: Array<any>) => {
                let realEstateAds: Array<RealEstateAd> = [];

                if (results) {
                    results.forEach((result) => {
                        realEstateAds.push(new RealEstateAd(result.Title, result.Description, result.Price, result.Surface));

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
