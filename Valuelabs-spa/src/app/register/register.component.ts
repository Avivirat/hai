
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
      this.toastr.success('registration Successful \n Welcome to the world of Excitement');
    }, error => {
      this.toastr.error(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.toastr.show('cancelled');
  }
}
