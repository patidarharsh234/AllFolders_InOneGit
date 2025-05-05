import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataValidator } from '../utility/data-validator';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent extends BaseCtl {

 emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 alphabate=/[A-Za-z\s]/;
 numberRegex = /^\d+(\.\d{1,2})?$/;
 numbetrPresentRegex=/^\d+(\.\d+)?%$/;
 nameFirstLastCharaCapitalRegex=/^[A-Z][a-z]+ [A-Z][a-z]+$/;

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute,public http:HttpClient,private dataValidator:DataValidator) {
    super(locator.endpoints.Inventory,locator,route);

   }


//Note Use:-
   onQuantityInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove any characters that are not digits or dots
    value = value.replace(/[^0-9.]/g, '');

    // Ensure that there is at most one dot and up to two decimal places
    const parts = value.split('.');
    if (parts.length > 2) {
      value = parts[0] + '.' + parts.slice(1).join('');
    } else if (parts.length === 2 && parts[1].length > 2) {
      value = parts[0] + '.' + parts[1].substring(0, 2);
    }

    input.value = value;
    this.form.data.quantity = value;
  }



//Note Use:-
onNameInput(event: Event) {
  const input = event.target as HTMLInputElement;
  let value = input.value;

  // Trim leading and trailing spaces
  value = value.trim();

  // Split the input value into words based on spaces
  const words = value.split(' ');

  // Capitalize the first letter of each word and make the rest lowercase
  const formattedWords = words.map((word, index) => {
    // Capitalize the first letter of each word and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the formatted words back into a single string with a single space
  value = formattedWords.join(' ');

  // Set the formatted value to the input field and form data
  input.value = value;
  this.form.data.supplierName = value;
}

  
  
  
  
  
  


//Error Filed Match Regex Pattern  

valideData() {
  this.form.emailEmpty = false;
  this.form.emailInvalid = false;

  this.form.quantityEmpty = false;
  this.form.quantityInvalid = false;

  this.form.NameEmpty=false;
  this.form.NameInvalid=false;

  // Email validation
  if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
    this.form.emailEmpty = true;
  } else if (!this.emailRegex.test(this.form.data.supplierName)) {
    this.form.emailInvalid = true;
  }

    // First Last Name Capitale
    if (this.form.data.supplierName == null || this.form.data.supplierName.trim() === "") {
      this.form.NameEmpty = true;
    } else if (!this.nameFirstLastCharaCapitalRegex.test(this.form.data.supplierName)) {
      this.form.NameInvalid = true;
    }

  // Quantity validation
  if (this.form.data.quantity == null || this.form.data.quantity.trim() === "") {
    this.form.quantityEmpty = true;
  } else if (!this.numberRegex.test(this.form.data.quantity)) {
    this.form.quantityInvalid = true;
  }
}



   
//button disable
   validate(){
    let flag = true;
    // flag = flag && this.dataValidator.isNotNullObject(this.form.data.supplierName) && this.dataValidator.emailRegexPattern(this.form.data.supplierName);
    // flag= flag && this.dataValidator.isNotNullObject(this.form.data.quantity) && this.dataValidator.numberRegexPattern(this.form.data.quantity);
    // flag= flag && this.dataValidator.isNotNullObject(this.form.data.lastUpdateDate) ;
    // flag= flag && this.dataValidator.isNotNullObject(this.form.data.productId) ;
    return flag;
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


  populateForm(form, data) {
    form.id = data.id;
   
     form .supplierName=data.supplierName;

     form.lastUpdateDate = data.lastUpdateDate;

     form.quantity=data.quantity;

     form.productId = data.productId;


  }
    
     
    

  //use that when devloper using Date type attribute in Form class of backend.
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }





}
