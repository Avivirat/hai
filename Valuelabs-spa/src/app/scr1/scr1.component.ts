import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-scr1',
  templateUrl: './scr1.component.html',
  styleUrls: ['./scr1.component.css']
})
export class Scr1Component implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in success');
    },
    error => {
      console.log('failed login');
    }
    );
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !(!token);
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out');
  }
}
