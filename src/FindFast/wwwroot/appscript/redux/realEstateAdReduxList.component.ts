
import {Component, provide, ElementRef, Injector,
    IterableDiffers, KeyValueDiffers,Inject, Renderer, OnInit, Output, EventEmitter, forwardRef} from 'angular2/core';
import {Control} from 'angular2/common';
import {RealEstateAdService} from '../realEstateAdService';
import {RealEstateAd} from "../realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {dispatcher, state, initialState} from "./di-tokens";
import {ApplicationState} from "./applicationState";
import {LoadRelEstateAdAction, AddRealEstateAction, StartBackendAction, EndBackendAction, Action} from "./RealEstateAdAction";
import {RealEstateAddBackendService} from "../RealEstateAddBackendService"
import {List} from 'immutable';

@Component({
    selector: 'realEstateAdReduxList',
    templateUrl: 'appscript/redux/realEstateAdReduxList.component.html',
    providers: [RealEstateAddBackendService]
        
})
export class RealEstateAdReduxListComponent {
    private datasource : List<RealEstateAd> ;

    constructor( @Inject(dispatcher) private dispatcher: Observer<Action>,
        @Inject(state) private state: Observable<ApplicationState>,
        private realEstateAdService: RealEstateAddBackendService) {

        this.dispatcher.next(new LoadRelEstateAdAction(null));
        this.realEstateAds();

        /*this.realEstateAdService.getAllAdds()
            .subscribe(
            res => {
                let realEstateAdds = (<Object[]>res.json()).map((realEstateAd: any) =>
                    new RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface));

                this.dispatcher.next(new LoadRelEstateAdAction(List(realEstateAdds)));
            },
            err => console.log("Error2 retrieving Todos")
            );*/
    }   

     realEstateAds() {

        return this.state.map((state: ApplicationState) => state.getObservableRealEstateAds).subscribe(
            ((res) => {
                res.subscribe((r) => {
                    this.datasource = r
                });
            }));
        
        //.map( (res:List<RealEstateAd>) => new Array()); 
            ;
       
           
    }
}