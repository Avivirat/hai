import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
 import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  JwtHelper = new JwtHelperService();
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) {
      this.authService.decodedToken = this.JwtHelper.decodeToken(token);
    }
  }
}
