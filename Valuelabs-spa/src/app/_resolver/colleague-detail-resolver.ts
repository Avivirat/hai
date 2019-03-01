import { ColleagueDetailedComponent } from './../colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/User.service';
import { resolve } from 'url';
import { observable, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ColleagueDetailresolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {}


  resolve(route: ActivatedRouteSnapshot): Observable<User> {
      return this.userService.getUser(route.params['id']).pipe(catchError(error => {
        console.log("problem");
        this.router.navigate(['/colleagues']);
        return of(null);
      }));
    }
  }
