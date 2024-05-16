import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ConfigService } from '../../../authentication/config.services';
import { Register } from '../../../models/register';
import { AccessLevel } from '../../constants/access-level';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient = inject(HttpClient);
  readonly JWT_TOKEN = 'JWT_TOKEN';
  readonly USER_NAME = 'USER_NAME';
  readonly ACCESS_LEVEL = 'ACCESS_LEVEL';
  constructor(
    private configService: ConfigService,
    private router: Router) {
  }

  login(username: string, password: string) {
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/login", { username, password });
  }
  
  addUserLogin(login :Register){
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/register", login);
  }
  
  changePassword(username: string, password: string) {
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/reset", { username, password });
  }

  isExistUsername(username: string) {
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/exist-username", { username })
  }

  public isLoggedIn() {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  public getUsername() {
    return localStorage.getItem(this.USER_NAME);
  }

  public getAccessLevel() {
    return localStorage.getItem(this.ACCESS_LEVEL);
  }

  public storeJwtToken(jwt: any) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public storeUsername(username: any) {
    localStorage.setItem(this.USER_NAME, username);
  }
  
  public storeAccLevel(acessName: any) {
    localStorage.setItem(this.ACCESS_LEVEL, acessName);
  }

  public deleteUsername() {
    localStorage.removeItem(this.USER_NAME);
  }

  public deleteJwtToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  public deleteAccLevel() {
    localStorage.removeItem(this.ACCESS_LEVEL);
  }

  public isTokenExpired() {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if(!token) return true;
    const access_token = JSON.parse(token);
    const decoded = jwtDecode(access_token);
    if (!decoded.exp) return true;
    const expirationDate = decoded.exp * 1000;
    const now = new Date().getTime();
    return expirationDate < now;
  }

  public logout() {
    this.deleteJwtToken();
    this.refreshPage('/login');
  }
  
  public refreshPage(route: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>{
      this.router.navigate([route])
      .then(() => {
        window.location.reload();
      });
    });  
  }

  public findHomePagebyRole(accessRole: string) {
    if (accessRole == AccessLevel.ADMIN) {
      this.router.navigate(['/admin-dashboard']);  
    } else if (accessRole == AccessLevel.USER) {
      this.router.navigate(['/user-profile'])
    } else {
      this.router.navigate(['/approver-profile'])
    }
  }

  public refreshHome(accessRole: string) {
    if (accessRole == AccessLevel.ADMIN) {
      this.refreshPage('/admin-dashboard');  
    } else if (accessRole == AccessLevel.USER) {
      this.refreshPage('/user-profile')
    } else {
      this.refreshPage('/approver-profile')
    }
  }
}