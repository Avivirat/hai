import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router, private toastr: ToastrService){}
  canActivate(): boolean{
    if (this.authService.loggedIn()) {
    return true;
  }
  this.toastr.error('not allowed to redirect to the requested page');
  this.router.navigate(['/home']);

}
}
