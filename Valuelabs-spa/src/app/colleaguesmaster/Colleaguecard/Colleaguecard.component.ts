import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/User.service';

@Component({
  selector: 'app-Colleaguecard',
  templateUrl: './Colleaguecard.component.html',
  styleUrls: ['./Colleaguecard.component.css']
})
export class ColleaguecardComponent implements OnInit {
  @Input() user1: User;

  constructor(private authService: AuthService, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  sendLike(id: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.toastr.success('You have liked: '+ this.user1.knownAs);
    },error => {
      this.toastr.error(error);
    })
  }

}
