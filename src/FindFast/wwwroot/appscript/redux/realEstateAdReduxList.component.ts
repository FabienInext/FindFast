
import {Component, provide, ElementRef, Injector,
    IterableDiffers, ChangeDetectorRef,ChangeDetectionStrategy, KeyValueDiffers,Inject, Renderer, OnInit, Output, EventEmitter, forwardRef} from 'angular2/core';
import {Control} from 'angular2/common';
import {RealEstateAdService} from '../realEstateAdService';
import {RealEstateAd} from "../realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {dispatcher, state, initialState} from "./di-tokens";
import {ApplicationState} from "./applicationState";
import {LoadRelEstateAdAction, DeleteRealEstateAction, AddRealEstateAction, StartBackendAction, EndBackendAction, Action} from "./RealEstateAdAction";
import {RealEstateAddBackendService} from "../RealEstateAddBackendService"
import {List} from 'immutable';

@Component({
    selector: 'realEstateAdReduxList',
    templateUrl: 'appscript/redux/realEstateAdReduxList.component.html',
    providers: [RealEstateAddBackendService],
    changeDetection: ChangeDetectionStrategy.OnPush,
        
})
export class RealEstateAdReduxListComponent implements OnInit {
    private datasource: List<RealEstateAd>;
    private index: number = 0;

    constructor( @Inject(dispatcher) private dispatcher: Observer<Action>,
        @Inject(state) private state: Observable<ApplicationState>, private cd: ChangeDetectorRef) {

        this.dispatcher.next(new LoadRelEstateAdAction(null));
    }   

    deleteAd(deletedAd: RealEstateAd) {
        this.dispatcher.next(new DeleteRealEstateAction(deletedAd));      
    }

    get sourceData() {
        this.index = this.index + 1;
        console.log("source data : " + this.index);
        
        return this.datasource;
    }

    ngOnInit() {
        this.realEstateAds();
        this.cd.markForCheck();
    }

     realEstateAds() {

        return this.state.map((state: ApplicationState) => state.getObservableRealEstateAds).subscribe(
            ((res) => {
                res.subscribe((r) => {
                    this.datasource = r
                    this.cd.markForCheck();
                });
            }));
        
        //.map( (res:List<RealEstateAd>) => new Array()); 
            ;
       
           
    }
}