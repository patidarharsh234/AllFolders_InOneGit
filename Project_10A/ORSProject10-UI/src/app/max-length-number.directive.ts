import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLengthNumber]'
})
export class MaxLengthNumberDirective {

  @Input() appMaxLengthNumber: number;

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const maxLength = this.appMaxLengthNumber;

    // If input length exceeds the max length, truncate the value
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.updateModel(input.value);
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent): void {
    const input = event.target as HTMLInputElement;
    const maxLength = this.appMaxLengthNumber;

    // Delay the execution to let the paste event finish
    setTimeout(() => {
      if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
        this.updateModel(input.value);
      }
    });
  }

  private updateModel(value: string): void {
    const nativeElement = this.el.nativeElement;
    const event = new Event('input', { bubbles: true });
    nativeElement.value = value;
    nativeElement.dispatchEvent(event);
  }
}