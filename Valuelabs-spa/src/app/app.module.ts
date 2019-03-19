import { Messagesresolver } from './_resolver/message.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ColleagueEditresolver } from './_resolver/colleague-edit-resolver';
import { ColleagueDetailedComponent } from './colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { TabsModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { AuthGuard } from './_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {TimeAgoPipe} from 'time-ago-pipe';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ColleagueEditComponent } from './colleaguesmaster/colleague-edit/colleague-edit.component';
import { PhotoEditorComponent } from './colleaguesmaster/photo-editor/photo-editor.component';
import { Listresolver } from './_resolver/lists.resolver';



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
      ColleagueDetailedComponent,
      ColleagueEditComponent,
      PhotoEditorComponent,
      TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
       // required animations module
      ToastrModule.forRoot(),
      TabsModule.forRoot(),
      ButtonsModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      PaginationModule.forRoot(),
      NgxGalleryModule,
      FileUploadModule,
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
      PreventUnsavedChanges,
      ErrorInterceptorProvider,
      UserService,
      ColleagueDetailresolver,
      ColleagueListresolver,
      ColleagueEditresolver,
      Listresolver,
      Messagesresolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
