import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomBottonComponent implements OnInit{
  @Input() backgroundColor: string = 'var(--purple)';
  @Input() textColor: string = 'var(--white)';
  @Input() label: string = 'Next';
  @Output() buttonClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
    
  }

  onClick(){
    this.buttonClicked.emit();
  }
}
