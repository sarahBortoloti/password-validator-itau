import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormHelpTextComponent } from '@/components/form-help-text/form-help-text.component';
import { PasswordValidator } from '@/helpers/validators/password.validator';
import { passwordValidatorsMessages } from '@/helpers/constants/password.constants';
import { InputPasswordComponent } from '@/components/input-password/input-password.component';

@Component({
  selector: 'app-password-validator',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FormHelpTextComponent,
    InputPasswordComponent,
  ],
  templateUrl: './password-validator.component.html',
  styleUrl: './password-validator.component.scss',
})
export class PasswordValidatorComponent {
  @Input() passwordControl: FormControl;
  @Output() passwordChange = new EventEmitter<{ password: string }>();

  validatorsMessages = passwordValidatorsMessages;

  ngOnInit(): void {
    this.passwordControl.setValidators(PasswordValidator.validator);
    this.passwordControl.updateValueAndValidity();
  }

  onPasswordChange() {
    const password = this.passwordControl.value;
    this.passwordChange.emit({ password });
  }
}
