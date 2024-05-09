
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CustomBottonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ManageTrainingService } from '../../../../service/manage-training.service';
import { trainingsModel } from '../../../../models/trainings.model';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';
import {  ViewTrainingsComponent } from '../view-trainings/view-trainings.component';
import { CommonModule } from '@angular/common';
import { AddEditTrainingComponent } from '../add-edit-trainings/add-edit-training';
import { AddTrainingModel } from '../../../../models/addtrainingmodel';


@Component({
  selector: 'app-manage-trainings',
  standalone: true,
  imports: [TableComponent, CustomBottonComponent, DialogBoxComponent, ViewTrainingsComponent, CommonModule, AddEditTrainingComponent],
  templateUrl: './manage-trainings.component.html',
  styleUrl: './manage-trainings.component.css'
})

export class ManageTrainingsComponent implements OnInit {
  filteredData: any[] = [];
  trainingsObj: any[] = [];
  trainingList: any[] = [];
  tableColumn: any[] = [];  
  isOpen: boolean = false;
  isSuccess: boolean = false;
  viewData: any[] = [];
  public errMessage: any;
  showViewManage: boolean = true;
  selectedId: number = 0;
  isPopupVisible: boolean = false;
  showEdit: boolean = true;
  selectedTraining: AddTrainingModel = new AddTrainingModel();

  constructor(private manageTrainingService: ManageTrainingService,
  ) { }

  ngOnInit(): void {
    this.getTraining();
    this.tableColumn = [
      { header: 'Name', field: 'trainingname' },
      { header: 'Total Hours', field: 'duration' },
      { header: 'Type', field: 'trainingtype' },
      { header: 'Actions', field: 'actions' }
    ];

    this.filteredData = this.trainingList;
  }

  getTraining() {
    this.manageTrainingService.getTrainingList()
    .subscribe((res: any) => {
      this.errMessage="";
      this.trainingList = res.data;
      // console.log(this.trainingList, "<<<<<< RES")
    }, err => {
      this.errMessage = err.error;
      console.log(err, "<<<<< ERROR")
    });
  }

  onSort(event: SortEvent){
    console.log('Sorting event: ', event);
  }

  onSort2(event: any){
    console.log('Sorting event2: ', event);
  }

  onView(rowData: any){
    console.log('View Item: ', rowData);
    this.viewData = rowData;
    this.toggleShowViewTraining();   
  }

  onEdit(rowData: AddTrainingModel){
    this.selectedTraining = rowData;
    console.log('Selected Training:', this.selectedTraining); // Add this line to check selectedTraining
    this.showPopup();
  }

  onDelete(rowData: any) {
    // console.log('Delete item: ', rowData);
    this.selectedId = rowData.id;
    this.isOpen = true;
    
  }

  onSearchChange(value: string) {  
    this.filteredData = this.trainingList.filter(item => item.trainingName.toLowerCase().includes(value.toLowerCase()));
  }   
 

  toggleShowViewTraining() {
    this.showViewManage = !this.showViewManage;
    // this.showViewTrainingDtl = !this.showViewTrainingDtl;  
    // console.log('this.showViewManage', this.showViewManage);
    // console.log('this.showViewTrainingDtl', this.showViewTrainingDtl);
  }

    
  proceedDelete() {
  this.deleteTraining(this.selectedId);
  }

  deleteTraining(selectedId: number){
    this.manageTrainingService.deleteTraining(selectedId).subscribe(
      () => {
          this.getTraining();
          this.isSuccess = true;
      },
      (error) => {
        console.error('Error deleting record:', error);
      }
    );
  } 

  onCloseClick() {
    this.isOpen = false;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  showEditTraining() {
    this.showEdit = !this.showEdit;
  }
 
}

  

