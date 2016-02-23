import {Injectable} from "angular2/core";
import {RealEstateAddBackendService} from "./RealEstateAddBackendService";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {RealEstateAd}     from './realEstateAd';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class RealEstateAddStore {
    _realEstateAdds: BehaviorSubject<Array<RealEstateAd>> = new BehaviorSubject(new Array<RealEstateAd>());

    constructor(private realEstateAddBackendService: RealEstateAddBackendService) {
        this.loadInitialData();
    }

    get realEstateAdds() {
        return new Observable(fn => this._realEstateAdds.subscribe(fn));
    }

    loadInitialData() {
        this.realEstateAddBackendService.getAllAdds()
            .subscribe(
            res => {
                let realEstateAdds = (<Object[]>res.json()).map((realEstateAd: any) =>
                    new RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface));

                this._realEstateAdds.next(realEstateAdds);
            },
            err => console.log("Error retrieving Todos")
            );

    }

    loadDataByTerm(term: string) {
        if (term.length > 0) {
            this.realEstateAddBackendService.getAddsBy(term)
                .subscribe(
                res => {
                    let realEstateAdds = (<Object[]>res.json()).map((realEstateAd: any) =>
                        new RealEstateAd(realEstateAd.Id,realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface));

                    this._realEstateAdds.next(realEstateAdds);
                },
                err => console.log("Error retrieving Todos")
                );
        }
        else {
            this.loadInitialData();
        }

    }

    deleteAdd(deleted: RealEstateAd) {
        let obs = this.realEstateAddBackendService.deleteAdd(deleted);

        obs.subscribe(
            res => {
                let realEstateAds: Array<RealEstateAd> = this._realEstateAdds.getValue();
                let index = realEstateAds.filter((realEstateAd) => realEstateAd.id === deleted.id)[0];
                let indexOf = realEstateAds.indexOf(index);
                realEstateAds.splice(indexOf, 1);
                this._realEstateAdds.next(realEstateAds);
            }
        );

        return obs;
    }

    addRealEstateAd(newRealEstateAd: RealEstateAd) {

        let obs = this.realEstateAddBackendService.insertAdds(newRealEstateAd);

        obs.map((res) => res.json()).subscribe(
            (res: any) => {               
                newRealEstateAd.id = res.Id;
                this._realEstateAdds.getValue().push(newRealEstateAd);
                this._realEstateAdds.next(this._realEstateAdds.getValue());
            });

        return obs;
    }
}

