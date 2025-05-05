import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appSetNumberMinMax]'
})
export class ValidateNumberMinMaxDirectiveDirective {

  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target.value;

    // If input is empty, set the control value to null
    if (input === '') {
      this.ngControl.control.setValue(null, { emitEvent: false });
    } else {
      // Convert the input to a number
      const numericValue = Number(input);

      // Enforce the range between 1 and 1000
      if (numericValue > 400000) {
        this.ngControl.control.setValue(400000, { emitEvent: false });
      } else if (numericValue < 1) {
        this.ngControl.control.setValue(1, { emitEvent: false });
      }
    }
  }
}

