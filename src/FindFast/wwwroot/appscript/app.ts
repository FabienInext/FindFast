import {Component, OnInit} from 'angular2/core';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {RealEstateAdListComponent} from "./realEstateAdList.component";
import {RealEstateAdInsertComponent} from "./realEstateAdInsert.component";


@Component({
    selector: 'my-app',
    template: '<div><realEstateAdList></realEstateAdList><realEstateAdInsert></realEstateAdInsert></div>',   
    directives: [RealEstateAdListComponent, RealEstateAdInsertComponent]
})
export class AppComponent
{
    constructor() {

    }
}