import { Router } from '@angular/router';

import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  registerForm: FormGroup;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    knownAs: new FormControl('', Validators.required),
    gender: new FormControl('male'),
    dateOfBirth: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new  FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    confirmPassword: new FormControl('', Validators.required)
  }, this.passwordMatchValidator )

}
passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
}
   register() {
     if (this.registerForm.valid)
     {
        this.user = Object.assign({}, this.registerForm.value);
        this.authService.register(this.user).subscribe(() => {
          this.toastr.success('registration Successful \n Welcome to the world of Excitement');
        }, error => {
          this.toastr.error('error');
        }, () => {
          this.authService.login(this.user).subscribe(() => {
            this.router.navigate(['/colleagues']);
          });
        });
     }
   }
  cancel() {
    this.cancelRegister.emit(false);
    this.toastr.error('cancelled');
  }
}
