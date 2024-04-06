import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../shared/components/login/login.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';
import { LoginService } from '../../authentication/login.services';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [LoginComponent, FooterComponent, CustomBottonComponent, HttpClientModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{

  public errMessage: any;

  loginObj: LoginModel = new LoginModel();

  constructor(private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.errMessage = "";
  }

  onEmailChanged(email: string) {
    this.loginObj.email = email;
  }

  onUsernameChanged(username: string) {
    this.loginObj.username = username;
  }

  onPasswordChanged(password: string) {
    this.loginObj.password = password;
  }

  onLoginClick() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>{
      this.router.navigate(['admin']);
    })
    console.log("Email", this.loginObj);
    this.loginService.login(this.loginObj.email, this.loginObj.username, this.loginObj.password)
      .subscribe((res: any) => {
        this.errMessage="";
        console.log(res, "<<<<<< RES")
      }, err => {
        this.errMessage = err.error;
        console.log(err, "<<<<< ERROR")
      });
  }
}

export class LoginModel {
  email: string;
  username: string;
  password: string;

  constructor() {
    this.email = "";
    this.username = "";
    this.password = "";
  }
}