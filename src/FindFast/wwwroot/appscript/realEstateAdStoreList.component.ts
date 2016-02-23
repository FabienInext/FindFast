
import {Component, provide, ElementRef, Injector,
IterableDiffers, KeyValueDiffers, Renderer, OnInit, Output, EventEmitter, forwardRef} from 'angular2/core';
import {Control} from 'angular2/common';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from './realEstateAdModal';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {RealEstateAddStore} from './RealEstateAdStore';
import {RealEstateAdInsertComponent} from './realEstateAdInsert.component';


@Component({
    selector: 'realEstateAdStoreList',
    templateUrl: 'appscript/realEstateAdStoreList.component.html',
    directives: [RealEstateAdInsertComponent]

})
export class RealEstateAdStoreListComponent {   

    public realEstateAdList: Observable<Array<RealEstateAd>>;    
    termstore = new Control();

    constructor(private realEstateAddStore: RealEstateAddStore) {               
        this.termstore.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((termstore) => this.realEstateAddStore.loadDataByTerm(this.termstore.value));
    }

    deleteAd(adToDelete: RealEstateAd) {
        this.realEstateAddStore.deleteAdd(adToDelete).subscribe((res) => console.log("delete"));
    }
    
}