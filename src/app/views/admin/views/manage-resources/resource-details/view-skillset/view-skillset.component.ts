import { Component, ViewChild  } from '@angular/core';
import { DropdownComponent } from '../../../../../../shared/components/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-view-skillset',
  standalone: true,
  imports: [DropdownComponent,CommonModule, BadgeModule, DropdownModule],
  templateUrl: './view-skillset.component.html',
  styleUrl: './view-skillset.component.css'
})
export class ViewSkillsetComponent {
  @ViewChild(DropdownComponent)
  dropdownComponent!: DropdownComponent;
  fiterOption:any='All';
  skillOption:any=[]
  public selectedType:any='All'
  badgeLabel: any
  frontEnd : any = [
    {skillName: "Angular JS"},
    {skillName: "Vue JS"},
    {skillName: "React JS"},
  ]
  backEnd : any = [
    {skillName: "JAVA"},
    {skillName: "Spring"},
  ]
  testingTools : any = [
    {skillName: "Selenium"},
  ]

  ngOnInit() {
    this.skillOption= [
      { label: 'Front End', value: 'Front End' },
      { label: 'Back End', value: 'Back End' },
      { label: 'Testing Tools', value: 'Testing Tools' },
      { label: 'All', value: 'All' },
    ];
  }

  onDropdownChange(event: string) {
    console.log( event);
    this.fiterOption = event.toString();
    console.log( this.fiterOption);
  }

  

}
