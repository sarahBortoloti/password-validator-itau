import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast.component';
import { ToastService } from '../../services/toast.service';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;
  let toastService: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComponent],
      providers: [ToastService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    toastService = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a success toast with correct icon', () => {
    toastService.show({ message: 'Success message', type: 'success' });
    fixture.detectChanges();

    const toastElement = fixture.debugElement.query(By.css('.toast.success'));
    expect(toastElement).toBeTruthy();
  });

  it('should display an error toast with correct icon', () => {
    toastService.show({ message: 'Error message', type: 'error' });
    fixture.detectChanges();

    const toastElement = fixture.debugElement.query(By.css('.toast.error'));
    expect(toastElement).toBeTruthy();
  });

  it('should display a warning toast with correct icon', () => {
    toastService.show({ message: 'Warning message', type: 'warning' });
    fixture.detectChanges();

    const toastElement = fixture.debugElement.query(By.css('.toast.warning'));
    expect(toastElement).toBeTruthy();
  });

  it('should display an info toast with correct icon', () => {
    toastService.show({ message: 'Info message', type: 'info' });
    fixture.detectChanges();

    const toastElement = fixture.debugElement.query(By.css('.toast.info'));
    expect(toastElement).toBeTruthy();
  });
});
