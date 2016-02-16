import {Component, OnInit} from 'angular2/core';
import {FormBuilder,Control, ControlGroup,Validators} from 'angular2/common';
import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';


@Component({
    selector: 'realEstateAdInsert',
    templateUrl: 'appscript/realEstateAdInsert.component.html',
    providers: [RealEstateAdService]
})
export class RealEstateAdInsertComponent implements OnInit {
    title: Control;
    formGroup: ControlGroup;  

    constructor(private _builder: FormBuilder, private _realEstateAdService: RealEstateAdService) { 
        this.title = new Control('', Validators.required);
        this.formGroup = _builder.group({
            title: this.title
        });
    }

    submitRealEstateAd() {
        let realEstateAd: RealEstateAd = new RealEstateAd(this.title.value, null, 0, 0);

        this._realEstateAdService.insertRealEstateAd(realEstateAd);
    }

    ngOnInit() {
       
    }
}