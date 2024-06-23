import { Component,Output,EventEmitter,Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer'


@Component({
  selector: 'view-certificate',
  standalone: true,
  imports: [CommonModule,PdfViewerModule],
  templateUrl: './view-certificate.component.html',
  styleUrl: './view-certificate.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ViewCertificateComponent {
  @Output() close = new EventEmitter<void>();
  @Output() toggleShowViewCert = new EventEmitter<void>();
  @Output() showViewCertChange = new EventEmitter<boolean>();
  @Input() showViewCert: boolean = false;
  @Input() data: any[] = [];
  @Input() isVisible?: boolean;
  fileContent: string | null = null;
  pdfSrc: any = null;

  back: string = 'Back';

  constructor(private router: Router, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    console.log('Data 1:', this.data);
    let file = JSON.parse(JSON.stringify(this.data));
    console.log('file.fileContent:', file.fileContent);
    this.fileContent = file.fileContent;
    this.pdfSrc = this.base64ToArrayBuffer(this.fileContent+"");
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

  onClickToggleB(): void {
    this.showViewCert = !this.showViewCert;
    this.showViewCertChange.emit(this.showViewCert);
  }

}

