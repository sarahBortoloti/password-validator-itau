import { FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

describe('PasswordValidator', () => {
  let control: FormControl;

  beforeAll(() => {
    control = new FormControl('', [PasswordValidator.validator]);
  });
  it('should return null for a valid password', () => {
    control.setValue('AbTp9!fok');
    expect(control.valid).toBe(true);
  });

  it('should return minlength error for passwords shorter than 9 characters', () => {
    control.setValue('AbTp9!fo');

    expect(control.valid).toBe(false);
  });

  it('should return pwNotHaveNumber error if no number is present', () => {
    control.setValue('AbTpGlPfo');
    expect(control.valid).toBe(false);
  });

  it('should return pwNotHaveUpperCase error if no uppercase letter is present', () => {
    control.setValue('ab');
    expect(control.valid).toBe(false);
  });

  it('should return pwNotHaveLowerCase error if no lowercase letter is present', () => {
    control.setValue('NOLOWERCASE1!');

    expect(control.valid).toBe(false);
  });

  it('should return pwNotHaveSpecialCharacters error if no special character is present', () => {
    control.setValue('NoSpecial1');
    expect(control.valid).toBe(false);
  });

  it('should return pwHaveForbiddenCharacters error if forbidden characters are present', () => {
    control.setValue('I nvalid1*^%');
    expect(control.valid).toBe(false);
  });

  it('should return pwHaveRepeatedDigits error if repeated characters are present', () => {
    control.setValue('AAAbbbCc');
    expect(control.valid).toBe(false);
  });

  it('should return multiple errors for a password that fails multiple checks', () => {
    control.setValue('short');
    expect(control.valid).toBe(false);
  });
});
