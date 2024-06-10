import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-help-text',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './form-help-text.component.html',
})
export class FormHelpTextComponent {
  @Input() success: boolean = false;
  @Input() error: boolean = false;
  @Input() message: string = '';

  faCheck = faCheck;
  faTimes = faTimes;
}
