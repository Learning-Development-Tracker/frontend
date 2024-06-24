import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { TagModule } from "primeng/tag";
import { CustomBottonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms'; 
import { DropdownModule } from 'primeng/dropdown';

import { FilterComponent } from '../search-filter/filter.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, CustomBottonComponent, TagModule, FormsModule, DropdownModule, FilterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  // encapsulation: ViewEncapsulation.None

})
export class TableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() originalData: any[] = [];
  @Input() columns: any[] = [];
  @Input() showViewButton: boolean = true;
  @Input() showEditButton: boolean = true;
  @Input() showDeleteButton: boolean = true;
  @Input() subLabel: string = '';
  @Input() showSubLabel: boolean = false;
  @Input() dropdownLabel1: string ='';
  @Input() dropdownLabel2: string ='';
  @Input() dropdownOptions1: any[] = [];
  @Input() dropdownOptions2: any[] = [];
  selectedCert1: any;
  selectedCert2: any;
  @Input() selectedCertification: string = ''; // Input property to receive the selected certification
  @Input() selectedTeam: string = '';
  @Input() showDropdownCert : boolean = false;
  @Input() showCheckBox : boolean = false;
  globalFilter: string = '';
  filters: { [key: string]: any } = {};
  filterMode: string = 'global';
  @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();
  @Output() click: EventEmitter<string> = new EventEmitter<string>();
  @Input() showButtonManageTrainings: boolean = false;
  @Input() showButtonManageResources: boolean = false;
  @Input() showButtonReportTrainings: boolean = false;
  @Input() showButtonResourceData: boolean = false;
  @Input() showButtonCertData: boolean = false;
  @Input() showButtonResourceDataTable: boolean = false;
  @Output() addTrainingClick: EventEmitter<any> = new EventEmitter<any>();
  minWidth: number = 1500; // Adjust the value as needed
  minHeight: number = 300; // Adjust the value as needed

  getStatusColor(status: string): string {
    return status === 'Active' ? 'green' : status === 'Expired' ? 'red' : 'black';
  }

  onCertChange(event: any) {
    console.log('Selected Certification:', this.selectedCert1);
    this.globalFilter = this.selectedCert1;
    this.onSearchCert('');
    this.globalFilter = '';
    // this.onSearch();
    
  }

  onTeamChange(event: any) {
    console.log('Selected Team:', this.selectedCert2);
    this.globalFilter = this.selectedCert2;
    this.onSearchCert('');
    this.globalFilter = '';
    // this.onSearch();
  }

  onSearchCert(data: any): void {
    if (!this.globalFilter) {
      // If the search input is empty, reload the original data
      this.data = [...this.originalData];
    } else {
      // If there is a search input, filter the original data
      this.data = this.filterDataCert(this.globalFilter);
    }
  }
 
  filterDataCert(searchText: string): any[] {
    return this.originalData.filter(item =>
      this.checkItemMatchesSearchTextCert(item, searchText)
    );
  }
 
  checkItemMatchesSearchTextCert(item: any, searchText: string): boolean {
    searchText = searchText.toLowerCase();
    for (let key in item) {
      if (item.hasOwnProperty(key) && typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText)) {
        return true;
      }
    }
    return false;
  }
  
  @Output() addCalendarClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() addResourceButtonClick = new EventEmitter<void>();
  @Output() setTrainingButtonClick = new EventEmitter<void>();
  @Input() showSearchField: boolean = true;
  @Input() showCertApprovalBtn: boolean = false;

  onSearchChange(event: any) {
    const value = event.target.value.toLowerCase();
    this.searchChange.emit(value);
  }
  
  ngOnChanges() {
    this.originalData = [...this.data];
  }

  onSort(event: any) {
    this.sortChange.emit(event);
  }

  onView(employee: any) {
    this.view.emit(employee);
  }

  onEdit(employee: any) {
    this.edit.emit(employee);
  }

  onDelete(rowData: any) {
    this.delete.emit(rowData);
  }

  hasTrainings(rowData: any): boolean {
    return rowData.trainings && rowData.trainings.length > 0;
  }

  hasCertifications(rowData: any): boolean {
    return rowData.certifications && rowData.certifications.length > 0;
  }

  constructor() { }

  ngOnInit(): void {
    this.showButtonManageTrainings = this.checkIfButtonShouldBeVisible();
    
  }

  checkIfButtonShouldBeVisible(): boolean {
     if(this.showButtonManageTrainings){
      return true
     }  else {
      return false
     }
  }

  
  matchesGlobalFilter(row: any): boolean {
    if (!this.globalFilter) {
        return true; 
    }

    const filterValue = this.globalFilter.toLowerCase();

    for (let col of this.columns) {
        if (col.field && row[col.field] && row[col.field].toString().toLowerCase().includes(filterValue)) {
            return true; 
        }
    }

    return false;
  }

  onSearch(data: any): void {
    if (!this.globalFilter) {
      this.data = [...this.originalData];
    } else {
      this.data = this.filterData(this.globalFilter);
    }
  }

  filterData(searchText: string): any[] {
    return this.data.filter(item =>
      this.checkItemMatchesSearchText(item, searchText)
    );
  }

  checkItemMatchesSearchText(item: any, searchText: string): boolean {
    searchText = searchText.toLowerCase();
    for (let key in item) {
      if (item.hasOwnProperty(key) && typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText)) {
        return true;
      }
    }
    return false;
  }
  
  addTraining() {
    this.addTrainingClick.emit()  
  }   

  filter_col() {
    this.filter.emit()
  }

  toggleBoxContainer() {
    this.click.emit()
  }

  addResourceButton() {
    this.addResourceButtonClick.emit();
  }
  addCalendar(){
    this.addCalendarClick.emit()
  }

  setTrainigButton () {
    this.setTrainingButtonClick.emit();
  }
}