import {Injectable} from "angular2/core";
import {UiState, initialUiState} from "./uiState";
import {UiErrorState, initialUiErrorState} from "./uiErrorState";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UiStateStore {

    _uiState: BehaviorSubject<UiState> = new BehaviorSubject(initialUiState);
    _uiErrorState: BehaviorSubject<UiErrorState> = new BehaviorSubject(initialUiErrorState);

    get uiState() {
        return new Observable(fn => this._uiState.subscribe(fn));       
    }

    get uiErrorState() {
        return new Observable(fn => this._uiErrorState.subscribe(fn));
    }


    startBackendAction(message: string) {
        this._uiState.next({
            actionOngoing: true,
            message
        });
    }

    raiseError(errorMessage: string) {
        let currentErrorState = this._uiErrorState;
        this._uiErrorState.next({
            errorMessage: errorMessage
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