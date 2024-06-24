import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { ManageCertListService } from '../../../../service/cert-list.service';
import { ViewCertificateComponent } from './view-certificate/view-certificate/view-certificate.component';
@Component({
  selector: 'app-report-certificates',
  standalone: true,
  imports: [CommonModule, TableComponent, ViewCertificateComponent],
  templateUrl: './report-certificates.component.html',
  styleUrls: ['./report-certificates.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ReportCertificatesComponent implements OnInit {
  filteredData: any[] = [];
  tableColumn: any[] = [];
  certList: any[] = [];
  certSortByCertName: any[] = [];
  certSortByTeam: any[] = [];
  dropdownOptions1: any[] = [];
  dropdownOptions2: any[] = [];
  showViewButton: boolean = true;
  showEditButton: boolean = false;
  showDeleteButton: boolean = false;
  showCheckBox: boolean = true;
  showSearchIcon: boolean = true;
  showLabel: boolean = false;
  selectedCertification: string = '';
  selectedTeam: string = '';
  showViewCert: boolean = true;
  // showViewCert: boolean = false;
  isPopupVisible: boolean = false;
  viewData: any;
  // test: string = '';
  public errMessage: any;

  constructor(private manageCertListService: ManageCertListService) { }

  ngOnInit(): void {
    this.getCertification();
    this.getCertFilterByCertName();
    this.getCertFilterByTeam();
    this.tableColumn = [
      { header: 'ID Number', field: 'employeeNum' },
      { header: 'Name', field: 'name' },
      { header: 'Team', field: 'teamName' },
      { header: 'Certificate', field: 'certName' },
      { header: 'Certificate Link', field: 'certLink' },
      { header: 'Expiry Date', field: 'expiryDate' },
      { header: 'Status', field: 'status' }, // Added cellClass
      { header: 'Actions', field: 'actions' }
    ];
    this.filteredData = this.certList;
  }

  // onShowViewCertChange(event: boolean) {
  //   this.showViewCert = event;
  // }
  

  populateDropdownOptions1(list: any[]): void {
    this.dropdownOptions1 = list.map((data: any) => ({
      label: data.certName,
      value: data.certName
    }));
    console.log(JSON.stringify(this.dropdownOptions1), "Dropdown Options 1 as JSON"); // Log dropdownOptions1 as JSON string
  }

  populateDropdownOptions2(list: any[]): void {
    this.dropdownOptions2 = list.map((data: any) => ({
      label: data.teamName,
      value: data.teamName
    }));
    console.log(JSON.stringify(this.dropdownOptions2), "Dropdown Options 2 as JSON");  // Log dropdownOptions1 as JSON string
  }

  getCertification() {
    this.manageCertListService.getCertificationList()
      .subscribe((res: any) => {
        this.errMessage = "";
        this.certList = res.data;
        console.log(this.certList, "<<<<<< RES");
        // Wait for dropdown options to be populated before applying filter
        this.getCertFilterByCertName();
        this.getCertFilterByTeam();
      }, err => {
        this.errMessage = err.error;
        console.log(err, "<<<<< ERROR");
      });
  }

  getCertFilterByCertName() {
    this.manageCertListService.getCertPerCertName()
      .subscribe((res: any) => {
        this.errMessage = "";
        this.certSortByCertName = res.data;
        console.log(this.certSortByCertName, "<<<<<< RES");
        this.populateDropdownOptions1(this.certSortByCertName);
      }, err => {
        this.errMessage = err.error;
        console.log(err, "<<<<< ERROR");
      });
  }

  getCertFilterByTeam() {
    this.manageCertListService.getCertPerTeam()
      .subscribe((res: any) => {
        this.errMessage = "";
        this.certSortByTeam = res.data;
        console.log(this.certSortByTeam, "<<<<<< RES");
        this.populateDropdownOptions2(this.certSortByTeam);
      }, err => {
        this.errMessage = err.error;
        console.log(err, "<<<<< ERROR");
      });
  }
  toggleShowViewCert() {
    this.showViewCert = !this.showViewCert;
  }
  onView(rowData: any){
    // console.log('View Item: ', rowData);
    this.viewData = rowData;
    // this.test = "JVBERi0xLjIgDQo5IDAgb2JqDQo8PA0KPj4NCnN0cmVhbQ0KQlQvIDMyIFRmKCAgSGVsbG8gV29ybGQgICApJyBFVA0KZW5kc3RyZWFtDQplbmRvYmoNCjQgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCA1IDAgUg0KL0NvbnRlbnRzIDkgMCBSDQo+Pg0KZW5kb2JqDQo1IDAgb2JqDQo8PA0KL0tpZHMgWzQgMCBSIF0NCi9Db3VudCAxDQovVHlwZSAvUGFnZXMNCi9NZWRpYUJveCBbIDAgMCAyNTAgNTAgXQ0KPj4NCmVuZG9iag0KMyAwIG9iag0KPDwNCi9QYWdlcyA1IDAgUg0KL1R5cGUgL0NhdGFsb2cNCj4+DQplbmRvYmoNCnRyYWlsZXINCjw8DQovUm9vdCAzIDAgUg0KPj4NCiUlRU9G";// rowData.fileContent;
    // console.log('test', this.test);
    this.toggleShowViewCert();   
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  showPopup() {
    this.isPopupVisible = true;
    console.log("true");
  }
}




