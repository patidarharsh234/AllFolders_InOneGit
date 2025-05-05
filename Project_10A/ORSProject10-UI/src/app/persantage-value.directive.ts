import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPersantageValue]'
})
export class PersantageValueDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/[^0-9%]/g, '');

    // Ensure only one percentage sign and it should be at the end
    const percentIndex = trimmed.indexOf('%');
    if (percentIndex !== -1) {
      trimmed = trimmed.substring(0, percentIndex).replace('%', '') + '%';
    }

    // Ensure the value does not exceed 100%
    if (percentIndex !== -1 && Number(trimmed.replace('%', '')) > 100) {
      trimmed = '100%';
    } else if (percentIndex === -1 && Number(trimmed) > 100) {
      trimmed = '100';
    }

    // Update the input value
    input.value = trimmed;
  }
}