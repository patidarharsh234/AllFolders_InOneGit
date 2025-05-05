import { OnInit, Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ServiceLocatorService } from './service-locator.service';
import { HttpServiceService } from './http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseCtl } from './base.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { element } from '@angular/core/src/render3';

export class BaseListCtl extends BaseCtl {

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  deleteRecordList: any = [];
  isMasterSel: boolean = false;
  checkList = 0;


  alphabateRegex = /[A-Za-z\s]/;
  numberRegex = /^\d+(\.\d{1,2})?$/;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  phoneNoRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
  PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  numbetrPresentRegex = /^\d+(\.\d+)?%$/;
  nameFirstLastCharaCapitalRegex = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
  interestRateRegex = /^(100(\.00?)?|([1-9]?[0-9])(\.\d{1,2})?)%$/;
  numberOneTONintey = /^([1-9]|[1-8][0-9]|90)$/;
  AlphabateWithMaxLengthRegex=/^[a-zA-Z ]{1,80}$/;
  titleRegex=/^[a-zA-Z ]{1,40}$/;
  versionRegex=/^\d{1,2}(\.\d{1,2}){0,2}$/;




  constructor(public endpoint, public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(endpoint, locator, route);
  }


  /**
   * Initialize component
   */
  ngOnInit() {
    this.preload();
    this.search();
    this.isMasterSel = false; //for select all
  }

  /**  
    * Valid validat Email regex Pattern
    * invalid Email pelese write correct Email like:-harsh@gmail.com
    */
  validatEmail() {
    this.form.emailInvalid = false;
    const value= this.form.searchParams.login;
    // Email
    if (value.trim() !== "" && !this.emailRegex.test(value)) {
      this.form.emailInvalid = true;
    }else{
      this.form.emailInvalid = false;
    }
    return this.form.emailInvalid;
  }


   /**  
    * Valid validat Alphabate  regex Pattern With length
    * invalid Alphabate Maxlength
    * This filed content alphabate and max lent is 80.
    */
  validatAlphabate(event: any, field: string) {
    this.form.alphabateInvalid = false;
    const value= event.target.value;
    // Email
    if (value.trim() !== "" && !this.AlphabateWithMaxLengthRegex.test(value)) {
      this.form.alphabateInvalid = true;
    }else{
      this.form.alphabateInvalid = false;
    }
    return this.form.alphabateInvalid;
  }



   /**  
    * Valid validat tital  regex Pattern With length
    * invalid Alphabate Maxlength
    * This filed content alphabate and max lent is 40.
    */
  validatTitle() {
    this.form.titleInvalid = false;
    const value= this.form.searchParams.title;
    // Email
    if (value.trim() !== "" && !this.titleRegex.test(value)) {
      this.form.titleInvalid = true;
    }else{
      this.form.titleInvalid = false;
    }
    return this.form.titleInvalid;
  }

  /**  
   * Valid validat Name regex Pattern
   * "This Flied content alphabate and Start with an uppercase letter and  each word starts with a capital letter followed by lowercase letters.
   */
  validatName() {
    this.form.nameInvalid = false;
    const value= this.form.searchParams.name;
    // name
    if (value.trim() !== "" && !this.nameFirstLastCharaCapitalRegex.test(value)) {
      this.form.nameInvalid = true;
    }else{
      this.form.nameInvalid = false;
    }
    return this.form.nameInvalid;
  }


  /**  
    * Valid validate Number min=1 /maxi=90  regex Pattern
    * this filed content min =   value and max=   value
    */
  validateNumber() {
    const value = this.form.searchParams.quantity;
    const numValue = Number(value);

    if (value !== "" && (isNaN(numValue) || numValue < 0 || numValue > 400000)) {
      this.form.numberInvalid = true;
    } else {
      this.form.numberInvalid = false;
    }

    return this.form.numberInvalid;
  }

  validateNumber2() {
    const value = this.form.searchParams.quantity;
    const numValue = Number(value);

    if (value !== "" && (isNaN(numValue) || numValue < 0 || numValue > 400000)) {
      this.form.number2Invalid = true;
    } else {
      this.form.number2Invalid = false;
    }

    return this.form.number2Invalid;
  }



  /**  
   * Valid validate phoneNo
   * "This PhoneNo  contain only Number and number starts with 6,7,8,9 and contain 10 digits "
   */
  ValidPhone(){
    this.form.phoneNoInvalid=false;

    const value=this.form.searchParams.mobile;

    const strValue= String(value);

    if(strValue.trim() !=="" && !this.phoneNoRegex.test(strValue)){
      this.form.phoneNoInvalid=true;

    }else{
      this.form.phoneNoInvalid=false;
    }
  }


   /**  
   * Valid validate password
   * "This password must contain at least one letter, digit, or special character and 8 characters "
   */
   validatePassword() {
    this.form.passwordInvalid = false;
    // Quantity
    const value = this.form.searchParams.password;
     // Convert value to a string
  const strValue = String(value);
    if (strValue.trim() !== "" && ! this.PasswordRegex.test(strValue)) {
      this.form.passwordInvalid = true;
    }else{
      this.form.passwordInvalid = false;
    }
  }

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



  submit() {

    this.isMasterSel = false;
    this.form.pageNo = 0;
    this.search();

  }


  //me created->reset
  refresh() {
    this.isMasterSel = false;
    this.form.pageNo = 0;
    this.form.searchParams = {};
    this.search();
  }


  next() {
    this.form.pageNo++;
    this.isMasterSel = false;
    this.search();
    //  this.searchOperation('previous');
  }

  previous() {
    if (this.form.pageNo > 0) {
      this.form.pageNo--;
      this.isMasterSel = false;
      this.search();
      // this.searchOperation('previous');    
    }
  }

  //use krna he y
  exit() {
    location.reload();
  }


  //selectAll
  checkUncheckAll(event) {
    const checked = event.target.checked;
    //singl checkboxes he ->forEach ki help se nikalte ja re and checked krte ja re
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = checked;
      console.log(element.nativeElement.firstName)
    });
  }



  //sare singal checkbox true hone pr ->selectAll checkbox trueS
  checklistUpdate() {

    this.isMasterSel = false;//oll Tiem false
    this.checkList = 0;
    this.checkboxes.forEach((element) => {
      //ak bar click kiya checbox pr ye methode run-2nd time click kiya checbox pr vaps ye methode run hogi.
      if (element.nativeElement.checked) {
        this.checkList = this.checkList + 1;
      }

    });

    if (this.checkList == this.form.list.length) {
      this.isMasterSel = true; //particularly point pr true.

    }


  }




  //delete 
  deleteMany() {
    this.form.error = false;
    this.deleteRecordList.length = 0;
    var isSelectedRecord: boolean = false;

    this.checkboxes.forEach((element) => {

      if (element.nativeElement.checked) {
        // console.log('record deleting ' + element.nativeElement.id)
        this.deleteRecordList.push(element.nativeElement.id);
        isSelectedRecord = true;
      }
    });

    if (isSelectedRecord) {
      console.log('pageNo.........!!!!!!======', this.form.pageNo);
      super.deleteMany(this.deleteRecordList + '?pageNo=' + this.form.pageNo)

    } else {
      this.form.message = "Select Atleast One Record";
      this.form.error = true;

    }
    this.isMasterSel = false;

  }

  delete(id) {
    super.delete(id, function () {
      this.search();
    });
  }


}
