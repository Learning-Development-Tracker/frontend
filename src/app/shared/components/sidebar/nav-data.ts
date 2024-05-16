import { INavbarData } from "./helper"

export const navbarData: INavbarData[] = [
    {
        routeLink: 'admin-dashboard',
        icon: 'pi pi-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'admin-manage-resources',
        icon: 'pi pi-users',
        label: 'Manage Resources'
    },
    {
        routeLink: 'admin-manage-trainings',
        icon: 'pi pi-verified',
        label: 'Manage Trainings'
    },
    {
        routeLink: 'admin-reports',
        icon: 'pi pi-file',
        label: 'Reports',
        items: [
            {
                routeLink: 'admin-report-certificates',
                label: 'Certificates'
            },
            {
                routeLink: 'admin-report-resources',
                label: 'Resources'
            },
            {
                routeLink: 'admin-report-trainings',
                label: 'Trainings'
            }
        ]
    },
    {
        routeLink: 'admin-notifications',
        icon: 'pi pi-envelope',
        label: 'Notifications',
        items: [
            {
                routeLink: 'admin-notif-certification-demands',
                label: 'Certification Demands'
            },
            {
                routeLink: 'admin-notif-budget-request',
                label: 'Budget Request'
            }
        ]
    },

];