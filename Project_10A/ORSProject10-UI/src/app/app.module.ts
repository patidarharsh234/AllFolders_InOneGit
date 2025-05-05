import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';



import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent} from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import {RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import {MyprofileComponent} from './user/myprofile.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';

import { AppcontendNumberOnlyDirective } from './appcontend-number-only.directive';
import { AppcontendAlphabateOnlyDirective } from './appcontend-alphabate-only.directive';
import { ValidateNumberMinMaxDirectiveDirective } from './validate-number-min-max-directive.directive';
import { AppFirstLastNameDirective } from './app-first-last-name.directive';
import { AppcontentManyDecimalDirective } from './appcontent-many-decimal.directive';
import { DatePipe } from '@angular/common';
import { PersantageValueDirective } from './persantage-value.directive';

import { VerifyforgotpasswordOTPComponent } from './login/verifyforgotpassword-otp.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { MaxLengthNumberDirective } from './max-length-number.directive';

import { ClientComponent } from './test_client/client.component';
import { ClientlistComponent } from './test_client/clientlist.component';
import { CustomersComponent } from './test_customers/customers.component';
import { CustomerslistComponent } from './test_customers/customerslist.component';
import { InventoryComponent } from './test_inventory/inventory.component';
import { InventorylistComponent } from './test_inventory/inventorylist.component';
import { IssueComponent } from './test_issue/issue.component';
import { IssuelistComponent } from './test_issue/issuelist.component';
import { JobComponent } from './test_job/job.component';
import { JoblistComponent } from './test_job/joblist.component';
import { OrderComponent } from './test_order/order.component';
import { OrderlistComponent } from './test_order/orderlist.component';
import { OwnerComponent } from './test_owner/owner.component';
import { OwnerlistComponent } from './test_owner/ownerlist.component';
import { PatientComponent } from './test_patient/patient.component';
import { PatientlistComponent } from './test_patient/patientlist.component';
import { PrescriptionComponent } from './test_prescription/prescription.component';
import { PrescriptionlistComponent } from './test_prescription/prescriptionlist.component';
import { ProductdetailsComponent } from './test_productdetails/productdetails.component';
import { RouteComponent } from './test_route/route.component';
import { RoutelistComponent } from './test_route/routelist.component';
import { SalaryComponent } from './test_salary/salary.component';
import { SalarylistComponent } from './test_salary/salarylist.component';
import { ShoppingcartComponent } from './test_shoppingcart/shoppingcart.component';
import { ShoppingcartlistComponent } from './test_shoppingcart/shoppingcartlist.component';
import { SupplierComponent } from './test_supplier/supplier.component';
import { SupplierlistComponent } from './test_supplier/supplierlist.component';
import { VehicleComponent } from './test_vehicle/vehicle.component';
import { VehiclelistComponent } from './test_vehicle/vehiclelist.component';
import { VehicleTrackinglistComponent } from './test_VehicleTracking/vehicle-trackinglist.component';
import { VehicleTrackingComponent } from './test_vehicle-tracking/vehicle-tracking.component';
import { ProductdetailslistComponent } from './test_productdetails/productdetailslist.component';
import { UsersComponent } from './test_users/users.component';
import { UserslistComponent } from './test_users/userslist.component';















// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,
    RoleComponent,
    RoleListComponent,
    CourseComponent,
    CourseListComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    TimetableComponent,
    TimetableListComponent,
    FacultyComponent,
    FacultyListComponent,
  

    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ChangepasswordComponent,
    MyprofileComponent, 
    VerifyforgotpasswordOTPComponent,
   
    LoaderComponent,
    FileComponent,
    SpinnerComponent,
    JasperReportComponent,

    MaxLengthNumberDirective,
  AppcontendNumberOnlyDirective,
  AppcontendAlphabateOnlyDirective,
  ValidateNumberMinMaxDirectiveDirective,
  AppFirstLastNameDirective,
  AppcontentManyDecimalDirective,
  PersantageValueDirective,

  UsersComponent,
  UserslistComponent,
  ClientComponent,
  ClientlistComponent,
  CustomersComponent,
  CustomerslistComponent,
  InventoryComponent,
  InventorylistComponent,
  IssueComponent,
  IssuelistComponent,
  JobComponent,
  JoblistComponent,
  OrderComponent,
  OrderlistComponent,
  OwnerComponent,
  OwnerlistComponent,
  PatientComponent,
  PatientlistComponent,
  PrescriptionComponent,
  PrescriptionlistComponent,
  ProductdetailsComponent,
  ProductdetailslistComponent,
  RouteComponent,
  RoutelistComponent,
  SalaryComponent,
  SalarylistComponent,
  ShoppingcartComponent,
  ShoppingcartlistComponent,
  SupplierComponent,
  SupplierlistComponent,
  VehicleComponent,
  VehiclelistComponent,
  VehicleTrackinglistComponent,
  VehicleTrackingComponent
 
 ],

  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: myHttpLoader, 
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthService ,
     multi: true 
},
   HttpServiceService, 
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}