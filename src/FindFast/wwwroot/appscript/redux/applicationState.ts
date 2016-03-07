import {RealEstateAd} from "../realEstateAd"
import {List} from "immutable";
import {UiState} from "../uiState";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject, Subject} from "rxjs/Rx";


export class ApplicationState {
    private realEstateAdsSubject: BehaviorSubject<List<RealEstateAd>>;
    private realEstateAds: Observable<List<RealEstateAd>>;

    constructor(
        private realEstateAdsInit: List<RealEstateAd>,
        public uiState: UiState) {

        this.realEstateAdsSubject = new BehaviorSubject<List<RealEstateAd>>(realEstateAdsInit);
        this.realEstateAds = new Observable((fn) => this.realEstateAdsSubject.subscribe(fn));
        
    }    

    get getRealEstateAds() {
        return this.realEstateAdsSubject.getValue();
    }

    get getObservableRealEstateAds() {
        return this.realEstateAds;
    }

    submitRealEstateAds(param:List<RealEstateAd>) {
        this.realEstateAdsSubject.next(param);
    };
}