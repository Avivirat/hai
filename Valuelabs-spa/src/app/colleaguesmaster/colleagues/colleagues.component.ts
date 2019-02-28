import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../_services/User.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-colleagues',
  templateUrl: './colleagues.component.html',
  styleUrls: ['./colleagues.component.css']
})
export class ColleaguesComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }
// loadUsers()
// {
//   this.userService.getUsers().subscribe((users: User[]) => {
//     this.users = users;
//   }, error => {
//     console.log(error);
//   });
// }
}
