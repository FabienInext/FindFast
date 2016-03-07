///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {provide, Inject} from 'angular2/core';
//import {ModalConfig} from './angular2-modal/angular2-modal';
import {ModalConfig} from 'angular2-modal';
import {UiStateStore} from "./uiStateStore";
import {dispatcher, state, initialState} from "./redux/di-tokens";
import {Subject} from "rxjs/Subject";
import {Action} from "./redux/RealEstateAdAction";
import {List} from "immutable";
import {applicationStateFactory} from "./redux/applicationStateFactory";
import {initialUiState} from './uiState';
import {Reducers}from './redux/reducers';
import {RealEstateAddBackendService} from "./RealEstateAddBackendService";
import {ApplicationState} from "./redux/applicationState";
import {RealEstateAd} from "./realEstateAd";


bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS
    ,
    provide(ModalConfig, { useValue: new ModalConfig('lg', true, 81) }),
    provide(dispatcher, { useValue: new Subject<Action>() }),
    provide(Reducers, { useClass: Reducers }),
    provide(RealEstateAddBackendService, { useClass: RealEstateAddBackendService }),      
    provide(initialState, {
        useValue: new ApplicationState(List([]).push(new RealEstateAd('test', 'test', 'test', 1, 1))
        , initialUiState)}),
    provide(state, { useFactory: applicationStateFactory, deps: [new Inject(initialState), new Inject(dispatcher), new Inject(Reducers)] }),
    UiStateStore,   
    ELEMENT_PROBE_PROVIDERS ]); 