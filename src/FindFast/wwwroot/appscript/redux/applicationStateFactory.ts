import {Observable} from "rxjs/Observable";
import {Action} from "./RealEstateAdAction";
import {ApplicationState} from "./applicationState";
import {dispatcher} from "./di-tokens";
import {Reducers} from "./reducers";
import {UiState, initialUiState} from "../uiState";
import {BehaviorSubject} from "rxjs/Rx";
import {List} from 'immutable';
import {RealEstateAd} from "../realEstateAd";


function wrapIntoBehaviorSubject(init, obs) {
    const res = new BehaviorSubject(init);
    obs.subscribe(s => res.next(s));
    return res;
}

export function applicationStateFactory(initialState: ApplicationState, actions: Observable<Action>, reducers: Reducers): Observable<ApplicationState> {

    let appStateObservable = actions.scan((state: ApplicationState, action) => {

        console.log("Processing action ");

        var realEstateAds;

        let subject: BehaviorSubject<List<RealEstateAd>> = new BehaviorSubject(List<RealEstateAd>());
        let obs: Observable<List<RealEstateAd>> = new Observable(fn => this.subject.subscribe(fn));

        let newState: ApplicationState = new ApplicationState(
            state.getRealEstateAds,
            reducers.calculateUiState(state.uiState, action)
        );

        reducers.calculateRealEstateAd(state.getRealEstateAds, action).subscribe((res) => {
            realEstateAds = res;  

            newState.submitRealEstateAds(realEstateAds);
           

            /*console.log({
                realEstateAds: newState.realEstateAds.toJS(),
                uiState: newState.uiState
            });*/            
        }
        );

        return newState;

       

    }, initialState)
        .share();

    return wrapIntoBehaviorSubject(initialState, appStateObservable);
}