import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class FormUtils {
  static isFieldInvalid(field: AbstractControl): boolean {
    return field.invalid && (field.touched || field.dirty);
  }
}
