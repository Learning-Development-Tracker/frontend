export const personalInfoInputs = [
    {label: 'Last Name', field: "lastname", placeholder: 'Last Name', type: 'text', element: 'input'},
    {label: 'First Name', field: "firstname", placeholder: 'First Name', type: 'text', element: 'input'},
    {label: 'Middle Name', field: "middlename", placeholder: 'Middle Name', type: 'text', element: 'input'},
    {label: 'Suffix', field: "suffix", placeholder: 'Suffix', type: 'text', element: 'input'},
    {label: 'Gender', field: "gender", placeholder: 'Gender', type: 'text', element: 'input'},
    {label: 'Email Address', field: "email", placeholder: 'Email Address', type: 'text', element: 'input'},
    {label: 'Career Step', field: "career_step", placeholder: 'Career Step', type: 'text', element: 'input'},
    {label: 'Employee Id', field: "emp_id", placeholder: 'Employee Id', type: 'text', element: 'input'},
    {label: 'Region', field: "region", placeholder: 'Region', type: 'text', element: 'input'},
    {label: 'Role/s', field: "role", placeholder: 'Role/s', type: 'text', element: 'input'},
    {label: 'Team/s', field: "team", placeholder: 'Team/s', type: 'text', element: 'multiselect-dropdown'},
    {label: 'Employee Status', field: "emp_status", placeholder: 'Employee Status', type: 'text', element: 'singleselect-dropdown'},
];

export const techStacksInputs = [
    {label: 'Skills', field: "skills", placeholder: 'Skills', type: 'text', element: 'multiselect-dropdown'},

];

export const certificationInputs = [
    {label: 'Name', field: "cert_name", placeholder: 'Certification Name', type: 'text', element: 'input'},
    {label: 'Date Certified', field: "date_certified", placeholder: 'Date Certified', type: 'text', element: 'calendar'},
    // {label: 'Certificate Document', field: "certificate_doc", placeholder: 'File to be upload', type: 'file', element: 'input'}
];

export const empStatusInputs = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]