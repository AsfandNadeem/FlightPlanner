//builtin imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from "./shared/user.service";
import {AuthInterceptor} from './shared/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {NgxAutoScrollModule} from "ngx-auto-scroll";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";


//components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import { CitiesComponent } from './admin/cities/cities.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { LoginComponent } from './user/login/login.component';
import { FlightPlanComponent } from './user/flight-plan/flight-plan.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    AdminComponent,
    AdminLoginComponent,
    CitiesComponent,
    FlightsComponent,
    LoginComponent,
    FlightPlanComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    NgxAutoScrollModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
