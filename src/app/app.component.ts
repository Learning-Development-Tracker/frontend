import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AdminComponent } from './views/admin/admin.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './views/admin/views/body/body.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    // AdminComponent, 
    ApproverComponent, 
    UserComponent, 
    HttpClientModule, 
    BodyComponent,
    SidebarComponent,
    // HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ad-initiative';
}
