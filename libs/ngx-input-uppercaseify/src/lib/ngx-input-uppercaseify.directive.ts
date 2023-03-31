import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="text"][ngxInputUppercaseify]',
  standalone: true,
})
export class NgxInputUppercaseifyDirective {
  constructor(@Host() private inputElement: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    this.inputElement.nativeElement.value = value.toUpperCase();
  }
}
