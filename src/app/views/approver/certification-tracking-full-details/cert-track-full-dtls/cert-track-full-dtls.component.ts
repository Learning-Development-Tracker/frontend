import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TableModule } from 'primeng/table';

interface CertTrackFullDtls {
  certification_name: string;
  skill: number;
  requester: string;
}


@Component({
  selector: 'app-cert-track-full-dtls',
  standalone: true,
  imports: [TableComponent, TableModule],
  templateUrl: './cert-track-full-dtls.component.html',
  styleUrl: './cert-track-full-dtls.component.css'
})
export class CertTrackFullDtlsComponent {
  certTrackFDtls: CertTrackFullDtls[] = [];
  certTrackingList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { data: any };



    if (state && state.data) {
      this.certTrackingList = [state.data];
      console.log('qq', this.certTrackingList);
    }
    console.log('qq', state);
    console.log('qq', state.data);
  }

  // sampleData = [
  //   { certName: 'Microsoft Azure Fundamentals', skill: 'Azure', requester: 'Mendoza, Hannah'},
  //   { certName: 'Oracle Certified Professional: Java SE 11 Developer', skill: 'Java', requester: 'Carlos, Juan' },
  //   { certName: 'Angular', skill: 'Angular', requester: 'Test, Requester' },
  //   { certName: 'Phyton', skill: 'Phyton', requester: 'Admin' },
  // ];
  // sampleColumns = [
  //   { header: 'Certification Name', field: 'certName' },
  //   { header: 'Skill', field: 'skill' },
  //   { header: 'Requester', field: 'requester' },
  //   { header: 'Date Requested', field: 'requester' },
  //   { header: 'Last Updated By', field: 'requester' },
  //   { header: 'Last Updated Date', field: 'requester' },
  //   { header: 'Status', field: 'requester' },

  // ];

}
