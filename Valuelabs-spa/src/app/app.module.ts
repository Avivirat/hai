import { ColleagueDetailedComponent } from './colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { TabsModule } from 'ngx-bootstrap';

import { AuthGuard } from './_guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import {NgxGalleryModule} from 'ngx-gallery';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Scr1Component } from './scr1/scr1.component';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ColleaguesComponent } from './colleaguesmaster/colleagues/colleagues.component';
import { ColleaguecardComponent } from './colleaguesmaster/Colleaguecard/Colleaguecard.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChatboXComponent } from './ChatboX/ChatboX.component';
import { appRoutes } from './routes';
import { UserService } from './_services/User.service';
import { ColleagueDetailresolver } from './_resolver/colleague-detail-resolver';
import { ColleagueListresolver } from './_resolver/colleague-list-resolver';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      Scr1Component,
      HomeComponent,
      RegisterComponent,
      ColleaguesComponent,
      ActivitiesComponent,
      ChatboXComponent,
      ColleaguecardComponent,
      ColleagueDetailedComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes:['localhost/5000/api/auth']
        }
      })
   ],
   providers: [
      AuthService,
      AuthGuard,
      ErrorInterceptorProvider,
      UserService,
      ColleagueDetailresolver,
      ColleagueListresolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
