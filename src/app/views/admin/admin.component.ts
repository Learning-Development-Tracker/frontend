import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CustomBottonComponent, HeaderComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
