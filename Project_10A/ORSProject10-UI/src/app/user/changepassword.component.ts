import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute, Route } from '@angular/router';
import { BaseCtl } from '../base.component';
import {HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./user.component.css']
})

export class ChangepasswordComponent extends BaseCtl implements OnInit  {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, public httpService : HttpServiceService) {
    super(locator.endpoints.USER, locator, route);
  }

  /**
   * Initialize component
   */
  ngOnInit() {
  }



  public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null, loginId : null ,forgotPasswordLogin:null}, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo : 0
  };
  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.oldPassword);
    flag = flag && validator.isNotNullObject(form.newPassword);
    flag = flag && validator.isNotNullObject(form.confirmPassword);
    return flag;
  }



  changePassword(){
   var _self = this;
   this.form.data.loginId = localStorage.getItem("loginId") //Use after Login and set login.ts 
   
   this.form.data.forgotPasswordLogin=localStorage.getItem("chageLoginPassword");//use befour Login set Veryfication come from Forgotpassword

    this.httpService.post("http://localhost:8080/User/changepassword",this.form.data,function (res){
      

      _self.form.message = '';
      _self.form.inputerror = {};
      _self.form.error = !res.success;
  
      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      
      if (_self.form.error && res.result.inputerror) {
          _self.form.inputerror = res.result.inputerror;
      }

      if(res.success){
        _self.form.data.forgotPasswordLogin='';
        localStorage.removeItem('chageLoginPassword');
      }
         });
  }
  }
  
