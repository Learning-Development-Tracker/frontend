import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    
  }

  clicks() {
    console.log("button clicked!!")
  }
}
