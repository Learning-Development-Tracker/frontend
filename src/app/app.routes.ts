import { Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ApproverComponent } from './views/approver/approver.component';
import { UserComponent } from './views/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent},
    { path: 'approver', component: ApproverComponent},
    { path: 'user', component: UserComponent},
];
