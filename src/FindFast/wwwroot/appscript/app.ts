import {Component, OnInit,provide,ComponentRef} from 'angular2/core';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {RealEstateAdListComponent} from "./realEstateAdList.component";
import {RealEstateAdInsertComponent} from "./realEstateAdInsert.component";
import {RouteConfig, ROUTER_DIRECTIVES, AsyncRoute} from 'angular2/router';
import { InfiniteScroll } from 'angular2-infinite-scroll';
declare var System: any;


@Component({
    selector: 'my-app',
    providers: [
        provide(RealEstateAdService, { useClass: RealEstateAdService })
    ],
    template: `
   
        <a [routerLink]="['RealEstateAdAdd']">Add</a>
        <p>Number of Add  : {{realEstateAdCount}}</p>
        <router-outlet></router-outlet>

    `,
    directives: [RealEstateAdListComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/list', name: 'RealEstateAdList', component: RealEstateAdListComponent, useAsDefault: true },
       
        new AsyncRoute({
            path: '/add',
            loader: () => ComponentHelper.LoadComponentAsync('RealEstateAdInsertComponent', 'appscript/realEstateAdInsert.component'),
            name: 'RealEstateAdAdd'
        })
   // { path: '/add', name: 'RealEstateAdAdd', component: RealEstateAdInsertComponent }
])
    /*@RouteConfig([
  { path: '/', component: Home, name: 'home' },
  new AsyncRoute({
    path: '/about',
    loader: () => System.import('./components/about/about').then(m => m.About),
    name: 'about'
  })
])*/
export class AppComponent {
    private realEstateAdCount: number;

    constructor(private _realEstateAdService: RealEstateAdService) {
        this._realEstateAdService.countAdd$.subscribe((res: number) => {
            this.realEstateAdCount = res;
        });
}
}

class ComponentHelper {

    static LoadComponentAsync(name, path) {
        return System.import(path).then(c => {
            var t = c[name];
            return t;
        });
    }
}