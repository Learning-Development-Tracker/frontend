import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { Options } from '../../dropdown/options';
import { certificationInfo } from '../../shared/constants/info-card.constant';
import { DropdownComponent } from '../../dropdown/dropdown.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CustomAccordionComponent } from '../../shared/components/accordion/accordion.component';
import { FilterComponent } from '../../shared/components/search-filter/filter.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { CalendarComponent } from '../../shared/components/calendar/calendar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CustomBottonComponent, HeaderComponent, FooterComponent, PanelModule, CardModule, ChartModule,
    AdminDashboardComponent, DropdownComponent
  , InfoCardComponent, CustomAccordionComponent ,FilterComponent, BadgeComponent, CalendarComponent],
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
  ngOnInit(): void {
    this.data = certificationInfo;
  }

  backHome() {
    this.router.navigate(['/']);
  }

  selectedOption: { value: string, isActive: boolean } | null = null;

  onOptionSelected(option: { value: string, isActive: boolean }) {
    this.selectedOption = option;
    console.log('Selected:', this.selectedOption);
  }
}
