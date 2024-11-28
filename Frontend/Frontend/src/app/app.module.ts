import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddflightsComponent } from './addflights/addflights.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManageflightsComponent } from './manageflights/manageflights.component';
import { UpdateflightsComponent } from './updateflights/updateflights.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { CancelticketsComponent } from './canceltickets/canceltickets.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthHttpInterceptorService } from './auth-http-interceptor.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserticketinfoComponent } from './userticketinfo/userticketinfo.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import { PaymentComponent } from './payment/payment.component';
import { CommonModule } from '@angular/common';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    AddflightsComponent,
    AdminhomeComponent,
    ManageflightsComponent,
    UpdateflightsComponent,
    SearchflightsComponent,
    HomeComponent,
    RegisteruserComponent,
    LoginuserComponent,
    UserhomeComponent,
    LoginadminComponent,
    BookingdetailsComponent,
    NavbaradminComponent,
    NavbaruserComponent,
    UserdashboardComponent,
    AvailableflightsComponent,
    BookticketsComponent,
    CancelticketsComponent,
    LogoutComponent,
    AdmindashboardComponent,
    UserticketinfoComponent,
    PaymentComponent,
    MobiledetailsComponent,
    AdminuserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    CardModule,
    TableModule,
    PanelModule,
    ButtonModule,
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
