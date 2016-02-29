///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
import {provide} from 'angular2/core';
//import {ModalConfig} from './angular2-modal/angular2-modal';
import {ModalConfig} from 'angular2-modal';
import {UiStateStore} from "./uiStateStore";


bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS
    ,
    provide(ModalConfig, { useValue: new ModalConfig('lg', true, 81) }),
    UiStateStore,
    ELEMENT_PROBE_PROVIDERS ]); 