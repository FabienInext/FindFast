import {Injectable, Inject} from 'angular2/core';
import {Http, Headers, URLSearchParams} from 'angular2/http';
import {RealEstateAd}     from './realEstateAd';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RealEstateAddBackendService {

    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getAllAdds() {
        return this.http.get('api/realestatead/GetAll');
    }

    getAddsBy(term: string) {
        return this.http.get('api/realestatead/GetBy/' + term);
    }

    deleteAdd(deletedAd: RealEstateAd) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedAd.id);

        return this.http.delete('api/realestatead/Delete', { search: params }).share();
        
    }

    insertAdds(newAdd: RealEstateAd) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('api/realestatead/insert', JSON.stringify(newAdd), { headers }).share();
    }
}