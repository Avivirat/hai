import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../_services/User.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { Pagination, PaginationResult } from 'src/app/_models/Pagination';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css']
})
export class ColleaguesComponent implements OnInit {

  users: User[];
  user: User = JSON.parse(localStorage.getItem('user'));
  genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'Females'}];
  userParams: any = {};
  pagination: Pagination;
  constructor(private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });
    this.userParams.gender =  this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 10;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
  }

  pageChanged(event: any):void {
    this.pagination.CurrentPage = event.page;
    this.loadUsers();
  }
  resetFilters(){
    this.userParams.gender =  this.user.gender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 10;
    this.userParams.maxAge = 99;
    this.loadUsers();
  }
loadUsers()
{
  this.userService.getUsers(this.pagination.CurrentPage, this.pagination.ItemsPerPage, this.userParams).subscribe((res: PaginationResult<User[]>) => {
    this.users = res.result;
  }, error => {
    this.toastr.error(error);
  });
}
}
