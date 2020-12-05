import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Console } from 'console';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }
  @HostListener('blur') onBlue() {
    let obj = this.el.nativeElement;
    if (this.format == 'lowercase')
      obj.value = obj.value.toLowerCase();
    else if (this.format == 'uppercase')
      obj.value = obj.value.toUpperCase();
    obj.style.color = 'red';
  }
  @HostListener('focus') onFocus() {
    console.log('On Focus');
  }

}
