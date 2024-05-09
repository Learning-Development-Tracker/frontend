import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../authentication/config.services';

@Injectable({
  providedIn: 'root'
})
export class ManageTrainingService {
    private baseUrl = '/api/v1/trainings'; // Replace with your actual backend API URL

  
    httpClient = inject(HttpClient);
    constructor(private configService: ConfigService) {}

    getTrainingList(){
        return this.httpClient.get(this.configService.apiUrl + this.baseUrl + "/getTrainingList", {  });
    }

    deleteTraining(id: string){
        return this.httpClient.delete(this.configService.apiUrl + this.baseUrl + "/deleteTraining/" + id);
    }

}