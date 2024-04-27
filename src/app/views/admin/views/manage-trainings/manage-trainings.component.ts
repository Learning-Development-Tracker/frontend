
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TagModule } from "primeng/tag";
import { CustomBottonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ManageTrainingService } from '../../../../service/manage-training.service';
import { trainingsModel } from '../../../../models/trainings.model';


@Component({
  selector: 'app-manage-trainings',
  standalone: true,
  imports: [TableComponent, CustomBottonComponent],
  templateUrl: './manage-trainings.component.html',
  styleUrl: './manage-trainings.component.css'
})
export class ManageTrainingsComponent implements OnInit {
  filteredData: any[] = [];
  trainingsObj: any[] = [];
  trainingList: any[] = [];
  tableColumn: any[] = [];
  public errMessage: any;

  constructor(private manageTrainingService: ManageTrainingService,
  ) { }

  ngOnInit(): void {
    this.getTraining();
    this.tableColumn = [
      { header: 'Name', field: 'trainingName' },
      { header: 'Total Hours', field: 'duration' },
      { header: 'Type', field: 'typeCert' },
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

  onView(item: any){
    console.log('View Item: ', item)
  }

  onEdit(item: any){
    console.log('Edit item: ', item)
  }

  onDelete(item: any){
    console.log('Delete Item: ', item)
  }

  onSearchChange(value: string) {  
    this.filteredData = this.trainingList.filter(item => item.trainingName.toLowerCase().includes(value.toLowerCase()));
  }
  
  
}
