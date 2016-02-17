import {Control} from 'angular2/common';

export class ValidationService {
    static numericValidator(control: Control) {
       
        if (control.value.match(/^(0|[1-9][0-9]*)$/)) {
            return null;
        } else {
            return { 'numericNoValid': true };
        }
    }
}