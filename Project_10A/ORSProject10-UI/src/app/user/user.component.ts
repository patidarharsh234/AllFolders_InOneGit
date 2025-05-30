import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCtl {

  getKey = false;
  selected = null;
  fileToUpload: File = null;
  userForm: FormGroup = null;
  uploadForm: FormGroup;
  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.USER, locator, route);
  }

  onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }
  myFile() {
   let _self=this;
    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData).subscribe( data => {
    }, error => {
     _self.form.mesage=  error.result.mesage;
      console.log(error);
    });
  }
  onUpload() {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }
  
  //user Add-Update;
  submit() {
    var _self = this;
 
    this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {

      _self.form.message = '';
      _self.form.inputerror={};

      _self.form.error=!res.success;

  
      if (res.success) { 
        _self.form.data.id = res.result.data;
        if (_self.fileToUpload) {
          _self.myFile();
        }
        console.log(_self.form.data.id);
        console.log("----------Harsh----------.");

      } 
      if(res.result.message){
        _self.form.message = res.result.message;
      }
      if (res.result.inputerror) {
        _self.form.inputerror = res.result.inputerror;
      }
     

      console.log('FORM', _self.form);
    });
  }


validateMobileNo(event: KeyboardEvent){
  const input=event.key;

  // Allow control keys such as Backspace, Delete, Arrow keys, etc.
  const controlKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];

  if (controlKeys.indexOf(input) !== -1) {
    return; // Allow control keys
  }


  //check if the inpute is a number or bacspase
  if((isNaN(Number(input))&& input !=='Backspace') || (input=='')){
    event.preventDefault();//print nhi krne dega
  }

  //Limit the inpute to 10 characters
  if(this.form.data.alternateMobile && this.form.data.alternateMobile.length>=10 && input !=='Backspace'){
  event.preventDefault();
  }
}

 // Method to allow only numbers to be entered
 validateNumber(event: KeyboardEvent): void {
  const pattern = /[0-9]/;
  const inputChar = String.fromCharCode(event.charCode);

  if (!pattern.test(inputChar)) {
    event.preventDefault();
  }
}




  submit1() {
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

      } else {
        _self.form.error = true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }
      _self.form.data.id = res.result.data;
      console.log('FORM', _self.form);
    });
  }






  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
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
  }

 

  


  populateForm(form, data) {
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
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }


}
