import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import { InfiniteScroll } from 'angular2-infinite-scroll';


@Component({
    selector: 'realEstateAdList',
    templateUrl: 'appscript/realEstateAdList.component.html',
    providers: [RealEstateAdService],
    directives: [InfiniteScroll]
})
export class RealEstateAdListComponent implements OnInit {
    public realEstateAdList: Observable<Array<RealEstateAd>>;
    term = new Control();

    constructor(private _realEstateAdService: RealEstateAdService) { 
        console.log('test!!')
    }

    onScroll() {
        console.log('scrolled!!')
    }

    getRealEstateAdList() {    
     
        this.realEstateAdList = Observable.concat(
              this._realEstateAdService.getRealEstateList(),
              this.term.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this._realEstateAdService.getRealEstateListBy(this.term.value))
            
        );
    }

    ngOnInit() {
        this.getRealEstateAdList();
    }
}