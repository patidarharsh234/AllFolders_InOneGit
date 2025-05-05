import { Injectable } from '@angular/core';

@Injectable()
export class DataValidator {

  constructor() {
  }

  trim(valueToWhite: string) {
    return valueToWhite.replace(/\s/g, "");
  }
 

   /**
   * Check is Email Regex Pattern is currect or note
   * @param val 
   */
  emailRegexPattern(value:string){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(value.match(emailRegex)){
      return true;
    }else{
       return false;
    } 
  }

  
  phoneNoRegexPattern(value:String){
    const phoneNoRegex = /^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$/;
    if(value.match(phoneNoRegex)){
      return true;
    }else{
       return false;
    } 
  }

  passwordRegexPattern(value:string){
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$/;
    if(value.match(passwordRegex)){
      return true;
    }else{
       return false;
    }
  }

  numberRegexPattern(value:string){
    const NumberRegex = /^\d+(\.\d{1,2})?$/;
    if(value.match(NumberRegex)){
      return true;
    }else{
       return false;
    }
  }

  alphabateRegexPattern(value:string){
    const NumberRegex = /[A-Za-z\s]/;
    if(value.match(NumberRegex)){
      return true;
    }else{
       return false;
    }
  }


  /**
   * Check is string is not empty
   * @param val 
   */
  isNotNull(val: string) {
    let flag = true;
    try {
      if (val) {
        val = this.trim(val);
        flag = val.length > 0;
      } else {
        flag = false;
      }
    } catch (error) {
      flag = false;
    }
    return flag;
  }

Phone(val:any){

  let flag=true;
  if( val.length >10){
    flag=false
  }
}

  /**
 * Is string is empty
 * @param val
 */
  isNull(val: any) {
    return !this.isNotNullObject(val);
  }

  /**
   * Is not null object
   */
  isNotNullObject(val: any) {
    let flag = true;
    try {
      if (val) {
        flag = true;
      } else {
        flag = false;
      }
    } catch (error) {
      flag = false;
    }
    return flag;
  }

  /**
   * Is null object
   */
  isNullObject(val: any) {
    return !this.isNotNullObject(val);
  }


  isTrue(val: boolean) {
    let flag = true;
    if (val) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }

  /**
   * 
   * @param val Convets string into number
   */
  toInt(val: any) {
    let returnVal = 0;
    if (val) {
      try {
        returnVal = parseInt(val);
        if (isNaN(returnVal)) {
          returnVal = 0;
        }
      } catch (error) {
        returnVal = 0;
      }
    }
    return returnVal;
  }

  toFloat(val: any) {
    let returnVal = 0;
    if (val) {
      try {
        returnVal = parseFloat(val);
        if (isNaN(returnVal)) {
          returnVal = 0;
        }
      } catch (error) {
        returnVal = 0;
      }
    }
    return returnVal;
  }

  /**
   * Create clone pobject
   * 
   * @param obj 
   */
  getClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

}