import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appcontendAlphabateOnly]'
})
export class AppcontendAlphabateOnlyDirective {

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;
    // Allow control keys such as backspace, delete, tab, escape, enter, and arrow keys
    if (
      key === 'Backspace' || key === 'Delete' || key === 'Tab' || key === 'Escape' || key === 'Enter' ||
      (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown')
    ) {
      return;
    }
    // Prevent numbers
    if (!/[A-Za-z\s]/.test(key)) {
      event.preventDefault();
    }
  }

}
