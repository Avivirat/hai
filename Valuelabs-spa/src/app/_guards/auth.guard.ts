import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router){}
  canActivate(): boolean{
    if(this.authService.loggedIn()) {
    return true;
  }
  console.log('not pass');
  this.router.navigate(['/home']);

}
}
