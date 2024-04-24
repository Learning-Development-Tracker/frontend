import { Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';
import { ManageTrainingsComponent } from  './views/admin/views/manage-trainings/manage-trainings.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent},
    { path: 'approver', component: ApproverComponent},
    { path: 'login', component: UserComponent},
    { path: 'admin-manage-trainings', component: ManageTrainingsComponent},
];
