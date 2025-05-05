import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAppFirstLastName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AppFirstLastNameDirective, multi: true }]
})
export class AppFirstLastNameDirective implements Validator  {


  // Regex pattern to validate names in the format "Firstname Lastname"
  private regex: RegExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    // Check if the input value matches the regex pattern
    const isValid = this.regex.test(value);

    // Return an error object if invalid, otherwise return null
    return isValid ? null : { 'nameInvalid': true };
  }
}
