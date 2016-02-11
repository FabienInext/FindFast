import {Injectable} from 'angular2/core';
import {RealEstateAd}     from './realEstateAd';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

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
        return this.http.get('api/realestatead/GetAll');
        
        //return Promise.resolve(this.realEstateList);
    }  
}