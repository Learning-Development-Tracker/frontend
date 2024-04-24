import { Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';
import { AdminDashboardComponent } from './views/admin/views/admin-dashboard/admin-dashboard.component';
import { ManageResourcesComponent } from './views/admin/views/manage-resources/manage-resources.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent},
    { path: 'approver', component: ApproverComponent},
    { path: 'login', component: UserComponent},
    { path: 'admin-dashboard', component: AdminDashboardComponent},
    { path: 'admin-manage-resources', component: ManageResourcesComponent},
];
