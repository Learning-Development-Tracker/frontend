import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, Output, EventEmitter  } from '@angular/core';
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
  @Output() dateSelected = new EventEmitter<Date>();

  onDateSelect(date: Date) {
    this.dateSelected.emit(date);
  }

  @Input() selectedDate!: Date;
  
}
