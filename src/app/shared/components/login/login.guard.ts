import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.services';

export const loginGuard: CanActivateFn = (route, state) => {
  const protectedRoutes: string[] = [
    '/admin',
    '/approver',
    '/admin-manage-trainings',
    '/admin-dashboard',
    '/admin-manage-resources',
    '/admin-report-certificates',
    '/admin-report-resources',
    '/admin-report-trainings',
    '/admin-notif-certification-demands',
    '/admin-notif-budget-request',
    '/user-profile', 
    '/user-calendar', 
    '/user-certifications', 
    '/user-trainings', 
    '/approver-profile', 
    '/approver-calendar', 
    '/approver-certifications', 
    '/approver-team', 
    '/approver-dashboard', 
    '/approver-cert-tracking', 
    '/approver-trainings'
  ]
  let loginService = inject(LoginService);
  let routerService = inject(Router);
  if (!(loginService.isLoggedIn() && protectedRoutes.includes(state.url))) {
    routerService.navigate(['/login']);
    return false;
  }
  return true;
};
