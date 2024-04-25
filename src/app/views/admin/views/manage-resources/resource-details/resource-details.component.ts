import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TabViewComponent } from '../../../../../shared/components/tab-view/tab-view.component';
import { ViewSkillsetComponent } from './../resource-details/view-skillset/view-skillset.component';
import { ViewPersonalInfoComponent } from './../resource-details/view-personal-info/view-personal-info.component';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CardModule, ProgressBarModule, TabViewModule, TabViewComponent, ViewSkillsetComponent, ViewPersonalInfoComponent],
  templateUrl: './resource-details.component.html',
  styleUrl: './resource-details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ResourceDetailsComponent implements OnInit{

  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;
  ngOnInit(): void {
   
  }
}
