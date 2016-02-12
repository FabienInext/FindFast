import {Component, OnInit} from 'angular2/core';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {RealEstateAdListComponent} from "./realEstateAdList.component";


@Component({
    selector: 'my-app',
    template: '<div><realEstateAdList></realEstateAdList>Real estate list <ul><li *ngFor="#realEstateAd of realEstateAdList"><span>{{realEstateAd.title}}</span></li></ul></div>',
    providers: [RealEstateAdService],
    directives: [RealEstateAdListComponent]
})
export class AppComponent implements OnInit
{
    public realEstateAdList: RealEstateAd[];

    constructor(private _realEstateAdService: RealEstateAdService) {

    }

    getRealEstateAdList() {
        //this._realEstateAdService.getRealEstateList().then(x => this.realEstateAdList = x);

        //this._realEstateAdService.getRealEstateList().subscribe((res: Response) => this.doSomething(res));
        this._realEstateAdService.getRealEstateList().subscribe((res: Array<RealEstateAd>) => this.doSomething(res));
        /*taskService.getTasks()
      .subscribe(res => this.tasks = res);*/
    }

    doSomething(res: Array<RealEstateAd>) {       
        this.realEstateAdList = res;
    }


    ngOnInit() {
        this.getRealEstateAdList();
    }
}