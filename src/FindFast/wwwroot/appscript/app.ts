import {Component, OnInit, provide, DynamicComponentLoader,ComponentRef,ElementRef, Injector,
    IterableDiffers, KeyValueDiffers, Renderer, ViewChild, ViewChildren} from 'angular2/core';

import {RealEstateAdService} from './realEstateAdService';
import {RealEstateAd} from "./realEstateAd"
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {RealEstateAdListComponent} from "./realEstateAdList.component";
import {RealEstateAdStoreListComponent} from "./realEstateAdStoreList.component";
import {RealEstateAdInsertComponent} from "./realEstateAdInsert.component";
import {RouteConfig, ROUTER_DIRECTIVES, AsyncRoute} from 'angular2/router';
import {RealEstateAddStore} from './RealEstateAdStore';
import {RealEstateAddBackendService} from "./RealEstateAddBackendService";
import {UiStateStore} from "./uiStateStore";
import {UiState} from "./uiState";
import {UiErrorState} from "./uiErrorState";
import {ModalDialogInstance, ModalConfig, Modal, ICustomModal, YesNoModalContent, YesNoModal} from 'angular2-modal';
import {AdditionCalculateWindowData, AdditionCalculateWindow} from './customModal';
import {RealEstateAdReduxListComponent} from './redux/realEstateAdReduxList.component'
import {RealEstateAdReduxInsertComponent} from './redux/realEstateAdReduxInsert.component'
import {Reducers} from './redux/reducers';
declare var System: any;


@Component({
    selector: 'my-app',
    providers: [
        provide(RealEstateAdService, { useClass: RealEstateAdService }),
        provide(RealEstateAddStore, { useClass: RealEstateAddStore }),             
        Modal
    ],
    template: `Message : {{uiStateMessage | async}}
         <button  (click)="openDialog('customWindow')">Custom Window</button>
       redux : <br>
<table>
    <tr>
        <td>
            <realEstateAdReduxList></realEstateAdReduxList>
        </td>
        <td>
            <button (click)="AddInsertComponent()">Add insert</button>
            <div #container></div>
           
        </td>
    </tr>
</table>

        <realEstateAdStoreList>   <footer>
    Yet another todo app!
  </footer>
<footer>
    Yet another todo app2!
  </footer></realEstateAdStoreList>
        XXX
        <a [routerLink]="['RealEstateAdList']">Back</a>
        <a [routerLink]="['RealEstateAdAdd']">Add</a>
        <p>Number of Add  : {{realEstateAdCount}}</p>
        <router-outlet></router-outlet>

    `,
    directives: [RealEstateAdReduxInsertComponent,RealEstateAdListComponent, RealEstateAdStoreListComponent, RealEstateAdReduxListComponent, ROUTER_DIRECTIVES]
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
export class AppComponent implements OnInit {
    @ViewChild(RealEstateAdStoreListComponent)
    inputComponent: RealEstateAdStoreListComponent

    private realEstateAdCount: number;

    constructor(private elementRef: ElementRef, private loader: DynamicComponentLoader,private _realEstateAddStore: RealEstateAddStore,private _realEstateAdService: RealEstateAdService,
        private uiStateStore: UiStateStore, private modal: Modal,private injector: Injector, private _renderer: Renderer) {
        this._realEstateAdService.countAdd$.subscribe((res: number) => {
            this.realEstateAdCount = res;
            this.uiStateStore.uiErrorState.map((uiErrorState: UiErrorState) => uiErrorState.errorMessage)
                .subscribe((error) => { if (error) this.openDialogError() });
        });
        
        
    }

    ngOnInit() {
      
    }

    AddInsertComponent() {
        this.loader.loadIntoLocation(RealEstateAdReduxInsertComponent, this.elementRef, 'container');
    }

    ngAfterViewInit() {
        var list = this.inputComponent.realEstateAdList;
    }

    static modalConfigs = {       
        'customWindow': new ModalConfig("lg", true, 27)        
    };
    static modalData = {      
        'customWindow': new AdditionCalculateWindowData(2, 3)
    };

    openDialogError() {
        let modalConfig: ModalConfig = new ModalConfig("lg", false, 27);
        let modalData: YesNoModalContent = new YesNoModalContent('Simple Large modal', 'New error message is coming', true);
        let dialog: Promise<ModalDialogInstance>;
        let component = YesNoModal;

        let bindings = this.getBinding(modalData);

        dialog = this.modal.open(
            <any>component,
            bindings,
            modalConfig); 
    }

    private getBinding(modalData: any) {
        return Injector.resolve([
            provide(ICustomModal, { useValue: modalData }),
            provide(IterableDiffers, { useValue: this.injector.get(IterableDiffers) }),
            provide(KeyValueDiffers, { useValue: this.injector.get(KeyValueDiffers) }),
            provide(Renderer, { useValue: this._renderer })
        ]);
    }

    openDialog(type: string) {
        let dialog: Promise<ModalDialogInstance>;
        let component = AdditionCalculateWindow ;

        // Workaround for https://github.com/angular/angular/issues/4330
        // providing resolved providers to IterableDiffers, KeyValueDiffers & Renderer.
        // Since customWindow uses 'ngClass' directive & 'ngClass' requires the above providers we need to supply them.
        // One would expect angular to get them automatically but that not the case at the moment.
        let bindings = Injector.resolve([
            provide(ICustomModal, { useValue: AppComponent.modalData[type] }),
            provide(IterableDiffers, { useValue: this.injector.get(IterableDiffers) }),
            provide(KeyValueDiffers, { useValue: this.injector.get(KeyValueDiffers) }),
            provide(Renderer, { useValue: this._renderer }),
            provide(RealEstateAddStore, { useValue: this._realEstateAddStore })
        ]);

       
        dialog = this.modal.open(
                <any>component,
                bindings,
                AppComponent.modalConfigs[type]);       
    }

    get uiStateMessage() {
        return this.uiStateStore.uiState.map((uiState: UiState) => uiState.message);
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