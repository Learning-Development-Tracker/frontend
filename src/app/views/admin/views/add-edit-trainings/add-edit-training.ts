import { Component, OnInit, Input, Output, EventEmitter, numberAttribute, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { AddTrainingModel } from '../../../../models/addtrainingmodel';
import { HttpClient } from '@angular/common/http';
import { ManageTrainingService } from '../../../../service/manage-training.service';
import { PopupComponent } from './add-more-training-popup';
import { ManageTrainingsComponent } from '../manage-trainings/manage-trainings.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'add-edit-training-popup',
  standalone: true,
  imports: [FormsModule, CommonModule, TableComponent, PopupComponent, ManageTrainingsComponent],
  templateUrl: './add-edit-training.html',
  styleUrl: './add-edit-training.css'
})
export class AddEditTrainingComponent implements OnInit{
  @Input() isPopupVisible: boolean = false;
  @Input() isAddMorePopupVisible: boolean = false;
  @Input() trainingDetails !: AddTrainingModel;
  @Output() saveTraining = new EventEmitter<AddTrainingModel>();
  @Output() close = new EventEmitter<void>();
  @Output() closeAddMore = new EventEmitter<void>();

  constructor(private manageTrainingService: ManageTrainingService, private httpClient: HttpClient) { 
  }
  
  ngOnInit() {
    console.log("Selected Item", this.trainingDetails);
    // this.trainingDtl = this.trainingDetails
  }

  closePopup() {
    this.isPopupVisible = false;
    this.close.emit();
  }

  closeAddMorePopup() {
    this.isAddMorePopupVisible = false;
    this.closeAddMore.emit();
  }

  onSave() {
    console.log(this.trainingDetails);
    if (!this.isValidTraining(this.trainingDetails)) {
      console.log('Please fill in the required fields.');
      return;
    } else {

    // if (this.trainingDetails.id) {
    //   // If trainingDetails has an id, it means we're editing an existing training
    //   this.editTraining(this.trainingDetails);
    // } else {
      // If trainingDetails doesn't have an id, it means we're adding a new training
      this.addTraining(this.trainingDetails);
      this.closePopup();
    }
  }

  // addTraining(trainingDetails: AddTrainingModel) {
  //   this.httpClient.post('/api/v1/trainings/addTraining', this.trainingDetails)
  //     .subscribe(
  //       (response) => {
  //         console.log('Training details added successfully:', response);
  //         this.isPopupVisible = false;
  //         this.saveTraining.emit(this.trainingDetails);
  //       },
  //       (error) => {
  //         console.error('Error occurred while adding training details:', error);
  //       }
  //     );
  // }

  addTraining(trainingDetails: AddTrainingModel) {
		return this.httpClient
			.post('/api/v1/trainings/addTraining', JSON.stringify(trainingDetails), {
				responseType: 'text'
			})
			.pipe(
				map(
					(result) => {
						return result;
					},
					(err: { Message: any }) => {
						console.log(err.Message);
					}
				)
			);
	}

  // editTraining(trainingDetails: AddTrainingModel) {
  //   this.httpClient.post(`/api/v1/trainings/editTraining/${this.trainingDetails.id}`, this.trainingDetails)
  //     .subscribe(
  //       (response) => {
  //         console.log('Training details updated successfully:', response);
  //         this.isPopupVisible = false;
  //         this.saveTraining.emit(this.trainingDetails);
  //       },
  //       (error) => {
  //         console.error('Error occurred while updating training details:', error);
  //       }
  //     );
  // }

  isValidTraining(trainingDetails: AddTrainingModel): boolean {
    return (
      trainingDetails.trainingname?.trim() !== '' &&
      trainingDetails.trainingtype?.trim() !== '' &&
      trainingDetails.productname?.trim() !== '' &&
      trainingDetails.startdate !== undefined && // Ensure startDate is not undefined
      trainingDetails.duedate !== undefined && // Ensure dueDate is not undefined
      this.isValidDate(trainingDetails.startdate) && // Validate startDate
      this.isValidDate(trainingDetails.duedate) &&// Validate dueDate
      trainingDetails.description?.trim() !== '' 
    );
  }

  private isValidDate(dateString: any): boolean {
    //Check if date input is valid
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  // private isRadioSelected(trainingDetails: AddTrainingModel): boolean {
  //   // Check if at least one radio button is selected
  //   const radio1Selected = !!trainingDetails.radio1;
  //   const radio2Selected = !!trainingDetails.radio2;
  //   const radio3Selected = !!trainingDetails.radio3;
  
  //   // Check if associated input values are provided when their respective radio buttons are selected
  //   const radio1Valid = !radio1Selected || (radio1Selected && typeof trainingDetails.radio1value === 'number');
  //   const radio2Valid = !radio2Selected || (radio2Selected && typeof trainingDetails.radio2value === 'number');
  
  //   return radio1Selected || radio2Selected || radio3Selected && radio1Valid && radio2Valid;
  // }

  addMoreClicked() {
    // Toggle Add More Training Links
    this.isAddMorePopupVisible = true;
  }
}