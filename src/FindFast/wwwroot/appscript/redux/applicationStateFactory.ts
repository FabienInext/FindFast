import {Observable} from "rxjs/Observable";
import {Action} from "./RealEstateAdAction";
import {ApplicationState} from "./applicationState";
import {dispatcher} from "./di-tokens";
import {Reducers} from "./reducers";
import {UiState, initialUiState} from "../uiState";
import {BehaviorSubject} from "rxjs/Rx";
import {List} from 'immutable';
import {RealEstateAd} from "../realEstateAd";


function wrapIntoBehaviorSubject(init: ApplicationState, obs:Observable<ApplicationState>) {
    const res = new BehaviorSubject(init);
    obs.subscribe(res);
    return res;
}

export function applicationStateFactory(initialState: ApplicationState, actions: Observable<Action>, reducers: Reducers): Observable<ApplicationState> {

    let appStateObservable = actions.scan((state: ApplicationState, action) => {

        console.log("Processing action ");

        var realEstateAds;

        //let subject: BehaviorSubject<List<RealEstateAd>> = new BehaviorSubject(List<RealEstateAd>());
        //let obs: Observable<List<RealEstateAd>> = new Observable(fn => this.subject.subscribe(fn));

        let newState: ApplicationState = new ApplicationState(
            state.getRealEstateAds,
            reducers.calculateUiState(state.uiState, action)
        );

        reducers.calculateRealEstateAd(state.getRealEstateAds, action).subscribe((res) => {           
            newState.submitRealEstateAds(res);
        });

        return newState;

    }, initialState)
        .share();

    return wrapIntoBehaviorSubject(initialState, appStateObservable);
}