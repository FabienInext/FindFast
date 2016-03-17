import {Component, provide, ElementRef, DynamicComponentLoader} from 'angular2/core';

import {RealEstateAdReduxListComponent} from './realEstateAdReduxList.component'
import {RealEstateAdReduxInsertComponent} from './realEstateAdReduxInsert.component'
import {Reducers} from './reducers';

@Component({
    selector: 'app-redux',   
    templateUrl: 'appscript/redux/appredux.html',
    directives: [RealEstateAdReduxInsertComponent, RealEstateAdReduxListComponent]
})
export class AppReduxComponent {
    constructor(private elementRef: ElementRef, private loader: DynamicComponentLoader) {
    }

    AddInsertComponent() {
        this.loader.loadIntoLocation(RealEstateAdReduxInsertComponent, this.elementRef, 'container');
    }

}
