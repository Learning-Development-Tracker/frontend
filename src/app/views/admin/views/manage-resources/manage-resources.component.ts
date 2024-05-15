import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
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
import { AddResourceService } from '../../../../service/add-resource.service';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';


@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [CardModule, ProgressBarModule, TabViewModule, TabViewComponent, ViewSkillsetComponent, 
    ViewPersonalInfoComponent,ResourceDetailsComponent,CustomBottonComponent, CommonModule, TableComponent, 
    FormsModule, BadgeModule, AddUserFormComponent ],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
  providers: [ManageResourcesService]
})
export class ManageResourcesComponent implements OnInit{
  @ViewChild(ResourceDetailsComponent)
  filteredData: any[] = [];
  resourceList: any[] = [];
  tableColumn: any[] = [];
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  isResource: boolean = false;
  selectedMemberDtl: any = {};
  isOpen: boolean = false;
  action: string = '';
  
  constructor(
    private router: Router,
    private manageResourcesService: ManageResourcesService,
    private addResourceService: AddResourceService
  ) { }
  private ngUnsubscribe: Subject<any> = new Subject();
  
  public resourceInfos = {
    lastname: '',
    firstname: '',
    middlename: '',
    suffix: '',
    gender: '',
    emailAddress: '',
    careerStep: '',
    empId: '',
    region: '',
    role: '',
    team: '',
    status: '',
    skills:''
  }

  public resourceCertifications: [] = [];

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

  onView(rowData: any){
    console.log('View Item: ', rowData); 
    this.resourceDtl()
    this.selectedMemberDtl = rowData;
    console.log('View selectedMemberDtl: ', this.selectedMemberDtl); 
  }

  onEdit(item: any){
    this.action = 'edit'
    console.log('Edit item: ', item)
    this.isOpen = true;
    console.log(this.isOpen, "heree")
     this.addResourceService.viewResource(item.memberId)
    .subscribe((res: any) => {
      console.log(res, "<<<<<< RES")
      delete res.data['password'];
      delete res.data['certifications'];
      this.resourceInfos = res
    }, err => {
      console.log(err, "<<<<< ERROR")
    });

    this.addResourceService.viewResourceCertification(item.employeeNum)
    .subscribe((res: any) => {
      console.log(res, "<<<<<< RES")
      this.resourceCertifications = res
    }, err => {
      console.log(err, "<<<<< ERROR")
    });
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
    var cert = [];
    this.addResourceService.getAllResource()
    .subscribe((res: any) => {
      this.resourceList=[]
      console.log(res, "<<<<<< RES")
      res.forEach((item: any) => {
        let _certifications:any=[]
        this.addResourceService.viewResourceCertification(item.empId)
        .subscribe((res: any) => {
          console.log(res, "<<<<<< res certs")
          res.data.map((cert:any) => _certifications.push(cert.certificationName))
          
        }, err => {
          console.log(err, "<<<<< ERROR")
        });
              let resList = 
                { memberId: item.id,
                  membername: `${item.firstname} ${item.middlename} ${item.lastname}`,
                  employeeNum: item.empId,
                  roleName: item.role,
                  teamName: item.team,
                  memberTrainings: '5 of 5',
                  certifications: _certifications
                };
                this.resourceList.push(resList);
              });
    }, err => {
      console.log(err, "<<<<< ERROR")
    });
    // this.manageResourcesService.getResources().pipe(
    //   takeUntil(this.ngUnsubscribe)
    // ).subscribe((resp) => {
    //   if (resp.status == 'SUCCESS') {
    //     console.log("resp",resp);
    //     //this.resourceList = resp.data;
    //     resp.data.forEach((item: any) => {
    //       let resList = 
    //         { memberId: item.memberId,
    //           membername: item.membername,
    //           employeeNum: item.employeeNum,
    //           roleName: item.roleName,
    //           teamName: item.teamName,
    //           memberTrainings: item.trainings,
    //           certifications: [item.certifications]
    //         };
    //         this.resourceList.push(resList);
    //     });
    //   }
    // }, (error: any) => {
      
    // });
  }

  onOpenClick() {
    this.isOpen = true;
    // this.addResourceService.viewResource(202)
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   delete res.data['password'];
    //   delete res.data['certifications'];
    //   this.resourceInfos = res
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });

    // this.addResourceService.viewResourceCertification('82010603')
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   this.resourceCertifications = res
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });
  }

  onCloseClick() {
    this.isOpen = false;
  }
  
  isOpenChange(event: any){
    console.log(event, "<<<<<<< event")
    this.isOpen = false;
    this.getResources();
    // this.addResourceService.getAllResource()
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   this.resourceList=[]
    //   res.forEach((item: any) => {
    //           let resList = 
    //             { memberId: item.id,
    //               membername: `${item.firstname} ${item.middlename} ${item.lastname}`,
    //               employeeNum: item.empId,
    //               roleName: item.role,
    //               teamName: item.team,
    //               memberTrainings: '5 of 5',
    //               certifications: ''
    //             };
    //             this.resourceList.push(resList);
    //           });
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });
  }

  addResource() {
    this.action = 'add'
    this.isOpen = true;
    // this.addResourceService.viewResourceCertification('5324424')
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   this.resourceCertifications = res
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });

    // this.addResourceService.viewResource(202)
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   delete res.data['password'];
    //   delete res.data['certifications'];
    //   this.resourceInfos = res
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });

    // this.addResourceService.viewResourceCertification('82010603')
    // .subscribe((res: any) => {
    //   console.log(res, "<<<<<< RES")
    //   this.resourceCertifications = res
    // }, err => {
    //   console.log(err, "<<<<< ERROR")
    // });
  }

  backManageResource(){
    this.isResource=false
  }
  
}
