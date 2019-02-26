
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scr1',
  templateUrl: './scr1.component.html',
  styleUrls: ['./scr1.component.css']
})
export class Scr1Component implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Welcome buddy!!');
    },
    error => {
      console.log(error);
    }, () => {
      this.router.navigate(['/colleagues']);
    }
    );
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Adios Amigo :)');
    this.router.navigate(['/home']);
  }
}
