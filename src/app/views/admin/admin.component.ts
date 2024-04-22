import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { InfoCardComponent } from '../../shared/components/info-card/info-card.component';
import { certificationInfo } from '../../shared/constants/info-card.constant';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CustomBottonComponent, HeaderComponent, FooterComponent, InfoCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  back: string = 'Back';
  data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = certificationInfo;
  }

  backHome() {
    this.router.navigate(['/']);
  }
}
