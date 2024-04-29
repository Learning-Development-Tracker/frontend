import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchpassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  if(password?.value != confirmpassword?.value) {
    return {
      passwordmatcherror : true
    }
  }
  return null;
};

export const minimuminput: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('^(?=.*[A-Z])');
  let confrimPw = confirmpassword?.value?.match('^(?=.*[A-Z])');
  let bothMatch  = !(newPw && confrimPw)
  console.log('minimuminput newPw',newPw)
  console.log('minimuminput confrimPw',confrimPw)
  if(bothMatch) {
    return {
      inputminerror : true
    }
  }
  return null;
};

export const lowCase: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('(?=.*[a-z])');
  let confrimPw = confirmpassword?.value?.match('(?=.*[a-z])');
  let bothMatch  = !(newPw && confrimPw)
  console.log('lowCase newPw',newPw)
  console.log('lowCase confrimPw',confrimPw)
  if(bothMatch) {
    return {
      caselowerror : true
    }
  }
  return null;
};
export const upCase: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('^(?=.*[A-Z])');
  let confrimPw = confirmpassword?.value?.match('^(?=.*[A-Z])');
  let bothMatch  = !(newPw && confrimPw)
  console.log('upCase newPw',newPw)
  console.log('upCase confrimPw',confrimPw)
  if(bothMatch) {
    return {
      caseuperror : true
    }
  }
  return null;
};
export const oneDIgit: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('(.*[0-9].*)');
  let confrimPw = confirmpassword?.value?.match('(.*[0-9].*)');
  let bothMatch  = !(newPw && confrimPw)
  console.log('oneDIgit newPw',newPw)
  console.log('oneDIgit confrimPw',confrimPw)
  if(bothMatch) {
    return {
      digiterror : true
    }
  }
  return null;
};
export const oneSymbol: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('(?=.*[!@#$%^&*])');
  let confrimPw = confirmpassword?.value?.match('(?=.*[!@#$%^&*])');
  let bothMatch  = !(newPw && confrimPw)
  console.log('oneSymbol newPw',newPw)
  console.log('oneSymbol confrimPw',confrimPw)
  if(bothMatch) {
    return {
      symbolerror : true
    }
  }
  return null;
};
export const charLen: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  
  let password = control.get('NewPassword');
  let confirmpassword = control.get('ConfirmPassword');
  let newPw = password?.value?.match('.{8,}');
  let confrimPw = confirmpassword?.value?.match('.{8,}');
  let bothMatch  = !(newPw && confrimPw)
  console.log('charLen newPw',newPw)
  console.log('charLen confrimPw',confrimPw)
  if(bothMatch) {
    return {
      charlengtherror : true
    }
  }
  return null;
};
