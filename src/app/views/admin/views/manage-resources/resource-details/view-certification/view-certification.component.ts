import { Component, CUSTOM_ELEMENTS_SCHEMA,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionInfoCardComponent } from '../../../../../../shared/components/transaction-info-card/transaction-info-card.component';
import { CardModule } from 'primeng/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ManageCertListService } from '../../../../../../service/cert-list.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-view-certification',
  standalone: true,
  imports: [TransactionInfoCardComponent,CommonModule, CardModule, PdfViewerModule],
  templateUrl: './view-certification.component.html',
  styleUrl: './view-certification.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewCertificationComponent implements OnInit {
  @Input() certIsVisible: boolean = false;
  @Input() memberDtl: any = {};
  certInfo: any[] = [];
  public errMessage: any;
  fileContent2: string | null = null;
  pdfSrc: any = null;

  constructor(private manageCertListService: ManageCertListService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getCertInfo();
    console.log('MemberId:', this.memberDtl.memberId);

  }

  

// In your component class
getButtonLabel(cert: any): string {
  if (!cert || !cert.fileContent2) {
    return "No document attached";
  } else {
    return "View Document";
  }
}

getButtonClass(cert: any): string {
  if (!cert || !cert.fileContent2) {
    return "custom-button-disable";
  } else {
    return "custom-button-enable";
  }
}

base64ToArrayBuffer(base64: string) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

onClickShow(cert: any): void {
  if (cert && cert.fileContent2) {
    const documentContent = cert.fileContent2;
    console.log('File Content', documentContent);
    this.certIsVisible = true;
    // this.pdfSrc = documentContent;
    this.pdfSrc = this.base64ToArrayBuffer(documentContent+"");
    // Here you can display the document content, for example, in a modal
    // Or you can navigate to a different component/route to display it
  }
}
  onClickHide(): void {
    this.certIsVisible = false;
  }

  getCertInfo() {
    this.manageCertListService.getCertPerMemberId(this.memberDtl.memberId)
      .subscribe((res: any) => {
        this.errMessage = "";
        this.certInfo = res.data || []; // Assign an empty array if data is null or undefined
        console.log('Cert Information:', this.certInfo);
        // If there are certificates, set the first one as default for preview
      }, (err: any) => {
        this.errMessage = err.error;
        console.log(err, "<<<<< ERROR");
      });
  }
}
