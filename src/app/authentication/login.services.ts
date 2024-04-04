import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.services';

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
}