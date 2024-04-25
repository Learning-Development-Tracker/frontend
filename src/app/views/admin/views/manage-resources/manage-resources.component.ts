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


@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [CardModule, ProgressBarModule, TabViewModule, TabViewComponent, ViewSkillsetComponent, 
    ViewPersonalInfoComponent,ResourceDetailsComponent,CustomBottonComponent, CommonModule],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ManageResourcesComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  isResource: boolean = false;
  ngOnInit(): void {
   
  }

  resourceDtl(){
    this.isResource=true;
  }
  
}
