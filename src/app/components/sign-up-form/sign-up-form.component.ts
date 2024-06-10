import { Component } from '@angular/core';
import { PasswordValidatorComponent } from '../password-validator/password-validator.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormHelpTextComponent } from '../form-help-text/form-help-text.component';
import { UserService } from '@/services/user.service';
import { ToastService } from '@/services/toast.service';
import { FormUtils } from '@/helpers/utils/form.utils';
import { ToastComponent } from '@/components/toast/toast.component';
import { PasswordValidator } from '@/helpers/validators/password.validator';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    PasswordValidatorComponent,
    FormsModule,
    CommonModule,
    ToastComponent,
    ReactiveFormsModule,
    FormHelpTextComponent,
  ],
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {
  signUpForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: ToastService
  ) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidator.validator]],
      username: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue],
    });

    this.userService.loading$.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.create(this.signUpForm.value).subscribe({
        complete: () => {
          this.toastService.show({
            message: 'Usuário cadastrado com sucesso!',
            type: 'success',
          });

          this.signUpForm.reset();
        },
        error: () => {
          this.toastService.show({
            message: 'Ocorreu um erro ao cadastrar o usuário.',
            type: 'error',
          });
        },
      });
    }
  }

  onPasswordChange(event: { password: string }) {
    this.signUpForm.get('password').setValue(event.password);
  }

  isFieldInvalid(fieldName: string): boolean {
    return FormUtils.isFieldInvalid(this.signUpForm.get(fieldName));
  }

  getPasswordControl(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
}
