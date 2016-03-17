import {List} from 'immutable';
import {Injectable} from "angular2/core";
import {RealEstateAd} from "../realEstateAd";
import {
    LoadRelEstateAdAction, DeleteRealEstateAction, AddRealEstateAction, StartBackendAction, EndBackendAction
} from './RealEstateAdAction';
import {UiState, initialUiState} from "../uiState";
import {RealEstateAddBackendService} from "../RealEstateAddBackendService"
import {BehaviorSubject, Subject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class Reducers {
    _realEstateAdds: BehaviorSubject<List<RealEstateAd>> = new BehaviorSubject(List([]));

    constructor(private realEstateAddBackendService: RealEstateAddBackendService) {
        
    }

    private realEstateAdds() {
        return new Observable <List<RealEstateAd>>(fn => this._realEstateAdds.subscribe(fn));
    }

    calculateRealEstateAd(state: List<RealEstateAd>, action) {
        if (!state) {
            this._realEstateAdds.next(List([]));       
        }

    if (action instanceof LoadRelEstateAdAction) {

        this.realEstateAddBackendService.getAllAdds()
            .subscribe(
            res => {
                let realEstateAdds = (<Object[]>res.json()).map((realEstateAd: any) =>
                    new RealEstateAd(realEstateAd.Id, realEstateAd.Title, realEstateAd.Description, realEstateAd.Price, realEstateAd.Surface));

                this._realEstateAdds.next(List(realEstateAdds)); 
            },
            err => console.log("Error2 retrieving Todos")
            );       
        }

    if (action instanceof AddRealEstateAction)
    {
        var addAction = <AddRealEstateAction>action;

        let obs = this.realEstateAddBackendService.insertAdds(addAction.newRealEstateAd);

        obs.map((res) => res.json()).subscribe(
            (res: any) => {
                addAction.newRealEstateAd.id = res.Id;
                this._realEstateAdds.next(this._realEstateAdds.getValue().push(addAction.newRealEstateAd));
            });
    }

    if (action instanceof DeleteRealEstateAction) {
        var deleteAction: DeleteRealEstateAction = action;

        let obs = this.realEstateAddBackendService.deleteAdd(deleteAction.deletedRealEstateAd);

        obs.subscribe(res => {
            let realEstateAds = this._realEstateAdds.getValue().toArray();
            let index = realEstateAds.filter((realEstateAd) => realEstateAd.id === deleteAction.deletedRealEstateAd.id)[0];
            let indexOf = realEstateAds.indexOf(index);
            realEstateAds.splice(indexOf, 1);
            this._realEstateAdds.next(List(realEstateAds));
        });


    }

    return this.realEstateAdds();
        /*
    else if (action instanceof AddRealEstateAction) {
        return state.push(action.newRealEstateAd);
    }*/


}

    calculateUiState(state: UiState, action) {
    if (!state) {
        return initialUiState;
    }

    if (action instanceof StartBackendAction) {
        return new UiState(true, action.message);
    }
    else if (action instanceof EndBackendAction) {
        return new UiState(false, action.message ? action.message : initialUiState.message);
    }
    else {
        return state;
    }
}

}
/*export function calculateRealEstateAd(state: List<RealEstateAd>, action) {
    if (!state) {
        return List([]);
    }

    if (action instanceof LoadRelEstateAdAction) {
        return List(action.realEstateAds);
    }
    else if (action instanceof AddRealEstateAction) {
        return state.push(action.newRealEstateAd);
    }
   
    
}

export function calculateUiState(state: UiState, action) {
    if (!state) {
        return initialUiState;
    }

    if (action instanceof StartBackendAction) {
        return new UiState(true, action.message);
    }
    else if (action instanceof EndBackendAction) {
        return new UiState(false, action.message ? action.message : initialUiState.message);
    }
    else {
        return state;
    }
}*/