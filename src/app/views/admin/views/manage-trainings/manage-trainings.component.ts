
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { CustomBottonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ManageTrainingService } from '../../../../service/manage-training.service';
import { trainingsModel } from '../../../../models/trainings.model';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';
import {  ViewTrainingsComponent } from '../view-trainings/view-trainings.component';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AddEditTrainingComponent } from '../add-edit-trainings/add-edit-training';


@Component({
  selector: 'app-manage-trainings',
  standalone: true,
  imports: [TableComponent, CustomBottonComponent, DialogBoxComponent, ViewTrainingsComponent, CommonModule, CardModule, AddEditTrainingComponent],
  templateUrl: './manage-trainings.component.html',
  styleUrl: './manage-trainings.component.css',
  providers: [ManageTrainingService]
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
  selectedId: string = "";
  isPopupVisible: boolean = false;

  constructor(private manageTrainingService: ManageTrainingService,
  ) { }

  ngOnInit(): void {
    this.getTraining();
    this.tableColumn = [
      { header: 'Name', field: 'trainingName' },
      { header: 'Total Hours', field: 'duration' },
      { header: 'Type', field: 'trainingType' },
      { header: 'Actions', field: 'actions' }
    ];

    this.filteredData = this.trainingList;
  }

  getTraining() {
    this.manageTrainingService.getTrainingList()
    .subscribe((res: any) => {
      this.errMessage="";
      this.trainingList = res.data;
      console.log(this.trainingList, "<<<<<< RES")
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

  onEdit(item: any){
    console.log('Edit item: ', item)
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

  deleteTraining(selectedId: string){
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
    console.log("true");
  }
 
}

  