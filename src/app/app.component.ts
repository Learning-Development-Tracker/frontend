import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminComponent, ApproverComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ad-initiative';
}
