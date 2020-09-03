import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { NavComponent } from './nav/nav.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService)
{

}

  canActivate(): boolean {
if(this.authService.loggedIn)
{
  return true;
}

   this.alertify.error('Please login to access the links');
   this.router.navigate(['/home']);
}
}