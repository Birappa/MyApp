import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap';
import {TokenInterceptor} from "./core/interceptor";
import { ApiService } from './core/api.service';
import { routing } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { OffersComponent } from './offers/offers.component';
import { SearchComponent } from './search/search.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { FlightSectionComponent } from './flight-section/flight-section.component';
import { FlightBookComponent } from './flight-book/flight-book.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import {AboutUsComponent} from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    NavComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent, 
    OffersComponent,  
    SearchComponent,  
    ListFlightComponent, 
    FlightSectionComponent, 
    FlightBookComponent,
    PassengerDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapSliderModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
