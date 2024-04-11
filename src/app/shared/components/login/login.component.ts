import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomBottonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomBottonComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() emailChanged = new EventEmitter<string>();
  @Output() passwordChanged = new EventEmitter<string>();
  @Output() usernameChanged = new EventEmitter<string>();
  @Output() loginButtonClicked = new EventEmitter<void>();
  @Input() errMessage: string | undefined;
  buttonColor: string = "var(--black)";
  width: string = "90%";
  visible: boolean = true;  

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

  loginClick(){
    this.loginButtonClicked.emit();
  }

  showPW() {
    this.visible = !this.visible;
  }

  changeVisibility(): string {
    return this.visible ?  'fa-regular fa-eye-slash': 'fa-regular fa-eye';
  }

  changeType(): string {
    return this.visible ? 'password' : 'text';
  }

}