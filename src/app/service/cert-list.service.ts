import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../authentication/config.services';
import { concatMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ManageCertListService {
      private baseUrl = '/api/v1/resources'; // Replace with your actual backend API URL
  
    
      httpClient = inject(HttpClient);
      constructor(private configService: ConfigService) {}

    getCertificationList() {
      return this.httpClient.get(this.configService.apiUrl + this.baseUrl + "/getCertList/", {});
    }

    getCertPerCertName() {
      return this.httpClient.get(this.configService.apiUrl + this.baseUrl + "/getCertPerCertName/", {});
    }

    getCertPerTeam() {
      return this.httpClient.get(this.configService.apiUrl + this.baseUrl + "/getCertPerTeam/", {});
    }

    getCertPerMemberId(id: string) {
      return this.httpClient.get(this.configService.apiUrl + this.baseUrl + "/getCertPerMemberId/"+ id);
    }

}
