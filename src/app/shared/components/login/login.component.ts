import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomBottonComponent } from '../custom-button/custom-button.component';
import { ModalService } from '../modal/modal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalOptions } from '../modal/modal-options';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomBottonComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('vcrPass', { static: true, read: ViewContainerRef })
  vcrPassword!: ViewContainerRef;
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

  constructor(private modalService: ModalService) { }

  onEmailChange(email: Event) {
    const target = email.target as HTMLInputElement;
    this.emailChanged.emit(target.value);
  }

  onPasswordChange(password: Event) {
    const target = password.target as HTMLInputElement;
    this.passwordChanged.emit(target.value);
  }

  onUsernameChange(username: Event) {
    this.errMessage = "Invalid username and/or password";
    const target = username.target as HTMLInputElement;
    this.usernameChanged.emit(target.value);
  }

  loginClick() {
    this.loginButtonClicked.emit();
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

  openModalTemplate1(view: TemplateRef<Element>) {
    this.modalService.open(this.vcrPassword, view, {
      animations: {
        modal: {
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

 options:ModalOptions = {
  animations: {
    modal: {
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

openModalTemplate2(view: TemplateRef<Element>) {
  this.modalService.open(this.vcrReset, view, this.options);
}

openModalTemplate3(view: TemplateRef<Element>) {
  this.modalService.open(this.vcrCreate, view, this.options);
}

openModalTemplate4(view: TemplateRef<Element>) {
  this.modalService.open(this.vcrUpdate, view, this.options);
}

close() {
  this.modalService.close();
}

resetPass() {
  this.forgotPassword = this.resetPassword;
  this.close();
}

createPass() {
  this.forgotPassword = this.createPassword;
  this.close();
}

updatePass() {
  this.forgotPassword = this.updatePassword;
  this.close();
}
}