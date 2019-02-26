import { AuthGuard } from './_guards/auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap';



import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Scr1Component } from './scr1/scr1.component';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChatboXComponent } from './ChatboX/ChatboX.component';
import { appRoutes } from './routes';




@NgModule({
   declarations: [
      AppComponent,
      Scr1Component,
      HomeComponent,
      RegisterComponent,
      ColleaguesComponent,
      ActivitiesComponent,
      ChatboXComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      AuthGuard,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
