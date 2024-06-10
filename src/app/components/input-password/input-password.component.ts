import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
  @Input() control: FormControl;
  showPassword: boolean = false;

  faEyeSlash = faEyeSlash;
  faEye = faEye;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
