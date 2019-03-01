import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../_services/auth.service';
import { ColleagueDetailedComponent } from '../colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/User.service';
import { resolve } from 'url';
import { observable, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ColleagueEditresolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router, private authservice: AuthService, private toastr: ToastrService) {}


  resolve(route: ActivatedRouteSnapshot): Observable<User> {
      return this.userService.getUser(this.authservice.decodedToken.nameid).pipe(catchError(error => {
        this.toastr.error("problem reteriving data");
        this.router.navigate(['/colleagues']);
        return of(null);
      }));
    }
  }
