import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppcontentManyDecimal]'
})
export class AppcontentManyDecimalDirective {

 
  private regex: RegExp = new RegExp(/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/);

  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    let initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}

