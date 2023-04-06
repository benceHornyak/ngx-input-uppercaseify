import { Component } from '@angular/core';
import { NgxInputUppercaseifyDirective } from './ngx-input-uppercaseify.directive';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <input type="text" ngxInputUppercaseify /> `,
})
class TestComponent {}

describe('NgxInputUppercaseifyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: NgxInputUppercaseifyDirective;
  let inputElement: HTMLInputElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxInputUppercaseifyDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    directive = fixture.debugElement
      .query(By.directive(NgxInputUppercaseifyDirective))
      .injector.get(NgxInputUppercaseifyDirective);
    fixture.detectChanges();
  });

  describe('by default', () => {
    it('should create', () => {
      expect(component).not.toBeNull();
      expect(directive).not.toBeNull();
    });
  });

  describe('when input is changed', () => {
    const testValue = 'hello';

    beforeEach(() => {
      inputElement.dispatchEvent(
        new InputEvent('beforeinput', { data: testValue })
      );
      fixture.detectChanges();
    });

    it('should uppercase the value', () => {
      expect(inputElement.value).toBe(testValue.toUpperCase());
    });
  });
});
