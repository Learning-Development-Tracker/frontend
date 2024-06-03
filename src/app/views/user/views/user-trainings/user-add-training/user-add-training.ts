import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTrainingsComponent } from '../user-trainings.component';
import { AddTrainingModel } from '../../../../../models/addtrainingmodel';
import { ManageTrainingService } from '../../../../../service/manage-training.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-add-training-popup',
  standalone: true,
  imports: [CommonModule, FormsModule, UserTrainingsComponent],
  templateUrl: './user-add-training.html',
  styleUrls: ['./user-add-training.css']
})
export class UserAddTrainingsComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() trainingDetails!: AddTrainingModel;
  @Input() isAddTrainingVisible: boolean = false;

  trainingList: AddTrainingModel[] = [];
  public errMessage: string | null = null;

  searchCriteria: {
    trainingName: string;
    skillName: string;
    startDate: string | null;
    endDate: string | null;
  } = {
    trainingName: '',
    skillName: '',
    startDate: null,
    endDate: null
  };

  constructor(private manageTrainingService: ManageTrainingService, private httpClient: HttpClient) { }

  ngOnInit(): void { 
  }

  closePopup(): void {
    this.isAddTrainingVisible = false;
    this.close.emit();
  }

  Search(): void {
    console.log("Search Criteria: ", this.searchCriteria);
    this.searchTraining(this.searchCriteria);
  }

  searchTraining(searchCriteria: { trainingName: string; skillName: string; startDate: string | null; endDate: string | null; }) {
    this.manageTrainingService.searchTrainingbyCriteria(searchCriteria)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
        },
        (error) => {
          console.error('Failed to add training:', error);
        }
      );
  }
}
