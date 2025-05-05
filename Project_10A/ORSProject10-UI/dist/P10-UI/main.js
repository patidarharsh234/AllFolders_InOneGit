(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-first-last-name.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/app-first-last-name.directive.ts ***!
  \**************************************************/
/*! exports provided: AppFirstLastNameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFirstLastNameDirective", function() { return AppFirstLastNameDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AppFirstLastNameDirective = /** @class */ (function () {
    function AppFirstLastNameDirective() {
        // Regex pattern to validate names in the format "Firstname Lastname"
        this.regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    }
    AppFirstLastNameDirective_1 = AppFirstLastNameDirective;
    AppFirstLastNameDirective.prototype.validate = function (control) {
        var value = control.value;
        // Check if the input value matches the regex pattern
        var isValid = this.regex.test(value);
        // Return an error object if invalid, otherwise return null
        return isValid ? null : { 'nameInvalid': true };
    };
    var AppFirstLastNameDirective_1;
    AppFirstLastNameDirective = AppFirstLastNameDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAppFirstLastName]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: AppFirstLastNameDirective_1, multi: true }]
        })
    ], AppFirstLastNameDirective);
    return AppFirstLastNameDirective;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");
/* harmony import */ var _login_verifyforgotpassword_otp_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/verifyforgotpassword-otp.component */ "./src/app/login/verifyforgotpassword-otp.component.ts");
/* harmony import */ var _test_client_client_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./test_client/client.component */ "./src/app/test_client/client.component.ts");
/* harmony import */ var _test_client_clientlist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./test_client/clientlist.component */ "./src/app/test_client/clientlist.component.ts");
/* harmony import */ var _test_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./test_vehicle/vehicle.component */ "./src/app/test_vehicle/vehicle.component.ts");
/* harmony import */ var _test_vehicle_vehiclelist_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./test_vehicle/vehiclelist.component */ "./src/app/test_vehicle/vehiclelist.component.ts");
/* harmony import */ var _test_patient_patient_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./test_patient/patient.component */ "./src/app/test_patient/patient.component.ts");
/* harmony import */ var _test_patient_patientlist_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./test_patient/patientlist.component */ "./src/app/test_patient/patientlist.component.ts");
/* harmony import */ var _test_route_route_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./test_route/route.component */ "./src/app/test_route/route.component.ts");
/* harmony import */ var _test_route_routelist_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./test_route/routelist.component */ "./src/app/test_route/routelist.component.ts");
/* harmony import */ var _test_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./test_prescription/prescription.component */ "./src/app/test_prescription/prescription.component.ts");
/* harmony import */ var _test_prescription_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./test_prescription/prescriptionlist.component */ "./src/app/test_prescription/prescriptionlist.component.ts");
/* harmony import */ var _test_salary_salary_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./test_salary/salary.component */ "./src/app/test_salary/salary.component.ts");
/* harmony import */ var _test_salary_salarylist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./test_salary/salarylist.component */ "./src/app/test_salary/salarylist.component.ts");
/* harmony import */ var _test_job_job_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./test_job/job.component */ "./src/app/test_job/job.component.ts");
/* harmony import */ var _test_job_joblist_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./test_job/joblist.component */ "./src/app/test_job/joblist.component.ts");
/* harmony import */ var _test_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./test_supplier/supplier.component */ "./src/app/test_supplier/supplier.component.ts");
/* harmony import */ var _test_supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./test_supplier/supplierlist.component */ "./src/app/test_supplier/supplierlist.component.ts");
/* harmony import */ var _test_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./test_inventory/inventory.component */ "./src/app/test_inventory/inventory.component.ts");
/* harmony import */ var _test_inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./test_inventory/inventorylist.component */ "./src/app/test_inventory/inventorylist.component.ts");
/* harmony import */ var _test_owner_owner_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./test_owner/owner.component */ "./src/app/test_owner/owner.component.ts");
/* harmony import */ var _test_owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./test_owner/ownerlist.component */ "./src/app/test_owner/ownerlist.component.ts");
/* harmony import */ var _test_order_order_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./test_order/order.component */ "./src/app/test_order/order.component.ts");
/* harmony import */ var _test_order_orderlist_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./test_order/orderlist.component */ "./src/app/test_order/orderlist.component.ts");
/* harmony import */ var _test_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./test_productdetails/productdetails.component */ "./src/app/test_productdetails/productdetails.component.ts");
/* harmony import */ var _test_productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./test_productdetails/productdetailslist.component */ "./src/app/test_productdetails/productdetailslist.component.ts");
/* harmony import */ var _test_VehicleTracking_vehicle_trackinglist_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./test_VehicleTracking/vehicle-trackinglist.component */ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.ts");
/* harmony import */ var _test_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./test_vehicle-tracking/vehicle-tracking.component */ "./src/app/test_vehicle-tracking/vehicle-tracking.component.ts");
/* harmony import */ var _test_users_users_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./test_users/users.component */ "./src/app/test_users/users.component.ts");
/* harmony import */ var _test_users_userslist_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./test_users/userslist.component */ "./src/app/test_users/userslist.component.ts");
































































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'verifyotp',
        component: _login_verifyforgotpassword_otp_component__WEBPACK_IMPORTED_MODULE_35__["VerifyforgotpasswordOTPComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseListComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__["SubjectListComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_25__["FileComponent"]
    },
    {
        path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__["ChangepasswordComponent"]
    },
    {
        path: 'jasperReport',
        component: _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_34__["JasperReportComponent"]
    },
    {
        path: 'client',
        component: _test_client_client_component__WEBPACK_IMPORTED_MODULE_36__["ClientComponent"]
    },
    {
        path: 'client/:id',
        component: _test_client_client_component__WEBPACK_IMPORTED_MODULE_36__["ClientComponent"]
    },
    {
        path: 'clientlist',
        component: _test_client_clientlist_component__WEBPACK_IMPORTED_MODULE_37__["ClientlistComponent"]
    },
    {
        path: 'vehicle',
        component: _test_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_38__["VehicleComponent"]
    },
    {
        path: 'vehicle/:id',
        component: _test_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_38__["VehicleComponent"]
    },
    {
        path: 'vehiclelist',
        component: _test_vehicle_vehiclelist_component__WEBPACK_IMPORTED_MODULE_39__["VehiclelistComponent"]
    },
    {
        path: 'patient',
        component: _test_patient_patient_component__WEBPACK_IMPORTED_MODULE_40__["PatientComponent"]
    },
    {
        path: 'patient/:id',
        component: _test_patient_patient_component__WEBPACK_IMPORTED_MODULE_40__["PatientComponent"]
    },
    {
        path: 'patientlist',
        component: _test_patient_patientlist_component__WEBPACK_IMPORTED_MODULE_41__["PatientlistComponent"]
    },
    {
        path: 'route',
        component: _test_route_route_component__WEBPACK_IMPORTED_MODULE_42__["RouteComponent"]
    },
    {
        path: 'route/:id',
        component: _test_route_route_component__WEBPACK_IMPORTED_MODULE_42__["RouteComponent"]
    },
    {
        path: 'routelist',
        component: _test_route_routelist_component__WEBPACK_IMPORTED_MODULE_43__["RoutelistComponent"]
    },
    {
        path: 'prescription',
        component: _test_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_44__["PrescriptionComponent"]
    },
    {
        path: 'prescription/:id',
        component: _test_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_44__["PrescriptionComponent"]
    },
    {
        path: 'prescriptionlist',
        component: _test_prescription_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_45__["PrescriptionlistComponent"]
    },
    {
        path: 'salary',
        component: _test_salary_salary_component__WEBPACK_IMPORTED_MODULE_46__["SalaryComponent"]
    },
    {
        path: 'salary/:id',
        component: _test_salary_salary_component__WEBPACK_IMPORTED_MODULE_46__["SalaryComponent"]
    },
    {
        path: 'salarylist',
        component: _test_salary_salarylist_component__WEBPACK_IMPORTED_MODULE_47__["SalarylistComponent"]
    },
    {
        path: 'productdetails',
        component: _test_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_58__["ProductdetailsComponent"]
    },
    {
        path: 'productdetails/:id',
        component: _test_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_58__["ProductdetailsComponent"]
    },
    {
        path: 'productdetailslist',
        component: _test_productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_59__["ProductdetailslistComponent"]
    },
    {
        path: 'job',
        component: _test_job_job_component__WEBPACK_IMPORTED_MODULE_48__["JobComponent"]
    },
    {
        path: 'job/:id',
        component: _test_job_job_component__WEBPACK_IMPORTED_MODULE_48__["JobComponent"]
    },
    {
        path: 'joblist',
        component: _test_job_joblist_component__WEBPACK_IMPORTED_MODULE_49__["JoblistComponent"]
    },
    {
        path: 'vehicletracking',
        component: _test_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_61__["VehicleTrackingComponent"]
    },
    {
        path: 'vehicletracking/:id',
        component: _test_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_61__["VehicleTrackingComponent"]
    },
    {
        path: 'vehicletrackinglist',
        component: _test_VehicleTracking_vehicle_trackinglist_component__WEBPACK_IMPORTED_MODULE_60__["VehicleTrackinglistComponent"]
    },
    {
        path: 'supplier',
        component: _test_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_50__["SupplierComponent"]
    },
    {
        path: 'supplier/:id',
        component: _test_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_50__["SupplierComponent"]
    },
    {
        path: 'supplierlist',
        component: _test_supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_51__["SupplierlistComponent"]
    },
    {
        path: 'inventory',
        component: _test_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_52__["InventoryComponent"]
    },
    {
        path: 'inventory/:id',
        component: _test_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_52__["InventoryComponent"]
    },
    {
        path: 'inventorylist',
        component: _test_inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_53__["InventorylistComponent"]
    },
    {
        path: 'owner',
        component: _test_owner_owner_component__WEBPACK_IMPORTED_MODULE_54__["OwnerComponent"]
    },
    {
        path: 'owner/:id',
        component: _test_owner_owner_component__WEBPACK_IMPORTED_MODULE_54__["OwnerComponent"]
    },
    {
        path: 'ownerlist',
        component: _test_owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_55__["OwnerlistComponent"]
    },
    {
        path: 'order',
        component: _test_order_order_component__WEBPACK_IMPORTED_MODULE_56__["OrderComponent"]
    },
    {
        path: 'order/:id',
        component: _test_order_order_component__WEBPACK_IMPORTED_MODULE_56__["OrderComponent"]
    },
    {
        path: 'orderlist',
        component: _test_order_orderlist_component__WEBPACK_IMPORTED_MODULE_57__["OrderlistComponent"]
    },
    {
        path: 'users',
        component: _test_users_users_component__WEBPACK_IMPORTED_MODULE_62__["UsersComponent"]
    },
    {
        path: 'users/:id',
        component: _test_users_users_component__WEBPACK_IMPORTED_MODULE_62__["UsersComponent"]
    },
    {
        path: 'userslist',
        component: _test_users_userslist_component__WEBPACK_IMPORTED_MODULE_63__["UserslistComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n  }\r\n  \r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  .app {\r\n    margin: 48px;\r\n  }\r\n  \r\n  .buttons {\r\n    display: flex;\r\n    max-width: 500px;\r\n    justify-content: space-evenly;\r\n    margin-bottom: 48px;\r\n\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5hcHAge1xyXG4gICAgbWFyZ2luOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuXHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./jasper-report/jasper-report.component */ "./src/app/jasper-report/jasper-report.component.ts");
/* harmony import */ var _appcontend_number_only_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./appcontend-number-only.directive */ "./src/app/appcontend-number-only.directive.ts");
/* harmony import */ var _appcontend_alphabate_only_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./appcontend-alphabate-only.directive */ "./src/app/appcontend-alphabate-only.directive.ts");
/* harmony import */ var _validate_number_min_max_directive_directive__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./validate-number-min-max-directive.directive */ "./src/app/validate-number-min-max-directive.directive.ts");
/* harmony import */ var _app_first_last_name_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./app-first-last-name.directive */ "./src/app/app-first-last-name.directive.ts");
/* harmony import */ var _appcontent_many_decimal_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./appcontent-many-decimal.directive */ "./src/app/appcontent-many-decimal.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _persantage_value_directive__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./persantage-value.directive */ "./src/app/persantage-value.directive.ts");
/* harmony import */ var _login_verifyforgotpassword_otp_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./login/verifyforgotpassword-otp.component */ "./src/app/login/verifyforgotpassword-otp.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _max_length_number_directive__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./max-length-number.directive */ "./src/app/max-length-number.directive.ts");
/* harmony import */ var _test_client_client_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./test_client/client.component */ "./src/app/test_client/client.component.ts");
/* harmony import */ var _test_client_clientlist_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./test_client/clientlist.component */ "./src/app/test_client/clientlist.component.ts");
/* harmony import */ var _test_customers_customers_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./test_customers/customers.component */ "./src/app/test_customers/customers.component.ts");
/* harmony import */ var _test_customers_customerslist_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./test_customers/customerslist.component */ "./src/app/test_customers/customerslist.component.ts");
/* harmony import */ var _test_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./test_inventory/inventory.component */ "./src/app/test_inventory/inventory.component.ts");
/* harmony import */ var _test_inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./test_inventory/inventorylist.component */ "./src/app/test_inventory/inventorylist.component.ts");
/* harmony import */ var _test_issue_issue_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./test_issue/issue.component */ "./src/app/test_issue/issue.component.ts");
/* harmony import */ var _test_issue_issuelist_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./test_issue/issuelist.component */ "./src/app/test_issue/issuelist.component.ts");
/* harmony import */ var _test_job_job_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./test_job/job.component */ "./src/app/test_job/job.component.ts");
/* harmony import */ var _test_job_joblist_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./test_job/joblist.component */ "./src/app/test_job/joblist.component.ts");
/* harmony import */ var _test_order_order_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./test_order/order.component */ "./src/app/test_order/order.component.ts");
/* harmony import */ var _test_order_orderlist_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./test_order/orderlist.component */ "./src/app/test_order/orderlist.component.ts");
/* harmony import */ var _test_owner_owner_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./test_owner/owner.component */ "./src/app/test_owner/owner.component.ts");
/* harmony import */ var _test_owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./test_owner/ownerlist.component */ "./src/app/test_owner/ownerlist.component.ts");
/* harmony import */ var _test_patient_patient_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./test_patient/patient.component */ "./src/app/test_patient/patient.component.ts");
/* harmony import */ var _test_patient_patientlist_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./test_patient/patientlist.component */ "./src/app/test_patient/patientlist.component.ts");
/* harmony import */ var _test_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./test_prescription/prescription.component */ "./src/app/test_prescription/prescription.component.ts");
/* harmony import */ var _test_prescription_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./test_prescription/prescriptionlist.component */ "./src/app/test_prescription/prescriptionlist.component.ts");
/* harmony import */ var _test_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./test_productdetails/productdetails.component */ "./src/app/test_productdetails/productdetails.component.ts");
/* harmony import */ var _test_route_route_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./test_route/route.component */ "./src/app/test_route/route.component.ts");
/* harmony import */ var _test_route_routelist_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./test_route/routelist.component */ "./src/app/test_route/routelist.component.ts");
/* harmony import */ var _test_salary_salary_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./test_salary/salary.component */ "./src/app/test_salary/salary.component.ts");
/* harmony import */ var _test_salary_salarylist_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./test_salary/salarylist.component */ "./src/app/test_salary/salarylist.component.ts");
/* harmony import */ var _test_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./test_shoppingcart/shoppingcart.component */ "./src/app/test_shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _test_shoppingcart_shoppingcartlist_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./test_shoppingcart/shoppingcartlist.component */ "./src/app/test_shoppingcart/shoppingcartlist.component.ts");
/* harmony import */ var _test_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./test_supplier/supplier.component */ "./src/app/test_supplier/supplier.component.ts");
/* harmony import */ var _test_supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./test_supplier/supplierlist.component */ "./src/app/test_supplier/supplierlist.component.ts");
/* harmony import */ var _test_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./test_vehicle/vehicle.component */ "./src/app/test_vehicle/vehicle.component.ts");
/* harmony import */ var _test_vehicle_vehiclelist_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./test_vehicle/vehiclelist.component */ "./src/app/test_vehicle/vehiclelist.component.ts");
/* harmony import */ var _test_VehicleTracking_vehicle_trackinglist_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./test_VehicleTracking/vehicle-trackinglist.component */ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.ts");
/* harmony import */ var _test_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./test_vehicle-tracking/vehicle-tracking.component */ "./src/app/test_vehicle-tracking/vehicle-tracking.component.ts");
/* harmony import */ var _test_productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./test_productdetails/productdetailslist.component */ "./src/app/test_productdetails/productdetailslist.component.ts");
/* harmony import */ var _test_users_users_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./test_users/users.component */ "./src/app/test_users/users.component.ts");
/* harmony import */ var _test_users_userslist_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./test_users/userslist.component */ "./src/app/test_users/userslist.component.ts");




























































































// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_55__["PageNotFoundComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_9__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetmarksheetComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_10__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_11__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_26__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_27__["CourseComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__["CourseListComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__["TimetableListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__["ChangepasswordComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_45__["MyprofileComponent"],
                _login_verifyforgotpassword_otp_component__WEBPACK_IMPORTED_MODULE_54__["VerifyforgotpasswordOTPComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_34__["FileComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                _jasper_report_jasper_report_component__WEBPACK_IMPORTED_MODULE_46__["JasperReportComponent"],
                _max_length_number_directive__WEBPACK_IMPORTED_MODULE_56__["MaxLengthNumberDirective"],
                _appcontend_number_only_directive__WEBPACK_IMPORTED_MODULE_47__["AppcontendNumberOnlyDirective"],
                _appcontend_alphabate_only_directive__WEBPACK_IMPORTED_MODULE_48__["AppcontendAlphabateOnlyDirective"],
                _validate_number_min_max_directive_directive__WEBPACK_IMPORTED_MODULE_49__["ValidateNumberMinMaxDirectiveDirective"],
                _app_first_last_name_directive__WEBPACK_IMPORTED_MODULE_50__["AppFirstLastNameDirective"],
                _appcontent_many_decimal_directive__WEBPACK_IMPORTED_MODULE_51__["AppcontentManyDecimalDirective"],
                _persantage_value_directive__WEBPACK_IMPORTED_MODULE_53__["PersantageValueDirective"],
                _test_users_users_component__WEBPACK_IMPORTED_MODULE_89__["UsersComponent"],
                _test_users_userslist_component__WEBPACK_IMPORTED_MODULE_90__["UserslistComponent"],
                _test_client_client_component__WEBPACK_IMPORTED_MODULE_57__["ClientComponent"],
                _test_client_clientlist_component__WEBPACK_IMPORTED_MODULE_58__["ClientlistComponent"],
                _test_customers_customers_component__WEBPACK_IMPORTED_MODULE_59__["CustomersComponent"],
                _test_customers_customerslist_component__WEBPACK_IMPORTED_MODULE_60__["CustomerslistComponent"],
                _test_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_61__["InventoryComponent"],
                _test_inventory_inventorylist_component__WEBPACK_IMPORTED_MODULE_62__["InventorylistComponent"],
                _test_issue_issue_component__WEBPACK_IMPORTED_MODULE_63__["IssueComponent"],
                _test_issue_issuelist_component__WEBPACK_IMPORTED_MODULE_64__["IssuelistComponent"],
                _test_job_job_component__WEBPACK_IMPORTED_MODULE_65__["JobComponent"],
                _test_job_joblist_component__WEBPACK_IMPORTED_MODULE_66__["JoblistComponent"],
                _test_order_order_component__WEBPACK_IMPORTED_MODULE_67__["OrderComponent"],
                _test_order_orderlist_component__WEBPACK_IMPORTED_MODULE_68__["OrderlistComponent"],
                _test_owner_owner_component__WEBPACK_IMPORTED_MODULE_69__["OwnerComponent"],
                _test_owner_ownerlist_component__WEBPACK_IMPORTED_MODULE_70__["OwnerlistComponent"],
                _test_patient_patient_component__WEBPACK_IMPORTED_MODULE_71__["PatientComponent"],
                _test_patient_patientlist_component__WEBPACK_IMPORTED_MODULE_72__["PatientlistComponent"],
                _test_prescription_prescription_component__WEBPACK_IMPORTED_MODULE_73__["PrescriptionComponent"],
                _test_prescription_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_74__["PrescriptionlistComponent"],
                _test_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_75__["ProductdetailsComponent"],
                _test_productdetails_productdetailslist_component__WEBPACK_IMPORTED_MODULE_88__["ProductdetailslistComponent"],
                _test_route_route_component__WEBPACK_IMPORTED_MODULE_76__["RouteComponent"],
                _test_route_routelist_component__WEBPACK_IMPORTED_MODULE_77__["RoutelistComponent"],
                _test_salary_salary_component__WEBPACK_IMPORTED_MODULE_78__["SalaryComponent"],
                _test_salary_salarylist_component__WEBPACK_IMPORTED_MODULE_79__["SalarylistComponent"],
                _test_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_80__["ShoppingcartComponent"],
                _test_shoppingcart_shoppingcartlist_component__WEBPACK_IMPORTED_MODULE_81__["ShoppingcartlistComponent"],
                _test_supplier_supplier_component__WEBPACK_IMPORTED_MODULE_82__["SupplierComponent"],
                _test_supplier_supplierlist_component__WEBPACK_IMPORTED_MODULE_83__["SupplierlistComponent"],
                _test_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_84__["VehicleComponent"],
                _test_vehicle_vehiclelist_component__WEBPACK_IMPORTED_MODULE_85__["VehiclelistComponent"],
                _test_VehicleTracking_vehicle_trackinglist_component__WEBPACK_IMPORTED_MODULE_86__["VehicleTrackinglistComponent"],
                _test_vehicle_tracking_vehicle_tracking_component__WEBPACK_IMPORTED_MODULE_87__["VehicleTrackingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_52__["DatePipe"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _auth_service__WEBPACK_IMPORTED_MODULE_44__["AuthService"],
                    multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appcontend-alphabate-only.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/appcontend-alphabate-only.directive.ts ***!
  \********************************************************/
/*! exports provided: AppcontendAlphabateOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppcontendAlphabateOnlyDirective", function() { return AppcontendAlphabateOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppcontendAlphabateOnlyDirective = /** @class */ (function () {
    function AppcontendAlphabateOnlyDirective() {
    }
    AppcontendAlphabateOnlyDirective.prototype.onKeyDown = function (event) {
        var key = event.key;
        // Allow control keys such as backspace, delete, tab, escape, enter, and arrow keys
        if (key === 'Backspace' || key === 'Delete' || key === 'Tab' || key === 'Escape' || key === 'Enter' ||
            (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown')) {
            return;
        }
        // Prevent numbers
        if (!/[A-Za-z\s]/.test(key)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppcontendAlphabateOnlyDirective.prototype, "onKeyDown", null);
    AppcontendAlphabateOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appcontendAlphabateOnly]'
        })
    ], AppcontendAlphabateOnlyDirective);
    return AppcontendAlphabateOnlyDirective;
}());



/***/ }),

/***/ "./src/app/appcontend-number-only.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/appcontend-number-only.directive.ts ***!
  \*****************************************************/
/*! exports provided: AppcontendNumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppcontendNumberOnlyDirective", function() { return AppcontendNumberOnlyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppcontendNumberOnlyDirective = /** @class */ (function () {
    function AppcontendNumberOnlyDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^\d*\.?\d{0,2}\.?\d{0,2}$/);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];
    }
    AppcontendNumberOnlyDirective.prototype.onKeyDown = function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    AppcontendNumberOnlyDirective.prototype.onInputChange = function (event) {
        var initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
        if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppcontendNumberOnlyDirective.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppcontendNumberOnlyDirective.prototype, "onInputChange", null);
    AppcontendNumberOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appcontendNumberOnly]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppcontendNumberOnlyDirective);
    return AppcontendNumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/appcontent-many-decimal.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/appcontent-many-decimal.directive.ts ***!
  \******************************************************/
/*! exports provided: AppcontentManyDecimalDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppcontentManyDecimalDirective", function() { return AppcontentManyDecimalDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppcontentManyDecimalDirective = /** @class */ (function () {
    function AppcontentManyDecimalDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];
    }
    AppcontentManyDecimalDirective.prototype.onKeyDown = function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    AppcontentManyDecimalDirective.prototype.onInputChange = function (event) {
        var initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9.]*/g, '');
        if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppcontentManyDecimalDirective.prototype, "onKeyDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppcontentManyDecimalDirective.prototype, "onInputChange", null);
    AppcontentManyDecimalDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAppcontentManyDecimal]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppcontentManyDecimalDirective);
    return AppcontentManyDecimalDirective;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.intercept = function (req, next) {
        var _this = this;
        console.log('auth request-response');
        var modifiedRequest = req.clone({
            withCredentials: true
        });
        // const sessionId = sessionStorage.getItem("sessionId");
        if (localStorage.getItem('fname') && localStorage.getItem('token')) {
            modifiedRequest = modifiedRequest.clone({
                setHeaders: {
                    "name": "Harsh",
                    // 'sessionId':sessionId,
                    Authorization: this.http.getToken(),
                    jsessionid: this.http.getJsessionid()
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(modifiedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['/login'], { queryParams: { errorMessage: error.error }, });
            }
            if (error.status === 403) {
                localStorage.clear();
                _this.router.navigate(['/login'], { queryParams: { errorMessage: "Your Session has been Expired! Please Re-Login" } });
            }
            //--->FrontCtl se message lane ke tiem pr na ki jwtRequestFilter pr.
            //  if (error.status === 403) {
            //   localStorage.clear();
            //   this.router.navigate(['/login'],{ queryParams: { errorMessage: error.error} }  );
            //  }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        _this.alphabateRegex = /[A-Za-z\s]/;
        _this.numberRegex = /^\d+(\.\d{1,2})?$/;
        _this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        _this.phoneNoRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
        _this.PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        _this.numbetrPresentRegex = /^\d+(\.\d+)?%$/;
        _this.nameFirstLastCharaCapitalRegex = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
        _this.interestRateRegex = /^(100(\.00?)?|([1-9]?[0-9])(\.\d{1,2})?)%$/;
        _this.numberOneTONintey = /^([1-9]|[1-8][0-9]|90)$/;
        _this.AlphabateWithMaxLengthRegex = /^[a-zA-Z ]{1,80}$/;
        _this.titleRegex = /^[a-zA-Z ]{1,40}$/;
        _this.versionRegex = /^\d{1,2}(\.\d{1,2}){0,2}$/;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false; //for select all
    };
    /**
      * Valid validat Email regex Pattern
      * invalid Email pelese write correct Email like:-harsh@gmail.com
      */
    BaseListCtl.prototype.validatEmail = function () {
        this.form.emailInvalid = false;
        var value = this.form.searchParams.login;
        // Email
        if (value.trim() !== "" && !this.emailRegex.test(value)) {
            this.form.emailInvalid = true;
        }
        else {
            this.form.emailInvalid = false;
        }
        return this.form.emailInvalid;
    };
    /**
     * Valid validat Alphabate  regex Pattern With length
     * invalid Alphabate Maxlength
     * This filed content alphabate and max lent is 80.
     */
    BaseListCtl.prototype.validatAlphabate = function (event, field) {
        this.form.alphabateInvalid = false;
        var value = event.target.value;
        // Email
        if (value.trim() !== "" && !this.AlphabateWithMaxLengthRegex.test(value)) {
            this.form.alphabateInvalid = true;
        }
        else {
            this.form.alphabateInvalid = false;
        }
        return this.form.alphabateInvalid;
    };
    /**
     * Valid validat tital  regex Pattern With length
     * invalid Alphabate Maxlength
     * This filed content alphabate and max lent is 40.
     */
    BaseListCtl.prototype.validatTitle = function () {
        this.form.titleInvalid = false;
        var value = this.form.searchParams.title;
        // Email
        if (value.trim() !== "" && !this.titleRegex.test(value)) {
            this.form.titleInvalid = true;
        }
        else {
            this.form.titleInvalid = false;
        }
        return this.form.titleInvalid;
    };
    /**
     * Valid validat Name regex Pattern
     * "This Flied content alphabate and Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.
     */
    BaseListCtl.prototype.validatName = function () {
        this.form.nameInvalid = false;
        var value = this.form.searchParams.name;
        // name
        if (value.trim() !== "" && !this.nameFirstLastCharaCapitalRegex.test(value)) {
            this.form.nameInvalid = true;
        }
        else {
            this.form.nameInvalid = false;
        }
        return this.form.nameInvalid;
    };
    /**
      * Valid validate Number min=1 /maxi=90  regex Pattern
      * this filed content min =   value and max=   value
      */
    BaseListCtl.prototype.validateNumber = function () {
        var value = this.form.searchParams.quantity;
        var numValue = Number(value);
        if (value !== "" && (isNaN(numValue) || numValue < 0 || numValue > 400000)) {
            this.form.numberInvalid = true;
        }
        else {
            this.form.numberInvalid = false;
        }
        return this.form.numberInvalid;
    };
    BaseListCtl.prototype.validateNumber2 = function () {
        var value = this.form.searchParams.quantity;
        var numValue = Number(value);
        if (value !== "" && (isNaN(numValue) || numValue < 0 || numValue > 400000)) {
            this.form.number2Invalid = true;
        }
        else {
            this.form.number2Invalid = false;
        }
        return this.form.number2Invalid;
    };
    /**
     * Valid validate phoneNo
     * "This PhoneNo  contain only Number and number starts with 6,7,8,9 and contain 10 digits "
     */
    BaseListCtl.prototype.ValidPhone = function () {
        this.form.phoneNoInvalid = false;
        var value = this.form.searchParams.mobile;
        var strValue = String(value);
        if (strValue.trim() !== "" && !this.phoneNoRegex.test(strValue)) {
            this.form.phoneNoInvalid = true;
        }
        else {
            this.form.phoneNoInvalid = false;
        }
    };
    /**
    * Valid validate password
    * "This password must contain at least one letter, digit, or special character and 8 characters "
    */
    BaseListCtl.prototype.validatePassword = function () {
        this.form.passwordInvalid = false;
        // Quantity
        var value = this.form.searchParams.password;
        // Convert value to a string
        var strValue = String(value);
        if (strValue.trim() !== "" && !this.PasswordRegex.test(strValue)) {
            this.form.passwordInvalid = true;
        }
        else {
            this.form.passwordInvalid = false;
        }
    };
    //  /**      JATIN VALIDATION
    //     * Valid Filed regex Pattern
    //     */
    //   validateQuantity() {
    //     const quantity = this.form.searchParams.quantity;
    //     if (quantity === null || isNaN(Number(quantity)) || Number(quantity) <= 0 || Number(quantity) > 1000) {
    //       this.form.inputerror.quantity = 'Invalid quantity. Please enter a number between 1 and 1000.';
    //     } else {
    //       this.form.inputerror.quantity = ''; // Clear error message if quantity is valid
    //     }
    //   }
    // Clear quantity input error message when field is cleared
    BaseListCtl.prototype.submit = function () {
        this.isMasterSel = false;
        this.form.pageNo = 0;
        this.search();
    };
    //me created->reset
    BaseListCtl.prototype.refresh = function () {
        this.isMasterSel = false;
        this.form.pageNo = 0;
        this.form.searchParams = {};
        this.search();
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.isMasterSel = false;
        this.search();
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            this.isMasterSel = false;
            this.search();
            // this.searchOperation('previous');    
        }
    };
    //use krna he y
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    //selectAll
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        //singl checkboxes he ->forEach ki help se nikalte ja re and checked krte ja re
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
            console.log(element.nativeElement.firstName);
        });
    };
    //sare singal checkbox true hone pr ->selectAll checkbox trueS
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false; //oll Tiem false
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            //ak bar click kiya checbox pr ye methode run-2nd time click kiya checbox pr vaps ye methode run hogi.
            if (element.nativeElement.checked) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true; //particularly point pr true.
        }
    };
    //delete 
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        this.form.error = false;
        this.deleteRecordList.length = 0;
        var isSelectedRecord = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isSelectedRecord = true;
            }
        });
        if (isSelectedRecord) {
            console.log('pageNo.........!!!!!!======', this.form.pageNo);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo);
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
        }
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            inputerror: {},
            data: { id: null, },
            searchParams: {},
            list: [],
            preload: [],
            pageNo: 0,
            searchMessage: null //search result message
        };
        this.nextList = 0;
        this.dateOptions = [
            '2024-07-01',
            '2024-07-02',
            '2024-07-03',
        ];
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        _self.serviceLocator.getPathVariable(_self.route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        console.log("endpoint=>", ep);
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        var _self = this;
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    BaseCtl.prototype.forward = function (page) {
        this.serviceLocator.forward(page);
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function success(res) {
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        }, function fail(error) { console.log(error); });
    };
    /**
   * Contains display logic. It fetches data from database for the primary key
   */
    //update pr work
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log(' display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            _self.form.message = null;
            _self.form.error = !res.success;
            if (res.success) {
                // _self.form.data=res.result.data;//my way directly-fromdatabase.
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.data = {};
                //_self.form.data=res.result.data;//may way directy-fromdatabase.
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.search = function () {
        var _self = this;
        console.log('search--start');
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            _self.form.error = !res.success;
            _self.form.message = null;
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            //res.false aayega hi nhi vha backend se false kr ke nahi bheja.
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
            }
            else {
                //run time pr analysis->res.success false hoga to ->error bhi false hona chahiye.
                //  _self.form.error = ! res.success;
                _self.form.list = []; //list clear karne ke liye.
                _self.nextList = 0; //next disabel ke liye.
            }
        });
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log("submit start running", this.form);
        console.log("form data going to be submit" + this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.data = {};
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = false;
            _self.form.error = !res.success;
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.success) {
                _self.form.data.id = res.result.data;
                //return _self.form.data.id ;
            }
            //agr new data add ke bad add khule hi khulvana to ho Id=0 kar do.
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.deleteMany = function (id) {
        var _self = this; //(http://localhost:8080/User/deleteManey+ "/" + deleteRecourdList + "?pageNo=" +this.form.pageNo ,this.serachParam,function(res) {  } )
        //(http://localhost:8080/User/deleteManey /id?pageNo=0, searchParam)
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.searchParams, function (res) {
            _self.form.error = !res.success;
            _self.form.message = '';
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
            }
            else {
                _self.form.list = [];
                _self.nextList = 0;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.searchOperation = function (operation) {
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
 * Populate HTML form data
 * Overridden by child classes.
 *
 * @param form
 * @param data
 */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'formid in base ctl');
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n       <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\r\n        </div>\r\n      </div> \r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Address' | translate }}</th>\r\n                <th>{{'Phone' | translate }}</th>\r\n                <th>{{'City' | translate }}</th>\r\n                <th>{{'State' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.address }} </td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.city }} </td>\r\n                <td> {{ m.state }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n              <table style=\"width: 100%;\">\r\n                <tr>\r\n                  <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button></td>\r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\">{{'Back' | translate}}</a></td>\r\n    \r\n    \r\n            \r\n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n                </tr>\r\n                </table>\r\n    \r\n            \r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Address' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter City' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter State' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\"\r\n style=\"padding-top: 3%;\r\npadding-bottom: 15%;\r\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\r\n background-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\nheight:90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\r\n            placeholder=\"{{'Search Duration' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Name' | translate }}</th>\r\n                <th>{{'Duration' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n                <td> {{ m.duration }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n              \r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\">{{'Back' | translate}}</a></td>\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\" >\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n            \r\n                <select class=\"form-control\" name=\"duration\"\r\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option [value]=\"1\">1 Year</option>\r\n                  <option [value]=\"2\">2 Year</option>\r\n                  <option [value]=\"3\">3 Year</option>\r\n                  <option [value]=\"4\">4 Year</option>\r\n                  <option [value]=\"5\">5 Year</option>\r\n\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\r\n                  [(ngModel)]=\"form.data.description\"></textarea>\r\n              </div>\r\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\r\n                ' | translate }}              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\r\n<div>\r\n    <p class=\"text-info font-weight-bold\" style=\"padding-left: 30%; font-size: 70px;\">WELCOME TO ORS</p>\r\n    <div style=\"background-image: url(../../assets/files/IndexView.png); \r\n        -webkit-background-size: cover;\r\n        -moz-background-size: cover;\r\n        -o-background-size: cover;\r\n        background-size: 100%;\r\n        padding-bottom:18%;\r\n        padding-top: 5%;\r\n        \">\r\n        <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer> -->\r\n\r\n\r\n<style>\r\n  body{\r\n  \r\n  background-image: url('<%=ORSView.APP_CONTEXT%>/img/lib.jpg');\r\n      background-size: 100%;\r\n  \r\n  \r\n  }\r\n  .cl{\r\n    font-family: Lucida Calligraphy; \r\n  \r\n   /*  font-family: Monotype Corsiva;\r\n    \r\n   font-family: Footlight MT Light; */\r\n    }\r\n  </style>\r\n<app-navbar></app-navbar>\r\n\r\n<div>  \r\n  <!-- <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/welcomeView2.png); \r\n      -webkit-background-size: cover;\r\n      -moz-background-size: cover;\r\n      -o-background-size: cover;\r\n      background-size: 100%;\r\n      padding-bottom:18%;\r\n      padding-top: 5%;\r\n      \">\r\n      <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\r\n  </div> -->\r\n\r\n  <div class=\"row \" \r\n  style=\"padding-bottom: 14%;\r\n  background: url(assets/files/1920.jpg) no-repeat center center;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  width:cover;\r\n  height: 120vh;\">\r\n    <p class=\"text-cs1 font-family ml-4 font-weight-bold\" style=\"padding-top: 25%; \r\n    padding-left: 26%;font-size: 75px; color: rgb(203, 30, 30);\">{{'WELCOME TO ORS ' | translate}}</p></div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://15.206.186.231:8080";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.Employee = this.SERVER_URL + "/Employee";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
        this.JOB = this.SERVER_URL + "/Job";
        this.ProductDetails = this.SERVER_URL + "/productDetails";
        this.client = this.SERVER_URL + "/Client";
        this.vehicle = this.SERVER_URL + "/vehicle";
        this.VehicleTracking = this.SERVER_URL + "/VehicleTracking";
        this.Route = this.SERVER_URL + "/Route";
        this.patient = this.SERVER_URL + "/patient";
        this.prescription = this.SERVER_URL + "/prescription";
        this.salary = this.SERVER_URL + "/salary";
        this.productdetails = this.SERVER_URL + "/productdetails";
        this.Inventory = this.SERVER_URL + "/inventory";
        this.Owner = this.SERVER_URL + "/owner";
        this.Users = this.SERVER_URL + "/users";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n\r\n        \r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Gender' | translate}}</th>\r\n                <th>{{'College' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Mobile' | translate}}</th>\r\n                <th>{{'Email' | translate}}</th>\r\n                <th>{{'Qualification' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{ m.firstName }} {{m.lastName}} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>{{ m.gender }} </td>\r\n                <td>{{m.collegeName}}</td>\r\n                <td>{{m.courseName}}</td>\r\n                <td>{{m.subjectName}}</td>\r\n                <td>{{ m.phoneNo}}</td>\r\n                <td>{{m.email}}</td>\r\n                <td>{{m.qualification}}</td>\r\n                <td>\r\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash  text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\r\n            | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\r\n            Faculty' | translate}}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\r\n                translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container row pl-4\">\r\n <div class=\"form-group\">\r\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n\r\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<hr />\r\n<!--   \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n  \r\n          <div *ngIf=message>{{message}}</div>\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-6\">\r\n\r\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\r\n  \r\n              name=\"name\" />\r\n  \r\n      </div>\r\n  \r\n      <div class=\"col-md-6\">\r\n  \r\n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\r\n  \r\n      </div>\r\n  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"container row\">\r\n  \r\n      <div class=\"col-md-12\">\r\n            <div *ngIf=retrievedImage>\r\n  \r\n              <img [src]=\"retrievedImage\">\r\n  \r\n          </div>\r\n  \r\n      </div>\r\n  \r\n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    position: fixed;\r\n    \r\n    bottom: 0px;\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIFxyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \"\r\n style=\"background: linear-gradient(to bottom right, rgb(46, 32, 168), rgb(178, 201, 212));\">\r\n  <!-- Copyright -->\r\n  <div class=\"text-center pt-2 pb-2 text-light\" >\r\n    &copy; {{'COPYRIGHT' | translate}}\r\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.token = '';
        this.form = {
            message: '',
            error: false
        };
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    HttpServiceService.prototype.setToken = function (token) {
        this.token = localStorage.getItem('token');
        //  console.log(this.token + '----> inside setToken');
    };
    HttpServiceService.prototype.getToken = function () {
        console.log(localStorage.getItem('token') + '====>> getToken');
        return localStorage.getItem('token');
    };
    HttpServiceService.prototype.getJsessionid = function () {
        return localStorage.getItem('jsessionid');
    };
    HttpServiceService.prototype.isLogout = function () {
        console.log('url>>>------------------------->>>', this.router.url);
        var JSESSIONID = localStorage.getItem('fname');
        if ((JSESSIONID == "null" || JSESSIONID === null) && (this.router.url != "/login" && this.router.url != "/Auth" && this.router.url != "/logout"
            && this.router.url != "/forgotpassword"
            && this.router.url != "/signup"
            && this.router.url != "/login/true")) {
            // this.form.message = "Your Session has been Expired! Please Re-Login";
            //  this.form.error = true;
            //  this.userparams.url = this.router.url;// to navigate the URI request.
            // this.router.navigateByUrl("/login");
            return true;
        }
        else {
            this.userparams.url = '';
            return false;
        }
    };
    HttpServiceService.prototype.get = function (endpoint, callback) {
        this.userparams.url = this.router.url;
        // console.log('httpservice return for auth class service-------1');//auth runig proccessing cheking 
        return this.httpClient.get(endpoint).subscribe(function (data) {
            //  console.log('httpservice return for auth class service-------2');//auth runig proccessing cheking
            callback(data);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        this.userparams.url = this.router.url;
        return this.httpClient.post(endpoint, bean).subscribe(function (data) {
            callback(data);
        });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phc3Blci1yZXBvcnQvamFzcGVyLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.html":
/*!************************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-jasper-report></app-jasper-report>\r\n"

/***/ }),

/***/ "./src/app/jasper-report/jasper-report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jasper-report/jasper-report.component.ts ***!
  \**********************************************************/
/*! exports provided: JasperReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JasperReportComponent", function() { return JasperReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var JasperReportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JasperReportComponent, _super);
    function JasperReportComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.JASPERREPORT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    JasperReportComponent.prototype.ngOnInit = function () {
        this.generateReport();
    };
    JasperReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jasper-report',
            template: __webpack_require__(/*! ./jasper-report.component.html */ "./src/app/jasper-report/jasper-report.component.html"),
            styles: [__webpack_require__(/*! ./jasper-report.component.css */ "./src/app/jasper-report/jasper-report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JasperReportComponent);
    return JasperReportComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div id=\"loader\">\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"dot\"></div>\r\n      <div class=\"loading\"></div>\r\n    </div>\r\n\r\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\r\n      {{message}}\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  } \r\n  \r\n</style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\r\nbackground: url(assets/files/wall.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    \r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form #loginForm=\"ngForm\">\r\n          \r\n          <div style=\"text-align: center;\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error == true \" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Reset My Password' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\" col-md-1 \"></div>\r\n            \r\n            <div class=\"pt-2 ml-4\" >\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/login']\"\r\n              style=\"text-decoration: none; color: white;\">{{'Login'}}</a>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  \r\n</div>\r\n  </div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId) && this.dataValidator.emailRegexPattern(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            _self.form.message = '';
            _self.inputerror = {};
            _self.form.error = !res.success;
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
            }
            if (res.success) {
                var loginId = res.result.Email;
                localStorage.setItem("Email", loginId);
                _self.router.navigateByUrl('verifyotp');
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XHJcbiAgY29udGVudDogXCIqXCI7XHRcdFxyXG4gIGNvbG9yOiByZWQ7XHRcdFxyXG4gICB9XHRcclxuXHJcbiAgIC5zdWNjZXNzQ29sb3J7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgIH1cclxuXHJcbiAgIC5idG4tc3BhY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\r\n<style>\r\n  #nnn{\r\n    background: none;\r\n    border: none;\r\n  }\r\n  \r\n  </style>\r\n  \r\n  \r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%; \r\n  }\r\n  \r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n    \r\n  }\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(46, 32, 168), rgb(178, 201, 212));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n    \r\n  }\r\n  </style>\r\n<div class=\"row \" \r\nstyle=\"padding-top: 8%;\r\n padding-bottom: 8%;\r\nbackground: url(assets/files/2.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\nwidth:auto;\r\nheight: 105vh;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card input-group-addon grad\">\r\n      <div class=\"card-body\">\r\n\r\n        <form>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <h1 class=\"text-primary font-weight-bold\">{{'Login' | translate}}</h1>\r\n          </div>\r\n          \r\n          <input type=\"hidden\" name=\"loginUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\r\n        \r\n\r\n\r\n          <div *ngIf=\"form.error==false && form.message\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n          <div *ngIf=\"form.error && form.message \"\r\n            class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n\r\n\r\n\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n\r\n                  <div class=\"input-group-text\">  <i class=\"fa fa-envelope grey-text\"></i> </div>\r\n\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\r\n              </div>\r\n            </div>\r\n           <span  *ngIf=\"inputerror.loginId != null\"\r\n          class=\"alertRedColor\" style=\" color: red;\" > {{'loginId'| translate}} </span> \r\n          </div>\r\n\r\n\r\n\r\n           <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span> \r\n\r\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\"> {{'Sign in' | translate}}</button>  \r\n            </div>\r\n\r\n            &nbsp;&nbsp;&nbsp;\r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"signUp()\" class=\"btn btn-md btn-success\">\r\n                {{'Sign up' | translate}}</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pl-3 pt-2\">\r\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n\r\n        \r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer>\r\n\r\n</app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://15.206.186.231:8080/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: '',
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    /**
     * Initialize component
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //backend-> se mesage bhej ra session has bean expier.
        this.route.queryParams.subscribe(function (params) {
            _this.form.message = params['errorMessage'] || null;
            if (_this.form.message != null) {
                _this.form.error = true;
            }
            console.log('msssssssssgggggggggggg = >', _this.form.message);
        });
        var a = '';
        this.serviceLocator.getPathVariable(this.route, function (params) { a = params["userparams"]; });
        if (a == 'true') {
            this.form.message = 'Logout Successfully';
        }
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url; //to get the URI
        console.log('url===>------->>>>', requestedUrl);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            _self.form.error = !res.success;
            if (_self.dataValidator.isNotNullObject(res.result.message)) {
                _self.form.message = res.result.message;
            }
            if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
                _self.inputerror = res.result.inputerror;
            }
            if (_self.dataValidator.isTrue(res.success)) {
                _self.httpService.setToken(res.result.token);
                sessionStorage.setItem("sessionId", res.result.jsessionid);
                localStorage.setItem("loginId", res.result.loginId);
                var tokenStr = "Bearer " + res.result.token;
                localStorage.setItem("token", tokenStr);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                localStorage.setItem("jsessionid", res.result.jsessionid);
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_locator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n   .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 25px\r\n  ;\r\n  }\r\n \r\n</style>\r\n<div class=\"row \" style=\" padding-top: 4%;\r\n padding-bottom:0%;\r\n background-image: url(../../assets/files/registrationImage.png);\r\nbackground-attachment: fixed;\r\nbackground-size: 100%;\r\n  height: 120vh;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n         <form>\r\n          <div style=\"text-align: center;\">\r\n            <h3 class=\"text-primary font-weight-bold\">\r\n              {{'Sign Up' | translate}}\r\n            </h3>\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\r\n            class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\r\n\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.login != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.password != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span  *ngIf=\"form.inputerror.phone != null\"\r\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\r\n          </div>\r\n\r\n          <!-- <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \r\n          <!-- </div>  -->\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n\r\n          <div style=\"padding-top:0.1%\">\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\r\n                  <option value=\"Male\">{{'Male' | translate}} </option>\r\n                  <option value=\"Female\">{{'Female' | translate}} </option>\r\n                </select>\r\n              </div>\r\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\r\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n\r\n\r\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Sign up' | translate}}</button>\r\n            </div>\r\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n            <div class=\"pt-2\">\r\n\r\n              <button (click)=\"reset()\" class=\"btn btn-warning mr-1\">{{'Reset' | translate}}</button>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.reset = function () {
        location.reload();
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            //business Validation->success -true/false 
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    /**
   * Override by childs
   *
   * @param form
   */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/login/verifyforgotpassword-otp.component.html":
/*!***************************************************************!*\
  !*** ./src/app/login/verifyforgotpassword-otp.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  body {\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('assets/files/new-background.jpg') no-repeat center center fixed;\r\n    background-size: cover;\r\n  }\r\n\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgba(32, 168, 168, 0.8), rgba(219, 231, 237, 0.8));\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n  }\r\n\r\n  .container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n  }\r\n\r\n  .card {\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n  .card-body {\r\n    text-align: center;\r\n    padding: 40px 20px;\r\n  }\r\n\r\n  .input-group-text {\r\n    background-color: transparent;\r\n    border: none;\r\n  }\r\n\r\n  .btn-success {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-group {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  h1, p {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .alert {\r\n    margin-bottom: 20px;\r\n  }\r\n</style>\r\n\r\n<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body shadow-lg grad\">\r\n      <h1 class=\"text-primary font-weight-bold\">{{ 'Verify The OTP' | translate }}</h1>\r\n      <p>Please enter the OTP sent to your email to verify your identity.</p>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <div *ngIf=\"!form.error && form.message === 'Password has been sent to email id'\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{ form.message }}\r\n      </div>\r\n\r\n      <form #loginForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"otp\" class=\"font-weight-bold\">{{ ' OTP ' }}</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\"><i class=\"fa fa-lock grey-text\"></i></div>\r\n            </div>\r\n            <input type=\"number\" id=\"otp\" name=\"otp\" [(ngModel)]=\"form.otp\" class=\"form-control\" appMaxLengthNumber=\"4\"\r\n              placeholder=\"{{ 'Enter OTP here' | translate }}\">\r\n          </div>\r\n        </div>\r\n\r\n        <button (click)=\"submit()\" class=\"btn btn-success\">\r\n          {{ 'Verify OTP' }}\r\n        </button>\r\n        <div class=\"pl-3 pt-2\">\r\n          <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/login/verifyforgotpassword-otp.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/login/verifyforgotpassword-otp.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyforgotpasswordOTPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyforgotpasswordOTPComponent", function() { return VerifyforgotpasswordOTPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VerifyforgotpasswordOTPComponent = /** @class */ (function () {
    function VerifyforgotpasswordOTPComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8080/Auth/";
        this.form = {
            error: false,
            message: "",
            otp: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    /**
     * Initialize component
     */
    VerifyforgotpasswordOTPComponent.prototype.ngOnInit = function () {
    };
    VerifyforgotpasswordOTPComponent.prototype.submit = function () {
        var _self = this;
        var Email = localStorage.getItem("Email");
        this.httpService.post(_self.endpoint + "verify-OTP/" + Email + "?otp=" + this.form.otp, null, function (res) {
            _self.form.message = '';
            _self.inputerror = {};
            _self.form.error = !res.success;
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
            }
            if (res.success) {
                Email = '';
                localStorage.removeItem("Email");
                var loginId = res.result.loginId;
                localStorage.setItem("chageLoginPassword", loginId);
                _self.router.navigateByUrl('changepassword');
            }
        });
    };
    VerifyforgotpasswordOTPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifyforgotpassword-otp',
            template: __webpack_require__(/*! ./verifyforgotpassword-otp.component.html */ "./src/app/login/verifyforgotpassword-otp.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VerifyforgotpasswordOTPComponent);
    return VerifyforgotpasswordOTPComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div  style=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;\r\npadding-top: 5%;\r\npadding-bottom: 24%;\r\nwidth:100%;\r\n  height: 100;\">\r\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\r\n    <div align=\"center\">\r\n      <div style=\"font-size: 80px;\">\r\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\r\n    </div>\r\n    </div>\r\n    <div class=\"row pt-4 pb-4\">\r\n      <div class=\"col-sm-4 \"></div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\r\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n          {{'Search' | translate }}</button>\r\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\r\n        \r\n        &emsp;\r\n\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\r\n\r\n    </div>\r\n  </form>\r\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    {{form.message}}\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\r\n\r\n    <table width=\"100%\" class=\"table table-bordered table-hover font-weight-bold table-info text-dark\" border=\"3px\">\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\r\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Marks' | translate }}</th>\r\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\r\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\r\n        \r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Physics' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\r\n          \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\r\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\">{{'Maths' | translate }}</th>\r\n        <td align=\"center\">100</td>\r\n        <td align=\"center\">35</td>\r\n        <td id=\"po1\" align=\"center\">\r\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\r\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\r\n      </tr>\r\n      <tr>\r\n\r\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\r\n\r\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\r\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\r\n        \r\n          \r\n        \r\n        \r\n        </td>\r\n      </tr>\r\n     <!--  <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Grade' | translate }}</font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n\r\n      <!-- <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\r\n          <font color=\"red\"><b>F</b></font>\r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\r\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\r\n        </td>\r\n      </tr> -->\r\n      <tr>\r\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\r\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \r\n        </th>\r\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\r\n\r\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\r\n        </td>\r\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\r\n      </tr>\r\n\r\n    </table>\r\n    \r\n</div><div style=\"position: relative; clear: both;\">\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8080/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \r\nbackground: url(assets/files/back.jpeg) no-repeat center center;\r\nbackground-repeat: no-repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            placeholder=\"{{'Search Name'| translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.rollNo\"\r\n            placeholder=\"{{'Search Roll No'| translate}}\">\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select ROLL NO' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'RollNO'| translate}}</th>\r\n                <th>{{'Name'| translate}}</th>\r\n                <th>{{'Physics'| translate}}</th>\r\n                <th>{{'Chemistry'| translate}}</th>\r\n                <th>{{'Maths'| translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\r\n                  </td> -->\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\r\n                    value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                \r\n\r\n                <td> {{ m.rollNo }} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.physics }} </td>\r\n                <td> {{ m.chemistry }} </td>\r\n                <td> {{ m.maths }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n\r\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table style=\"width: 100%;\">\r\n          <tr>\r\n            <td style=\"width: 50%;\">\r\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                }} </button>\r\n            </td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\r\n              [routerLink]=\"['/marksheetlist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n\r\n\r\n\r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                translate }}</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxyXG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcclxuICBjb2xvcjogcmVkO1x0XHRcclxuICAgfVx0XHJcblxyXG4gICAuc3VjY2Vzc0NvbG9ye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICB9XHJcblxyXG4gICAuYnRuLXNwYWNlIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\r\n          \r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                \r\n\r\n                <select class=\"form-control\" required name=\"studentId\"\r\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\r\n                </div>\r\n                \r\n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\r\n          </div>\r\n         \r\n         \r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update'| translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  \r\n</style>\r\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; \r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-12 pt-3\"> \r\n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"margin-left: 87%;\" class=\"pb-2\">\r\n\r\n        <a href=\"http://localhost:8080/Jasper/report\"  class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\r\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\r\n      </div> \r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n              <th >{{'S.No' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\r\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\r\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\r\n\t\t\t\t\t\t</tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\r\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\r\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\r\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\r\n              <td> {{m.chemistry}}</td>\r\n              <td> {{m.maths}}</td>\r\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\r\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</tr>\r\n          </tbody>\r\n          </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer>\r\n  \r\n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8080/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/max-length-number.directive.ts":
/*!************************************************!*\
  !*** ./src/app/max-length-number.directive.ts ***!
  \************************************************/
/*! exports provided: MaxLengthNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthNumberDirective", function() { return MaxLengthNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaxLengthNumberDirective = /** @class */ (function () {
    function MaxLengthNumberDirective(el) {
        this.el = el;
    }
    MaxLengthNumberDirective.prototype.onInputChange = function (event) {
        var input = event.target;
        var maxLength = this.appMaxLengthNumber;
        // If input length exceeds the max length, truncate the value
        if (input.value.length > maxLength) {
            input.value = input.value.slice(0, maxLength);
            this.updateModel(input.value);
        }
    };
    MaxLengthNumberDirective.prototype.onPaste = function (event) {
        var _this = this;
        var input = event.target;
        var maxLength = this.appMaxLengthNumber;
        // Delay the execution to let the paste event finish
        setTimeout(function () {
            if (input.value.length > maxLength) {
                input.value = input.value.slice(0, maxLength);
                _this.updateModel(input.value);
            }
        });
    };
    MaxLengthNumberDirective.prototype.updateModel = function (value) {
        var nativeElement = this.el.nativeElement;
        var event = new Event('input', { bubbles: true });
        nativeElement.value = value;
        nativeElement.dispatchEvent(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MaxLengthNumberDirective.prototype, "appMaxLengthNumber", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaxLengthNumberDirective.prototype, "onInputChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClipboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaxLengthNumberDirective.prototype, "onPaste", null);
    MaxLengthNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMaxLengthNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MaxLengthNumberDirective);
    return MaxLengthNumberDirective;
}());



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"col-sm-6 p-1\">\r\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\r\n            placeholder=\"{{'Search Body' | translate}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate}}</button></div>\r\n        <div class=\"col=sm-1\">\r\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\r\n          </button></div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\r\n          </button>\r\n        </div>\r\n        <div class=\"col-lg-1\">\r\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\r\n        </div>\r\n        <div class=\"col-lg-2\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th>{{'S.No'| translate}}</th>\r\n                <th>{{'Code'| translate}}</th>\r\n                <th>{{'Subject' | translate}}</th>\r\n                <th>{{'Body'| translate}}</th>\r\n                <th>{{'Type'| translate}}</th>\r\n                <th>{{'Status'| translate}}</th>\r\n                <th>#</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.code }} </td>\r\n                <td> {{ m.subject }} </td>\r\n                <td> {{ m.body }} </td>\r\n                <td> {{ m.type }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"U-FP\">U-FP </option>\r\n                  <option value=\"U-REG\">U-REG </option>\r\n                  <option value=\"U-CP\">U-CP</option>\r\n                </select>\r\n\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n  .raj{\r\n  background-image : linear-gradient(to bottom right, rgb(46, 32, 168), rgb(178, 201, 212));}\r\n\r\n  .c1{\r\ncolor: rgb(235, 6, 6);\r\n  }\r\n  </style>\r\n\r\n<div class=\"header\">\r\n  <nav  class=\"navbar navbar-expand-lg raj\">\r\n\r\n\r\n    <div class=\"logo\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n        <!-- <strong class=\"text-white\">Rays</strong> -->\r\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\r\n      </a>  \r\n    </div>\r\n\r\n \r\n\r\n    <select #locale (change)='changeLocale(locale.value)'class=\"c1\" >\r\n       <option value=\"en\">{{'Select Language' | translate }}</option> \r\n      \r\n      <option value=\"en\" style=\"color: red;\">English</option>\r\n      <option value=\"hi\"style=\"color: red;\">{{'Hindi' | translate }}</option>\r\n    </select>\r\n\r\n\r\n\r\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n\r\n\r\n    <!-- ...........Linkes Whitout Login.......!!!!!!!!!  -->\r\n    <div  *ngIf=\"!isLogin()\"  class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n\r\n\r\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 6.5%;\">\r\n         \r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/myNav']\" id=\"navbarDropdown\" role=\"button\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <font style=\"color: black;\">{{'Hi,Guest'| translate}}\r\n            </font>\r\n          </a>\r\n\r\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; &nbsp; {{'Log in' | translate}}</a>\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\" fa fa-users\"></i> &nbsp; {{'User Registration' |\r\n              translate}}</a>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n    \r\n   <!-- .............Links With Login...........!!!! -->\r\n  <div *ngIf=\"isLogin()\"  class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n\r\n\r\n    <!--ye space de ra image and link me -->\r\n    <div class=\"col-sm-2\"></div> \r\n\r\n\r\n\r\n    <ul class=\"nav navbar-nav pl-2 \">\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" \r\n         aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'User' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' | translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |translate}}</a> \r\n           <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i> &nbsp; {{'Marksheet List' | translate}}</a>\r\n           <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i  class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet' |  translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Role List' |\r\n            translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'College' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i> &nbsp;\r\n            {{'College List' | translate}} </a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Course' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp; {{'Course List'\r\n            | translate}} </a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Student\r\n            List' | translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Faculty' | translate}}\r\n          </font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\" fa fa-list\"></i> &nbsp; {{'Faculty\r\n            List' | translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\r\n            | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i> &nbsp;\r\n            {{'TimeTable List' | translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Subject' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/subject']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add Subject' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/subjectlist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'Subject List' | translate}}\r\n          </a>\r\n        </div>\r\n     </li>\r\n\r\n\r\n\r\n\r\n\r\n     <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n      <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <font style=\"color: white;\">{{'message' | translate}}</font>\r\n      </a>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n        <a class=\"dropdown-item\" [routerLink]=\"['/message']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add message' |\r\n          translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/messagelist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'message List'\r\n           | translate}}\r\n        </a>\r\n      </div>\r\n    </li>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n          <font style=\"color: white;\">{{'client' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/client']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                            {{'Add client' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/clientlist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                          {{'client List'      | translate}}\r\n                                        </a>\r\n       \r\n        </div>\r\n      </li>\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n          <font style=\"color: white;\">{{'vehicle' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/vehicle']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                            {{'Add vehicle' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/vehiclelist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                          {{'vehicle List'      | translate}}\r\n                                        </a>\r\n       \r\n        </div>\r\n      </li>\r\n\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'vehicletracking' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/vehicletracking']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add vehicletracking' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/vehicletrackinglist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'vehicletracking List'\r\n             | translate}}\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n          <font style=\"color: white;\">{{'patient' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/patient']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                            {{'Add patient' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/patientlist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                          {{'patient List'      | translate}}\r\n                                        </a>\r\n       \r\n        </div>\r\n      </li>\r\n     \r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n<a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n  <font style=\"color: white;\">{{'prescription' | translate}}</font>\r\n</a>\r\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/prescription']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                    {{'Add prescription' |translate}}   </a>\r\n<a class=\"dropdown-item\" [routerLink]=\"['/prescriptionlist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                  {{'prescription List'      | translate}}\r\n                                </a>\r\n\r\n</div>\r\n</li>\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n<a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n  <font style=\"color: white;\">{{'route' | translate}}</font>\r\n</a>\r\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/route']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                    {{'Add route' |translate}}   </a>\r\n<a class=\"dropdown-item\" [routerLink]=\"['/routelist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                  {{'route List'      | translate}}\r\n                                </a>\r\n\r\n</div>\r\n</li>\r\n\r\n\r\n\r\n\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n    id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n  \r\n    <font style=\"color: white;\">{{'salary' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n  \r\n    <a class=\"dropdown-item\" [routerLink]=\"['/salary']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                      {{'Add salary' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/salarylist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                    {{'salary List'      | translate}}\r\n                                  </a>\r\n  \r\n  </div>\r\n  </li>\r\n\r\n\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n<a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n  <font style=\"color: white;\">{{'productdetails' | translate}}</font>\r\n</a>\r\n<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/productdetails']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                    {{'Add productdetails' |translate}}   </a>\r\n<a class=\"dropdown-item\" [routerLink]=\"['/productdetailslist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                  {{'productdetails List'      | translate}}\r\n                                </a>\r\n\r\n</div>\r\n</li>\r\n\r\n\r\n\r\n\r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Inventory' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/inventory']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n               {{'Add inventory' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/inventorylist']\"> <i class=\"fa fa-list\"></i> &nbsp;\r\n               {{'inventory List' | translate}}\r\n          </a>\r\n        </div>\r\n     </li>\r\n\r\n\r\n\r\n\r\n\r\n     \r\n<li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n  <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n    id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n  \r\n    <font style=\"color: white;\">{{'Supplier' | translate}}</font>\r\n  </a>\r\n  <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n  \r\n    <a class=\"dropdown-item\" [routerLink]=\"['/supplier']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                      {{'Add supplier' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/supplierlist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                    {{'supplier List'      | translate}}\r\n                                  </a>\r\n  \r\n  </div>\r\n  </li>\r\n\r\n\r\n\r\n  <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\r\n          <font style=\"color: white;\">{{'owner' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/owner']\"><i class=\"fa fa-calculator\"></i> &nbsp;\r\n                                            {{'Add owner' |translate}}   </a>\r\n  <a class=\"dropdown-item\" [routerLink]=\"['/ownerlist']\"> <i class=\"fa fa-list\"></i> &nbsp; \r\n                                          {{'owner List'      | translate}}\r\n                                        </a>\r\n       \r\n        </div>\r\n      </li>\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\r\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'users' | translate}}</font>\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/users']\"><i class=\"fa fa-calculator\"></i> &nbsp; {{'Add users' |\r\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/userslist']\"> <i class=\"fa fa-list\"></i> &nbsp; {{'users List'\r\n             | translate}}\r\n          </a>\r\n        </div>\r\n      </li>\r\n\r\n\r\n\r\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\">\r\n\r\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <font style=\"color: white;\">{{'Hi  '+form.data.fname }} ({{form.data.role}})\r\n          </font>\r\n        </a>\r\n\r\n\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change Password' |\r\n            translate}}</a>\r\n          <a class=\"dropdown-item\" (click)=\" goToLink()\" ><i class=\"fa fa-file\"></i> &nbsp;\r\n            {{'Java Doc' | translate}}</a>\r\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' | translate}}</a>\r\n        </div>\r\n\r\n      </li>\r\n\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        //  var _self = this;
        //  this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //    if(res.success){
        //      _self.form.list = res.result.data;
        //    }else{
        //      _self.form.error = false;
        //      _self.form.message = res.result.message;
        //    }
        //    console.log('FORM', _self.form);
        //  });
    };
    //jis user ne login kiya uska data user filed me le
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        _self.httpService.get("http://15.206.186.231:8080/User/logout", function (res) {
            _self.httpService.userparams.url = '';
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
            }
            ;
            _self.servicelocator.router.navigateByUrl('/login/true');
        });
    };
    //javadoc
    NavbarComponent.prototype.goToLink = function () {
        console.log('navbarComponent-goToLink');
        window.open('assets/doc/index.html', '_blank');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>{{message}}</h1>\r\n</div>"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.message = 'Page not found, URL may be invalid';
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/persantage-value.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/persantage-value.directive.ts ***!
  \***********************************************/
/*! exports provided: PersantageValueDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersantageValueDirective", function() { return PersantageValueDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersantageValueDirective = /** @class */ (function () {
    function PersantageValueDirective(el) {
        this.el = el;
    }
    PersantageValueDirective.prototype.onInputChange = function (event) {
        var input = event.target;
        var trimmed = input.value.replace(/[^0-9%]/g, '');
        // Ensure only one percentage sign and it should be at the end
        var percentIndex = trimmed.indexOf('%');
        if (percentIndex !== -1) {
            trimmed = trimmed.substring(0, percentIndex).replace('%', '') + '%';
        }
        // Ensure the value does not exceed 100%
        if (percentIndex !== -1 && Number(trimmed.replace('%', '')) > 100) {
            trimmed = '100%';
        }
        else if (percentIndex === -1 && Number(trimmed) > 100) {
            trimmed = '100';
        }
        // Update the input value
        input.value = trimmed;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PersantageValueDirective.prototype, "onInputChange", null);
    PersantageValueDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPersantageValue]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PersantageValueDirective);
    return PersantageValueDirective;
}());



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\r\n background: url(assets/files/back1.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n    <div class=\"container-fluid\">\r\n\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\" style=\"height: 50px;\">\r\n                \r\n                <div class=\"text-center\">\r\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\r\n                  </div>\r\n                </div>\r\n          \r\n                <div class=\"row p-1\">\r\n                  <div class=\"col-sm-1\"></div>\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n                      placeholder=\"{{'Search Name' | translate}}\">\r\n          \r\n                  </div>\r\n                  <!-- <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n                  </div> -->\r\n                  <div class=\"col-sm-2\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\r\n                      placeholder=\"{{'Search Description' | translate}}\">\r\n          \r\n                  </div>\r\n\r\n                  <div class=\"col-sm-2\">\r\n\r\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\r\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                    </select>\r\n                  </div>\r\n          \r\n                  \r\n                 \r\n                  <div class=\"col-sm-1 ml-3\">\r\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n                      {{'Search' | translate }}</button>\r\n                  </div>\r\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  <div class=\"col-lg-2 ml-4\">\r\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\r\n                    </button>\r\n                  </div>\r\n          \r\n                  <div class=\"col-sm-1\">\r\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n                      {{'Delete'| translate}}</button>\r\n                  </div>\r\n                </div>\r\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n                {{form.message}}\r\n              </div>\r\n\r\n          \r\n\r\n            <div class=\"p-1\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\r\n                        <thead class=\"thead-light text-uppercase\">\r\n                            <tr>\r\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                                <th>{{'S.No' | translate }}</th>\r\n                                <th>{{'Name' | translate }}</th>\r\n                                <th>{{'Description' | translate }}</th>\r\n                                <th>{{'Edit' | translate}}</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let m of form.list; let i = index\">\r\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                                </td>\r\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                                <td> {{ m.name }} </td>\r\n                                <td> {{ m.description }} </td>\r\n                                <td>\r\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-edit text-info\"></i>\r\n                                    </a>\r\n                                    <!-- /\r\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                                        <i class=\"fa fa-trash text-danger\"></i>\r\n                                    </a> -->\r\n                                </td>\r\n                                \r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div><table style=\"width: 100%;\">\r\n                    <tr>\r\n                      <td style=\"width: 50%;\">\r\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n                    }} </button></td>\r\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\r\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\r\n        \r\n          \r\n          \r\n                \r\n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                      translate }}</button></td>\r\n                    </tr>\r\n                    </table>\r\n              \r\n                    \r\n               \r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\r\n        rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\r\n            translate }}</h2>\r\n\r\n\r\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div> -->\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\r\n                {{'List' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) { callback(params); });
        // getPathVariable(route: ActivatedRoute,  function (params) { a = params["userparams"];} )
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  spinner works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 70px;\">\r\n\r\n        <div class=\"text-center\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\r\n            placeholder=\"{{'Search Enrollment' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\r\n            placeholder=\"{{'Search College' | translate }}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\r\n            placeholder=\"{{'Search Email' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\r\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\r\n        </div>\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-lg-2\">\r\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\r\n          </button>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n                <th>{{'S.No' | translate }}</th>\r\n                <th>{{'Enrollment No' | translate }}</th>\r\n                <th>{{'First Name' | translate }}</th>\r\n                <th>{{'Last Name' | translate }}</th>\r\n                <th>{{'College' | translate }}</th>\r\n                <th>{{'DOB' | translate }}</th>\r\n                <th>{{'Mobile' | translate }}</th>\r\n                <th>{{'Email' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td>{{m.enrolNo}}</td>\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.collegeName }} </td>\r\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\r\n                <td> {{ m.phoneNo }} </td>\r\n                <td> {{ m.email }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\r\n                    translate }} </button>\r\n                </td>  \r\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\">{{'Back' | translate}}</a></td>\r\n                <td>\r\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\r\n                 </td>\r\n                </tr>\r\n              </table>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n<div class=\"row \" style=\"padding-top: 3%; \r\npadding-bottom:3%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\r\n\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\r\n                </div>\r\n\r\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\r\n              <span class=\"required-field\" ></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\" >\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\r\n                <th>{{'S.No.' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Course' | translate}}</th>\r\n               \r\n                <th>{{'Description' | translate}}</th>\r\n                <th>{{'Edit' | translate }}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\">\r\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.subjectName}} </td>\r\n                <td> {{ m.courseName}} </td>\r\n               \r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger\"></i>\r\n                  </a> -->\r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n                \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\r\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\r\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\r\n              </button></div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/test_VehicleTracking/vehicle-trackinglist.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfVmVoaWNsZVRyYWNraW5nL3ZlaGljbGUtdHJhY2tpbmdsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/test_VehicleTracking/vehicle-trackinglist.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bvehicletracking: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'vehicletracking List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lat\" \r\n          appMaxLengthNumber=\"20\"\r\n            placeholder=\"{{'Search lat ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.longs\" \r\n          appMaxLengthNumber=\"20\"\r\n            placeholder=\"{{'Search longs ' | translate}}\">\r\n        \r\n        </div>\r\n\r\n    \r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\" \r\n            placeholder=\"{{'Search date ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"vehicletrackingId\" [(ngModel)]=\"form.searchParams.vehicleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select vehicleID ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.VehicleIDList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n        \r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div >\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;\r\n  \r\n      \r\n      \r\n      <!-- Add vehicletracking button -->\r\n       <div >\r\n        <button (click)=\"forward('/vehicletracking')\" type=\"button\" class=\"btn btn-success\">{{'Add ' | translate}}\r\n        </button>\r\n      </div>\r\n      &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;\r\n\r\n    </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bvehicletrackinged table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'lat' | translate}}</th>\r\n                <th>{{'date ' | translate}}</th>\r\n                <th>{{'longs ' | translate}}</th>\r\n                <th>{{'VehicleID ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.lat }} </td>\r\n                <td> {{ m.date | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.longs }} </td>\r\n                <td> {{ m.vehicleID}} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/vehicletracking/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/test_VehicleTracking/vehicle-trackinglist.component.ts ***!
  \************************************************************************/
/*! exports provided: VehicleTrackinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTrackinglistComponent", function() { return VehicleTrackinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VehicleTrackinglistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleTrackinglistComponent, _super);
    function VehicleTrackinglistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.VehicleTracking, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    VehicleTrackinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-trackinglist',
            template: __webpack_require__(/*! ./vehicle-trackinglist.component.html */ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-trackinglist.component.css */ "./src/app/test_VehicleTracking/vehicle-trackinglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VehicleTrackinglistComponent);
    return VehicleTrackinglistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_client/client.component.css":
/*!**************************************************!*\
  !*** ./src/app/test_client/client.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_client/client.component.html":
/*!***************************************************!*\
  !*** ./src/app/test_client/client.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Client' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Client' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n<!-- start attribute filed Role se -->\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Priority' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"priorityId\" [(ngModel)]=\"form.data.priorityId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select priority' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.priorityList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.priorityId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.priorityId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <!-- string=>type=\"text\" (ngModelChange)=\"form.data.stringdata = $event.trim()\" / appNoNumbers  -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.name = $event.trim()\"  appNoNumbers    maxlength=\"50\"  \r\n               placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n             <!-- <textarea type=\"text\"  /id=\"addrestext\" cols=\"20\"    title=\"address\" rows=\"4\" /\r\n                (ngModelChange)=\"form.data.addres = $event.trim()-->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Addres ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n              \r\n              <textarea type=\"text\"  id=\"addresstext\" cols=\"20\"    title=\"address\" rows=\"4\" name=\"addresstext\" \r\n              [(ngModel)]=\"form.data.address\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.address = $event.trim()\" maxlength=\"100\"\r\n                placeholder=\"{{'address' | translate}}\"> </textarea>\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.address != null\" class=\"alertRedColor\" style=\"color: red;\">{{form.inputerror.address | translate}}</span>\r\n         \r\n          </div>\r\n\r\n\r\n   <!-- phoneNo.=> type=\"number\"/  appMaxLengthNumber=\"10\"  /-->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Phone ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\" \r\n                 appMaxLengthNumber=\"10\"      placeholder=\"{{'phoneNo' | translate}}\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.phoneNo != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.phoneNo| translate}}</span>\r\n          </div>\r\n\r\n      \r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/clientlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'client List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_client/client.component.ts":
/*!*************************************************!*\
  !*** ./src/app/test_client/client.component.ts ***!
  \*************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ClientComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientComponent, _super);
    function ClientComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.client, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    ClientComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    ClientComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    ClientComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.phoneNo = data.phoneNo;
        form.priorityId = data.priorityId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    ClientComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/test_client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/test_client/client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ClientComponent);
    return ClientComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_client/clientlist.component.css":
/*!******************************************************!*\
  !*** ./src/app/test_client/clientlist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfY2xpZW50L2NsaWVudGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_client/clientlist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/test_client/clientlist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bclient: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Client List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n           appNoNumbers  maxlength=\"50\"  (ngModelChange)=\"form.searchParams.name = $event.trim()\"\r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.address\" \r\n           maxlength=\"100\"   (ngModelChange)=\"form.searchParams.address = $event.trim()\"\r\n            placeholder=\"{{'Search address ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\" \r\n          appMaxLengthNumber=\"10\" \r\n          placeholder=\"{{'Search phoneNo  ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"priorityId\" [(ngModel)]=\"form.searchParams.priorityId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select priority ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.priorityList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n<!-- search filed end -->\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <!-- Add client button -->\r\n       <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/client')\" type=\"button\" class=\"btn btn-success\">{{'Add client' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bcliented table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Address ' | translate}}</th>\r\n                <th>{{'PhoneNo'}}</th>\r\n                <th>{{'Priority'}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.address }} </td>\r\n                <td>{{ m.phoneNo }}</td>\r\n                <td>{{ m.priority }}</td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/client/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_client/clientlist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/test_client/clientlist.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientlistComponent", function() { return ClientlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ClientlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientlistComponent, _super);
    function ClientlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.client, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ClientlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientlist',
            template: __webpack_require__(/*! ./clientlist.component.html */ "./src/app/test_client/clientlist.component.html"),
            styles: [__webpack_require__(/*! ./clientlist.component.css */ "./src/app/test_client/clientlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ClientlistComponent);
    return ClientlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_customers/customers.component.css":
/*!********************************************************!*\
  !*** ./src/app/test_customers/customers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_customers/customers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/test_customers/customers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bcustomers-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Customers' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Customers ' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n        \r\n\r\n  <!-- preload Filed -->\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Gender' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"genderId\" [(ngModel)]=\"form.data.genderId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select gender' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.genderList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.genderId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.genderId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n       \r\n          <div class=\"form-group\">\r\n            <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.name = $event.trim()\"     maxlength=\"50\"   appNoNumbers \r\n               placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n      \r\n\r\n\r\n<!-- LongFiled=> type=\"number\"   -->\r\n          <div class=\"form-group\" class=\"addrestext\">\r\n\r\n            <label><b>{{'Phone Number' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n               <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"></div>\r\n              </div>\r\n\r\n         <input type=\"number\" name=\"phoneNumber\" [(ngModel)]=\"form.data.phoneNumber\" class=\"form-control\" \r\n         appMaxLengthNumber=\"10\"\r\n         placeholder=\"{{'phoneNumber' | translate}}\"  />\r\n             \r\n            </div>\r\n            <span *ngIf=\"form.inputerror.phoneNumber != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.phoneNumber | translate}}</span>\r\n          </div>\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Date Of Birth' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.dateOfBirth |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.dateOfBirth=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.dateOfBirth != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.dateOfBirth | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/customerslist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'customers List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_customers/customers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/test_customers/customers.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CustomersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomersComponent, _super);
    function CustomersComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.customers, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    CustomersComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    CustomersComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    //customers
    //name
    //dateOfBirth
    //phoneNumber
    //gender
    CustomersComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.dateOfBirth = data.dateOfBirth;
        form.phoneNumber = data.phoneNumber;
        form.genderId = data.genderId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    CustomersComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/test_customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/test_customers/customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], CustomersComponent);
    return CustomersComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_customers/customerslist.component.css":
/*!************************************************************!*\
  !*** ./src/app/test_customers/customerslist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfY3VzdG9tZXJzL2N1c3RvbWVyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_customers/customerslist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/test_customers/customerslist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bcustomers: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Customers List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfBirth\"\r\n            placeholder=\"{{'Search dateOfBirth ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNumber\"\r\n          appMaxLengthNumber=\"10\"\r\n            placeholder=\"{{'Search phoneNumber ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        \r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n           (ngModelChange)=\"form.data.name = $event.trim()\"  appMaxLengthNumber=\"50\"  appNoNumbers\r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"genderId\" [(ngModel)]=\"form.searchParams.genderId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select gender ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.genderList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   <!-- Add customers button -->\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/customers')\" type=\"button\" class=\"btn btn-success\">{{'Add customers' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n    \r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'dateOfBirth ' | translate}}</th>\r\n                <th>{{'phoneNumber  ' | translate}}</th>\r\n                 <th>{{'gender ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.dateOfBirth | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.phoneNumber }} </td>\r\n                <td> {{ m.gender }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/customers/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_customers/customerslist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/test_customers/customerslist.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerslistComponent", function() { return CustomerslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CustomerslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomerslistComponent, _super);
    function CustomerslistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.customers, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CustomerslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerslist',
            template: __webpack_require__(/*! ./customerslist.component.html */ "./src/app/test_customers/customerslist.component.html"),
            styles: [__webpack_require__(/*! ./customerslist.component.css */ "./src/app/test_customers/customerslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CustomerslistComponent);
    return CustomerslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_inventory/inventory.component.css":
/*!********************************************************!*\
  !*** ./src/app/test_inventory/inventory.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_inventory/inventory.component.html":
/*!*********************************************************!*\
  !*** ./src/app/test_inventory/inventory.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    binventory-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Inventory' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Inventory ' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n        \r\n\r\n  <!-- preload Filed -->\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Product' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"productId\" [(ngModel)]=\"form.data.productId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select product' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.productId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.productId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n       \r\n          <div class=\"form-group\">\r\n            <label><b>{{'SupplierName' | translate }}</b><span class=\"required-field\"></span></label>\r\n          \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n          \r\n              <input type=\"text\" name=\"supplierName\" [(ngModel)]=\"form.data.supplierName\" class=\"form-control\" \r\n              maxlength=\"30\"\r\n              appcontendAlphabateOnly\r\n               (ngModelChange)=\"form.data.supplierName = $event.trim()\"  \r\n              placeholder=\"{{'supplierName' }}\" />\r\n            </div> \r\n            <!-- Angular input error messages -->   \r\n            <!-- <span *ngIf=\"form.NameEmpty\" class=\"alertRedColor\" style=\"color: red;\">Please enter supplier name</span>\r\n            <span *ngIf=\"form.NameInvalid\" class=\"alertRedColor\" style=\"color: red;\">First name laste name character must be Capitale.</span> -->\r\n            \r\n            <span *ngIf=\"form.inputerror.supplierName != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.supplierName | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n          <div class=\"form-group addrestext\">\r\n            <label><b>{{'Quantity' | translate }}</b><span class=\"required-field\"></span></label>\r\n          \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"></div>\r\n              </div>\r\n          \r\n              <input type=\"number\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\" \r\n              appcontendNumberOnly appMaxLengthNumber=\"50\"\r\n              \r\n              (ngModelChange)=\"form.data.quantity = $event.trim()\" \r\n          \r\n              placeholder=\"{{'quantity' | translate}}\" />\r\n            </div>  \r\n            <!-- Angular input error messages -->\r\n            <!-- <span *ngIf=\"form.quantityEmpty\" class=\"alertRedColor\" style=\"color: red;\">Please enter quantity</span>\r\n            <span *ngIf=\"form.quantityInvalid\" class=\"alertRedColor\" style=\"color: red;\">This field must contain digits</span> -->\r\n\r\n            <span *ngIf=\"form.inputerror.quantity != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.quantity  | translate}}</span>\r\n          </div>\r\n          \r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'lastUpdateDate' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.lastUpdateDate |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.lastUpdateDate=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.lastUpdateDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.lastUpdateDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  [disabled]=\"!validate()\"  (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\"  [disabled]=\"!validate()\"  (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/inventorylist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'inventory List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_inventory/inventory.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/test_inventory/inventory.component.ts ***!
  \*******************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");







var InventoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InventoryComponent, _super);
    function InventoryComponent(locator, route, http, dataValidator) {
        var _this = _super.call(this, locator.endpoints.Inventory, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        _this.dataValidator = dataValidator;
        _this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        _this.alphabate = /[A-Za-z\s]/;
        _this.numberRegex = /^\d+(\.\d{1,2})?$/;
        _this.numbetrPresentRegex = /^\d+(\.\d+)?%$/;
        _this.nameFirstLastCharaCapitalRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        return _this;
    }
    //Note Use:-
    InventoryComponent.prototype.onQuantityInput = function (event) {
        var input = event.target;
        var value = input.value;
        // Remove any characters that are not digits or dots
        value = value.replace(/[^0-9.]/g, '');
        // Ensure that there is at most one dot and up to two decimal places
        var parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join('');
        }
        else if (parts.length === 2 && parts[1].length > 2) {
            value = parts[0] + '.' + parts[1].substring(0, 2);
        }
        input.value = value;
        this.form.data.quantity = value;
    };
    //Note Use:-
    InventoryComponent.prototype.onNameInput = function (event) {
        var input = event.target;
        var value = input.value;
        // Trim leading and trailing spaces
        value = value.trim();
        // Split the input value into words based on spaces
        var words = value.split(' ');
        // Capitalize the first letter of each word and make the rest lowercase
        var formattedWords = words.map(function (word, index) {
            // Capitalize the first letter of each word and make the rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        // Join the formatted words back into a single string with a single space
        value = formattedWords.join(' ');
        // Set the formatted value to the input field and form data
        input.value = value;
        this.form.data.supplierName = value;
    };
    //Error Filed Match Regex Pattern  
    InventoryComponent.prototype.valideData = function () {
        this.form.emailEmpty = false;
        this.form.emailInvalid = false;
        this.form.quantityEmpty = false;
        this.form.quantityInvalid = false;
        this.form.NameEmpty = false;
        this.form.NameInvalid = false;
        // Email validation
        if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
            this.form.emailEmpty = true;
        }
        else if (!this.emailRegex.test(this.form.data.supplierName)) {
            this.form.emailInvalid = true;
        }
        // First Last Name Capitale
        if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
            this.form.NameEmpty = true;
        }
        else if (!this.nameFirstLastCharaCapitalRegex.test(this.form.data.supplierName)) {
            this.form.NameInvalid = true;
        }
        // Quantity validation
        if (this.form.data.quantity == null || this.form.data.quantity.trim() === "") {
            this.form.quantityEmpty = true;
        }
        else if (!this.numberRegex.test(this.form.data.quantity)) {
            this.form.quantityInvalid = true;
        }
    };
    //button disable
    InventoryComponent.prototype.validate = function () {
        var flag = true;
        // flag = flag && this.dataValidator.isNotNullObject(this.form.data.supplierName) && this.dataValidator.emailRegexPattern(this.form.data.supplierName);
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.quantity) && this.dataValidator.numberRegexPattern(this.form.data.quantity);
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.lastUpdateDate) ;
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.productId) ;
        return flag;
    };
    InventoryComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    InventoryComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    InventoryComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.supplierName = data.supplierName;
        form.lastUpdateDate = data.lastUpdateDate;
        form.quantity = data.quantity;
        form.productId = data.productId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    InventoryComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/test_inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/test_inventory/inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_6__["DataValidator"]])
    ], InventoryComponent);
    return InventoryComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_inventory/inventorylist.component.css":
/*!************************************************************!*\
  !*** ./src/app/test_inventory/inventorylist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfaW52ZW50b3J5L2ludmVudG9yeWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_inventory/inventorylist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/test_inventory/inventorylist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  binventory: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Inventory List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lastUpdateDate\"\r\n            placeholder=\"{{'Search lastUpdateDate ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.supplierName\"\r\n          (ngModelChange)=\"form.searchParams.supplierName = $event.trim()\"\r\n          appcontendAlphabateOnly maxlength=\"30\" \r\n          (input)=\"validatName()\"\r\n            placeholder=\"{{'Search supplierName ' | translate}}\">\r\n\r\n            <span *ngIf=\"form.nameInvalid\" class=\"alertRedColor\" style=\"color: red;\">\r\n               This Flied content alphabate and Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.\r\n            </span>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\r\n          appcontendNumberOnly maxlength=\"15\" \r\n          (input)=\"validateNumber()\"\r\n            placeholder=\"{{'Search quantity ' | translate}}\">\r\n\r\n            <span *ngIf=\"form.quantityInvalid\" class=\"alertRedColor\" style=\"color: red;\">\r\n              this filed content  max=4 lakh  value.\r\n            </span>\r\n\r\n        </div>\r\n\r\n  \r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   <!-- Add inventory button -->\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/inventory')\" type=\"button\" class=\"btn btn-success\">{{'Add inventory' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n    \r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'supplierName' | translate}}</th>\r\n                <th>{{'LastUpdateDate ' | translate}}</th>\r\n                <th>{{'quantity  ' | translate}}</th>\r\n                 <th>{{'product ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.supplierName }} </td>\r\n                <td> {{ m.lastUpdateDate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.quantity }} </td>\r\n                <td> {{ m.product }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/inventory/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_inventory/inventorylist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/test_inventory/inventorylist.component.ts ***!
  \***********************************************************/
/*! exports provided: InventorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorylistComponent", function() { return InventorylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InventorylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InventorylistComponent, _super);
    function InventorylistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Inventory, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    InventorylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventorylist',
            template: __webpack_require__(/*! ./inventorylist.component.html */ "./src/app/test_inventory/inventorylist.component.html"),
            styles: [__webpack_require__(/*! ./inventorylist.component.css */ "./src/app/test_inventory/inventorylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], InventorylistComponent);
    return InventorylistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_issue/issue.component.css":
/*!************************************************!*\
  !*** ./src/app/test_issue/issue.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfaXNzdWUvaXNzdWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_issue/issue.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_issue/issue.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add issue' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update issue' | translate}}\r\n          </h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Title' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.title = $event.trim()\"\r\n                appcontendAlphabateOnly\r\n                 maxlength=\"50\" \r\n                placeholder=\"{{'title' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.title != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.title | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Description ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <textarea type=\"text\" id=\"descriptiontext\" cols=\"20\" title=\"description\" rows=\"4\" name=\"description\"\r\n                [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.description = $event.trim()\"\r\n                appcontendAlphabateOnly\r\n                 maxlength=\"110\"\r\n                placeholder=\"{{'description' | translate}}\"> </textarea>\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.description != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.description | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'status' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select status' | translate}}</option>\r\n                <option value=\"Open\">{{'Open' | translate }} </option>\r\n                <option value=\"In Progress\">{{'In Progress' | translate }} </option>\r\n                <option value=\"Hold\">{{'Hold' | translate }} </option>\r\n                <option value=\"Resolved\">{{'Resolved' | translate }} </option>\r\n                <option value=\"Close\">{{'Close' | translate }} </option>\r\n\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.status | translate}}</span>\r\n\r\n          </div>\r\n          \r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Assign To' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"userId\" [(ngModel)]=\"form.data.userId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select user' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.userList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.userId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.userId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'OpenDate' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.openDate |date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.openDate=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.openDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.openDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' |\r\n                translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' |\r\n                translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/issuelist']\"\r\n              style=\"text-decoration: none; color: white;\">{{'issue List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test_issue/issue.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_issue/issue.component.ts ***!
  \***********************************************/
/*! exports provided: IssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueComponent", function() { return IssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var IssueComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IssueComponent, _super);
    function IssueComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.issue, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    IssueComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    IssueComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    IssueComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.title = data.title;
        form.description = data.description;
        form.openDate = data.openDate;
        form.userId = data.userId;
        form.status = data.status;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    IssueComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    IssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue',
            template: __webpack_require__(/*! ./issue.component.html */ "./src/app/test_issue/issue.component.html"),
            styles: [__webpack_require__(/*! ./issue.component.css */ "./src/app/test_issue/issue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], IssueComponent);
    return IssueComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_issue/issuelist.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_issue/issuelist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfaXNzdWUvaXNzdWVsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_issue/issuelist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_issue/issuelist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bissue: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'issue List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      \r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n     \r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.title\" \r\n          (ngModelChange)=\"form.searchParams.title = $event.trim()\"\r\n          (input)=\"validatTitle()\"\r\n          appcontendAlphabateOnly\r\n           maxlength=\"50\"\r\n          placeholder=\"{{'Search title ' | translate}}\">\r\n        \r\n         <span *ngIf=\"form.titleInvalid\" class=\"alertRedColor\" style=\"color: red;\">This filed content alphabate and max lent is 40.</span> \r\n        </div>\r\n\r\n\r\n       <div class=\"col-sm-2\">\r\n               <textarea type=\"text\"  id=\"descriptiontext\" cols=\"10\"    title=\"description\" rows=\"2\" title=\"description\" \r\n              [(ngModel)]=\"form.searchParams.description\" class=\"form-control\"  \r\n              (ngModelChange)=\"form.searchParams.description = $event.trim()\" \r\n              (input)=\" validatAlphabate()\"\r\n              appcontendAlphabateOnly\r\n              maxlength=\"101\"\r\n               placeholder=\"{{'description' | translate}}\"> </textarea>\r\n\r\n               <span *ngIf=\"form.alphabateInvalid\" class=\"alertRedColor\" style=\"color: red;\">This filed content alphabate and max lent is 80.</span>\r\n\r\n\r\n                </div>  \r\n \r\n\r\n\r\n\r\n        <div>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.openDate\" \r\n            placeholder=\"{{'Search opendate ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" title=\"userId\" [(ngModel)]=\"form.searchParams.userId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select user List' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.userList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n       <div >\r\n\r\n          <select class=\"form-control\" title=\"status\" [(ngModel)]=\"form.searchParams.status\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select status' | translate}}</option>\r\n            <option value=\"Open\">{{'Open' | translate }} </option>\r\n            <option value=\"In Progress\">{{'In Progress' | translate }} </option>\r\n            <option value=\"Hold\">{{'Hold' | translate }} </option>\r\n            <option value=\"Resolved\">{{'Resolved' | translate }} </option>\r\n            <option value=\"Close\">{{'Close' | translate }} </option>\r\n           </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n   \r\n\r\n\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n       \r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div >\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      \r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n      \r\n      \r\n      <!-- Add issue button -->\r\n       <div >\r\n        <button (click)=\"forward('/issue')\" type=\"button\" class=\"btn btn-success\">{{'Add issue' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bissueed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'title' | translate}}</th>\r\n                <th>{{'description ' | translate}}</th>\r\n                <th>{{'opendate ' | translate}}</th>\r\n                <th>{{'Status' | translate}}</th>\r\n                <th>{{'user ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.title }} </td>\r\n                <td> {{ m.description }} </td>\r\n               <td> {{ m.openDate | date : 'yyyy-MM-dd'}} </td>\r\n               <td> {{ m.status }} </td>\r\n               <td> {{ m.user }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/issue/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_issue/issuelist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_issue/issuelist.component.ts ***!
  \***************************************************/
/*! exports provided: IssuelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuelistComponent", function() { return IssuelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var IssuelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IssuelistComponent, _super);
    function IssuelistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.issue, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    IssuelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issuelist',
            template: __webpack_require__(/*! ./issuelist.component.html */ "./src/app/test_issue/issuelist.component.html"),
            styles: [__webpack_require__(/*! ./issuelist.component.css */ "./src/app/test_issue/issuelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], IssuelistComponent);
    return IssuelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_job/job.component.css":
/*!********************************************!*\
  !*** ./src/app/test_job/job.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfam9iL2pvYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_job/job.component.html":
/*!*********************************************!*\
  !*** ./src/app/test_job/job.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add JOB' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update JOB' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Status' | translate }}</b><span class=\"required-field\"></span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n              <select class=\"form-control\" name=\"statusId\" [(ngModel)]=\"form.data.statusId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select status' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.StatusList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.statusId != null\" class=\"alertRedColor\" style=\"color: red;\">{{form.inputerror.statusId | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Title' | translate }}</b><span class=\"required-field\"></span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n              <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\"\r\n              (ngModelChange)=\"form.data.title = $event.trim()\"  appNoNumbers    maxlength=\"50\"  \r\n               placeholder=\"{{'Title' | translate}}\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.title != null\" class=\"alertRedColor\" style=\"color: red;\">{{form.inputerror.title | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group addrestext\">\r\n            <label><b>{{'Experience' | translate }}</b><span class=\"required-field\"></span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\">\r\n                  <i class=\"fas fa-briefcase\"></i> \r\n                </div>\r\n              </div>\r\n              <input type=\"text\" name=\"experience\" [(ngModel)]=\"form.data.experience\" class=\"form-control\" \r\n                     (ngModelChange)=\"form.data.experience = $event.trim()\" maxlength=\"50\"  \r\n                     placeholder=\"{{'Experience' | translate}}\" />\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.experience != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.experience | translate}}\r\n            </span>\r\n          </div>\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Date OF Opening' | translate }}</b><span class=\"required-field\"></span></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n              <input type=\"date\" [value]=\"form.data.dateOfOpening | date:'yyyy-MM-dd'\" (input)=\"form.data.dateOfOpening=parseDate($event.target.value)\" class=\"form-control form-control-sm\" required />\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.dateOfOpening != null\" class=\"alertRedColor\" style=\"color: red;\">{{form.inputerror.dateOfOpening | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/joblist']\" style=\"text-decoration: none; color: white;\">{{'Job List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_job/job.component.ts":
/*!*******************************************!*\
  !*** ./src/app/test_job/job.component.ts ***!
  \*******************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var JobComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobComponent, _super);
    function JobComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    JobComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    JobComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    JobComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.title = data.title;
        form.dateOfOpening = data.dateOfOpening;
        form.experience = data.experience;
        form.statusId = data.statusId;
        form.status = data.status;
    };
    JobComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/test_job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/test_job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], JobComponent);
    return JobComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_job/joblist.component.css":
/*!************************************************!*\
  !*** ./src/app/test_job/joblist.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfam9iL2pvYmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_job/joblist.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_job/joblist.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-5\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Job List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfOpening\"\r\n            placeholder=\"{{'Search dateOfOpening ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.experience\"\r\n          (ngModelChange)=\"form.searchParams.name = $event.trim()\" maxlength=\"50\"\r\n            placeholder=\"{{'Search experience ' | translate}}\">\r\n             \r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.title\"\r\n          (ngModelChange)=\"form.searchParams.name = $event.trim()\" maxlength=\"50\" appNoNumbers\r\n            placeholder=\"{{'Search title ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"paymentModeID\" [(ngModel)]=\"form.searchParams.statusId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select status ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.StatusList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   \r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/job')\" type=\"button\" class=\"btn btn-success\">{{'Add job' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\" name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Title' | translate}}</th>\r\n                <th>{{'Date Of Opening ' | translate}}</th>\r\n                <th>{{'Experience ' | translate}}</th>\r\n                <th>{{'status ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.title }} </td>\r\n                <td> {{ m.dateOfOpening | date : 'dd-MM-yyyy'}} </td>\r\n                <td> {{ m.experience }} </td>\r\n                <td> {{ m.status }} </td>\r\n                \r\n                <td>\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/job/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_job/joblist.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_job/joblist.component.ts ***!
  \***********************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var JoblistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JoblistComponent, _super);
    function JoblistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! ./joblist.component.html */ "./src/app/test_job/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.css */ "./src/app/test_job/joblist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], JoblistComponent);
    return JoblistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_order/order.component.css":
/*!************************************************!*\
  !*** ./src/app/test_order/order.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_order/order.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_order/order.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    border-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Order' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Order' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Customer' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"customerId\" [(ngModel)]=\"form.data.customerId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select customer' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.customerList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.customerId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.customerId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n           <!--  Unique Filed=> (ngModelChange)=\"form.data.productName = $event.trim()\" \r\n             string=>type=\"text\" (ngModelChange)=\"form.data.productName = $event.trim()\" / appNoNumbers -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'product Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"productName\" [(ngModel)]=\"form.data.productName\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.productName = $event.trim()\"   \r\n                 maxlength=\"40\"  \r\n               placeholder=\"{{'productName' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.productName != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.productName | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      \r\n\r\n\r\n<!-- LongFiled=> type=\"number\"   -->\r\n          <div class=\"form-group\" class=\"addrestext\">\r\n\r\n            <label><b>{{'Quantity' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n               <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"></div>\r\n              </div>\r\n\r\n         <input type=\"number\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\" \r\n             appcontendNumberOnly    \r\n             appMaxLengthNumber=\"12\" \r\n         placeholder=\"{{'quantity' | translate}}\"  />\r\n             \r\n            </div>\r\n            <span *ngIf=\"form.inputerror.quantity != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.quantity | translate}}</span>\r\n          </div>\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Order Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.orderDate |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.orderDate=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.orderDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.orderDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/orderlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'order List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_order/order.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_order/order.component.ts ***!
  \***********************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var OrderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderComponent, _super);
    function OrderComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    OrderComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    OrderComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    //Usecase#2: Order
    //productName,
    //orderDate,
    //quantity
    //5. customer (Preload)
    OrderComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.productName = data.productName;
        form.orderDate = data.orderDate;
        form.quantity = data.quantity;
        form.customerId = data.customerId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    OrderComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/test_order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/test_order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], OrderComponent);
    return OrderComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_order/orderlist.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_order/orderlist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfb3JkZXIvb3JkZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_order/orderlist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_order/orderlist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Order List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.orderDate\"\r\n            placeholder=\"{{'Search orderDate ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\r\n          appcontendNumberOnly appMaxLengthNumber=\"10\" \r\n           (input)=\"validateNumber()\"\r\n            placeholder=\"{{'Search quantity ' | translate}}\">\r\n            <span *ngIf=\"form.quantityInvalid\" class=\"alertRedColor\" style=\"color: red;\">\r\n              this filed content min =0   value and max= 4 LAKh  value\r\n            </span>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.productName\"\r\n           (ngModelChange)=\"form.data.productName = $event.trim()\"  appMaxLengthNumber=\"30\"\r\n            placeholder=\"{{'Search product Name ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"customerId\" [(ngModel)]=\"form.searchParams.customerId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select customer ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.customerList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   <!-- Add order button -->\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/order')\" type=\"button\" class=\"btn btn-success\">{{'Add order' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'productName' | translate}}</th>\r\n                <th>{{'orderDate ' | translate}}</th>\r\n                <th>{{'quantity ' | translate}}</th>\r\n                <th>{{'customer ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.productName }} </td>\r\n                <td> {{ m.orderDate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.quantity }} </td>\r\n                <td> {{ m.customer }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/order/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_order/orderlist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_order/orderlist.component.ts ***!
  \***************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OrderlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderlistComponent, _super);
    function OrderlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/test_order/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/test_order/orderlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], OrderlistComponent);
    return OrderlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_owner/owner.component.css":
/*!************************************************!*\
  !*** ./src/app/test_owner/owner.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfb3duZXIvb3duZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_owner/owner.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_owner/owner.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bowner-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add owner' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update owner' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Vehicle ID' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.data.vehicleId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select VehicleId' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.vehicleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.VehicleId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.VehicleId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n           <!--  Unique Filed=> (ngModelChange)=\"form.data.name = $event.trim()\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.name = $event.trim()\"     maxlength=\"50\"   appcontendAlphabateOnly\r\n               placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <!-- insuranceAmout filed -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Insurance Amount ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"insuranceAmout\" [(ngModel)]=\"form.data.insuranceAmout\" class=\"form-control\"\r\n                   appcontendNumberOnly\r\n                   appMaxLengthNumber=\"20\" \r\n                    placeholder=\"{{'insuranceAmout  ' | translate}}\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.insuranceAmout != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.insuranceAmout| translate}}</span>\r\n          </div>\r\n\r\n    \r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{ 'Date OF Birth' | translate }}</b><span class=\"required-field\"></span></label>\r\n          \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n          \r\n              <select class=\"form-control\" \r\n                      name=\"dateOfBirth\" \r\n                      id=\"dateOfBirth\" \r\n                      [(ngModel)]=\"form.data.dateOfBirth\" \r\n                      style=\"cursor: pointer;\">\r\n                <option [ngValue]=\"null\" value=\"undefined\">{{ 'Please select date Of Birth' | translate }}</option>\r\n                <option [ngValue]=\"'2001-09-23'\">{{ '2001-09-23' | translate }}</option>\r\n                <option [ngValue]=\"'2001-10-15'\">{{ '2001-10-15' | translate }}</option>\r\n                <option [ngValue]=\"'2024-01-03'\">{{ '2024-01-03' }}</option>\r\n                <option [ngValue]=\"'2010-01-03'\">{{ '2010-01-03' }}</option>\r\n                <option [ngValue]=\"'2005-01-03'\">{{ '2005-01-03' }}</option>\r\n                <!-- Add more options as needed -->\r\n              </select>\r\n            </div>\r\n          \r\n            <span *ngIf=\"form.inputerror.dateOfBirth != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{ form.inputerror.dateOfBirth | translate }}\r\n            </span>\r\n          </div>\r\n          \r\n          \r\n          \r\n            \r\n          \r\n          \r\n\r\n          \r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/ownerlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'owner List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_owner/owner.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_owner/owner.component.ts ***!
  \***********************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var OwnerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OwnerComponent, _super);
    function OwnerComponent(locator, route, http, datePipe) {
        var _this = _super.call(this, locator.endpoints.Owner, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        _this.datePipe = datePipe;
        return _this;
    }
    OwnerComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    OwnerComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    OwnerComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.dateOfBirth = this.datePipe.transform(data.dateOfBirth, 'yyyy-MM-dd');
        console.log("dateofburth====", data.dateOfBirth);
        form.insuranceAmout = data.insuranceAmout;
        form.vehicleId = data.vehicleId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    OwnerComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/test_owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.css */ "./src/app/test_owner/owner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], OwnerComponent);
    return OwnerComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_owner/ownerlist.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_owner/ownerlist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfb3duZXIvb3duZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_owner/ownerlist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_owner/ownerlist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    bowner: none;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\" style=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Owner List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.insuranceAmout\"\r\n            appMaxLengthNumber=\"50\" placeholder=\"{{'Search insuranceAmount ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" appNoNumbers maxlength=\"50\"\r\n            (ngModelChange)=\"form.searchParams.name = $event.trim()\" placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"dateOfBirth\" id=\"dateOfBirth\" [(ngModel)]=\"form.searchParams.dateOfBirth\"\r\n            style=\"cursor: pointer;\">\r\n            <option [ngValue]=\"null\" value=\"undefined\">{{ 'Please select date Of Birth' | translate }}</option>\r\n            <option [ngValue]=\"'2001-09-23'\">{{ '2001-09-23' | translate }}</option>\r\n            <option [ngValue]=\"'2001-10-15'\">{{ '2001-10-15' | translate }}</option>\r\n            <option [ngValue]=\"'2024-01-03'\">{{ '2002-01-03' }}</option>\r\n            <option [ngValue]=\"'2010-01-03'\">{{ '2003-01-03' }}</option>\r\n            <option [ngValue]=\"'2005-01-03'\">{{ '2004-01-03' }}</option>\r\n            <!-- Add more options as needed -->\r\n          </select>\r\n\r\n        </div>\r\n\r\n        <div>\r\n          <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.searchParams.vehicleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select VehicleId' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.vehicleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n        <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- Add owner button -->\r\n      <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/owner')\" type=\"button\" class=\"btn btn-success\">{{'Add owner' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bownered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\" name=\"list_name\"\r\n                    value=\"h1\" />\r\n                  {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'dateOfBirth ' | translate}}</th>\r\n                <th>{{'insuranceAmount ' | translate}}</th>\r\n                <th>{{'vehicleID ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name}} </td>\r\n                <td> {{ m.dateOfBirth | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.insuranceAmout }} </td>\r\n                <td> {{ m.vehicle }} </td>\r\n\r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button class=\"fa fa-edit text-primary \" id=\"nnn\" (click)=\"forward( '/owner/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n\r\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' |\r\n                  translate\r\n                  }} </button>\r\n              </td>\r\n\r\n              <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\"> <button (click)=\"refresh()\" class=\"btn btn-info\">\r\n                  {{'Rreset' | translate }} </button></td>\r\n\r\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\"\r\n                  (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n\r\n              <td style=\"width: 50%;\"><button (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\"\r\n                  type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test_owner/ownerlist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_owner/ownerlist.component.ts ***!
  \***************************************************/
/*! exports provided: OwnerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerlistComponent", function() { return OwnerlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var OwnerlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OwnerlistComponent, _super);
    function OwnerlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Owner, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    OwnerlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ownerlist',
            template: __webpack_require__(/*! ./ownerlist.component.html */ "./src/app/test_owner/ownerlist.component.html"),
            styles: [__webpack_require__(/*! ./ownerlist.component.css */ "./src/app/test_owner/ownerlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OwnerlistComponent);
    return OwnerlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_patient/patient.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_patient/patient.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_patient/patient.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_patient/patient.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add patient' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update patient' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.name = $event.trim()\" appNoNumbers     maxlength=\"50\"  \r\n               placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label><b>{{'Mobile ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"mobile\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\r\n               appMaxLengthNumber=\"10\"\r\n                    placeholder=\"{{'Please Enter mobile NO' | translate}}\">\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.mobile != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.mobile| translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n                        \r\n\r\n              <div class=\"form-group\">\r\n\r\n            <label><b>{{'Decease' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"deceaseId\" [(ngModel)]=\"form.data.deceaseId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select decease' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.deceaseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.deceaseId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.deceaseId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Date Of Visit' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.dateofVisit |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.dateofVisit=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.dateofVisit != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.dateofVisit | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/patientlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'patient List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_patient/patient.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_patient/patient.component.ts ***!
  \***************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientComponent, _super);
    function PatientComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.patient, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    PatientComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    PatientComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    //	Usecase#1: Patient
    //	Fields:
    //	1. id (on business primary key),
    //	2. name,
    //	3. dateofVisit,
    //	4. mobile
    //	5. decease (preload)
    PatientComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.dateofVisit = data.dateofVisit;
        form.mobile = data.mobile;
        form.deceaseId = data.deceaseId;
        form.decease = data.decease;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    PatientComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/test_patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/test_patient/patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PatientComponent);
    return PatientComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_patient/patientlist.component.css":
/*!********************************************************!*\
  !*** ./src/app/test_patient/patientlist.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcGF0aWVudC9wYXRpZW50bGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_patient/patientlist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/test_patient/patientlist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bpatient: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Patient List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\" \r\n          appMaxLengthNumber=\"10\"\r\n            placeholder=\"{{'Search mobile ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n           appNoNumbers  maxlength=\"50\" (ngModelChange)=\"form.searchParams.name = $event.trim()\"\r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n  \r\n \r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateofVisit\" \r\n            placeholder=\"{{'Search dateofVisit ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"deceaseId\" [(ngModel)]=\"form.searchParams.deceaseId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select decease' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.deceaseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <!-- Add patient button -->\r\n       <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/patient')\" type=\"button\" class=\"btn btn-success\">{{'Add patient' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bpatiented table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Name' | translate}}</th>\r\n                <th>{{'Date Of Visit ' | translate}}</th>\r\n                <th>{{'Mobile' | translate}}</th>\r\n                <th>{{'Decease ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.dateofVisit | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.mobile }} </td>\r\n                <td> {{ m.decease }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/patient/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_patient/patientlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/test_patient/patientlist.component.ts ***!
  \*******************************************************/
/*! exports provided: PatientlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientlistComponent", function() { return PatientlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PatientlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientlistComponent, _super);
    function PatientlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.patient, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    PatientlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patientlist',
            template: __webpack_require__(/*! ./patientlist.component.html */ "./src/app/test_patient/patientlist.component.html"),
            styles: [__webpack_require__(/*! ./patientlist.component.css */ "./src/app/test_patient/patientlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PatientlistComponent);
    return PatientlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_prescription/prescription.component.css":
/*!**************************************************************!*\
  !*** ./src/app/test_prescription/prescription.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcHJlc2NyaXB0aW9uL3ByZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_prescription/prescription.component.html":
/*!***************************************************************!*\
  !*** ./src/app/test_prescription/prescription.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Prescription' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Prescription' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n<!-- fildes -->\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n     (ngModelChange)=\"form.data.name = $event.trim()\"      maxlength=\"50\"  appNoNumber\r\n     placeholder=\"{{'name' | translate}}\">\r\n\r\n  </div>\r\n  <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.name | translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--  3.  capacity filed -->  \r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'Capacity ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"number\" name=\"capacity\" [(ngModel)]=\"form.data.capacity\" class=\"form-control\" \r\n      appMaxLengthNumber=\"50\"\r\n      placeholder=\"{{'capacity  ' | translate}}\">\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.capacity != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.capacity| translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n    <!-- 4.   PRELOAD FILED-->                 \r\n\r\n    <div class=\"form-group\">\r\n\r\n  <label><b>{{'Decease' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n    </div>\r\n\r\n    <select class=\"form-control\" name=\"deceaseId\" [(ngModel)]=\"form.data.deceaseId\" aria-label=\"ngSelected\">\r\n      <option [ngValue]=\"\" value=\"undefined\">{{'Select decease' | translate}}</option>\r\n      <option *ngFor=\"let obj of form.preload.deceaseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n    </select>\r\n\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.deceaseId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.deceaseId | translate}}</span>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- 5.  date Filed=> type=\"date\" -->\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"date\" [value]=\"form.data.date |date:'yyyy-MM-dd'\" \r\n     (input)=\"form.data.date=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.date | translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/prescriptionlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'prescription List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_prescription/prescription.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/test_prescription/prescription.component.ts ***!
  \*************************************************************/
/*! exports provided: PrescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionComponent", function() { return PrescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PrescriptionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrescriptionComponent, _super);
    function PrescriptionComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.prescription, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    PrescriptionComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    PrescriptionComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    PrescriptionComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.capacity = data.capacity;
        form.dateof = data.dateof;
        form.deceaseId = data.deceaseId;
        form.decease = data.decease;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    PrescriptionComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PrescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescription',
            template: __webpack_require__(/*! ./prescription.component.html */ "./src/app/test_prescription/prescription.component.html"),
            styles: [__webpack_require__(/*! ./prescription.component.css */ "./src/app/test_prescription/prescription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PrescriptionComponent);
    return PrescriptionComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_prescription/prescriptionlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/test_prescription/prescriptionlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcHJlc2NyaXB0aW9uL3ByZXNjcmlwdGlvbmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_prescription/prescriptionlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/test_prescription/prescriptionlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bprescription: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'prescription List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n   \r\n      <div class=\"row p-1\">  <!-- search fildes -->\r\n\r\n\r\n\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n         <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" \r\n          (ngModelChange)=\"form.searchParams.name = $event.trim()\" appNoNumbers   maxlength=\"50\" \r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.capacity\" \r\n           appMaxLengthNumber=\"50\"\r\n            placeholder=\"{{'Search capacity ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\" \r\n            placeholder=\"{{'Search date ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n\r\n\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"deceaseId\" [(ngModel)]=\"form.searchParams.deceaseId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select deceaseId' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.deceaseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n     \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <!-- Add prescription button -->\r\n       <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/prescription')\" type=\"button\" class=\"btn btn-success\">{{'Add prescription' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bprescriptioned table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n\r\n                <th>{{'Name ' | translate}}</th>\r\n                <th>{{'Capacity ' | translate}}</th>\r\n                <th>{{'Date ' | translate}}</th>\r\n               <th>{{'decease' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n          \r\n                \r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.capacity +\" mg\" }} </td>\r\n                <td> {{ m.date | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.decease }} </td>\r\n               \r\n\r\n\r\n\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/prescription/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_prescription/prescriptionlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/test_prescription/prescriptionlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: PrescriptionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionlistComponent", function() { return PrescriptionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var PrescriptionlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrescriptionlistComponent, _super);
    function PrescriptionlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.prescription, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    PrescriptionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescriptionlist',
            template: __webpack_require__(/*! ./prescriptionlist.component.html */ "./src/app/test_prescription/prescriptionlist.component.html"),
            styles: [__webpack_require__(/*! ./prescriptionlist.component.css */ "./src/app/test_prescription/prescriptionlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PrescriptionlistComponent);
    return PrescriptionlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_productdetails/productdetails.component.css":
/*!******************************************************************!*\
  !*** ./src/app/test_productdetails/productdetails.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcHJvZHVjdGRldGFpbHMvcHJvZHVjdGRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_productdetails/productdetails.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/test_productdetails/productdetails.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">                                                              \r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add productdetails' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update productdetails' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n<!-- fildes -->\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n     (ngModelChange)=\"form.data.name = $event.trim()\"      maxlength=\"50\"  appNoNumbers \r\n     placeholder=\"{{'name' | translate}}\">\r\n\r\n  </div>\r\n  <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.name | translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'description ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n    </div>\r\n    \r\n    <textarea type=\"text\"  id=\"descriptiontext\" cols=\"20\"    title=\"description\" rows=\"4\" name=\"description\" \r\n    [(ngModel)]=\"form.data.description\" class=\"form-control\"  (ngModelChange)=\"form.data.description = $event.trim()\"\r\n   maxlength=\"100\"   placeholder=\"{{'description' | translate}}\"> </textarea>\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.description != null\" class=\"alertRedColor\" style=\"color: red;\">{{form.inputerror.description | translate}}</span>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'price ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"number\" name=\"price\" [(ngModel)]=\"form.data.price\" class=\"form-control\" appMaxLengthNumber=\"50\"\r\n          placeholder=\"{{'price  ' | translate}}\">\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.price != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.price| translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n\r\n  <label><b>{{'category' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n    </div>\r\n\r\n    <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.categoryId\" aria-label=\"ngSelected\">\r\n      <option [ngValue]=\"\" value=\"undefined\">{{'Select category' | translate}}</option>\r\n      <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n    </select>\r\n\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.categoryId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.categoryId | translate}}</span>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label><b>{{'dateOfPurchase' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n    </div>\r\n\r\n    <input type=\"date\" [value]=\"form.data.dateOfPurchase |date:'yyyy-MM-dd'\" \r\n     (input)=\"form.data.dateOfPurchase=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n  </div>\r\n\r\n  <span *ngIf=\"form.inputerror.dateOfPurchase != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n    {{form.inputerror.dateOfPurchase | translate}}</span>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/productdetailslist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'productdetails List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_productdetails/productdetails.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/test_productdetails/productdetails.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ProductdetailsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductdetailsComponent, _super);
    function ProductdetailsComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.productdetails, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    ProductdetailsComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    ProductdetailsComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    ProductdetailsComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.price = data.price;
        form.categoryId = data.categoryId;
        form.dateOfPurchase = data.dateOfPurchase;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    ProductdetailsComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/test_productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/test_productdetails/productdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_productdetails/productdetailslist.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/test_productdetails/productdetailslist.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfcHJvZHVjdGRldGFpbHMvcHJvZHVjdGRldGFpbHNsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_productdetails/productdetailslist.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/test_productdetails/productdetailslist.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    bproductdetails: none;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\" style=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'productdetails List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row p-1\"> <!-- search fildes -->\r\n\r\n\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\" \r\n           appMaxLengthNumber=\"50\" (ngModelChange)=\"form.searchParams.name = $event.trim()\"\r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.price\" \r\n          appMaxLengthNumber=\"50\"\r\n            placeholder=\"{{'Search price ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfPurchase\"\r\n            placeholder=\"{{'Search dateOfPurchase ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <textarea type=\"text\" id=\"descriptiontext\" cols=\"15\" title=\"description\" rows=\"2\" name=\"description\"\r\n            [(ngModel)]=\"form.searchParams.description\" class=\"form-control\"\r\n            (ngModelChange)=\"form.searchParams.description = $event.trim()\" appMaxLengthNumber=\"100\"\r\n            placeholder=\"{{'description' | translate}}\"> </textarea>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.searchParams.categoryId\"\r\n            aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select categoryId' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n        <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <!-- Add productdetails button -->\r\n      <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/productdetails')\" type=\"button\" class=\"btn btn-success\">{{'Add productdetails' |\r\n          translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bproductdetailsed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\" name=\"list_name\"\r\n                    value=\"h1\" />\r\n                  {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n\r\n\r\n                <th>{{'name ' | translate}}</th>\r\n                <th>{{'category ' | translate}}</th>\r\n                <th>{{'dateOfPurchase ' | translate}}</th>\r\n                <th>{{'price' | translate}}</th>\r\n                <th>{{'description' | translate}}</th>\r\n\r\n\r\n\r\n\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.category }} </td>\r\n                <td> {{ m.dateOfPurchase | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.price }} </td>\r\n                <td>{{m.description | translate}}</td>\r\n\r\n\r\n\r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button class=\"fa fa-edit text-primary \" id=\"nnn\" (click)=\"forward( '/productdetails/' +  m.id)\"\r\n                    style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n\r\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' |\r\n                  translate\r\n                  }} </button>\r\n              </td>\r\n\r\n              <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\"> <button (click)=\"refresh()\" class=\"btn btn-info\">\r\n                  {{'Rreset' | translate }} </button></td>\r\n\r\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\"\r\n                  (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n\r\n              <td style=\"width: 50%;\"><button (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\"\r\n                  type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test_productdetails/productdetailslist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/test_productdetails/productdetailslist.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductdetailslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailslistComponent", function() { return ProductdetailslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var ProductdetailslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductdetailslistComponent, _super);
    function ProductdetailslistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.productdetails, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ProductdetailslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetailslist',
            template: __webpack_require__(/*! ./productdetailslist.component.html */ "./src/app/test_productdetails/productdetailslist.component.html"),
            styles: [__webpack_require__(/*! ./productdetailslist.component.css */ "./src/app/test_productdetails/productdetailslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductdetailslistComponent);
    return ProductdetailslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_route/route.component.css":
/*!************************************************!*\
  !*** ./src/app/test_route/route.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfcm91dGUvcm91dGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_route/route.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_route/route.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    broute-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add route' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update route' | translate}}\r\n          </h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n          <!-- start attribute filed Role se -->\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.name = $event.trim()\" appNoNumbers maxlength=\"50\"\r\n                 placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Allowd Speed ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"allowdSpeed\" [(ngModel)]=\"form.data.allowdSpeed\" class=\"form-control\"\r\n              appMaxLengthNumber=\"3\"   placeholder=\"{{'allowdSpeed  ' | translate}}\"> \r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.allowdSpeed != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.allowdSpeed| translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'vehicle ID' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.data.vehicleId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select vehicle' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.VehicleIDList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.vehicleId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.vehicleId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Start Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.startdate |date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.startdate=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.startdate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.startdate | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <!-- END attribute filed -->\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' |\r\n                translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' |\r\n                translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/routelist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'route List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test_route/route.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_route/route.component.ts ***!
  \***********************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RouteComponent, _super);
    function RouteComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.Route, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    RouteComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    RouteComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    //	Usecase#4: Route
    //	Fields:
    //	1. id (on business primary key),
    //	2. name,
    //	3. startdate,
    //	4. allowdSpeed (number)
    //	5. Vehicle ID (preload)
    RouteComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.startdate = data.startdate;
        form.allowdSpeed = data.allowdSpeed;
        form.vehicleID = data.vehicleID;
        form.vehicleId = data.vehicleId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    RouteComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/test_route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/test_route/route.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RouteComponent);
    return RouteComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_route/routelist.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_route/routelist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfcm91dGUvcm91dGVsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_route/routelist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_route/routelist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  broute: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'route List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.allowdSpeed\" \r\n          appMaxLengthNumber=\"5\"\r\n            placeholder=\"{{'Search allowdSpeed ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n          appNoNumbers appMaxLengthNumber=\"50\" (ngModelChange)=\"form.searchParams.name = $event.trim()\"\r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.startdate\" \r\n            placeholder=\"{{'Search startdate ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.searchParams.vehicleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select VehicleId' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.VehicleIDList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <!-- Add route button -->\r\n       <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/route')\" type=\"button\" class=\"btn btn-success\">{{'Add route' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-brouteed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'startdate ' | translate}}</th>\r\n                <th>{{'allowdSpeed ' | translate}}</th>\r\n                <th>{{'vehicleID' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.startdate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.allowdSpeed +\" Km/h\" }} </td>\r\n                <td> {{ m.vehicleID}} </td>\r\n          \r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/route/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_route/routelist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_route/routelist.component.ts ***!
  \***************************************************/
/*! exports provided: RoutelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutelistComponent", function() { return RoutelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoutelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoutelistComponent, _super);
    function RoutelistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Route, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoutelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routelist',
            template: __webpack_require__(/*! ./routelist.component.html */ "./src/app/test_route/routelist.component.html"),
            styles: [__webpack_require__(/*! ./routelist.component.css */ "./src/app/test_route/routelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoutelistComponent);
    return RoutelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_salary/salary.component.css":
/*!**************************************************!*\
  !*** ./src/app/test_salary/salary.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc2FsYXJ5L3NhbGFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_salary/salary.component.html":
/*!***************************************************!*\
  !*** ./src/app/test_salary/salary.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Salary' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Salary' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Amount ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"amount\" [(ngModel)]=\"form.data.amount\" class=\"form-control\" \r\n              appMaxLengthNumber=\"50\"\r\n                    placeholder=\"{{'amount  ' | translate}}\">\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.amount != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.amount| translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n                        \r\n\r\n              <div class=\"form-group\">\r\n\r\n            <label><b>{{'Employee' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"employeeId\" [(ngModel)]=\"form.data.employeeId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select employee' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.employeeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.employeeId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.employeeId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Status' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"status\" id=\"status\" [(ngModel)]=\"form.data.status\"\r\n              style=\"cursor: pointer;\">\r\n              <option [ngValue]=\"\" value=\"undefined\">{{'Please select status' | translate }}</option>\r\n              <option value=\"Active\">{{'Active' | translate }} </option>\r\n              <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n            </select>\r\n\r\n            </div>\r\n\r\n          <span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n            {{form.inputerror.status| translate}} </span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Applied Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.appliedDate |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.appliedDate=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.appliedDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.appliedDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n     \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/salarylist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'salary List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_salary/salary.component.ts":
/*!*************************************************!*\
  !*** ./src/app/test_salary/salary.component.ts ***!
  \*************************************************/
/*! exports provided: SalaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryComponent", function() { return SalaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SalaryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SalaryComponent, _super);
    function SalaryComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.salary, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    SalaryComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    SalaryComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    SalaryComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.status = data.status;
        form.appliedDate = data.appliedDate;
        form.amount = data.amount;
        form.priorityId = data.employeeId;
        form.employee = data.employee;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    SalaryComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    SalaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary',
            template: __webpack_require__(/*! ./salary.component.html */ "./src/app/test_salary/salary.component.html"),
            styles: [__webpack_require__(/*! ./salary.component.css */ "./src/app/test_salary/salary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SalaryComponent);
    return SalaryComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_salary/salarylist.component.css":
/*!******************************************************!*\
  !*** ./src/app/test_salary/salarylist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc2FsYXJ5L3NhbGFyeWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_salary/salarylist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/test_salary/salarylist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bsalary: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'salary List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.amount\" \r\n          appMaxLengthNumber=\"50\"\r\n            placeholder=\"{{'Search amount ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n                <select class=\"form-control\" name=\"status\" id=\"status\" [(ngModel)]=\"form.searchParams.status\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select status' | translate }}</option>\r\n                  <option value=\"Active\">{{'Active' | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n                </select>\r\n\r\n        </div>\r\n\r\n\r\n \r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.appliedDate\" \r\n            placeholder=\"{{'Search appliedDate ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"employeeId\" [(ngModel)]=\"form.searchParams.employeeId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select employeeId' | translate}}</option>\r\n            <option *ngFor=\"let obj of form.preload.employeeList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <!-- Add salary button -->\r\n       <div class=\"col-lg-2 ml-4\">\r\n        <button (click)=\"forward('/salary')\" type=\"button\" class=\"btn btn-success\">{{'Add salary' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bsalaryed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'employee ' | translate}}</th>\r\n                <th>{{'status ' | translate}}</th>\r\n                <th>{{'appliedDate ' | translate}}</th>\r\n                <th>{{'amount' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              \r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n                <td> {{ m.employee }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td> {{ m.appliedDate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.amount }} </td>\r\n\r\n            \r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/salary/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_salary/salarylist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/test_salary/salarylist.component.ts ***!
  \*****************************************************/
/*! exports provided: SalarylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalarylistComponent", function() { return SalarylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SalarylistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SalarylistComponent, _super);
    function SalarylistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.salary, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SalarylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salarylist',
            template: __webpack_require__(/*! ./salarylist.component.html */ "./src/app/test_salary/salarylist.component.html"),
            styles: [__webpack_require__(/*! ./salarylist.component.css */ "./src/app/test_salary/salarylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SalarylistComponent);
    return SalarylistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcart.component.css":
/*!**************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcart.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bshoppingcart-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add shoppingcart' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update shoppingcart ' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n        \r\n\r\n  <!-- preload Filed -->\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Product' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"productId\" [(ngModel)]=\"form.data.productId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select product' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.productId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.productId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n       \r\n          <div class=\"form-group\">\r\n            <label><b>{{'nameflied' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"nameflied\" [(ngModel)]=\"form.data.nameflied\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.nameflied = $event.trim()\"     maxlength=\"50\"   \r\n               placeholder=\"{{'nameflied' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.nameflied != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.nameflied | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n      \r\n\r\n\r\n<!-- LongFiled=> type=\"number\"   -->\r\n          <div class=\"form-group\" class=\"addrestext\">\r\n\r\n            <label><b>{{'Quantity' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n               <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"></div>\r\n              </div>\r\n\r\n         <input type=\"number\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\" \r\n         appMaxLengthNumber=\"50\"\r\n         placeholder=\"{{'quantity' | translate}}\"  />\r\n             \r\n            </div>\r\n            <span *ngIf=\"form.inputerror.quantity != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.quantity | translate}}</span>\r\n          </div>\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Dates' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.dates |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.dates=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.dates != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.dates | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/shoppingcartlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'shoppingcart List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcart.component.ts ***!
  \*************************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ShoppingcartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShoppingcartComponent, _super);
    function ShoppingcartComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.Shoppingcart, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    ShoppingcartComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    ShoppingcartComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    ShoppingcartComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.dates = data.dates;
        form.quantity = data.quantity;
        form.productId = data.productId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    ShoppingcartComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ShoppingcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/test_shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.css */ "./src/app/test_shoppingcart/shoppingcart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcartlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcartlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcartlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcartlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bshoppingcart: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'ShoppingCart List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dates\"\r\n            placeholder=\"{{'Search dates ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\r\n          appMaxLengthNumber=\"50\"\r\n            placeholder=\"{{'Search quantity ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        \r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n           (ngModelChange)=\"form.data.name = $event.trim()\"  appMaxLengthNumber=\"50\" \r\n            placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"productId\" [(ngModel)]=\"form.searchParams.productId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select product ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.productList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   <!-- Add shoppingcart button -->\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/shoppingcart')\" type=\"button\" class=\"btn btn-success\">{{'Add shoppingcart' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n    \r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'dates ' | translate}}</th>\r\n                <th>{{'quantity  ' | translate}}</th>\r\n                 <th>{{'product ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.dates | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.quantity }} </td>\r\n                <td> {{ m.product }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/shoppingcart/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_shoppingcart/shoppingcartlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/test_shoppingcart/shoppingcartlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShoppingcartlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartlistComponent", function() { return ShoppingcartlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ShoppingcartlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShoppingcartlistComponent, _super);
    function ShoppingcartlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Shoppingcart, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ShoppingcartlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcartlist',
            template: __webpack_require__(/*! ./shoppingcartlist.component.html */ "./src/app/test_shoppingcart/shoppingcartlist.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcartlist.component.css */ "./src/app/test_shoppingcart/shoppingcartlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ShoppingcartlistComponent);
    return ShoppingcartlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_supplier/supplier.component.css":
/*!******************************************************!*\
  !*** ./src/app/test_supplier/supplier.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc3VwcGxpZXIvc3VwcGxpZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_supplier/supplier.component.html":
/*!*******************************************************!*\
  !*** ./src/app/test_supplier/supplier.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bsupplier-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add Supplier' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update Supplier ' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n        \r\n\r\n  <!-- preload Filed -->\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Category' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.data.categoryId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select category' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.categoryId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.categoryId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n       \r\n          <div class=\"form-group\">\r\n            <label><b>{{'name' | translate }}</b><span class=\"required-field\"></span></label>\r\n          \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n          \r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" \r\n              appMaxLengthNumber=\"20\" (ngModelChange)=\"form.data.name = $event.trim()\" \r\n              (input)=\"valideData()\" appcontendAlphabateOnly\r\n              placeholder=\"{{'name' | translate}}\" />\r\n            </div> \r\n            <!-- Angular input error messages -->   \r\n            <!-- <span *ngIf=\"form.NameEmpty\" class=\"alertRedColor\" style=\"color: red;\">Please enter supplier name</span>\r\n            <span *ngIf=\"form.NameInvalid\" class=\"alertRedColor\" style=\"color: red;\">First name laste name character must be Capitale.</span> -->\r\n            \r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          \r\n          <div class=\"form-group addrestext\">\r\n            <label><b>{{'Payment Term' | translate }}</b><span class=\"required-field\"></span></label>\r\n          \r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"></div>\r\n              </div>\r\n          \r\n              <input type=\"number\" name=\"paymentTerm\" [(ngModel)]=\"form.data.paymentTerm\" class=\"form-control\" \r\n              appMaxLengthNumber=\"50\"  appSetNumberMinMax  appcontendNumberOnly\r\n              (ngModelChange)=\"form.data.paymentTerm = $event.trim()\" \r\n              (input)=\"valideData()\" \r\n              placeholder=\"{{'paymentTerm' | translate}}\" />\r\n            </div>  \r\n            <!-- Angular input error messages -->\r\n            <!-- <span *ngIf=\"form.paymentTermEmpty\" class=\"alertRedColor\" style=\"color: red;\">Please enter paymentTerm</span>\r\n            <span *ngIf=\"form.paymentTermInvalid\" class=\"alertRedColor\" style=\"color: red;\">This field must contain digits</span> -->\r\n\r\n            <span *ngIf=\"form.inputerror.paymentTerm != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.paymentTerm | translate}}</span>\r\n          </div>\r\n          \r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Registration Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.registrationDate |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.registrationDate=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.registrationDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.registrationDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  [disabled]=\"!validate()\"  (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\"  [disabled]=\"!validate()\"  (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/supplierlist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'supplier List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/test_supplier/supplier.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/test_supplier/supplier.component.ts ***!
  \*****************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");







var SupplierComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierComponent, _super);
    function SupplierComponent(locator, route, http, dataValidator) {
        var _this = _super.call(this, locator.endpoints.Supplier, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        _this.dataValidator = dataValidator;
        _this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        _this.alphabate = /[A-Za-z\s]/;
        _this.numberRegex = /^\d+(\.\d{1,2})?$/;
        _this.numbetrPresentRegex = /^\d+(\.\d+)?%$/;
        _this.nameFirstLastCharaCapitalRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
        return _this;
    }
    //Error Filed Match Regex Pattern  
    SupplierComponent.prototype.valideData = function () {
        this.form.emailEmpty = false;
        this.form.emailInvalid = false;
        this.form.quantityEmpty = false;
        this.form.quantityInvalid = false;
        this.form.NameEmpty = false;
        this.form.NameInvalid = false;
        // Email validation
        if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
            this.form.emailEmpty = true;
        }
        else if (!this.emailRegex.test(this.form.data.supplierName)) {
            this.form.emailInvalid = true;
        }
        // First Last Name Capitale
        if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
            this.form.NameEmpty = true;
        }
        else if (!this.nameFirstLastCharaCapitalRegex.test(this.form.data.supplierName)) {
            this.form.NameInvalid = true;
        }
        // Quantity validation
        if (this.form.data.quantity == null || this.form.data.quantity.trim() === "") {
            this.form.quantityEmpty = true;
        }
        else if (!this.numberRegex.test(this.form.data.quantity)) {
            this.form.quantityInvalid = true;
        }
    };
    //button disable
    SupplierComponent.prototype.validate = function () {
        var flag = true;
        // flag = flag && this.dataValidator.isNotNullObject(this.form.data.supplierName) && this.dataValidator.emailRegexPattern(this.form.data.supplierName);
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.quantity) && this.dataValidator.numberRegexPattern(this.form.data.quantity);
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.lastUpdateDate) ;
        // flag= flag && this.dataValidator.isNotNullObject(this.form.data.productId) ;
        return flag;
    };
    SupplierComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    SupplierComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    SupplierComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.registrationDate = data.registrationDate;
        form.paymentTerm = data.paymentTerm;
        form.categoryId = data.categoryId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    SupplierComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/test_supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.css */ "./src/app/test_supplier/supplier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_6__["DataValidator"]])
    ], SupplierComponent);
    return SupplierComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_supplier/supplierlist.component.css":
/*!**********************************************************!*\
  !*** ./src/app/test_supplier/supplierlist.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rfc3VwcGxpZXIvc3VwcGxpZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_supplier/supplierlist.component.html":
/*!***********************************************************!*\
  !*** ./src/app/test_supplier/supplierlist.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bsupplier: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'Supplier List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.registrationDate\"\r\n            placeholder=\"{{'Search registrationDate ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.paymentTerm\"\r\n          appMaxLengthNumber=\"20\"    (input)=\"validateNumber()\"  appcontendNumberOnly\r\n            placeholder=\"{{'Search paymentTerm ' | translate}}\">\r\n            <span *ngIf=\" form.paymentTermInvalid \" class=\"alertRedColor\" style=\"color: red;\"> This field must include digits 1 to 90 days </span>\r\n\r\n        </div>\r\n\r\n        \r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n           (ngModelChange)=\"form.data.name = $event.trim()\"  appMaxLengthNumber=\"20\" appcontendAlphabateOnly\r\n           (input)=\"  validatName()\"\r\n            placeholder=\"{{'Search Supplier Name ' | translate}}\">\r\n            <span *ngIf=\"form.nameInvalid\" class=\"alertRedColor\" style=\"color: red;\">Name content First and Last First Character upper case..</span>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"categoryId\" [(ngModel)]=\"form.searchParams.categoryId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select category ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.categoryList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          &nbsp;&nbsp;&nbsp;\r\n\r\n\r\n\r\n\r\n   <!-- Add supplier button -->\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/supplier')\" type=\"button\" class=\"btn btn-success\">{{'Add supplier' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n    <!-- delete Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n    \r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'registration Date ' | translate}}</th>\r\n                <th>{{'payment Term  ' | translate}}</th>\r\n                 <th>{{'category ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.registrationDate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.paymentTerm +\" days\" }} </td>\r\n                <td> {{ m.category }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/supplier/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_supplier/supplierlist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/test_supplier/supplierlist.component.ts ***!
  \*********************************************************/
/*! exports provided: SupplierlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierlistComponent", function() { return SupplierlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SupplierlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierlistComponent, _super);
    function SupplierlistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Supplier, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SupplierlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplierlist',
            template: __webpack_require__(/*! ./supplierlist.component.html */ "./src/app/test_supplier/supplierlist.component.html"),
            styles: [__webpack_require__(/*! ./supplierlist.component.css */ "./src/app/test_supplier/supplierlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SupplierlistComponent);
    return SupplierlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/test_users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/test_users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/test_users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add users' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update users' | translate}}\r\n          </h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'name' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.name = $event.trim()\"\r\n                appcontendAlphabateOnly\r\n                 maxlength=\"41\" \r\n                placeholder=\"{{'name' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.name | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'login' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.login = $event.trim()\"\r\n                 maxlength=\"31\" \r\n                placeholder=\"{{'login' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.login != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.login | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'password' }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                (ngModelChange)=\"form.data.password = $event.trim()\"\r\n                 maxlength=\"25\" \r\n                placeholder=\"{{'password' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.password | translate}}</span>\r\n          </div>\r\n\r\n\r\n          \r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'dateOfBirth' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.dateOfBirth |date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dateOfBirth=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.dateOfBirth != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.dateOfBirth | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label><b>{{'mobile'}}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"mobile\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\r\n               \r\n                \r\n                placeholder=\"{{'plse Enter mobile No'}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.mobile != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.mobile | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' |\r\n                translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' |\r\n                translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userslist']\"\r\n              style=\"text-decoration: none; color: white;\">{{'users List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/test_users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersComponent, _super);
    function UsersComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.Users, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    UsersComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    UsersComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    UsersComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.login = data.login;
        form.password = data.password;
        form.dateOfBirth = data.dateOfBirth;
        form.mobile = data.mobile;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    UsersComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/test_users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/test_users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UsersComponent);
    return UsersComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_users/userslist.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_users/userslist.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfdXNlcnMvdXNlcnNsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_users/userslist.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_users/userslist.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  #nnn {\r\n    background: none;\r\n    busers: none;\r\n  }\r\n</style>\r\n\r\n<div class=\"content-wrapper\" style=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'users List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\r\n            (ngModelChange)=\"form.searchParams.name = $event.trim()\" (input)=\"validatName()\" appcontendAlphabateOnly\r\n            maxlength=\"50\" placeholder=\"{{'Search name ' | translate}}\">\r\n\r\n          <span *ngIf=\"form.nameInvalid\" class=\"alertRedColor\" style=\"color: red;\">This Flied content alphabate and\r\n            Start with an uppercase letter and each word starts with a capital letter followed by lowercase\r\n            letters.</span>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.login\"\r\n            (ngModelChange)=\"form.searchParams.login = $event.trim()\" (input)=\"validatEmail()\" maxlength=\"35\"\r\n            placeholder=\"{{'Search login ' | translate}}\">\r\n\r\n          <span *ngIf=\"form.emailInvalid\" class=\"alertRedColor\" style=\"color: red;\"> invalid Email pelese write correct\r\n            Email like:-harsh@gmail.com</span>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"form.searchParams.password\"\r\n            (ngModelChange)=\"form.searchParams.password = $event.trim()\" (input)=\"validatePassword()\" maxlength=\"25\"\r\n            placeholder=\"{{'Search password ' | translate}}\">\r\n\r\n          <span *ngIf=\"form.passwordInvalid\" class=\"alertRedColor\" style=\"color: red;\">This password must contain at\r\n            least one letter, digit, or special character and 8 characters</span>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\" (input)=\"ValidPhone()\"\r\n            appMaxLengthNumber=\"10\" placeholder=\"{{'Search mobile ' | translate}}\">\r\n\r\n          <span *ngIf=\"form.phoneNoInvalid\" class=\"alertRedColor\" style=\"color: red;\">This PhoneNo contain only Number\r\n            and number starts with 6,7,8,9 and contain 10 digits</span>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfBirth\"\r\n            placeholder=\"{{'Search dateOfBirth ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <!-- Search Button -->\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- delete Button -->\r\n        <div>\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n\r\n        <!-- Add users button -->\r\n        <div>\r\n          <button (click)=\"forward('/users')\" type=\"button\" class=\"btn btn-success\">{{'Add users' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-busersed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\" name=\"list_name\"\r\n                    value=\"h1\" />\r\n                  {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'name' | translate}}</th>\r\n                <th>{{'login ' | translate}}</th>\r\n                <th>{{'dateOfBirth' | translate}}</th>\r\n                <th>{{'password ' | translate}}</th>\r\n                <th>{{'mobile ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.name }} </td>\r\n                <td> {{ m.login }} </td>\r\n                <td> {{ m.dateOfBirth | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.password }} </td>\r\n                <td> {{ m.mobile }} </td>\r\n\r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button class=\"fa fa-edit text-primary \" id=\"nnn\" (click)=\"forward( '/users/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n\r\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' |\r\n                  translate\r\n                  }} </button>\r\n              </td>\r\n\r\n              <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\"> <button (click)=\"refresh()\" class=\"btn btn-info\">\r\n                  {{'Rreset' | translate }} </button></td>\r\n\r\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\"\r\n                  (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n\r\n              <td style=\"width: 50%;\"><button (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\"\r\n                  type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n                  translate }}</button></td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/test_users/userslist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_users/userslist.component.ts ***!
  \***************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserslistComponent, _super);
    function UserslistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.Users, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    UserslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userslist',
            template: __webpack_require__(/*! ./userslist.component.html */ "./src/app/test_users/userslist.component.html"),
            styles: [__webpack_require__(/*! ./userslist.component.css */ "./src/app/test_users/userslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserslistComponent);
    return UserslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/test_vehicle-tracking/vehicle-tracking.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/test_vehicle-tracking/vehicle-tracking.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfdmVoaWNsZS10cmFja2luZy92ZWhpY2xlLXRyYWNraW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_vehicle-tracking/vehicle-tracking.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/test_vehicle-tracking/vehicle-tracking.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bclient-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add vehicletracking' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update vehicletracking' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'vehicle ID' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.data.vehicleId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select vehicle' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.VehicleIDList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.vehicleId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.vehicleId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n          <!-- lat filed -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'lat ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"lat\" [(ngModel)]=\"form.data.lat\" class=\"form-control\" \r\n              appMaxLengthNumber=\"10\"\r\n               placeholder=\"{{'lat  ' | translate}}\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.lat != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.lat| translate}}</span>\r\n          </div>\r\n\r\n\r\n  <!-- longs filed -->\r\n  <div class=\"form-group\">\r\n    <label><b>{{'longs ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n    <div class=\"input-group\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n      </div>\r\n\r\n      <input type=\"number\" name=\"longs\" [(ngModel)]=\"form.data.longs\" class=\"form-control\" \r\n      appMaxLengthNumber=\"10\"\r\n            placeholder=\"{{'longs  ' | translate}}\">\r\n    </div>\r\n    <span *ngIf=\"form.inputerror.longs != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n      {{form.inputerror.longs| translate}}</span>\r\n  </div>\r\n\r\n      \r\n\r\n\r\n\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.date |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.date=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.date | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\" pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n\r\n            <div class=\"col-md-1\"></div>\r\n            \r\n            <div class=\" pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/vehicletrackinglist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'Vehicletracking List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/test_vehicle-tracking/vehicle-tracking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/test_vehicle-tracking/vehicle-tracking.component.ts ***!
  \*********************************************************************/
/*! exports provided: VehicleTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTrackingComponent", function() { return VehicleTrackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var VehicleTrackingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleTrackingComponent, _super);
    function VehicleTrackingComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.VehicleTracking, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    VehicleTrackingComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    VehicleTrackingComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    //	2. lat (double)
    //	3. longs (double)
    //	4. VehicleID (Preload)
    //	5. date
    VehicleTrackingComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.lat = data.lat;
        form.longs = data.longs;
        form.date = data.date;
        form.vehicleId = data.vehicleId;
        form.vehicleID = data.vehicleID;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    VehicleTrackingComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    VehicleTrackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-tracking',
            template: __webpack_require__(/*! ./vehicle-tracking.component.html */ "./src/app/test_vehicle-tracking/vehicle-tracking.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-tracking.component.css */ "./src/app/test_vehicle-tracking/vehicle-tracking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], VehicleTrackingComponent);
    return VehicleTrackingComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_vehicle/vehicle.component.css":
/*!****************************************************!*\
  !*** ./src/app/test_vehicle/vehicle.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfdmVoaWNsZS92ZWhpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test_vehicle/vehicle.component.html":
/*!*****************************************************!*\
  !*** ./src/app/test_vehicle/vehicle.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n  }\r\n\r\n  .full-height {\r\n    height: 100vh;\r\n  }\r\n\r\n  .centered {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n    bvehicle-radius: 8px;\r\n  }\r\n\r\n  .btn {\r\n    margin-right: 8px;\r\n  }\r\n</style>\r\n\r\n<div class=\"row \r\n            full-height \r\n            centered\" \r\n         style=\"background: url('assets/files/3.jpg') no-repeat center center;\r\n          background-attachment: fixed;\r\n           background-size: cover;\">\r\n\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad\">\r\n        <form name=\"userForm\">\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Add vehicle' | translate}}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold text-center\">{{'Update vehicle' | translate}}</h2>\r\n\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n\r\n            <label><b>{{'Colour' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\r\n              </div>\r\n\r\n              <select class=\"form-control\" name=\"ColourId\" [(ngModel)]=\"form.data.colourId\" aria-label=\"ngSelected\">\r\n                <option [ngValue]=\"\" value=\"undefined\">{{'Select Colour' | translate}}</option>\r\n                <option *ngFor=\"let obj of form.preload.colourList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n              </select>\r\n\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.colourId != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.colourId | translate}}</span>\r\n\r\n          </div>\r\n\r\n\r\n\r\n           <!--  Unique Filed=> (ngModelChange)=\"form.data.number = $event.trim()\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Number' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"text\" name=\"number\" [(ngModel)]=\"form.data.number\" class=\"form-control\" \r\n               (ngModelChange)=\"form.data.number = $event.trim()\"     maxlength=\"50\"  \r\n               placeholder=\"{{'number' | translate}}\">\r\n\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.number != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.number | translate}}</span>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <!-- insuranceAmount filed -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Insurance Amount ' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"number\" name=\"insuranceAmount\" [(ngModel)]=\"form.data.insuranceAmount\" class=\"form-control\" \r\n                 appMaxLengthNumber=\"50\" \r\n                   placeholder=\"{{'insuranceAmount  ' | translate}}\">\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.insuranceAmount != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.insuranceAmount| translate}}</span>\r\n          </div>\r\n\r\n      \r\n\r\n\r\n          \r\n\r\n\r\n     \r\n\r\n\r\n<!-- date Filed=> type=\"date\" -->\r\n          <div class=\"form-group\">\r\n            <label><b>{{'Purchase Date' | translate }}</b><span class=\"required-field\"></span></label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\r\n              </div>\r\n\r\n              <input type=\"date\" [value]=\"form.data.purchaseDate |date:'yyyy-MM-dd'\" \r\n               (input)=\"form.data.purchaseDate=parseDate($event.target.value)\"  class=\"form-control form-control-sm\" required />\r\n            </div>\r\n\r\n            <span *ngIf=\"form.inputerror.purchaseDate != null\" class=\"alertRedColor\" style=\"color: red;\">\r\n              {{form.inputerror.purchaseDate | translate}}</span>\r\n          </div>\r\n\r\n\r\n          <div class=\"row pt-2 pb-3\">\r\n            <div class=\"col-md-3\"></div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Save' | translate}}</button>\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success\">{{'Update' | translate}}</button>\r\n            </div>\r\n            <div class=\"col-md-3 pt-2\">\r\n              <a class=\"btn btn-warning\" [routerLink]=\"['/vehiclelist']\" style=\"text-decoration: none; color: white;\">\r\n                {{'vehicle List' | translate}}</a>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_vehicle/vehicle.component.ts":
/*!***************************************************!*\
  !*** ./src/app/test_vehicle/vehicle.component.ts ***!
  \***************************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var VehicleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleComponent, _super);
    function VehicleComponent(locator, route, http) {
        var _this = _super.call(this, locator.endpoints.vehicle, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.http = http;
        return _this;
    }
    VehicleComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    VehicleComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    VehicleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.number = data.number;
        form.purchaseDate = data.purchaseDate;
        form.insuranceAmount = data.insuranceAmount;
        form.colour = data.colour;
        form.colourId = data.colourId;
    };
    //use that when devloper using Date type attribute in Form class of backend.
    VehicleComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    VehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/test_vehicle/vehicle.component.html"),
            styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/test_vehicle/vehicle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], VehicleComponent);
    return VehicleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/test_vehicle/vehiclelist.component.css":
/*!********************************************************!*\
  !*** ./src/app/test_vehicle/vehiclelist.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RfdmVoaWNsZS92ZWhpY2xlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/test_vehicle/vehiclelist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/test_vehicle/vehiclelist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  bvehicle: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n\r\n          <h1 class=\"text-primary font-weight-bold\">{{'vehicle List' | translate }}</h1>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- search Filed -->\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.insuranceAmount\" \r\n          appMaxLengthNumber=\"50\"\r\n            placeholder=\"{{'Search insuranceAmount ' | translate}}\">\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.number\" \r\n             (ngModelChange)=\"form.searchParams.name = $event.trim()\" maxlength=\"50\"\r\n            placeholder=\"{{'Search number ' | translate}}\">\r\n\r\n        </div>\r\n\r\n\r\n \r\n\r\n\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.purchaseDate\" \r\n            placeholder=\"{{'Search purchaseDate ' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"colourId\" [(ngModel)]=\"form.searchParams.colourId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select priority ' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.colourList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n\r\n   <!-- Search Button -->\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n          </div>\r\n          \r\n\r\n        \r\n    <!-- delete Button -->\r\n        <div >\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n      \r\n      \r\n      <!-- Add vehicle button -->\r\n       <div >\r\n        <button (click)=\"forward('/vehicle')\" type=\"button\" class=\"btn btn-success\">{{'Add vehicle' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n </div>\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bvehicleed table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\"\r\n                   name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Number' | translate}}</th>\r\n                <th>{{'PurchaseDate ' | translate}}</th>\r\n                <th>{{'InsuranceAmount ' | translate}}</th>\r\n                <th>{{'Colour ' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n\r\n                <td> {{ m.number }} </td>\r\n                <td> {{ m.purchaseDate | date : 'yyyy-MM-dd'}} </td>\r\n                <td> {{ m.insuranceAmount }} </td>\r\n                <td> {{ m.colour }} </td>\r\n                \r\n                <td>\r\n                  <!--  edit button-->\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\"  (click)=\"forward( '/vehicle/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                </td>\r\n\r\n                \r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n                \r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test_vehicle/vehiclelist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/test_vehicle/vehiclelist.component.ts ***!
  \*******************************************************/
/*! exports provided: VehiclelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclelistComponent", function() { return VehiclelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VehiclelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehiclelistComponent, _super);
    function VehiclelistComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.vehicle, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    VehiclelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehiclelist',
            template: __webpack_require__(/*! ./vehiclelist.component.html */ "./src/app/test_vehicle/vehiclelist.component.html"),
            styles: [__webpack_require__(/*! ./vehiclelist.component.css */ "./src/app/test_vehicle/vehiclelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VehiclelistComponent);
    return VehiclelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \r\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 90vh;\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\r\n            placeholder=\"{{'Search Subject' | translate}}\">\r\n\r\n        </div>\r\n        <!-- <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div> -->\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\r\n            placeholder=\"{{'Search Course' | translate}}\">\r\n\r\n        </div>\r\n\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message}}\r\n      </div>\r\n\r\n      <div class=\"p-1\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <thead class=\"thead-light text-uppercase\">\r\n              <tr>\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\r\n                    (change)=\"checkUncheckAll($event)\" /></th>\r\n\r\n                <th>{{'S.No.' | translate }}</th>\r\n                <th>{{'Semester' | translate }}</th>\r\n                <th>{{'ExamDate' | translate }}</th>\r\n                <th>{{'ExamTime' | translate }}</th>\r\n                <th>{{'Course' | translate }}</th>\r\n                <th>{{'Subject' | translate }}</th>\r\n                <th>{{'Description' | translate }}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              \r\n              <tr *ngFor=\"let m of form.list; let i = index;\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\r\n                <td> {{ m.semester }} </td>\r\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\r\n                <td> {{ m.examTime }} </td>\r\n                <td> {{ m.courseName }} </td>\r\n                <td> {{ m.subjectName }} </td>\r\n                <td> {{ m.description }} </td>\r\n                <td>\r\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-info\"></i>\r\n                  </a>\r\n                  <!-- /\r\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                      <i class=\"fa fa-trash text-danger\"></i>\r\n                    </a>\r\n                  </td> -->\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\">{{'Back' | translate}}</a></td>\r\n\r\n\r\n        \r\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n              \r\n            \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n  .grad{\r\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n background-repeat: no repeat;\r\n background-size: 100%;\r\n padding-bottom: 25px\r\n ;\r\n }\r\n</style>\r\n\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\r\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\r\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          \r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\r\n            \r\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\r\n                  <option value=\"1 Semester\">1 Semester</option>\r\n                  <option value=\"2 Semester\">2 Semester</option>\r\n                  <option value=\"3 Semester\">3 Semester</option>\r\n                  <option value=\"4 Semester\">4 Semester</option>\r\n                  <option value=\"5 Semester\">5 Semester</option>\r\n                  <option value=\"6 Semester\">6 Semester</option>\r\n                  <option value=\"7 Semester\">7 Semester</option>\r\n                  <option value=\"8 Semester\">8 Semester</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\r\n            \r\n                  <option selected disabled>{{'Please select' | translate }}</option>\r\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\r\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\r\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\r\n                </select>\r\n              </div>\r\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>{{'Description' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\r\n                </div>\r\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\r\n          </div>\r\n\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\r\n              {{'Update' | translate }}</button>\r\n            </div>\r\n           \r\n           \r\n            <div class=\"pl-3 pt-2\">\r\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<style>\r\n.grad{\r\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n  background-repeat: no repeat;\r\n  background-size: 100%;\r\n  padding-bottom: 10px;\r\n  }\r\n  </style>\r\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\r\n background-image: url(../../assets/files/wall.jpg);\r\n  background-attachment: fixed;\r\n  background-size: cover; width:auto;\r\n    height: auto;\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg grad\">\r\n        <form>\r\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\r\n    \r\n\r\n          <div *ngIf=\"form.error && form.message !=''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message !=null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <span class=\"alertRedColor\">{{form.inputerror.oldPassword}}</span>\r\n        \r\n        <div style=\"padding-top:3%\">\r\n            <span><b>{{'New Password' | translate}}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Enter New Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.newPassword}}</span>\r\n          </div>\r\n          <div style=\"padding-top:3%\">\r\n            <span><b>Confirm Password</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\r\n                placeholder=\"{{'Confirm Password' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            <div class=\"pt-2\">\r\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\r\n               {{'Update' | translate}} </button>\r\n            </div>\r\n            <div class=\" col-md-1 \"></div>\r\n            <div class=\"pt-2 ml-4\" >\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/login']\"\r\n              style=\"text-decoration: none; color: white;\">{{'Login'}}</a>\r\n            </div>\r\n            <input type=\"hidden\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\">\r\n            \r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null, forgotPasswordLogin: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    /**
     * Initialize component
     */
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId"); //Use after Login and set login.ts 
        this.form.data.forgotPasswordLogin = localStorage.getItem("chageLoginPassword"); //use befour Login set Veryfication come from Forgotpassword
        this.httpService.post("http://localhost:8080/User/changepassword", this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            if (res.success) {
                _self.form.data.forgotPasswordLogin = '';
                localStorage.removeItem('chageLoginPassword');
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \r\nbackground: url(assets/files/edc.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: auto;\">\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body shadow-lg\">\r\n        <form name=\"myProfile\">\r\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\r\n         \r\n\r\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message}}\r\n          </div>\r\n\r\n          \r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\r\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\r\n                class=\"form-control form-control-sm\" required />\r\n              </div>\r\n            </div>\r\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\r\n          </div>\r\n          \r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\r\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\r\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\r\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top:3%\">\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\r\n\r\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row pt-3 pl-3 pb-3\">\r\n            \r\n\r\n            <div class=\"pt-2\">\r\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-navbar></app-navbar>\r\n<style>\r\n#nnn{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n</style> \r\n\r\n<div class=\"content-wrapper\"\r\nstyle=\"\r\nbackground: url(assets/files/26.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:auto;\r\n  height: 105vh;\">\r\n\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"panel panel-primary\">\r\n\r\n      <div class=\"panel-heading\" style=\"height: 50px;\">\r\n        <!-- <div class=\"col-sm-5\"> -->\r\n        <div class=\"text-center\">\r\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\r\n      <div class=\"row p-1\">\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-2\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\r\n            placeholder=\"{{'Search First Name' | translate}}\">\r\n\r\n        </div>\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dob\" placeholder=\"{{'Search Email' | translate}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-2\">\r\n\r\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\r\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <!-- <div class=\"col-sm-2\">\r\n          <select class=\"form-control\"   [(ngModel)]=\"form.searchParams.gender\">\r\n          <option value=\"undefined\" >{{'pleseSelect Gender'}}</option>\r\n          <option value=\"Male\">{{'male'}}</option>\r\n          <option value=\"Female\">{{'female'}}</option>\r\n          </select>\r\n        </div> -->\r\n        \r\n        <div class=\"col-sm-2\">\r\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\r\n        </div>\r\n        <div class=\"col-sm-1 ml-3\">\r\n          <button (click)=\"submit()\" type=\"button\" class=\"btn btn-primary\">\r\n            {{'Search' | translate }}</button>\r\n        </div>\r\n        &nbsp;&nbsp;&nbsp;\r\n        <div class=\"col-lg-2 ml-4\">\r\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\r\n          </button>\r\n        </div>\r\n        \r\n\r\n        <div class=\"col-sm-1\">\r\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\r\n            {{'Delete'| translate}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        {{form.message | translate}}\r\n      </div>\r\n\r\n\r\n      <div class=\"p-1\">\r\n\r\n\r\n        <div class=\"table-responsive\">\r\n\r\n          <table class=\"table table-bordered table-hover font-weight-bold table-info text-dark\">\r\n            <thead class=\"thead-dark text-uppercase \">\r\n              <tr align=\"center\">\r\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" (change)=\"checkUncheckAll($event)\" name=\"list_name\" value=\"h1\" />\r\n                {{'select' | translate}}</th>\r\n                <th>{{'S.No' | translate}}</th>\r\n                <th>{{'Image' | translate}}</th>\r\n                <th>{{'First Name' | translate}}</th>\r\n                <th>{{'Last Name' | translate}}</th>\r\n                <th>{{'Login' | translate}}</th>\r\n                <th>{{'Status' | translate}}</th>\r\n                <th>{{'Role' | translate}}</th>\r\n                <th>{{'Phone' | translate}}</th>\r\n                <th>{{'DOB' | translate}}</th>\r\n                <th>{{'Edit' | translate}}</th>\r\n              </tr>\r\n\r\n            </thead>\r\n\r\n            \r\n            <tbody>\r\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\r\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\"  id=\"{{m.id}}\" [disabled]=\"m.roleName=='Admin'\" name=\"list_name\" />\r\n                </td>\r\n                <td> {{(form.pageNo*5)+i+1}} </td>\r\n                <td>\r\n                  <div *ngIf=\"m.imageId\">\r\n                    <img src=\"http://localhost:8080/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                  <div *ngIf=\"!m.imageId\">\r\n                    <img src=\"../../assets/files/hanuman.jpg\" height=\"55px\" width=\"80px\">\r\n                  </div>\r\n                </td>\r\n\r\n                <td> {{ m.firstName }} </td>\r\n                <td> {{ m.lastName }} </td>\r\n                <td> {{ m.loginId }} </td>\r\n                <td> {{ m.status }} </td>\r\n                <td> {{ m.roleName }} </td>\r\n                <td> {{ m.phone }} </td>\r\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\r\n                <td>\r\n\r\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\" (click)=\"forward( '/user/' +  m.id)\" style=\"\r\n                  cursor: pointer;\">edit</button>\r\n                  <!-- <a [routerLink]=\"['/user/'+m.id]\" style=\"\r\n                    cursor: pointer;\">\r\n                    <i class=\"fa fa-edit text-primary\"></i>\r\n                  </a> -->\r\n                  <!-- /\r\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\r\n                    <i class=\"fa fa-trash text-danger \"></i>\r\n                  </a> -->\r\n\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n\r\n          </table>\r\n\r\n\r\n          \r\n          <table style=\"width: 100%;\">\r\n            <tr>\r\n              <td style=\"width: 50%;\">\r\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\r\n            }} </button></td>\r\n\r\n            <td *ngIf=\"!form.list.length==0\" style=\"width: 50%;\" > <button (click)=\"refresh()\" class=\"btn btn-info\"> {{'Rreset' | translate }} </button></td>\r\n           \r\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><button class=\"btn btn-warning mr-1\" (click)=\"refresh()\">{{'Back' | translate}}</button></td>\r\n\r\n\r\n        \r\n            <td style=\"width: 50%;\"><button  (click)=\"next()\" [disabled]=\"nextList==0 ||form.list.length< 5\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\r\n              translate }}</button></td>\r\n            </tr>\r\n            </table>\r\n\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\r\n    color: red;\r\n}\r\n\r\n\r\n.required-field::after { \t\t\r\n  content: \"*\";\t\t\r\n  color: red;\t\t\r\n   }\r\n\r\n\r\n.successColor{\r\n    color: green;\r\n   }\r\n\r\n\r\n.btn-space {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.file-btn{\r\n    border: black;\r\n}\r\n\r\n\r\n.third {\r\n    border-color: #b300b3;\r\n    color: #695d29;\r\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\r\n    transition: all 150ms ease-in-out;\r\n  }\r\n\r\n\r\n.third:hover {\r\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\r\n  }\r\n\r\n\r\n.filebtn {\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    background-color: transparent;\r\n    border: 2px solid #e74c3c;\r\n    border-radius: 0.6em;\r\n    color: #e74c3c;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n  }\r\n\r\n\r\n.filebtn:hover, .filebtn:focus {\r\n    color: #ffffff;\r\n    outline: 0;\r\n  }\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcclxuICBjb250ZW50OiBcIipcIjtcdFx0XHJcbiAgY29sb3I6IHJlZDtcdFx0XHJcbiAgIH1cdFxyXG5cclxuICAgLnN1Y2Nlc3NDb2xvcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgfVxyXG5cclxuICAgLmJ0bi1zcGFjZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZmlsZS1idG57XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG59XHJcblxyXG4udGhpcmQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYjMwMGIzO1xyXG4gICAgY29sb3I6ICM2OTVkMjk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAudGhpcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMzQ5OGRiIGluc2V0LCAwIDAgMTBweCA0cHggIzM0OThkYjtcclxuICB9XHJcbiAgLmZpbGVidG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNmVtO1xyXG4gICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMS4yZW0gMi44ZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5maWxlYnRuOmhvdmVyLCAuZmlsZWJ0bjpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<style>\r\n  .grad {\r\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\r\n    background-repeat: no repeat;\r\n    background-size: 100%;\r\n    padding-bottom: 25px;\r\n  }\r\n</style>\r\n\r\n\r\n<style type=\"text/css\">\r\n  .log1 {\r\n    padding-top: 13%;\r\n  }\r\n\r\n  .input-group-addon {\r\n    box-shadow: 9px 8px 7px #001a33;\r\n\r\n  }\r\n</style>\r\n\r\n\r\n<div class=\"row \" style=\"padding-top: 2%; padding-bottom:2%;\r\n\r\nbackground: url(assets/files/3.jpg) no-repeat center center;\r\nbackground-attachment: fixed;\r\nbackground-size: cover;width:100%;\r\n  height: auto;\">\r\n\r\n<div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body input-group-addon grad \">\r\n        <form name=\"userForm\">\r\n\r\n\r\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\r\n            translate }}</h2>\r\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\r\n            translate }}</h2>\r\n\r\n\r\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n          <div *ngIf=\"form.error && form.message != ''\" class=\"alert alert-danger alert-dismissible\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n            {{form.message | translate}}\r\n          </div>\r\n\r\n        <div>\r\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n              <div class=\"col-sm-12\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                   </div>\r\n\r\n\r\n                 <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\r\n                   <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\r\n                 </select>\r\n               </div>\r\n            </div>\r\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\r\n        </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'firstname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'lastname'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\r\n          </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\r\n                  placeholder=\"{{'Enter Password'  | translate }}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'password'| translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\r\n          </div>\r\n\r\n\r\n<!-- Inpute validation Frontend pr-->\r\n<!-- (keypress)=\"validateMobileNo($event)\"  -->\r\n<!-- (keypress)=\"validateNumber($event)  -->\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Phone No' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\r\n                </div>\r\n                <input   type=\"text\" id=\"phone\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\" appMaxLengthNumber=\"10\"\r\n                appcontendNumberOnly    placeholder=\"{{'Enter Mobile Number' | translate}}\">\r\n              </div>\r\n            \r\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\r\n          </div>\r\n\r\n\r\n          \r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\" (keypress)=\"validateMobileNo($event)\"\r\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\r\n              {{'mobile'| translate}} </span></div>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\r\n\r\n\r\n            <div>\r\n         \r\n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"date\"  [value]=\"form.data.dob | date:'yyyy-MM-dd'\" \r\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\r\n                  required />\r\n              </div>\r\n            </div>\r\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\r\n          </div>\r\n\r\n\r\n          \r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\r\n              <span class=\"required-field\"></span></span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\r\n                  style=\"cursor: pointer;\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\r\n                  <option value=\"Male\">{{'Male' | translate }} </option>\r\n                  <option value=\"Female\">{{'Female' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\r\n          </div>\r\n\r\n      <div>\r\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\r\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\r\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\r\n              \r\n            <div class=\"col-sm-12\">\r\n              <div *ngIf=\"form.data.imageId\">\r\n                <img src=\"http://localhost:8080/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n              <div *ngIf=\"!form.data.imageId\">\r\n                <img src=\"../../assets/files/pexels.jpg\" height=\"55px\" width=\"80px\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\r\n                </div>\r\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\r\n                  accept=\"image/*\">\r\n\r\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n          <div>\r\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\r\n              <span class=\"required-field\"></span>\r\n            </span>\r\n\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\r\n                </div>\r\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\r\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\r\n                  <option value=\"Active\">{{'Active' | translate }} </option>\r\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\r\n                </select>\r\n              </div>\r\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\r\n              translate}} </span>\r\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\r\n          </div>\r\n\r\n          <div class=\"row pt-2 pl-2 pb-3\">\r\n\r\n            <div class=\"col-md-3\"></div>\r\n\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Save' | translate }}</button>\r\n            </div>\r\n\r\n            <div class=\"col-md-1\"></div>\r\n\r\n            <div class=\"pt-2\">\r\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\r\n                {{'Update' | translate }}</button>\r\n            </div>\r\n            <div class=\"pt-2\">\r\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\r\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.myFile = function () {
        var _self = this;
        var formData = new FormData();
        formData.append('file', this.fileToUpload);
        this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData).subscribe(function (data) {
        }, function (error) {
            _self.form.mesage = error.result.mesage;
            console.log(error);
        });
    };
    UserComponent.prototype.onUpload = function () {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    //user Add-Update;
    UserComponent.prototype.submit = function () {
        var _self = this;
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.error = !res.success;
            if (res.success) {
                _self.form.data.id = res.result.data;
                if (_self.fileToUpload) {
                    _self.myFile();
                }
                console.log(_self.form.data.id);
                console.log("----------Harsh----------.");
            }
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            if (res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.validateMobileNo = function (event) {
        var input = event.key;
        // Allow control keys such as Backspace, Delete, Arrow keys, etc.
        var controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
        if (controlKeys.indexOf(input) !== -1) {
            return; // Allow control keys
        }
        //check if the inpute is a number or bacspase
        if ((isNaN(Number(input)) && input !== 'Backspace') || (input == '')) {
            event.preventDefault(); //print nhi krne dega
        }
        //Limit the inpute to 10 characters
        if (this.form.data.alternateMobile && this.form.data.alternateMobile.length >= 10 && input !== 'Backspace') {
            event.preventDefault();
        }
    };
    // Method to allow only numbers to be entered
    UserComponent.prototype.validateNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
    * Check is Email Regex Pattern is currect or note
    * @param val
    */
    DataValidator.prototype.emailRegexPattern = function (value) {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (value.match(emailRegex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataValidator.prototype.phoneNoRegexPattern = function (value) {
        var phoneNoRegex = /^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$/;
        if (value.match(phoneNoRegex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataValidator.prototype.passwordRegexPattern = function (value) {
        var passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/;
        if (value.match(passwordRegex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataValidator.prototype.numberRegexPattern = function (value) {
        var NumberRegex = /^\d+(\.\d{1,2})?$/;
        if (value.match(NumberRegex)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataValidator.prototype.alphabateRegexPattern = function (value) {
        var NumberRegex = /[A-Za-z\s]/;
        if (value.match(NumberRegex)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    DataValidator.prototype.Phone = function (val) {
        var flag = true;
        if (val.length > 10) {
            flag = false;
        }
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/app/validate-number-min-max-directive.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/validate-number-min-max-directive.directive.ts ***!
  \****************************************************************/
/*! exports provided: ValidateNumberMinMaxDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateNumberMinMaxDirectiveDirective", function() { return ValidateNumberMinMaxDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ValidateNumberMinMaxDirectiveDirective = /** @class */ (function () {
    function ValidateNumberMinMaxDirectiveDirective(ngControl) {
        this.ngControl = ngControl;
    }
    ValidateNumberMinMaxDirectiveDirective.prototype.onInputChange = function (event) {
        var input = event.target.value;
        // If input is empty, set the control value to null
        if (input === '') {
            this.ngControl.control.setValue(null, { emitEvent: false });
        }
        else {
            // Convert the input to a number
            var numericValue = Number(input);
            // Enforce the range between 1 and 1000
            if (numericValue > 400000) {
                this.ngControl.control.setValue(400000, { emitEvent: false });
            }
            else if (numericValue < 1) {
                this.ngControl.control.setValue(1, { emitEvent: false });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ValidateNumberMinMaxDirectiveDirective.prototype, "onInputChange", null);
    ValidateNumberMinMaxDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSetNumberMinMax]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
    ], ValidateNumberMinMaxDirectiveDirective);
    return ValidateNumberMinMaxDirectiveDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Om prakash Patidar\Desktop\Project_10A\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map