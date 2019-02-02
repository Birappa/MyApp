import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { FlightSectionComponent } from './flight-section/flight-section.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { FlightBookComponent} from './flight-book/flight-book.component';
import { Component } from '@angular/core';
import { AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'flight-section', component: FlightSectionComponent },
  { path: 'list-flight', component: ListFlightComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path: 'review', component: FlightBookComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path : '',  redirectTo: '/home', pathMatch: 'full'}
  
];

export const routing = RouterModule.forRoot(routes);
