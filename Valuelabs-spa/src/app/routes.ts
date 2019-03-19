import { Messagesresolver } from './_resolver/message.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { CanDeactivate } from '@angular/router';
import { ColleagueEditresolver } from './_resolver/colleague-edit-resolver';
import { ColleagueEditComponent } from './colleaguesmaster/colleague-edit/colleague-edit.component';
import { ColleagueDetailedComponent } from './colleaguesmaster/colleagueDetailed/colleagueDetailed.component';
import { AuthGuard } from './_guards/auth.guard';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColleaguesComponent } from './colleaguesmaster/colleagues/colleagues.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChatboXComponent } from './ChatboX/ChatboX.component';
import { ColleagueDetailresolver } from './_resolver/colleague-detail-resolver';
import { ColleagueListresolver } from './_resolver/colleague-list-resolver';
import { Listresolver } from './_resolver/lists.resolver';



export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
    { path: 'colleagues', component: ColleaguesComponent, resolve: {users : ColleagueListresolver}},
    {path: 'colleagues/edit', component: ColleagueEditComponent, resolve: {user: ColleagueEditresolver}, canDeactivate: [PreventUnsavedChanges]},
    { path: 'colleagues/:id', component: ColleagueDetailedComponent, resolve: {user: ColleagueDetailresolver}},
    { path: 'activities', component: ActivitiesComponent, resolve: {users: Listresolver}},
    { path: 'ChatboX', component: ChatboXComponent, resolve: {messages: Messagesresolver}},
    {path: '', component: HomeComponent},
  ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},

];
