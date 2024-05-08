// popup.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AddTrainingModel } from '../../../../models/addtrainingmodel';
import { AddEditTrainingComponent } from './add-edit-training';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  imports: [AddEditTrainingComponent, CommonModule],
  standalone: true,
  templateUrl: './add-more-training-popup.html',
  styleUrls: ['./add-more-training-popup.css']
})
export class PopupComponent {
  @Input() isAddMorePopupVisible: boolean = false;
  @Output() save = new EventEmitter<AddTrainingModel>();
  @Output() close = new EventEmitter<void>();
  textBoxes: string[] = [];

  addTextBox() {
    this.textBoxes.push('');
  }
  trainingDetails: AddTrainingModel = new AddTrainingModel();

  constructor() { }

  onSave(): void {
    // // Perform any validation or additional processing here
    // this.save.emit(this.trainingDetails);
    // this.closePopup();
  }

  closeAddMorePopup() {
    this.isAddMorePopupVisible = false;
    this.close.emit();
  }
}
