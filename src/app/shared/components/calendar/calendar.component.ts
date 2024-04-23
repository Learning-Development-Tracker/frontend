import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarModule,FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarComponent {
  date: Date = new Date();
}
