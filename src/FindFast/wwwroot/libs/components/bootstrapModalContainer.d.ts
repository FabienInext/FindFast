import { ModalDialogInstance } from '../models/ModalDialogInstance';
/**
 * A component that acts as a top level container for an open modal window.
 */
export declare class BootstrapModalContainer {
    dialogInstance: ModalDialogInstance;
    position: string;
    constructor(dialogInstance: ModalDialogInstance);
    onContainerClick($event: any): void;
    onClick(): void;
    documentKeypress(event: KeyboardEvent): void;
}
