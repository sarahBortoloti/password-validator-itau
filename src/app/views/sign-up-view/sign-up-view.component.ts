import { SignUpFormComponent } from '@/components/sign-up-form/sign-up-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-view',
  standalone: true,
  imports: [SignUpFormComponent],
  templateUrl: './sign-up-view.component.html',
  styleUrl: './sign-up-view.component.scss',
})
export class SignUpViewComponent {}
