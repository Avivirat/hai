import { AuthService } from './../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ColleagueDetailedComponent } from '../colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/User.service';
import { resolve } from 'url';
import { observable, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/message';

@Injectable()
export class Messagesresolver implements Resolve<Message[]> {
  pageNumber = 1;
  pageSize = 5;
  messageContainer = 'Unread';
  constructor(private userService: UserService,private authService: AuthService, private router: Router, private toastr: ToastrService) {}


  resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
      return this.userService.getMessages(this.authService.decodedToken.nameid,this.pageNumber, this.pageSize, this.messageContainer).pipe(catchError(error => {
        this.toastr.error('problem retreieving messages');
        this.router.navigate(['/home']);
        return of(null);
      }));
    }
  }
