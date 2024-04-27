import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { AddUserInterface, Certification, City, ValidKeys } from './add-user-from.interface';
import { certificationInputs, empStatusInputs, personalInfoInputs, techStacksInputs } from '../../../../shared/constants/add-user-form.constants';
import { CustomBottonComponent } from '../../../../shared/components/custom-button/custom-button.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItemGroup } from 'primeng/api';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '../../../../shared/components/dropdown/dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarComponent } from '../../../../shared/components/calendar/calendar.component';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports: [
    CommonModule, 
    CustomBottonComponent, 
    MultiSelectModule, 
    FormsModule,
    DropdownComponent,
    DropdownModule,
    CalendarComponent,
    ReactiveFormsModule
    ],
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.css',
  encapsulation:ViewEncapsulation.None
})

export class AddUserFormComponent {
  @Input() isOpen: boolean = false;
  @Output() onCloseClick = new EventEmitter<void>();
  @Output() isOpenChange = new EventEmitter<boolean>();

  public personalInfoInputs:AddUserInterface[] = personalInfoInputs;
  public techStackInfoInputs:AddUserInterface[] = techStacksInputs;
  public certificationInfoInputs:AddUserInterface[] = certificationInputs;
  public cetificationInput =  {label: 'Name', field: "cert_name", placeholder: 'Certification Name', type: 'text', element: 'input'};
  public dateCertifiedInput = {label: 'Date Certified', field: "date_certified", placeholder: 'Date Certified', type: 'text', element: 'calendar'};
  public certificationDocInput = {label: 'Certificate Document', field: "certificate_doc", placeholder: 'File to be upload', type: 'file', element: 'input'};
  teamList!: SelectItemGroup[];
  skillList!: SelectItemGroup[];
  selectedSkillOption!: City[];
  selectedTeamOption!: City[];
  dateSelected!: Date;
  empStatusInputs!: any;
  textInputs: string[] = [];
  public certificationInfos: Certification[] = []; 
  currentCertification: { cert_name?: string; date?: Date } = {};
  uploadForm!: FormGroup;
  
  public resourceInfos = {
    lastname: '',
    firstname: '',
    middlename: '',
    suffix: '',
    gender: '',
    email: '',
    career_step: '',
    emp_id: '',
    region: '',
    role: '',
    team: '',
    emp_status: '',
    skills:'',
    certifications: []
  }

  ngOnInit(): void {
   
  }

  constructor(private fb: FormBuilder) {
      this.teamList = [
        {
            label: 'Ad Public',
            value: 'ad_public',
        },
        {
            label: 'EMPF',
            value: 'empf',
        },
        {
            label: 'Ad Initiative',
            value: 'ad_initiative'
        }
    ];

    this.skillList = [
      {
          label: 'Frontend Development',
          value: 'frontend_development',
      },
      {
          label: 'Backend Development',
          value: 'back_development',
      },
      {
          label: 'Devops',
          value: 'devops'
      },
      {
          label: 'Scrum Master',
          value: 'scrum_master'
      }
  ];

    this.empStatusInputs = empStatusInputs;
    console.log('Added', this.resourceInfos);
  }

  form = this.fb.group({
    items:this.fb.array([]),
  });

  get items() {
    return this.form.get('items') as FormArray;
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  addItem() {
    this.items.push(
      this.fb.group({
        name: [''],
        calendar: [new Date()],
        fileupload: [null]

      })
    )
  }

  onClose() {
    this.isOpen = false;
    this.onCloseClick.emit()
  }

  preventBackdropClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onClosed() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen)
  }

  addCertification() {
    this.certificationInfoInputs.push(this.cetificationInput);
    this.certificationInfoInputs.push(this.dateCertifiedInput);
    this.certificationInfoInputs.push(this.certificationDocInput);

    this.currentCertification.cert_name = '';
    this.currentCertification.date = new Date();
  }

  getValidKey(key: string) {
    return key as ValidKeys;
  }

  onInputChange(key: string, newValue: string) {
    this.resourceInfos[this.getValidKey(key)] = newValue;
    console.log('Added', this.resourceInfos);
  }

  onMultiSelectChange(key: string, selected: any) {
    this.resourceInfos[this.getValidKey(key)] = selected;
    console.log('Added', this.resourceInfos);
  }

  onFileChange(event: Event, index: number, items:any) {
    const input = event.target as HTMLInputElement;
    console.log(index, "<<<< event")
    console.log(items, "<<<< items")
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      const control = this.items.at(index); // Get the specific form control
      control.patchValue({ fileupload: selectedFile }); // Update the form control
      control.get('fileupload')?.updateValueAndValidity(); // Ensure validity
    }
  }

  saveResource() {
    const formValue: any = this.form.value; // Get the form's current value
    this.resourceInfos.certifications = formValue.items;
    console.log(this.resourceInfos, "Added <<<<<")
    console.log(this.form.value, "this.form.value <<<<<")
  }
}
