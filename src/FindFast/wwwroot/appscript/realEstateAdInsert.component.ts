import {Component, OnInit} from 'angular2/core';
import {FormBuilder,Control, ControlGroup,Validators} from 'angular2/common';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {ValidationService} from "./validationService"
import {Router} from 'angular2/router';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {RealEstateAddStore} from './RealEstateAdStore';

@Component({
    selector: 'realEstateAdInsert',
    templateUrl: 'appscript/realEstateAdInsert.component.html',
    providers: [RealEstateAdService]    ,   
    directives: [InfiniteScroll]
})
export class RealEstateAdInsertComponent implements OnInit {
    title: Control;
    description: Control;
    price: Control;
    surface: Control;
    formGroup: ControlGroup;  

    constructor(private _router: Router, private _builder: FormBuilder,
        private _realEstateAdService: RealEstateAdService, private realEstateAddStore: RealEstateAddStore) { 
        this.title = new Control('', Validators.required);
        this.description = new Control('', Validators.required);
        this.price = new Control('', Validators.compose([Validators.required, ValidationService.numericValidator]));
        this.surface = new Control('', Validators.required);
        this.formGroup = _builder.group({
            title: this.title,
            description: this.description,
            price: this.price,
            surface: this.surface
        });
        
    }

    submitRealEstateAd() {
        let realEstateAd: RealEstateAd = new RealEstateAd(null,this.title.value, this.description.value, this.price.value, this.surface.value);

        //this._realEstateAdService.insertRealEstateAd(realEstateAd);
        this.realEstateAddStore.addRealEstateAd(realEstateAd);
        this._router.navigate(['RealEstateAdList', {}]);
    }

    onScroll() {
        console.log('scrolled!!')
    }

    ngOnInit() {
       
    }
}