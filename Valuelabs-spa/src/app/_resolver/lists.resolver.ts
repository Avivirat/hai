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
export class Listresolver implements Resolve<User[]> {
  pageNumber = 1;
  pageSize = 5;
  likesParam = 'Likers';
  constructor(private userService: UserService, private router: Router,private toastr:ToastrService) {}


  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
      return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(catchError(error => {
        this.toastr.error("problem");
        this.router.navigate(['/home']);
        return of(null);
      }));
    }
  }
