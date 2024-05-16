import { Component, OnInit } from '@angular/core';
import { TransactionInfoCardComponent } from '../../../../../../../shared/components/transaction-info-card/transaction-info-card.component';
import { TrainingDetails } from '../../../../../../../models/admin/manage-resources/training-details'
import { ViewTrainingDetailsService } from '../../../../../../../services/admin/manage-resources/view-training-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../../../../../../../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-view-training-details',
  standalone: true,
  imports: [TransactionInfoCardComponent, CommonModule, AccordionComponent
  ],
  templateUrl: './view-training-details.component.html',
  styleUrl: './view-training-details.component.css'
})
export class ViewTrainingDetailsComponent {

  public training?: TrainingDetails[];
  public trnngCmpltdFilter?: TrainingDetails[];
  public trnngInProgFilter?: TrainingDetails[];
  public trnngOverdueFilter?: TrainingDetails[];
  public trnngPendingFilter?: TrainingDetails[];

  public inProgHeader = ['In progress:'];
  public completedHeader = ['Completed Training:'];
  public overdueHeader = ['Overdue Training:'];
  public pendingHeader = ['Pending Training:'];

  constructor(private trainingService: ViewTrainingDetailsService) { }

  ngOnInit() {
    this.getAllTrainings();
  }

  public getAllTrainings(): void {
    this.trainingService.getTrainings().subscribe(
      (res: TrainingDetails[]) => {
        this.training = res;
        const completedTraining = res.filter((item) => item.status === 'completed');
        const inProgTraining = res.filter((item) => item.status === 'in-progress');
        const overdueTraining = res.filter((item) => item.status === 'overdue');
        const pendingTraining = res.filter((item) => item.status === 'pending');
        this.trnngCmpltdFilter = completedTraining;
        this.trnngInProgFilter = inProgTraining;
        this.trnngOverdueFilter = overdueTraining;
        this.trnngPendingFilter = pendingTraining;
      },
      (error: HttpErrorResponse) => {
        console.log('no trainings', error);
      }
    )
  }

}
