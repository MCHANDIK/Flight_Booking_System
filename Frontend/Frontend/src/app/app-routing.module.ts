import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightsComponent } from './addflights/addflights.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AuthGuardService } from './auth-guard.service';
import { AvailableflightsComponent } from './availableflights/availableflights.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookticketsComponent } from './booktickets/booktickets.component';
import { CancelticketsComponent } from './canceltickets/canceltickets.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageflightsComponent } from './manageflights/manageflights.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { UpdateflightsComponent } from './updateflights/updateflights.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserticketinfoComponent } from './userticketinfo/userticketinfo.component';
import { PaymentComponent } from './payment/payment.component';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { AdminuserdetailsComponent } from './adminuserdetails/adminuserdetails.component';

const routes: Routes = [{ path: '', redirectTo:'home', pathMatch: 'full'},
                        { path:'home', component:HomeComponent},
                        { path:'adminhome', component:AdminhomeComponent, canActivate:[AuthGuardService]},
                        { path:'userhome', component:UserhomeComponent, canActivate:[AuthGuardService]},
                        { path:'userdashboard', component:UserdashboardComponent, canActivate:[AuthGuardService]},
                        { path:'userreg', component:RegisteruserComponent},
                        { path:'userLogin', component:LoginuserComponent},
                        { path:'AdminLogin', component:LoginadminComponent},
                        { path:'addflights', component:AddflightsComponent, canActivate:[AuthGuardService]},
                        { path:'manageflights', component:ManageflightsComponent, canActivate:[AuthGuardService]},
                        { path:'updateflights/:flightNo', component:UpdateflightsComponent, canActivate:[AuthGuardService]},
                        { path:'searchflights', component:SearchflightsComponent},
                        { path:'availableflights', component:AvailableflightsComponent, canActivate:[AuthGuardService]},
                        { path:'booktickets/:flightNo', component:BookticketsComponent, canActivate:[AuthGuardService]},
                        { path:'canceltickets', component:CancelticketsComponent, canActivate:[AuthGuardService]},
                        { path:'aduser', component:AdminuserdetailsComponent},
                        { path:'bookingdetails', component:BookingdetailsComponent, canActivate:[AuthGuardService]},
                        { path:'logout', component:LogoutComponent, canActivate:[AuthGuardService]},
                        { path:'userticketinfo', component:UserticketinfoComponent},
                        { path:'flightsdetails', component:UserDetailsComponent},
                       
                        {path:'pay',component:PaymentComponent},
                        {path:'mob',component:MobiledetailsComponent},
                        { path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UserDetailsComponent,PageNotFoundComponent];
