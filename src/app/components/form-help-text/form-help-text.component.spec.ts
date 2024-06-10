import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormHelpTextComponent } from './form-help-text.component';
import { By } from '@angular/platform-browser';

describe('FormHelpTextComponent', () => {
  let component: FormHelpTextComponent;
  let fixture: ComponentFixture<FormHelpTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHelpTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormHelpTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display success message with correct styling and icon', () => {
    component.success = true;
    component.error = false;
    component.message = 'Success message';
    fixture.detectChanges();

    const messageElement = fixture.debugElement.query(
      By.css('div')
    ).nativeElement;

    expect(messageElement.textContent).toContain('Success message');
    expect(messageElement.classList).toContain('valid-feedback');
  });

  it('should display error message with correct styling and icon', () => {
    component.success = false;
    component.error = true;
    component.message = 'Error message';
    fixture.detectChanges();

    const messageElement = fixture.debugElement.query(
      By.css('div')
    ).nativeElement;

    expect(messageElement.textContent).toContain('Error message');
    expect(messageElement.classList).toContain('invalid-feedback');
  });
});
