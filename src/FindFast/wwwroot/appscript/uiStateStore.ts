import {Injectable} from "angular2/core";
import {UiState, initialUiState} from "./uiState";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UiStateStore {

    _uiState: BehaviorSubject<UiState> = new BehaviorSubject(initialUiState);

    get uiState() {
        return new Observable(fn => this._uiState.subscribe(fn));       
    }


    startBackendAction(message: string) {
        this._uiState.next({
            actionOngoing: true,
            message
        });
    }

    displayMessage(message: string) {
        var currentState = this._uiState.getValue();
        this._uiState.next({
            actionOngoing: currentState.actionOngoing,
            message
        });
    }

    endBackendAction() {
        this._uiState.next({
            actionOngoing: false,
            message: ''
        });
    }
}