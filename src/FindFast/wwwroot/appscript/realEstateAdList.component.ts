import {Component, OnInit} from 'angular2/core';
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

    constructor(private _realEstateAdService: RealEstateAdService) {

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