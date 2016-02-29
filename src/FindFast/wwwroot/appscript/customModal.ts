import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RealEstateAdStoreListComponent} from "./realEstateAdStoreList.component";
import {Modal} from 'angular2-modal';
import {ModalDialogInstance} from 'angular2-modal';
import {ICustomModal, ICustomModalComponent} from 'angular2-modal';
import {RealEstateAdInsertComponent} from './realEstateAdInsert.component';


export class AdditionCalculateWindowData {
    constructor(
        public num1: number,
        public num2: number
    ) { }
}

@Component({
    selector: 'modal-content',
    directives: [CORE_DIRECTIVES, RealEstateAdInsertComponent],
    template: `
        <div>
            <span>Modal input</span>
            <realEstateAdInsert></realEstateAdInsert>
            <input class="form-control" type="text" #answer (keyup)="onKeyUp(answer.value)" autofocus>
            <button (click)="close()">close</button>
        </div>`
})
    export class AdditionCalculateWindow implements ICustomModalComponent {
        dialog: ModalDialogInstance;
        context: AdditionCalculateWindowData;
        public wrongAnswer: boolean;

        constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal) {
            this.dialog = dialog;
            this.context = <AdditionCalculateWindowData>modelContentData;
            this.wrongAnswer = false;
        }

    onKeyUp(value) {
        /* tslint:disable */ //this.wrongAnswer = value != 5;
            this.dialog.close();
        }

    close() {
        this.dialog.close();
    }


    beforeDismiss(): boolean {
            return true;
        }

    beforeClose(): boolean {
            return this.wrongAnswer;
        }
    }

