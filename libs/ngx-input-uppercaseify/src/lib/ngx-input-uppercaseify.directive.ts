import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { isNil } from './typeguards/isNil.typeguard';

@Directive({
  selector: 'input[type="text"][ngxInputUppercaseify]',
  standalone: true,
})
export class NgxInputUppercaseifyDirective {
  constructor(@Host() private inputElement: ElementRef<HTMLInputElement>) {}

  @HostListener('beforeinput', ['$event'])
  onBeforeInput(event: InputEvent) {
    event.preventDefault();

    const inputElement = this.inputElement.nativeElement;
    const {
      selectionStart,
      selectionEnd,
      value: currentInputValue,
    } = inputElement;
    const data = event.data;

    if (!data) {
      return;
    }

    const newData = data.toUpperCase();

    const newValue = !isNil(selectionStart)
      ? currentInputValue.substring(0, selectionStart) +
        newData +
        (!isNil(selectionEnd) ? currentInputValue.substring(selectionEnd) : '')
      : '';

    inputElement.value = newValue;

    const newEvent = new InputEvent('input', {
      data: newValue,
      inputType: event.inputType,
      isComposing: false,
      bubbles: true,
      cancelable: false,
    });

    inputElement.dispatchEvent(newEvent);
  }
}
