
import {Component, provide, ElementRef, Injector,
IterableDiffers, KeyValueDiffers, Renderer, OnInit, Output, EventEmitter, forwardRef} from 'angular2/core';
/*import {Modal, ICustomModal, ModalConfig, ModalDialogInstance} from 'angular2-modal';*/
import {Control} from 'angular2/common';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from './realEstateAdModal';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {RealEstateAdInsertComponent} from './realEstateAdInsert.component';


@Component({
    selector: 'realEstateAdList',
    templateUrl: 'appscript/realEstateAdList.component.html',
    directives: [RealEstateAdInsertComponent]
    
})
export class RealEstateAdListComponent implements OnInit {
    @Output() realEstateListFound = new EventEmitter();
    private realEstateAdCount: number;

    public realEstateAdList: Observable<Array<RealEstateAd>>;
    term = new Control();
    termstore = new Control();

    constructor(
        private _realEstateAdService: RealEstateAdService) { 

        this._realEstateAdService.countAdd$.subscribe((res: number) => {
            this.realEstateAdCount = res;
        });
    }

    addRealEstateAd() {
        let realEstateAd: RealEstateAd = new RealEstateAd("","New Test4", "New description", 222, 333);

        this._realEstateAdService.insertRealEstateAd(realEstateAd);
    }

 

    getRealEstateAdList() {

        this.realEstateAdList = Observable.concat(
            this._realEstateAdService.getRealEstateList(),
            this.term.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this._realEstateAdService.getRealEstateListBy(this.term.value))

        );

        /*    .subscribe(term => this._realEstateAdService.getRealEstateListBy(this.term.value)
                .subscribe((res: Array<RealEstateAd>) => this.loadRealEstateAdList(res))); 
    }*/

        this.realEstateAdList.subscribe((res: Array<RealEstateAd>) => {
            this.realEstateListFound.emit({ count: res.length });
        });
    }

    ngOnInit() {
        this.getRealEstateAdList();
    }
}