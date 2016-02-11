import {Component, OnInit} from 'angular2/core';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"

@Component({
    selector: 'my-app',
    template: '<div>Real estate list <ul><li *ngFor="#realEstateAd of realEstateAdList"><span>{{realEstateAd.title}}</span></li></ul></div>',
    providers: [RealEstateAdService]
})
export class AppComponent implements OnInit
{
    public realEstateAdList: RealEstateAd[];

    constructor(private _realEstateAdService: RealEstateAdService) {

    }

    getRealEstateAdList() {
        //this._realEstateAdService.getRealEstateList().then(x => this.realEstateAdList = x);

        this._realEstateAdService.getRealEstateList().subscribe(res => {
            this.realEstateAdList = res.json();

        });
    }

    ngOnInit() {
        this.getRealEstateAdList();
    }
}