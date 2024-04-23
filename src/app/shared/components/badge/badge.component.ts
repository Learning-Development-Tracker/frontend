import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [FormsModule,BadgeModule],
  templateUrl: './badge.component.html',
  // styleUrl: './badge-button.component.css'
})
export class BadgeComponent {
 
}
