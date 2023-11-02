// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.authService.isAuthenticatedUser()) {
//       return true; // Allow navigation to the route
//     } else {
//       // User is not authenticated, redirect to login page and display an alert
//       this.router.navigate(['/login']);
//       alert('Please login first to access this page.');
//       return false;
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticatedUser()) { // Use isAuthenticated as a property, not a method
      return true; // Allow navigation to the route
    } else {
      // User is not authenticated, redirect to login page and display an alert
      this.router.navigate(['/login']);
      alert('Please log in first to access this page.');
      return false;
    }
  }
}
