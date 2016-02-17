import {Component, OnInit} from 'angular2/core';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {RealEstateAdListComponent} from "./realEstateAdList.component";
import {RealEstateAdInsertComponent} from "./realEstateAdInsert.component";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'my-app',
    template: `
   
        <a [routerLink]="['RealEstateAdAdd']">Add</a>
       
        <router-outlet></router-outlet>

    `,   
    directives: [RealEstateAdListComponent, RealEstateAdInsertComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([   
        { path: '/list', name: 'RealEstateAdList', component: RealEstateAdListComponent, useAsDefault: true },
        { path: '/add', name: 'RealEstateAdAdd', component: RealEstateAdInsertComponent }
])
export class AppComponent
{
    constructor() {

    }
}