import { CommonModule } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { TagModule } from "primeng/tag";
import { CustomBottonComponent } from '../custom-button/custom-button.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, CustomBottonComponent, TagModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  @Input() data: any[] = [];
  @Input() columns: any[] = [];
  globalFilter: string = '';
  filters: { [key: string]: any } = {};
  filterMode: string = 'global';
  @Output() sortChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() showButtonManageTrainings: boolean = false;

  onSearchChange(event: any) {
    const value = event.target.value.toLowerCase();
    this.searchChange.emit(value);
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

  onDelete(employee: any) {
    this.delete.emit(employee);
  }

  hasTrainings(rowData: any): boolean {
    return rowData.trainings && rowData.trainings.length > 0;
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

}
