import { Routes } from '@angular/router';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: SignUpViewComponent },
];
