import { INavbarData } from "./helper"

export const navbarData: INavbarData[] = [
    {
        accesslevel: 'Admin',
        routeLink: 'admin-dashboard',
        icon: 'pi pi-home',
        label: 'Dashboard'
    },
    {
        accesslevel: 'Admin',
        routeLink: 'admin-manage-resources',
        icon: 'pi pi-users',
        label: 'Manage Resources'
    },
    {
        accesslevel: 'Admin',
        routeLink: 'admin-manage-trainings',
        icon: 'pi pi-verified',
        label: 'Manage Trainings'
    },
    {
        accesslevel: 'Admin',
        routeLink: 'admin-reports',
        icon: 'pi pi-file',
        label: 'Reports',
        items: [
            {
                accesslevel: 'Admin',
                routeLink: 'admin-report-certificates',
                label: 'Certificates'
            },
            {
                accesslevel: 'Admin',
                routeLink: 'admin-report-resources',
                label: 'Resources'
            },
            {
                accesslevel: 'Admin',
                routeLink: 'admin-report-trainings',
                label: 'Trainings'
            }
        ]
    },
    {
        accesslevel: 'Admin',
        routeLink: 'admin-notifications',
        icon: 'pi pi-envelope',
        label: 'Notifications',
        items: [
            {
                accesslevel: 'Admin',
                routeLink: 'admin-notif-certification-demands',
                label: 'Certification Demands'
            },
            {
                accesslevel: 'Admin',
                routeLink: 'admin-notif-budget-request',
                label: 'Budget Request'
            }
        ]
    },
    {
        accesslevel: 'User',
        routeLink: '',
        icon: 'pi pi-user',
        label: 'MY PROFILE'
    },
    {
        accesslevel: 'User',
        routeLink: '',
        icon: 'pi pi-calendar',
        label: 'CALENDAR'
    },
    {
        accesslevel: 'User',
        routeLink: '',
        icon: 'pi pi-circle',
        label: 'CERTIFICATIONS'
    },
    {
        accesslevel: 'User',
        routeLink: '',
        icon: 'pi pi-book',
        label: 'TRAININGS'
    },
    {
        accesslevel: 'Approver',
        routeLink: '',
        icon: 'pi pi-user',
        label: 'MY PROFILE'
    },
    {
        accesslevel: 'Approver',
        routeLink: '',
        icon: 'pi pi-calendar',
        label: 'CALENDAR'
    },
    {
        accesslevel: 'Approver',
        routeLink: '',
        icon: 'pi pi-circle',
        label: 'CERTIFICATIONS'
    },
    {
        accesslevel: 'Approver',
        routeLink: '',
        icon: 'pi pi-users',
        label: 'MY TEAM',
        items: [
            {
                accesslevel: 'Approver',
                routeLink: '',
                label: 'DASHBOARD'
            },
            {
                accesslevel: 'Approver',
                routeLink: '',
                label: 'CERTIFICATION TRACKING'
            }
        ]
    },
    {
        accesslevel: 'Approver',
        routeLink: '',
        icon: 'pi pi-book',
        label: 'TRAININGS'
    },
];