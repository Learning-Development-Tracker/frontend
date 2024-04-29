import { SelectItem } from "primeng/api";

export interface AddUserInterface  {
    label: string;
    placeholder: string;
    type: string;
    element: string;
    field: string;
}

export interface City {
    name: string,
    code: string
}

export type ValidKeys = 'lastname' | 
                        'firstname' | 
                        'middlename' | 
                        'suffix' | 
                        'gender' | 
                        'email' | 
                        'career_step' | 
                        'emp_id' | 
                        'region' | 
                        'role' | 
                        'team' | 
                        'emp_status' | 
                        'skills';
                        // 'cert_name' | 
                        // 'date_certified';
                        // 'certificate_doc';

export interface Certification {
    cert_name?: string;
    date_certified?: Date;
}
export type ValidKeysCertification = keyof Certification;
export interface MultiSelectItemGroup {
    label: string;
    value?: any;
    items?: SelectItem[];
}