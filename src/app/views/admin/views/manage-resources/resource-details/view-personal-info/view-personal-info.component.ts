import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-personal-info.component.html',
  styleUrl: './view-personal-info.component.css'
})
export class ViewPersonalInfoComponent {
  employee = {
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'fernandez',
    suffix: 'None',
    gender: 'Male',
    emailAddress: 'johndoe23@dash-prop.com',
    careerStep: '1O3',
    idetifier: '8230032',
    region: 'Philippines',
    roles: 'System Specialist',
    teams: 'N/A',
    employmentStatus: 'Active'
  };
}