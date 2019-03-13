import { AuthService } from './../../_services/auth.service';
import { UserService } from 'src/app/_services/User.service';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { User } from "src/app/_models/user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-colleague-edit",
  templateUrl: "./colleague-edit.component.html",
  styleUrls: ["./colleague-edit.component.css"]
})
export class ColleagueEditComponent implements OnInit {
  @ViewChild("editForm") editForm: NgForm;
  user: User;
  photoUrl: string;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if(this.editForm.dirty)
    {
      $event.returnValue = true;
    }
  }
  constructor(private route: ActivatedRoute, private toastr: ToastrService, private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.toastr.success("Profile Updates Successfully");
      this.editForm.reset(this.user);
    },error => {
      this.toastr.error(error);
    });

  }
  updateMainPhoto(photourl)
  {
    this.user.photoUrl = photourl;
  }
}
