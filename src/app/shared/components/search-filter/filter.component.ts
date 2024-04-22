import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'search-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  searchQuery: string = '';
  items: string[] = ['Another Item 1', 'Another Item 2', 'Different Item 1', 'Different Item 2'];
  searchResults: string[] = [];
  selectedItems: string[] = [];
  showBoxContainer: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.filterItems();
  }

  filterItems(): void {
    this.searchResults = this.items.filter(item =>
      !this.selectedItems.includes(item) && item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addToBox(item: string): void {
    this.selectedItems.push(item);
    this.removeItemFromSearchResults(item);
    this.filterItems(); // Update search results
  }

  removeFromBox(item: string): void {
    this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
    this.items.push(item);
    this.filterItems(); // Update search results
  }

  private removeItemFromSearchResults(item: string): void {
    this.searchResults = this.searchResults.filter(result => result !== item);
  }

  toggleBoxContainer(): void {
    this.showBoxContainer = !this.showBoxContainer;
  }

  onDone(): void {
    this.toggleBoxContainer();
    console.log('Selected Items:', this.selectedItems);
  }
}