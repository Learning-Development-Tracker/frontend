import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TabViewComponent } from '../../../../shared/components/tab-view/tab-view.component';
import { ViewSkillsetComponent } from './resource-details/view-skillset/view-skillset.component';
import { ViewPersonalInfoComponent } from './resource-details/view-personal-info/view-personal-info.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { CustomBottonComponent } from './../../../../shared/components/custom-button/custom-button.component';
import { AddUserFormComponent } from '../../components/add-user-form/add-user-form.component';
import { AddResourceService } from '../../../../service/add-resource.service';


@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [
    CardModule, 
    ProgressBarModule, 
    TabViewModule, 
    TabViewComponent, 
    ViewSkillsetComponent, 
    ViewPersonalInfoComponent,
    ResourceDetailsComponent,
    CustomBottonComponent, 
    CommonModule, 
    AddUserFormComponent
  ],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ManageResourcesComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  isResource: boolean = false;
  isOpen: boolean = false;

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

  constructor(private addResourceService: AddResourceService) { }

  ngOnInit(): void {
   
  }

  resourceDtl(){
    this.isResource=true;
  }

  onOpenClick() {
    this.isOpen = true;
    this.addResourceService.viewResource(202)
    .subscribe((res: any) => {
      console.log(res, "<<<<<< RES")
      delete res.data['password'];
      delete res.data['certifications'];
      this.resourceInfos = res
    }, err => {
      console.log(err, "<<<<< ERROR")
    });

    this.addResourceService.viewResourceCertification('82010603')
    .subscribe((res: any) => {
      console.log(res, "<<<<<< RES")
      this.resourceCertifications = res
    }, err => {
      console.log(err, "<<<<< ERROR")
    });
  }

  onCloseClick() {
    this.isOpen = false;
  }
  
  isOpenChange(event: any){
    console.log(event, "<<<<<<< event")
    this.isOpen = false;
  }
  
}
