import {Component, OnInit, Inject} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {RealEstateAdService} from '../realEstateAdService';
import {RealEstateAd} from "../realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {ValidationService} from "../validationService"
import {Router} from 'angular2/router';
import {dispatcher, state, initialState} from "./di-tokens";
import {ApplicationState} from "./applicationState";
import {LoadRelEstateAdAction, DeleteRealEstateAction, AddRealEstateAction, StartBackendAction, EndBackendAction, Action} from "./RealEstateAdAction";


@Component({
    selector: 'realEstateAdReduxInsert',
    templateUrl: 'appscript/redux/realEstateAdReduxInsert.component.html',
    providers: [RealEstateAdService]   
})
export class RealEstateAdReduxInsertComponent implements OnInit {
    title: Control;
    description: Control;
    price: Control;
    surface: Control;
    formGroup: ControlGroup;

    constructor( @Inject(dispatcher) private dispatcher: Observer<Action>, private _builder: FormBuilder,
        private _realEstateAdService: RealEstateAdService) {

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
        let realEstateAd: RealEstateAd = new RealEstateAd(null, this.title.value, this.description.value, this.price.value, this.surface.value);

        this.dispatcher.next(new AddRealEstateAction(realEstateAd));
    }

    ngOnInit() {

    }
}