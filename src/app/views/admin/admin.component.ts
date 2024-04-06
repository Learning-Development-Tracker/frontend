import { Component } from '@angular/core';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { CustomBottonComponent } from '../../shared/components/custom-button/custom-button.component';

import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, CustomBottonComponent, HeaderComponent, FooterComponent],
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
