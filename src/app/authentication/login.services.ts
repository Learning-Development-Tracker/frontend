import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.services';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient = inject(HttpClient);
  constructor(private configService: ConfigService) {
  }
  login(email: string, username: string, password: string) {
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/login", { email, username, password });
  }
  
  addUserLogin(login :Register){
    return this.httpClient.post(this.configService.apiUrl + "/api/v1/authentication/register", login);
  }
}