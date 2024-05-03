import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { SortEvent } from 'primeng/api';
import { TabViewComponent } from '../../../../shared/components/tab-view/tab-view.component';
import { ViewSkillsetComponent } from './resource-details/view-skillset/view-skillset.component';
import { ViewPersonalInfoComponent } from './resource-details/view-personal-info/view-personal-info.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { CustomBottonComponent } from './../../../../shared/components/custom-button/custom-button.component';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
// import { ContentCardComponent } from './manage-resources.component';
import { ManageResourcesService } from '../../../../service/manage-resources.service';
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";


@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [CardModule, ProgressBarModule, TabViewModule, TabViewComponent, ViewSkillsetComponent, 
    ViewPersonalInfoComponent,ResourceDetailsComponent,CustomBottonComponent, CommonModule, TableComponent, 
    FormsModule, BadgeModule ],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  providers: [ManageResourcesService]
})
export class ManageResourcesComponent implements OnInit{
  filteredData: any[] = [];
  resourceList: any[] = [];
  tableColumn: any[] = [];
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  isResource: boolean = false;
  
  constructor(
    private router: Router,
    private manageResourcesService: ManageResourcesService,
  ) { }
  private ngUnsubscribe: Subject<any> = new Subject();
  
  ngOnInit(): void {
   
    this.getResources();

    this.resourceList = [];
  
    this.tableColumn = [
      { header: 'Name', field: 'membername' },
      { header: 'Employee #', field: 'employeeNum' },
      { header: 'Role', field: 'roleName' },
      { header: 'Team', field: 'teamName' },
      { header: 'Trainings', field: 'memberTrainings' },
      { header: 'Certifications', field: 'certifications' },
      { header: 'Actions', field: 'actions' }
    ];

    this.filteredData = this.resourceList;

  }

  onSort(event: SortEvent){
    console.log('Sorting event: ', event);
  }

  onView(item: any){
    item = this.resourceDtl()
  }

  onEdit(item: any){
    console.log('Edit item: ', item)
  }

  onDelete(item: any){
    console.log('Delete Item: ', item)
  }

  onSearchChange(value: string) {
     
     this.filteredData = this.resourceList.filter(item => item.trainingTitle.toLowerCase().includes(value.toLowerCase()));
  }

  resourceDtl(){
    this.isResource=true;
  }

  getResources(){
    this.manageResourcesService.getResources().pipe(
      takeUntil(this.ngUnsubscribe)
    ).subscribe((resp) => {
      if (resp.status == 'SUCCESS') {
        console.log("resp",resp);
        //this.resourceList = resp.data;
        resp.data.forEach((item: any) => {
          let resList = 
            { membername: item.membername,
              employeeNum: item.employeeNum,
              roleName: item.roleName,
              teamName: item.teamName,
              memberTrainings: item.trainings,
              certifications: item.certifications
            };
            this.resourceList.push(resList);
        });
      }
    }, (error: any) => {
      
    });
  }
  
}
