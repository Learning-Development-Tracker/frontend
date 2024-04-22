import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AdminDashboardComponent } from '../../views/admin/views/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CustomBottonComponent, HeaderComponent, FooterComponent, PanelModule, CardModule, ChartModule,
    AdminDashboardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  back: string = 'Back';
  constructor(private router: Router) { }

  backHome() {
    this.router.navigate(['/']);
  }
}
