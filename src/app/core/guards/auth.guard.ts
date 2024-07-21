import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor(private router: Router) { };

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    const token = localStorage.getItem('auth_token');
    
    if(token){
      return true;
    } else {
      this.router.navigateByUrl('auth/login');
      return false;
    } 
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};
