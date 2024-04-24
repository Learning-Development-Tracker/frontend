import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.css'
})
export class ManageResourcesComponent {
  public activeTab: string = 'Certification';
  constructor() {}

  onChangeTab(type: string) {
    switch(type) {
      case 'Training':
        return this.activeTab = 'Training'
      case 'Reports':
        return this.activeTab = 'Reports'
      default:
        return this.activeTab = 'Certification'
    }
  }
}
