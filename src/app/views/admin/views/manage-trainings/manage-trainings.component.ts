
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TagModule } from "primeng/tag";
import { CustomBottonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { TableComponent } from '../../../../shared/components/table/table.component';


@Component({
  selector: 'app-manage-trainings',
  standalone: true,
  imports: [TableComponent, CustomBottonComponent],
  templateUrl: './manage-trainings.component.html',
  styleUrl: './manage-trainings.component.css'
})
export class ManageTrainingsComponent implements OnInit {
  filteredData: any[] = [];
  trainingList: any[] = [];
  tableColumn: any[] = [];
  

  ngOnInit(): void {

    this.trainingList = [
      { trainingId: 1, trainingTitle: 'Introduction to JavaScript', trainingTotalHrs: 10, trainingType: 'Online' },
      { trainingId: 2, trainingTitle: 'Advanced React Development', trainingTotalHrs: 20, trainingType: 'In-person' },
      { trainingId: 3, trainingTitle: 'Python for Data Science', trainingTotalHrs: 15, trainingType: 'Online' },
      { trainingId: 4, trainingTitle: 'Java Fundamentals', trainingTotalHrs: 12, trainingType: 'Online' },
      { trainingId: 5, trainingTitle: 'Introduction to Angular', trainingTotalHrs: 18, trainingType: 'In-person' },
      { trainingId: 6, trainingTitle: 'Web Development Bootcamp', trainingTotalHrs: 30, trainingType: 'Online' },
      { trainingId: 7, trainingTitle: 'Data Structures and Algorithms', trainingTotalHrs: 25, trainingType: 'In-person' },
      { trainingId: 8, trainingTitle: 'Machine Learning Basics', trainingTotalHrs: 20, trainingType: 'Online' },
      { trainingId: 9, trainingTitle: 'React Native Essentials', trainingTotalHrs: 22, trainingType: 'In-person' },
      { trainingId: 10, trainingTitle: 'Introduction to TypeScript', trainingTotalHrs: 8, trainingType: 'Online' },
      { trainingId: 11, trainingTitle: 'Node.js for Backend Development', trainingTotalHrs: 15, trainingType: 'Online' },
      { trainingId: 12, trainingTitle: 'Vue.js Fundamentals', trainingTotalHrs: 12, trainingType: 'In-person' },
      { trainingId: 13, trainingTitle: 'Artificial Intelligence Basics', trainingTotalHrs: 20, trainingType: 'Online' },
      { trainingId: 14, trainingTitle: 'Cybersecurity Essentials', trainingTotalHrs: 18, trainingType: 'In-person' },
      { trainingId: 15, trainingTitle: 'Docker Fundamentals', trainingTotalHrs: 10, trainingType: 'Online' },
      { trainingId: 16, trainingTitle: 'GraphQL Basics', trainingTotalHrs: 15, trainingType: 'Online' },
      { trainingId: 17, trainingTitle: 'Amazon Web Services (AWS) Foundations', trainingTotalHrs: 20, trainingType: 'In-person' },
      { trainingId: 18, trainingTitle: 'SQL Database Management', trainingTotalHrs: 12, trainingType: 'Online' },
      { trainingId: 19, trainingTitle: 'Responsive Web Design', trainingTotalHrs: 15, trainingType: 'Online' },
      { trainingId: 20, trainingTitle: 'Android App Development', trainingTotalHrs: 25, trainingType: 'In-person' }
    ];
  
    this.tableColumn = [
      { header: 'Name', field: 'trainingTitle' },
      { header: 'Total Hours', field: 'trainingTotalHrs' },
      { header: 'Type', field: 'trainingType' },
      { header: 'Actions', field: 'actions' }
    ];

    this.filteredData = this.trainingList;
  }

  
    

  onSort(event: SortEvent){
    console.log('Sorting event: ', event);
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
     
     this.filteredData = this.trainingList.filter(item => item.trainingTitle.toLowerCase().includes(value.toLowerCase()));
  }
  
  
}
