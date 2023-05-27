import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'tax-registration',
  templateUrl: './tax-registration.component.html',
  styleUrls: ['./tax-registration.component.css']
})
export class TaxRegistrationComponent  {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.pattern(/\s/), Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: confirmPasswordValidator});

  onSubmit(): void {
    // crack an egg or split a nut
  }

}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
};