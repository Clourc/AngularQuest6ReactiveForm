import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';

export function isRequiredValidator(control1: string, control2: string): ValidatorFn {
  return (g: AbstractControl): ValidationErrors | null => {
    const id = g.get(control1)?.value;
    const title = g.get(control2)?.value;
    return id || title ? null : { isRequired: 'Title or Id is required' }
  };
}

export function rangeDateValidator(minYear: number, maxYear: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const releaseYear = control.value;
    console.log(control);
    if (releaseYear >= minYear && releaseYear <= maxYear) {
      return null;
    } else {
      return { min: [minYear, maxYear] };
    }
  };
}
