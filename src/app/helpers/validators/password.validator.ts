import { AbstractControl, ValidationErrors } from '@angular/forms';
import {
  forbiddenPassword,
  lowerLettersRegex,
  numbersCharsRegex,
  repeatedCharsRegex,
  specialCharsRegex,
  upperLettersRegex,
} from '../constants/regex-patterns.constants';

export class PasswordValidator {
  static validator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const errors: ValidationErrors = {};

    if (!password || password.length < 9) {
      errors['minlength'] = true;
    }

    const containsNumber = new RegExp(numbersCharsRegex).test(password);
    const containsUppercase = new RegExp(upperLettersRegex).test(password);
    const containsLowercase = new RegExp(lowerLettersRegex).test(password);
    const containsSpecialChar = new RegExp(specialCharsRegex).test(password);
    const isForbiddenPassword = new RegExp(forbiddenPassword).test(password);
    const containsRepeatedDigits = new RegExp(repeatedCharsRegex).test(
      password
    );

    if (!containsNumber) {
      errors['pwNotHaveNumber'] = true;
    }
    if (!containsUppercase) {
      errors['pwNotHaveUpperCase'] = true;
    }
    if (!containsLowercase) {
      errors['pwNotHaveLowerCase'] = true;
    }
    if (!containsSpecialChar) {
      errors['pwNotHaveSpecialCharacters'] = true;
    }
    if (isForbiddenPassword) {
      errors['pwHaveForbiddenCharacters'] = true;
    }
    if (containsRepeatedDigits) {
      errors['pwHaveRepeatedDigits'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  }
}
