
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyprofileComponent } from './user/myprofile.component';
import { JasperReportComponent } from './jasper-report/jasper-report.component';





import { VerifyforgotpasswordOTPComponent } from './login/verifyforgotpassword-otp.component';
import { ClientComponent } from './test_client/client.component';
import { ClientlistComponent } from './test_client/clientlist.component';
import { VehicleComponent } from './test_vehicle/vehicle.component';
import { VehiclelistComponent } from './test_vehicle/vehiclelist.component';
import { PatientComponent } from './test_patient/patient.component';
import { PatientlistComponent } from './test_patient/patientlist.component';
import { RouteComponent } from './test_route/route.component';
import { RoutelistComponent } from './test_route/routelist.component';
import { PrescriptionComponent } from './test_prescription/prescription.component';
import { PrescriptionlistComponent } from './test_prescription/prescriptionlist.component';
import { SalaryComponent } from './test_salary/salary.component';
import { SalarylistComponent } from './test_salary/salarylist.component';

import { JobComponent } from './test_job/job.component';
import { JoblistComponent } from './test_job/joblist.component';

import { SupplierComponent } from './test_supplier/supplier.component';
import { SupplierlistComponent } from './test_supplier/supplierlist.component';
import { InventoryComponent } from './test_inventory/inventory.component';
import { InventorylistComponent } from './test_inventory/inventorylist.component';
import { OwnerComponent } from './test_owner/owner.component';
import { OwnerlistComponent } from './test_owner/ownerlist.component';
import { OrderComponent } from './test_order/order.component';
import { OrderlistComponent } from './test_order/orderlist.component';

import { ProductdetailsComponent } from './test_productdetails/productdetails.component';
import { ProductdetailslistComponent } from './test_productdetails/productdetailslist.component';
import { VehicleTrackinglistComponent } from './test_VehicleTracking/vehicle-trackinglist.component';
import { VehicleTrackingComponent } from './test_vehicle-tracking/vehicle-tracking.component';
import { UsersComponent } from './test_users/users.component';
import { UserslistComponent } from './test_users/userslist.component';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'verifyotp',
        component: VerifyforgotpasswordOTPComponent
    },
    {
        path: 'loader',
        component: LoaderComponent

    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },

    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,

    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent

    },
    {
        path: 'marksheet',
        component: MarksheetComponent

    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent

    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent

    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent

    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent

    },
    {
        path: 'college',
        component: CollegeComponent

    },
    {
        path: 'college/:id',
        component: CollegeComponent

    },
    {
        path: 'collegelist',
        component: CollegeListComponent

    },
    {
        path: 'student',
        component: StudentComponent

    },
    {
        path: 'student/:id',
        component: StudentComponent

    },
    {
        path: 'studentlist',
        component: StudentListComponent

    },
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'user/:id',
        component: UserComponent

    },
    {
        path: 'userlist',
        component: UserListComponent

    },

    {
        path: 'role',
        component: RoleComponent

    },
    {
        path: 'rolelist',
        component: RoleListComponent

    },
    {
        path: 'role/:id',
        component: RoleComponent

    },
    {
        path: 'course',
        component: CourseComponent

    },
    {
        path: 'courselist',
        component: CourseListComponent

    },
    {
        path: 'course/:id',
        component: CourseComponent

    },
    {

        path: 'faculty',
        component: FacultyComponent

    },
    {
        path: 'facultylist',
        component: FacultyListComponent

    },
    {
        path: 'faculty/:id',
        component: FacultyComponent

    },
    {
        path: 'timetable',
        component: TimetableComponent


    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'subject/:id',
        component: SubjectComponent

    },
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },
    {
        path: 'jasperReport',
        component: JasperReportComponent

     },
    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'client/:id',
        component: ClientComponent
    },
    {
        path: 'clientlist',
        component: ClientlistComponent
    },
    {
        path: 'vehicle',
        component: VehicleComponent
    },
    {
        path: 'vehicle/:id',
        component: VehicleComponent
    },
    {
        path: 'vehiclelist',
        component: VehiclelistComponent
    },
    {
        path: 'patient',
        component: PatientComponent
    },
    {
        path: 'patient/:id',
        component: PatientComponent
    },
    {
        path: 'patientlist',
        component: PatientlistComponent
    },
    {
        path: 'route',
        component: RouteComponent
    },
    {
        path: 'route/:id',
        component: RouteComponent
    },
    {
        path: 'routelist',
        component: RoutelistComponent
    },

    {
        path: 'prescription',
        component: PrescriptionComponent
    },
    {
        path: 'prescription/:id',
        component: PrescriptionComponent
    },
    {
        path: 'prescriptionlist',
        component: PrescriptionlistComponent
    },
    {
        path: 'salary',
        component: SalaryComponent
    },
    {
        path: 'salary/:id',
        component: SalaryComponent
    },
    {
        path: 'salarylist',
        component: SalarylistComponent
    }
    ,
    {
        path: 'productdetails',
        component: ProductdetailsComponent
    },
    {
        path: 'productdetails/:id',
        component: ProductdetailsComponent
    },
    {
        path: 'productdetailslist',
        component: ProductdetailslistComponent
    },
    {
        path: 'job',
        component: JobComponent
    },
    {
        path: 'job/:id',
        component: JobComponent
    },
    {
        path: 'joblist',
        component: JoblistComponent
    }
    ,
    {
        path: 'vehicletracking',
        component: VehicleTrackingComponent
    },
    {
        path: 'vehicletracking/:id',
        component: VehicleTrackingComponent
    },
    {
        path: 'vehicletrackinglist',
        component: VehicleTrackinglistComponent
    },
    {
        path: 'supplier',
        component: SupplierComponent
    },
    {
        path: 'supplier/:id',
        component: SupplierComponent
    },
    {
        path: 'supplierlist',
        component: SupplierlistComponent
    },
    {
        path: 'inventory',
        component: InventoryComponent
    },
    {
        path: 'inventory/:id',
        component: InventoryComponent
    },
    {
        path: 'inventorylist',
        component: InventorylistComponent
    },
    {
        path: 'owner',
        component: OwnerComponent
    },
    {
        path: 'owner/:id',
        component: OwnerComponent
    },
    {
        path: 'ownerlist',
        component: OwnerlistComponent
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'order/:id',
        component: OrderComponent
    },
    {
        path: 'orderlist',
        component: OrderlistComponent
     },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/:id',
        component: UsersComponent
    },
    {
        path: 'userslist',
        component: UserslistComponent
    }



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }