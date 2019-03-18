import { ToastrService } from 'ngx-toastr';
import { ColleagueDetailedComponent } from '../colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/User.service';
import { resolve } from 'url';
import { observable, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColleagueListresolver implements Resolve<User[]> {
  pageNumber = 1;
  pageSize = 5;
  constructor(private userService: UserService, private router: Router,private toastr:ToastrService) {}


  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
      return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(catchError(error => {
        this.toastr.error("problem");
        this.router.navigate(['/home']);
        return of(null);
      }));
    }
  }
