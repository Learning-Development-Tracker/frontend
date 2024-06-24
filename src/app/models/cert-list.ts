export class CertDetail {
    constructor(
        public employeeNum: number,
        public name: string,
        public teamName: string,
        public certName: string,
        public certLink: string,
        public expiryDate: Date,
        public status: string,
        public fileContent: ArrayBuffer,
        public certId: string,
        public TeamId: string
    ) {}
}