import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputUppercaseifyDirective } from '@benceHornyak/ngx-input-uppercaseify';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  selector: 'ngx-input-uppercaseify-root',
  imports: [NgxInputUppercaseifyDirective, FormsModule, ReactiveFormsModule],
  template: `
    <div>
      <label for="input-without-ngxInputUppercaseify">
        Without ngxInputUppercaseify
      </label>
      <input id="input-without-ngxInputUppercaseify" type="text" />
    </div>

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
export class AppComponent implements OnInit, OnDestroy {
  ngModelValue = '';
  readonly formControl = new FormControl('');

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        console.log('formControl value changed', value);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
