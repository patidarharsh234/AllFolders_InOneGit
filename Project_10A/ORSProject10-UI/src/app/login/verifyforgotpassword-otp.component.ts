import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { DataValidator } from '../utility/data-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyforgotpassword-otp',
  templateUrl: './verifyforgotpassword-otp.component.html',
  styleUrls: []
})
export class VerifyforgotpasswordOTPComponent implements OnInit {

  endpoint = "http://localhost:8080/Auth/";

  form = {
    error: false,
    message: "",
    otp: '',
  };

  inputerror = {};
  message = '';

  constructor(private httpService: HttpServiceService, private dataValidator: DataValidator, private router: Router) {
  }


  /**
   * Initialize component
   */
  ngOnInit() {
  }

  submit() {
    var _self = this;
 let Email= localStorage.getItem("Email");
    this.httpService.post(_self.endpoint + "verify-OTP/"+Email+"?otp="+this.form.otp,null,function (res) {
   
      _self.form.message = '';
      _self.inputerror = {};
      _self.form.error = !res.success;
  
      if (res.result.message) {
        _self.form.message = res.result.message;
      }

      
      if (_self.form.error && res.result.inputerror) {
          _self.inputerror = res.result.inputerror;
      }

      if(res.success){
        Email='';
        localStorage.removeItem("Email");


        let loginId=res.result.loginId;
        localStorage.setItem("chageLoginPassword",loginId);

        
        _self.router.navigateByUrl('changepassword');
      }
    });
  }
}