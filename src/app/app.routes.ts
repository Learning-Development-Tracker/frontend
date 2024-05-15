import { Routes } from '@angular/router';
import { loginGuard } from './shared/components/login/login.guard';
import { PageNotFoundComponent } from './shared/components/login/page-not-found/page-not-found.component';
import { AdminComponent } from './views/admin/admin.component';
import { AdminDashboardComponent } from './views/admin/views/admin-dashboard/admin-dashboard.component';
import { ManageResourcesComponent } from './views/admin/views/manage-resources/manage-resources.component';
import { ManageTrainingsComponent } from './views/admin/views/manage-trainings/manage-trainings.component';
import { ReportCertificatesComponent } from './views/admin/views/report-certificates/report-certificates.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: UserComponent },
    { path: 'admin', component: AdminComponent, canActivate: [loginGuard] },
    { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [loginGuard] },
    { path: 'approver', component: ApproverComponent, canActivate: [loginGuard] },
    { path: 'admin-manage-trainings', component: ManageTrainingsComponent, canActivate: [loginGuard] },
    { path: 'admin-manage-resources', component: ManageResourcesComponent, canActivate: [loginGuard] },
    { path: 'admin-report-certificates', component: ReportCertificatesComponent, canActivate: [loginGuard] },
    { path: 'admin-report-resources', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'admin-report-trainings', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'admin-notif-certification-demands', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'admin-notif-budget-request', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'user-profile', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'user-calendar', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'user-certifications', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'user-trainings', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-profile', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-calendar', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-certifications', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-team', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-dashboard', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-cert-tracking', component: PageNotFoundComponent, canActivate: [loginGuard] },
    { path: 'approver-trainings', component: PageNotFoundComponent, canActivate: [loginGuard] },

];
