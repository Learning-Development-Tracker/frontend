import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTrainingFormComponent } from './set-training-form.component';

describe('SetTrainingFormComponent', () => {
  let component: SetTrainingFormComponent;
  let fixture: ComponentFixture<SetTrainingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetTrainingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
