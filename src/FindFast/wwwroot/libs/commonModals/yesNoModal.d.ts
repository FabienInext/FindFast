import { ICustomModal, ICustomModalComponent } from '../models/ICustomModal';
import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * Data definition
 */
export declare class YesNoModalContent {
    title: string;
    body: string;
    hideNo: boolean;
    yesText: string;
    noText: string;
    constructor(title?: string, body?: string, hideNo?: boolean, yesText?: string, noText?: string);
}
/**
 * A 2 state bootstrap modal window, representing 2 possible answer, true/false.
 */
export declare class YesNoModal implements ICustomModalComponent {
    dialog: ModalDialogInstance;
    context: YesNoModalContent;
    constructor(dialog: ModalDialogInstance, modelContentData: ICustomModal);
    ok($event: any): void;
    cancel(): void;
}
