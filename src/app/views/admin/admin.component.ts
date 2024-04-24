import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AdminDashboardComponent } from '../../views/admin/views/admin-dashboard/admin-dashboard.component';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { Options } from '../../shared/components/dropdown/options';
import { BodyComponent } from './views/body/body.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CustomBottonComponent, HeaderComponent, FooterComponent, PanelModule, CardModule, ChartModule,
    AdminDashboardComponent, DropdownComponent, SidebarComponent, BodyComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  back: string = 'Back';
  data: any;
  constructor(private router: Router) { }
  public optionsList1: Options[] = [
    {
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. \
        It has survived not only five centuries, but also the leap into electronic typesetting, \
        remaining essentially unchanged. It was popularised in the 1960s with the release of \
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \
        software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      value:
        "It is a long established fact that a reader will be distracted by the readable \
        content of a page when looking at its layout. The point of using Lorem Ipsum is \
        that it has a more-or-less normal distribution of letters, as opposed to using \
        'Content here, content here', making it look like readable English. \
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their \
        default model text, and a search for 'lorem ipsum' will uncover many web sites \
        still in their infancy. Various versions have evolved over the years, \
        sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    { value: 'Hello World' },
    { value: 'Apple' },
    { value: 'Orange' },
  ];

  onSelectOption(value: string) {
    console.log(value);
  }

  backHome() {
    this.router.navigate(['/']);
  }
}
