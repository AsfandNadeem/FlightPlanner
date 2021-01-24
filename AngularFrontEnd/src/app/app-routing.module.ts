import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {CitiesComponent} from "./admin/cities/cities.component";
import {FlightsComponent} from "./admin/flights/flights.component";
import {LoginComponent} from "./user/login/login.component";
import {FlightPlanComponent} from "./user/flight-plan/flight-plan.component";
import {AuthGuard} from "./shared/auth.guard";
import {AdminPageComponent} from "./admin/admin-page/admin-page.component";

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{
      path: '', component: SignUpComponent
    }]
  }, {
    path: 'adminpage', component: AdminPageComponent
  },
  {
    path: 'login', component: UserComponent,
    children: [{
      path: '', component: LoginComponent
    }]
  },
  {
    path: '', redirectTo: '/login', pathMatch:  'full'
  },
  {
    path: 'admin', component: AdminComponent,
    children: [{
      path: '', component: AdminLoginComponent
    }]
  },
  {
    path: 'cities', component: CitiesComponent
  },
  {
    path: 'flights', component: FlightsComponent
  },
  {
    path: 'flightplan', component: FlightPlanComponent , canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
