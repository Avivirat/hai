import { AuthGuard } from './_guards/auth.guard';
import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChatboXComponent } from './ChatboX/ChatboX.component';



export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
    { path: 'colleagues', component: ColleaguesComponent},
    { path: 'activities', component: ActivitiesComponent},
    { path: 'ChatboX', component: ChatboXComponent},

  ]
  },
 { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
