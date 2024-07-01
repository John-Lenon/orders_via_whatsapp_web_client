import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class CustomValidator extends Validators {

    static requiredForSingleSelectList(control: AbstractControl): ValidationErrors | null {
        if(!control.value){
            const resultValidator: ValidationErrors = {
                requiredForSingleSelectList: true
            }            
            return resultValidator;     
        }           
        return null;
    }

    static requiredForMultipleSelectList(control: AbstractControl) : ValidationErrors | null {
        if(!control.value || control.value.length === 0){
            const resultValidator: ValidationErrors = {
                requiredForMultipleSelectList: true
            }
            return resultValidator;
        }
        return null;
    }

    static dateValidatorDDMMYYYY(control: AbstractControl): ValidationErrors | null {
        if(control.errors && control.errors['matDatepickerParse']){
            const resultValidator: ValidationErrors = {
                dateValidatorDDMMYYYY: true
            };
            return resultValidator;
        }
        
        return null;
    }
}

