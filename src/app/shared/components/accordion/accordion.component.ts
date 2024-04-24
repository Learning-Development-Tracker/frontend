import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class CustomBottonComponent {
  headerText: string = "Certification"
}
