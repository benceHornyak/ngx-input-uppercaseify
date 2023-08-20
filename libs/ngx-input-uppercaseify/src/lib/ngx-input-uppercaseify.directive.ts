import { Directive, ElementRef, OnInit } from '@angular/core';
import { isNil } from './typeguards/isNil.typeguard';

@Directive({
  selector: 'input[type="text"][ngxInputUppercaseify]',
  standalone: true,
})
export class NgxInputUppercaseifyDirective implements OnInit {
  constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    const inputElement = this.elementRef.nativeElement;

    inputElement.addEventListener('beforeinput', (event: InputEvent) => {
      const selectionStart = inputElement.selectionStart;
      const selectionEnd = inputElement.selectionEnd;
      const newData = event.data?.toUpperCase();

      if (!isNil(newData) && !isNil(selectionStart) && !isNil(selectionEnd)) {
        event.preventDefault();

        const newValue =
          inputElement.value.substring(0, selectionStart) +
          newData +
          inputElement.value.substring(selectionEnd);

        inputElement.value = newValue;

        inputElement.setSelectionRange(
          selectionStart + newData.length,
          selectionStart + newData.length
        );

        const newEvent = new InputEvent('input', {
          data: newData,
          inputType: event.inputType,
          isComposing: false,
          bubbles: true,
          cancelable: false,
        });

        inputElement.dispatchEvent(newEvent);
      }
    });
  }
}
