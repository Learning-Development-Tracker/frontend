import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomBottonComponent } from '../custom-button/custom-button.component';
import { PopupService } from './popupl.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupOptions } from './popup-options';
import { matchpassword, minimuminput, lowCase, upCase, oneDIgit, oneSymbol, charLen } from './matchpassword.validator';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../../authentication/login.services';
import { Register } from '../../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CustomBottonComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('vcrPass', { static: true, read: ViewContainerRef })
  vcrPassword!: ViewContainerRef;
  @ViewChild('vcrLogin', { static: true, read: ViewContainerRef })
  vcrLogin!: ViewContainerRef;
  @ViewChild('vcrReset', { static: true, read: ViewContainerRef })
  vcrReset!: ViewContainerRef;
  @ViewChild('vcrCreate', { static: true, read: ViewContainerRef })
  vcrCreate!: ViewContainerRef;
  @ViewChild('vcrUpdate', { static: true, read: ViewContainerRef })
  vcrUpdate!: ViewContainerRef;
  @Output() emailChanged = new EventEmitter<string>();
  @Output() passwordChanged = new EventEmitter<string>();
  @Output() usernameChanged = new EventEmitter<string>();
  @Output() loginButtonClicked = new EventEmitter<void>();
  @Input() errMessage: string | undefined;
  buttonColor: string = "var(--dark-blue)";
  buttonWidth: string = "85%";
  buttonMargin: string = "5px 4.5%";
  buttonSize: string = "40px";
  visible: boolean = true;
  visibleConfirm: boolean = true;
  forgotPassword: string = '';
  resetPassword: string = 'resetPW';
  createPassword: string = 'newPW';
  updatePassword: string = 'updPW';
  isUsernameInput: boolean = false;
  isPasswordInput: boolean = false;
  disableBtn: boolean = true;
  thirdForm: FormGroup;
  fourthForm: FormGroup;
  userEmail: string = '';
  userReg: Register = {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNo: '',
    position: '',
    positionCode: ''
  }; 
  popupTitle: string = '';
  popupContent: string = '';
  constructor(
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.thirdForm = new FormGroup({
      NewPassword: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required])
    }, {
      validators: [
        matchpassword,
        minimuminput,
        lowCase,
        upCase,
        oneDIgit,
        oneSymbol,
        charLen
      ]
    });

    this.fourthForm = new FormGroup({
      NewPassword: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required])
    }, {
      validators: [
        matchpassword,
        minimuminput,
        lowCase,
        upCase,
        oneDIgit,
        oneSymbol,
        charLen
      ]
    });
  }

  onEmailChange(email: Event) {
    const target = email.target as HTMLInputElement;
    this.emailChanged.emit(target.value);
  }

  onPasswordChange(password: Event) {
    const target = password.target as HTMLInputElement;
    if (!target.value) {
      this.isPasswordInput = false;
    } else {
      this.isPasswordInput = true;
    }
    this.onInputValidate();
    this.passwordChanged.emit(target.value);
  }

  onUsernameChange(username: Event) {
    const target = username.target as HTMLInputElement;
    if (!target.value) {
      this.isUsernameInput = false;
    } else {
      this.isUsernameInput = true;
    }
    this.onInputValidate();
    this.usernameChanged.emit(target.value);
  }

  onInputValidate() {
    if (!this.isUsernameInput || !this.isPasswordInput) {
      this.disableBtn = true;
    } else {
      this.disableBtn = false;
    }
  }

  openLoginTemplate(view: TemplateRef<Element>) {
    this.loginButtonClicked.emit();
    setTimeout(() => {
      let errElement = document.getElementById('errMessage') as HTMLElement;
      this.errMessage = String(errElement?.textContent);
        if(errElement) {
          this.popupTitle = 'Error'
          this.popupContent = this.errMessage;
          this.popupService.open(this.vcrLogin, view, this.options);
        } else {
          this.popupTitle = 'Success'
          this.popupContent = 'Successfully logged in.';
          this.popupService.open(this.vcrLogin, view, this.options);
          setTimeout(() => {
            if (errElement == undefined) {
              this.errMessage = '';
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>{
                this.router.navigate(['admin']);
              })
            }
          }, 1000);
        }
      }, 1500);
  }

  showPW() {
    this.visible = !this.visible;
  }

  changeVisibility(): string {
    return this.visible ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
  }

  changeType(): string {
    return this.visible ? 'password' : 'text';
  }

  showPWConfirm() {
    this.visibleConfirm = !this.visibleConfirm;
  }

  changeVisibilityConfirm(): string {
    return this.visibleConfirm ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
  }

  changeTypeConfirm(): string {
    return this.visibleConfirm ? 'password' : 'text';
  }

  openPopupTemplate1(view: TemplateRef<Element>) {
    this.popupService.open(this.vcrPassword, view, {
      animations: {
        popup: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '14rem',
      },
    });
  }

  options: PopupOptions = {
    animations: {
      popup: {
        enter: 'enter-slide-down 0.8s',
      },
      overlay: {
        enter: 'fade-in 0.8s',
        leave: 'fade-out 0.3s forwards',
      },
    },
    size: {
      width: '24rem',
    }
  }

  openPopupTemplate2(view: TemplateRef<Element>) {
    // email format: FirstName.MiddleName.LastName@lpstech.com
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    function generateString(length: number) {
      let result = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    let fullName = this.userEmail.match("^.*(?=@)");
    let rmvNameDots = fullName![0].split(".");
    let uName = fullName![0];
    let firstName = rmvNameDots![0];
    let lastName = rmvNameDots![2];
    if (rmvNameDots.length == 3) {
      uName = rmvNameDots[0].concat(rmvNameDots[2]);
    } else {
      uName = rmvNameDots[0].concat(rmvNameDots[1]);
      lastName = rmvNameDots![1];
    }
    this.userReg = {
      email: this.userEmail,
      username: uName,
      password: generateString(10),
      firstName: firstName,
      lastName: lastName,
      address: 'address',
      phoneNo: '09991234567',
      position: 'position',
      positionCode: 'positioncode'
    }
    this.loginService.addUserLogin(this.userReg).subscribe(
      (res: any) => {
        this.popupTitle = res.status.charAt(0).toUpperCase() + res.status.slice(1);
        if (res.status=='error') {
          this.userReg.password = '';
          this.popupContent = res.message;
        } else {
          this.popupContent = 'Successfully reset password.';
        }
        this.popupService.open(this.vcrReset, view, this.options);
      },
      (error: HttpErrorResponse) => {
        this.errMessage = error.statusText;
      }
    )
  }

  openPopupTemplate3(view: TemplateRef<Element>) {
    this.popupService.open(this.vcrCreate, view, this.options);
  }

  openPopupTemplate4(view: TemplateRef<Element>) {
    this.popupService.open(this.vcrUpdate, view, this.options);
  }

  close() {
    this.popupService.close();
  }

  openResetPass() {
    this.forgotPassword = this.resetPassword;
    this.close();
  }

  openCreatePass() {
    this.forgotPassword = this.createPassword;
    this.close();
  }

  openUpdatePass() {
    this.forgotPassword = this.updatePassword;
    this.close();
  }

  onInputNotMatchForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['passwordmatcherror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }

  onInputMinCharsForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['charlengtherror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }

  onInputNoUpcaseForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['caseuperror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }

  onInputNoLowCaseForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['caselowerror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }

  onInputNoNumForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['digiterror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }

  onInputNoSymbolForm3 = () => {
    let thirdFormError = this.thirdForm.errors?.['symbolerror'];
    let boolMatch = this.thirdForm.untouched
    return thirdFormError || boolMatch
  }


  onInputNotMatchForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['passwordmatcherror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  onInputMinCharsForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['charlengtherror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  onInputNoUpcaseForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['caseuperror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  onInputNoLowCaseForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['caselowerror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  onInputNoNumForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['digiterror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  onInputNoSymbolForm4 = () => {
    let fourthFormError = this.fourthForm.errors?.['symbolerror'];
    let boolMatch = this.fourthForm.untouched
    return fourthFormError || boolMatch
  }

  createPass() {
    console.log(this.thirdForm.value)
  }

  updatePass() {
    console.log(this.fourthForm.value)
  }
}