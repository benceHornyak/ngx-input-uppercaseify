import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputUppercaseifyDirective } from '@benceHornyak/ngx-input-uppercaseify';

@Component({
  standalone: true,
  selector: 'ngx-input-uppercaseify-root',
  imports: [NgxInputUppercaseifyDirective, FormsModule, ReactiveFormsModule],
  template: `
    <div>
      <label for="input-without-ngcontrol">Input without control</label>
      <input id="input-without-ngcontrol" ngxInputUppercaseify type="text" />
    </div>

    <div>
      <label for="input-with-ngmodel">Input with ngModel</label>
      <input
        id="input-with-ngmodel"
        ngxInputUppercaseify
        [(ngModel)]="ngModelValue"
        type="text"
      />
      <p>ngModel value: {{ ngModelValue }}</p>
    </div>

    <div>
      <label for="input-with-formcontrol">Input with formControl</label>
      <input
        id="input-with-formcontrol"
        ngxInputUppercaseify
        type="text"
        [formControl]="formControl"
      />
      <p>formControl value: {{ formControl.value }}</p>
    </div>
  `,
})
export class AppComponent {
  ngModelValue = '';
  readonly formControl = new FormControl('');

  constructor() {
    this.formControl.valueChanges.subscribe((value) => {
      console.log('formControl value changed', value);
    });
  }
}
