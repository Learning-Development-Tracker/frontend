import { Component, OnInit, Input, Output, EventEmitter, numberAttribute, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { AddTrainingModel } from '../../../../models/addtrainingmodel';
import { TrainingLinksModel } from '../../../../models/training-links-model';
import { HttpClient } from '@angular/common/http';
import { PopupComponent } from './add-more-training-popup';
import { ManageTrainingsComponent } from '../manage-trainings/manage-trainings.component';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';
import { ManageTrainingService } from '../../../../service/manage-training.service';

@Component({
  selector: 'add-edit-training-popup',
  standalone: true,
  imports: [FormsModule, CommonModule, TableComponent, PopupComponent, ManageTrainingsComponent, DialogBoxComponent],
  templateUrl: './add-edit-training.html',
  styleUrl: './add-edit-training.css'
})

export class AddEditTrainingComponent implements OnInit{
  @Input() isPopupVisible: boolean = false;
  @Input() isAddMorePopupVisible: boolean = false;
  @Input() trainingDetails!: AddTrainingModel;
  @Output() saveTraining = new EventEmitter<AddTrainingModel>();
  @Output() close = new EventEmitter<void>();
  @Output() closeAddMore = new EventEmitter<void>();
  @Output() trainingLinksListsChange = new EventEmitter<TrainingLinksModel[]>();
  @Output() addMoreClicked = new EventEmitter<string>();

  isOpen: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  selectedTags: string[] = [];
  selectedTag: string | null = null;
  availableTags: string[] = ['Admin', 'Developer', 'Solutions Developer', 'Front End Developer', 'Full Stack Developer', 'Database Admin'];
  trainingLinksLists: TrainingLinksModel[] = [];

  constructor(private manageTrainingService: ManageTrainingService, private httpClient: HttpClient) { 
  }

  ngOnInit() {
    console.log("Training Details", this.trainingDetails);
    this.selectedTags = this.trainingDetails.trainingTags ? this.trainingDetails.trainingTags.split(',') : [];
  }

  addTag() {
    if (this.selectedTag && !this.selectedTags.includes(this.selectedTag)) {
      // Add the selected tag
      this.selectedTags.push(this.selectedTag);
      // Update trainingTags property with comma-separated tags
      this.trainingDetails.trainingTags = this.selectedTags.join(', ');
    }
  }

  removeTag(tagToRemove: string) {
    // Remove the tag from the selected tags array
    this.selectedTags = this.selectedTags.filter(tag => tag !== tagToRemove);
    // Update trainingTags property with comma-separated tags
    this.trainingDetails.trainingTags = this.selectedTags.join(', ');
  }

  showPopup() {
    this.isPopupVisible = true;
    this.close.emit();
  }

  closePopup() {
    this.isPopupVisible = false;
    this.close.emit();
  }

  initializeTrainingDetails() {
    this.trainingDetails = new AddTrainingModel();
    this.selectedTags = []; // Reset selected tags

  }

  onSaveClick(){
    console.log("Training details before save:", this.trainingDetails);
    this.isOpen = true;
  }

  onCloseClick(){
    this.isOpen = false;
    this.isSuccess = false;
    this.isError = false;
  }

  proceedSave() {
    if (!this.isValidTraining(this.trainingDetails)) {
        console.log('Please fill in the required fields.');
        this.isError = true;
        return;
    } else {
        console.log('Training details before adding', this.trainingDetails);
        console.log('Training details are valid. Adding training...');
        this.addTraining(this.trainingDetails);
        this.isSuccess = true;
    }
  }

  addTraining(trainingDetails: AddTrainingModel) {
    this.manageTrainingService.addTraining(this.trainingDetails)
      .subscribe(
        (response) => {
          console.log('Training added successfully:', response);
          this.closePopup();
          this.initializeTrainingDetails();
        },
        (error) => {
          console.error('Failed to add training:', error);
        }
      );
  }

  isValidTraining(trainingDetails: AddTrainingModel): boolean {
    return (
      trainingDetails.trainingName?.trim() !== '' &&
      trainingDetails.trainingType?.trim() !== '' &&
      trainingDetails.productName?.trim() !== '' &&
      trainingDetails.startDate !== undefined && // Ensure startDate is not undefined
      trainingDetails.dueDate !== undefined && // Ensure dueDate is not undefined
      this.isValidDate(trainingDetails.startDate) && // Validate startDate
      this.isValidDate(trainingDetails.dueDate) &&// Validate dueDate
      trainingDetails.description?.trim() !== '' 
    );
  }

  private isValidDate(dateString: any): boolean {
    //Check if date input is valid
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  onaddMoreClicked() {
    this.trainingDetails.trainingId = this.trainingDetails.id;
    this.isAddMorePopupVisible = true;
    if (this.trainingDetails.id != null) {
      console.log ("Current Training ID:", this.trainingDetails.id);
      this.addMoreClicked.emit(this.trainingDetails.id);
    }
  }

  closeAddMorePopup(): void {
    this.isAddMorePopupVisible = false;
  }
}