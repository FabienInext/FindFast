import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';


@Component({
    selector: 'realEstateAdList',
    templateUrl: 'appscript/realEstateAdList.component.html',
    providers: [RealEstateAdService]
})
export class RealEstateAdListComponent implements OnInit {
    public realEstateAdList: RealEstateAd[];
    term = new Control();

    constructor(private _realEstateAdService: RealEstateAdService) {
        this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(term => this._realEstateAdService.getRealEstateListBy(this.term.value)
                .subscribe((res: Array<RealEstateAd>) => this.loadRealEstateAdList(res))); 
    }

    getRealEstateAdList() {    
        this._realEstateAdService.getRealEstateList().subscribe((res: Array<RealEstateAd>) => this.loadRealEstateAdList(res));       
    }

    loadRealEstateAdList(res: Array<RealEstateAd>) {
        this.realEstateAdList = res;
    }


    ngOnInit() {
        this.getRealEstateAdList();
    }
}